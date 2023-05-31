module.exports = (theme) => ({
  ".bl-input": {
    "@apply w-full rounded-md text-base text-bl-grey-900 leading-6 bg-white border border-bl-grey-200 px-3 py-2 shadow-sm dark:text-bl-grey-200 dark:bg-bl-grey-700 dark:border-bl-grey-600":
      {},
  },
  "@screen sm": {
    ".bl-input": {
      "@apply text-sm": {},
    },
  },

  ".search-filter-bl-input": {
    "@apply w-full text-base text-bl-grey-900 border border-bl-grey-200 shadow-sm dark:text-bl-grey-200 dark:border-bl-grey-600 dark:bg-bl-grey-700":
      {},
  },

  ".bl-input::placeholder": {
    "@apply text-bl-grey-500 dark:text-bl-grey-200": {},
  },

  ".bl-input.ng-invalid": {
    "@apply border-bl-grey-200 dark:border-bl-grey-600": {},
  },

  ".bl-input:focus": {
    "@apply outline-none border-bl-orange-500 ring-1 ring-bl-orange-500 dark:bg-bl-grey-700":
      {},
  },
  ".bl-input.ng-invalid:focus, .search-filter-bl-input:focus": {
    "@apply outline-none border-bl-orange-500 ring-1 ring-bl-orange-500 dark:bg-bl-grey-700":
      {},
  },

  ".bl-input.ng-invalid.ng-dirty": {
    "@apply outline-none border-bl-red-500": {},
  },

  ".bl-input.ng-invalid.ng-dirty:focus": {
    "@apply outline-none border-bl-red-500 ring-1 ring-bl-red-500": {},
  },

  ".bl-input-error-icon": {
    bottom: "0.5em",
    right: "1em",
    zIndex: "100",
  },
  ".bl-input-error-multi-icon": {
    right: "2em !important",
  },

  ".bl-input:-webkit-autofill, .bl-input:-webkit-autofill:hover, textarea:-webkit-autofill, textarea:-webkit-autofill:hover, textarea:-webkit-autofill:focus, select:-webkit-autofill, select:-webkit-autofill:hover, textarea:-webkit-autofill:focus":
    {
      "-webkit-text-fill-color": "var(--bl-grey-900)",
      "-webkit-box-shadow": "0 0 0px 1000px var(--bl-blue-light-100) inset",
      transition: "background-color 5000s ease-in-out 0s",
    },

  ".bl-input:-webkit-autofill:focus": {
    "-webkit-text-fill-color": "var(--bl-grey-900)",
    "-webkit-box-shadow": "0 0 0px 1000px var(--bl-blue-light-100) inset",
    transition: "background-color 5000s ease-in-out 0s",
    outline: "2px solid var(--bl-orange-500)",
    "outline-offset": "-1px",
  },

  ".dark .bl-input:-webkit-autofill, .dark .bl-input:-webkit-autofill:hover, .dark .bl-input:-webkit-autofill:focus, .dark select:-webkit-autofill, .dark select:-webkit-autofill:hover, .dark select:-webkit-autofill:focus, .dark textarea:-webkit-autofill, .dark textarea:-webkit-autofill:hover, dark textarea:-webkit-autofill:focus":
    {
      "-webkit-text-fill-color": "var(--bl-grey-300)",
      "-webkit-box-shadow": "0 0 0px 1000px var(--bl-grey-700) inset",
      transition: "background-color 5000s ease-in-out 0s",
      "caret-color": "var(--bl-grey-300)",
    },
});
