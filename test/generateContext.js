import { rootCustoms } from "./data.js"
const newStyle = document.createElement('style');

newStyle.innerHTML = `
:root {
    ${rootCustoms.map((custom) => `${custom}: red;`).join('\n')}
}
`;
document.head.appendChild(newStyle);