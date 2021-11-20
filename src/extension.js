
export const extensionOnCSSStyleSheet = () => {

    /**
     *  isSameDomain:: void → bool
     */
    Object.defineProperty(CSSStyleSheet.prototype, 'isSameDomain', {
        get: function () {
            if (!this.href) {
                return true;
            }

            return this.href.startsWith(window.location.origin);
        }
    });

    /**
     *  getCustomPropsFrom:: string → bool
     */
    CSSStyleSheet.prototype.getCustomPropsFrom = function (selector) {
        return [...this.cssRules]
            .filter((rule) => rule.isStyle)
            .filter((rule) => rule.fromSelector(selector))
            .reduce((props, rule) => props.concat(rule.customProps), []);
    };

    /**
     *  customPropertiesRegisted:: void → bool
     */
    CSSStyleSheet.prototype.customPropertiesRegisted = function () {
        const { cssRules } = this;

        if (!CSSPropertyRule) {
            throw Error("CSSPropertyRule don't exits");
        }

        return [...cssRules].filter((rule) => rule.isPropertyRule)
    };


}

export const extensionOnCSSStyleRule = () => {
    /**
     *  isStyle:: void → bool
     */
    Object.defineProperty(CSSStyleRule.prototype, 'isStyle', {
        get: function () { return this.type === 1 }
    });

    /**
     *  isPropertyRule:: void → bool
     */
    Object.defineProperty(CSSStyleRule.prototype, 'isPropertyRule', {
        get: function () { return this.type === 0 }
    });

    /**
     *  customProps:: void → [string]
     */
    Object.defineProperty(CSSStyleRule.prototype, 'customProps', {
        get: function () {
            return [...this.style]
                .filter((propName) => propName.trim().startsWith("--"));
        }
    });

    /**
     *  fromSelector:: string → bool
     */
    CSSStyleRule.prototype.fromSelector = function (selector) {
        return this.selectorText.endsWith(selector);
    };
}