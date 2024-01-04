/** @type {import("prettier").Config} */
const config = {
    trailingComma: 'es5',
    tabWidth: 4,
    semi: true,
    singleQuote: true,
    arrowParens: 'avoid',
    plugins: ['prettier-plugin-tailwindcss'],
};

export default config;
