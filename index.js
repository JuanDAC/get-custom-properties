/*var exports = exports || {};

Object.defineProperty(exports, "__esModule", {
    value: true
})
*/
import {extensionOnCSSStyleRule, extensionOnCSSStyleSheet} from "./src/extension";

extensionOnCSSStyleRule();
extensionOnCSSStyleSheet();

const getCSSCustomPropFrom = (selector) =>
    [...document.styleSheets]
        .filter(styleSheets => styleSheets.isSameDomain)
        .reduce(
            (finalArr, sheet) =>
                finalArr.concat(sheet.getCustomPropsFrom(selector)), []
        );


const getCSSCustomPropRegisted = () =>
    [...document.styleSheets]
        .filter(styleSheets => styleSheets.isSameDomain)
        .reduce(
            (finalArr, sheet) =>
                finalArr.concat(sheet.customPropertiesRegisted), []
        );




/*exports.default = getCSSCustomPropFrom;*/
export default getCSSCustomPropFrom;