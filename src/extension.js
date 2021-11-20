const navigateProperties = (properties) => {
    const { value, done } = properties.next();
    if (done) {
        return [];
    }

    const { ['2']: name, ['3']: data, } = value;
    if (name && data) {
        const propertyRule = { name, inherits: false };
        const syntaxRaw = data.match(/syntax\s*:\s*"(.+)";/m)
        if (syntaxRaw) {
            const { ['1']: syntax } = syntaxRaw;
            propertyRule['syntax'] = syntax;
        }
        const initialValueRaw = data.match(/initial-value\s*:\s*(.+);/m)
        if (initialValueRaw) {
            const { ['1']: initialValue } = initialValueRaw;
            propertyRule['initialValue'] = initialValue;
        }
        return [propertyRule].concat(navigateProperties(properties));
    }
    return navigateProperties(properties)
}


export const extensionOnCSSStyleSheet = () => {
    Object.defineProperty(CSSStyleSheet.prototype, 'isSameDomain', {
        get: function () {
            if (!this.href) {
                return true;
            }

            return this.href.startsWith(window.location.origin);
        }
    });

    CSSStyleSheet.prototype.getCustomPropsFrom = function (selector) {
        return [...this.cssRules]
            .filter((rule) => rule.isStyle)
            .filter((rule) => rule.fromSelector(selector))
            .reduce((props, rule) => props.concat(rule.customProps), []);
    };

    Object.defineProperty(CSSStyleSheet.prototype, "customPropertiesRegisted", {
        get: async function () {
            const { cssRules, href } = this;
            if (!!CSSPropertyRule) {
                return [...cssRules]
                    .filter((rule) => rule.isPropertyRule)
            }
            try {
                const response = await fetch(href)
                const data = response.text();
                const properties = data.matchAll(/(@property)\s*(--[\w-]+)\s*({[\s\S][^}]*})/mig)
                return navigateProperties(properties);
            } catch {
                return [];
            }
        }
    });

}

export const extensionOnCSSStyleRule = () => {
    Object.defineProperty(CSSStyleRule.prototype, 'isStyle', {
        get: function () { return this.type === 1 }
    });


    Object.defineProperty(CSSStyleRule.prototype, 'isPropertyRule', {
        get: function () { return this.type === 0 }
    });

    Object.defineProperty(CSSStyleRule.prototype, 'customProps', {
        get: function () {
            return [...this.style]
                .filter((propName) => propName.trim().startsWith("--"));
        }
    });
    CSSStyleRule.prototype.fromSelector = function (selector) {
        return this.selectorText.endsWith(selector);
    };
}