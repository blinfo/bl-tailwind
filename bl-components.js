module.exports = (theme) => ({
  ".border-thin": {
    "@apply w-full border-b border-bl-grey-200 py-2 dark:border-bl-grey-600":
      {},
  },

  ".form-section": {
    "@apply shadow bg-white md:rounded-md md:p-6 p-4 dark:bg-bl-grey-800": {},
  },

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

  // ".bl-input.ng-invalid": {
  //   borderColor: theme("colors.bl-grey-200"),
  // },

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

  ".form-radio": {
    "@apply border border-bl-grey-300 mr-3 dark:border-bl-grey-600": {},
  },

  ".toggle": {
    "@apply relative inline-flex flex-shrink-0 h-6 w-12 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200":
      {},
  },

  ".form-checkbox": {
    "@apply block appearance-none rounded border border-bl-grey-300 text-bl-orange-500 my-1 mr-3":
      {},
  },

  ".form-checkbox:focus, .form-radio:focus, .toggle:focus": {
    "@apply outline-none ring-2 ring-offset-2 ring-bl-orange-500": {},
  },

  ".bl-checkbox": {
    "@apply block appearance-none rounded border border-bl-grey-500 p-3": {},
  },

  ".bl-checkbox:focus": {
    "@apply outline-none shadow-orange border-bl-orange-500": {},
  },

  ".bl-checkbox:checked": {
    "@apply bg-bl-orange-100": {},
  },

  ".bl-label": {
    "@apply block truncate text-sm font-medium leading-5 text-bl-grey-700 dark:text-bl-grey-400":
      {},
  },

  /** To use this the element needs to be wrapped around a div with position relative */
  ".bl-label-arrow": {
    "@apply pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-black":
      {},
  },

  ".bl-search-icon": {
    "@apply pointer-events-none absolute inset-y-0 left-0 flex items-center px-2 text-bl-grey-500 dark:text-bl-grey-200":
      {},
  },

  ".bl-select": {
    "@apply block appearance-none w-full rounded-md text-base text-bl-grey-900 leading-6 bg-white border border-bl-grey-200 px-3 py-2 shadow-sm dark:bg-bl-grey-700 dark:border-bl-grey-600 dark:text-bl-grey-200":
      {},
  },
  ".bl-select:focus": {
    "@apply outline-none shadow": {},
  },

  ".bl-button": {
    "@apply text-base font-medium items-center min-w-24 rounded-full border border-transparent px-3 py-2 leading-6 shadow-sm whitespace-nowrap":
      {},
  },
  "@screen sm": {
    ".bl-button": {
      "@apply text-sm": {},
    },
  },
  ".bl-button:disabled": {
    "@apply opacity-75 cursor-not-allowed": {},
  },
  ".bl-button:focus, .bl-button-primary-circular:focus, .bl-button-secondary-circular:focus":
    {
      "@apply outline-none ring-2 ring-offset-2 ring-bl-orange-500": {},
    },
  ".bl-button-primary": {
    "@apply bg-bl-orange-500 text-white": {},
  },
  ".bl-button-primary-circular": {
    "@apply bg-bl-orange-500 fixed rounded-full shadow-md right-0 mb-5 mr-5 p-6 z-10 text-white dark:text-bl-grey-100":
      {},
  },
  ".bl-button-secondary-circular": {
    "@apply w-12 min-w-0 flex-initial mx-4 bg-white text-bl-grey-700 ring-1 ring-bl-grey-200 rounded-full":
      {},
  },
  ".bl-button-primary:hover, .bl-button-primary-circular:hover": {
    "@apply bg-bl-orange-600": {},
  },
  ".bl-button-secondary": {
    "@apply bg-white text-bl-grey-700 border-bl-grey-200 dark:bg-bl-grey-200 dark:text-black":
      {},
  },
  ".bl-button-secondary:hover, .bl-button-secondary-circular:hover": {
    "@apply bg-bl-grey-50 dark:bg-bl-grey-300": {},
  },
  ".bl-button-tertiary": {
    "@apply bg-transparent text-bl-grey-700 dark:text-bl-grey-300": {},
  },
  ".bl-button-tertiary:hover": {
    "@apply text-bl-grey-900 dark:text-bl-grey-100": {},
  },
  ".bl-button-secondary-red": {
    "@apply bg-white text-bl-red-500 border-bl-red-500 dark:bg-bl-grey-100": {},
  },
  ".bl-button-secondary-red:hover": {
    "@apply bg-bl-red-100 border-bl-red-500": {},
  },
  ".bl-button-secondary-red:focus": {
    "@apply outline-none ring-2 ring-offset-2 ring-bl-red-500": {},
  },
  ".bl-button-secondary-blue": {
    "@apply bg-bl-blue-500 text-white": {},
  },
  ".bl-button-secondary-blue:hover": {
    "@apply bg-bl-blue-800": {},
  },
  ".bl-button-secondary-blue:focus": {
    "@apply outline-none ring-2 ring-offset-2 ring-bl-blue-500": {},
  },
  ".bl-button-warning": {
    "@apply bg-bl-red-500 text-white": {},
  },
  ".bl-button-warning:hover": {
    "@apply bg-bl-red-600": {},
  },
  ".bl-button-warning:focus": {
    "@apply outline-none ring-2 ring-offset-2 ring-bl-red-500": {},
  },
  ".bl-button-checkbox": {
    "@apply rounded-full border flex items-center justify-center": {},
  },
  ".bl-body-text": {
    "@apply text-sm leading-snug": {},
  },

  ".bl-blue-gradient": {
    background:
      "linear-gradient(193.04deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 55.87%), var(--bl-blue-500)",
  },

  ".beta-text": {
    alignSelf: "baseline",
  },

  ".form-component": {
    width: "50%",
    fontSize: "2em",
    marginTop: "0.8em",
    marginLeft: "0.8em",
  },

  ".max-w-9xl": {
    maxWidth: "1536px",
  },

  ".wrapper-item": {
    display: "grid",
    "grid-template-columns": "1fr repeat(10, 2fr) 1fr",
    "grid-template-rows": "1fr repeat(4, 2fr) 1fr",
    "grid-column": "2 / span 10",
    "grid-row": "2 / span 4",
  },

  ".item": {
    justifyContent: "center",
    alignItems: "center",
  },

  ".component-header": {
    display: "grid",
    "grid-template-columns": "repeat(3, 1fr)",
  },

  ".form-component.search": {
    "grid-column": 1,
    "font-size": "1.8em",
    "margin-top": "0em",
    "margin-left": "0.8em",
    "margin-bottom": "0.8em",
  },

  "@media (max-width: 768px)": {
    ".wrapper-item": {
      "grid-column": "1 / -1",
    },

    /*reduce shadow on content*/
    ".content-container": {
      "box-shadow":
        "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2)",
    },
  },
});
