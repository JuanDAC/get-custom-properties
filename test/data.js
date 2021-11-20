export const rootCustoms = {
    ["--color-primary-600"]: "#A33C3B",
    ["--color-primary-400"]: "#F0706E",
    ["--color-primary-200"]: "#FF918F",
    ["--custom-without-value"]: " "
};

export const elementsWithCustoms = [
    {
        element: "P",
        id: "test-text",
        style: {
            ["--color-success-600"]: "#0E5725",
            ["--color-success-400"]: "#2AA351",
            ["--color-success-200"]: "#56F087"
        },
    },
    {
        element: "DIV",
        id: "test-content",
        style: {
            ["--width"]: "80wh",
            ["--height"]: "90vmin",
            ["--color-content"]: "#570705",
            ["--color-fill"]: "#570705"
        },
    },
    {
        element: "SPAM",
        id: "test-smap",
        style: {},
    },
    {
        element: "SPAM",
        id: "test-error-naming",
        testOutput: 1,
        style: {
            ["- -width"]: "80wh",
            ["- - height"]: "90vmin",
            ["--color -content"]: "#570705",
            ["--"]: "#570705"
        },
    },
    {
        element: "SPAM",
        id: "test-alternative-naming",
        style: {
            ["--2width"]: "80wh",
            ["--height2"]: "90vmin",
            ["--color_content"]: "#570705",
            ["--color--content"]: "#570705",
            ["--colorFill"]: "#570705"
        },
    }

];

export const customPropertiesRegisted = [
    {
        id: "test-one-register",
        style: [
            {
                name: '--my-color',
                syntax: '<color>',
                inherits: false,
                initialValue: '#c0ffee',
            }
        ],
    },
    {
        id: "test-zero-register",
        style: [
        ],
    },
    {
        id: "test-two-register",
        style: [
            {
                name: '--my-color',
                syntax: '<color>',
                inherits: false,
                initialValue: '#c0ffee',
            },
            {
                name: '--my-othe-color',
                syntax: '<color>',
                inherits: false,
                initialValue: '#570705',
            },
        ],
    },
    {
        id: "test-incomplete-register",
        style: [
            {
                name: '--my-color',
                inherits: false,
                initialValue: '#c0ffee',
            },
            {
                name: '--my-othe-color',
                syntax: '<color>',
                inherits: false,
            },
            {
                name: '--my-width',
                syntax: '<length>',
                initialValue: '10px',
            },
            {
                name: '--my-empty',
            },
        ],
    },
];
