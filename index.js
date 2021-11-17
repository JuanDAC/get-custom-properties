var exports = exports || {};

Object.defineProperty(exports, "__esModule", {
    value: true
})

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


Object.defineProperty(CSSStyleRule.prototype, 'isStyle', {
    get: function () { return this.type === 1 }
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


const getCSSCustomPropFrom = (selector) =>
    [...document.styleSheets]
        .filter(styleSheets => styleSheets.isSameDomain)
        .reduce(
            (finalArr, sheet) =>
                finalArr.concat(sheet.getCustomPropsFrom(selector)), []
        );

exports.default = getCSSCustomPropFrom;
export default getCSSCustomPropFrom;