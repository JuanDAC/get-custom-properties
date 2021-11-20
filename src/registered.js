/**
 *  generatePropertyRules:: RegExpStringIterator → [
 *      {name: string, inherits: false, initialValue: string}
 *  ]
 */
export const generatePropertyRules = (properties) => {
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
        return [propertyRule].concat(generatePropertyRules(properties));
    }
    return generatePropertyRules(properties)
}
/**
 * customPropertiesRegistedFromLabel:: string → generatePropertyRules
 */
export const customPropertiesRegistedFromLabel = (selector) => {
    const $style = document.head.querySelector(selector);
    if (!$style) {
        throw Error(`don't have a element with selector ${selector}`);
    }
    const { textContent } = $style;
    if (textContent.length < 10) {
        throw Error("don't have a content in style");
    }
    const properties = textContent
        .matchAll(/(@property)\s*(--[\w-]+)\s*({[\s\S][^}]*})/mig)


    if (!Object.getOwnPropertyNames(Object.getPrototypeOf(properties)).includes('next')) {
        return [];
    }

    return generatePropertyRules(properties);
};
