module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jquery" : true
    },
    "globals": {
        "module": true,
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-debugger": [
            1
        ],
        "block-scoped-var" : [
            2
        ],
        "curly" : [
            2
        ],
        "default-case" : [
            2
        ],
        "no-else-return" : [
            1
        ],
        "no-empty-function" : [
            2
        ],
        "no-eq-null" : [
            2
        ],
        "no-extra-bind" : [
            2
        ],
        "no-floating-decimal" : [
            2
        ],
        "no-implicit-globals" : [
            2
        ],
        "no-lone-blocks" : [
            2
        ],
        "no-loop-func" : [
            2
        ],
        "no-multi-spaces" : [
            2
        ],
        "no-self-compare" : [
            2
        ],
        "no-unused-expressions" : [
            2
        ],
        "no-useless-concat" : [
            2
        ],
        // "no-useless-return" : [
        //     2
        // ],
        "vars-on-top" : [
            2
        ],
        "wrap-iife" : [
            2,
            "inside"
        ],
        "yoda" : [
            2
        ],
        "array-bracket-spacing" : [
            2
        ],
        "camelcase" : [
            2
        ],
        "comma-style" : [
            1,
            "last"
        ],
        "computed-property-spacing" : [
            1
        ],
        // "func-call-spacing" : [
        //     1
        // ],
        // "line-comment-position" : [
        //     2
        // ],
        "max-depth" : [
            2
        ],
        // "max-len" : [
        //     1,
        //     {
        //         "ignoreComments": true,
        //         "code" : 80,
        //         "ignoreUrls": true,
        //         "ignoreStrings": true,
        //     }
        // ],
        "max-nested-callbacks" : [
            2
        ],
        "max-statements-per-line" : [
            1
        ],
        "newline-after-var" : [
            1
        ],
        "newline-before-return" : [
            1
        ],
        "no-bitwise" : [
            1
        ],
        "no-lonely-if" : [
            2
        ],
        "no-multiple-empty-lines" : [
            2
        ],
        "no-nested-ternary" : [
            2
        ],
        "no-trailing-spaces" : [
            1
        ],
        "no-unneeded-ternary" : [
            2
        ],
        "no-whitespace-before-property" : [
            2
        ],
        "one-var-declaration-per-line" : [
            1
        ],
        "operator-assignment" : [
            1
        ]
    }
};