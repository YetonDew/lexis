import eslintPluginAstro from 'eslint-plugin-astro';

export default [
    // add more generic rule sets here, such as:
    // js.configs.recommended,
    ...eslintPluginAstro.configs.recommended,
    {
        ignores: [
            ".nyc_output/",
            "coverage/",
            "lib/",
            "node_modules/",
            "!.vscode/",
            "!.github/",
            "build/",
        ],
        files: ["**/*.astro", "*.astro"],
        rules: {
            // override/add rules settings here, such as:
            // "astro/no-set-html-directive": "error"
        }
    }
];