import { rootCustoms, elementsWithCustoms, customPropertiesRegisted } from "./data.js"
const $newStyle = document.createElement('style');

$newStyle.innerHTML = `
:root {
    ${Object.entries(rootCustoms).map(([custom, value]) => `${custom}: ${value};`).join('\n')}
}

    ${elementsWithCustoms.map(({ element, id, style }) => {
    const $newElement = document.createElement(element);
    $newElement.setAttribute('id', id);
    document.querySelector('#test')?.appendChild($newElement);
    return `#${id} {
            ${Object.entries(style).map(([custom, value]) => `${custom}: ${value};`).join('\n')}
         }`;
}).join('\n')}
`;
document.head.appendChild($newStyle);

customPropertiesRegisted.forEach(({id, style}) => {
    const $style = document.createElement('style');
    $style.setAttribute('id', id);
    style.forEach(({name, syntax, inherits, initialValue}) => {
        $style.innerHTML += `
            @property ${name} {
                ${syntax !== undefined ? `syntax: ${syntax};` : ''}
                ${inherits !== undefined ? `inherits: ${inherits};` : ''}
                ${initialValue !== undefined ? `initialValue: ${initialValue};` : ''}
            }
        `;
    });
    document.head.appendChild($style);
});