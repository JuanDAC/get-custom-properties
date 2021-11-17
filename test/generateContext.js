const rootCustoms = [
    "--color-primary-600",
    "--color-primary-400",
    "--color-primary-200"
];

const newStyle = document.createElement('style');

newStyle.innerHTML = `
:root {
    ${rootCustoms.map((custom) => `${custom}: red;`).join('\n')}
}
`;
document.head.appendChild(newStyle);