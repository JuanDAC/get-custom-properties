import { rootCustoms, elementsWithCustoms } from "./data.js"
const newStyle = document.createElement('style');

newStyle.innerHTML = `
:root {
    ${Object.entries(rootCustoms).map(([custom, value]) => `${custom}: ${value};`).join('\n')}
}

    ${elementsWithCustoms.map(({element, id, style}) => {
        const newElement = document.createElement(element);
        newElement.setAttribute('id', id);
        document.querySelector('#test')?.appendChild(newElement);
         return `#${id} {
            ${Object.entries(style).map(([custom, value]) => `${custom}: ${value};`).join('\n')}
         }`;
    }).join('\n')}
`;
document.head.appendChild(newStyle);