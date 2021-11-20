import { extensionOnCSSStyleRule, extensionOnCSSStyleSheet } from "./src/extension.js";
import { customPropertiesRegistedFromLabel } from "./src/registered.js";

extensionOnCSSStyleRule();
extensionOnCSSStyleSheet();

/** 
 * getCustomProperties:: string → [string]
 */
export const getCustomProperties = (selector) =>
    [...document.styleSheets]
        .filter(styleSheets => styleSheets.isSameDomain)
        .reduce(
            (finalArr, sheet) =>
                finalArr.concat(sheet.getCustomPropsFrom(selector)), []
        );

/**
 * getCustomPropertiesRegisted:: void → [ {name: string, inherits: false, initialValue: string} ]
 */
export const getCustomPropertiesRegisted = customPropertiesRegistedFromLabel;
