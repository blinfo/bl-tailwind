module.exports = (theme) => ({
                
  ':root': {
    '--black': theme("colors.black"),
    '--white': theme("colors.white"),

    '--bl-grey-900': theme("colors.bl-grey-900"),
    '--bl-grey-800': theme("colors.bl-grey-800"),
    '--bl-grey-700': theme("colors.bl-grey-700"),
    '--bl-grey-600': theme("colors.bl-grey-600"),
    '--bl-grey-500': theme("colors.bl-grey-500"),
    '--bl-grey-400': theme("colors.bl-grey-400"),
    '--bl-grey-300': theme("colors.bl-grey-300"),
    '--bl-grey-200': theme("colors.bl-grey-200"),
    '--bl-grey-100': theme("colors.bl-grey-100"),
    '--bl-grey-50': theme("colors.bl-grey-50"),

    '--bl-red-800': theme("colors.bl-red-800"),
    '--bl-red-600': theme("colors.bl-red-600"),
    '--bl-red-500': theme("colors.bl-red-500"),
    '--bl-red-300': theme("colors.bl-red-300"),
    '--bl-red-200': theme("colors.bl-red-200"),
    '--bl-red-100': theme("colors.bl-red-100"),

    '--bl-green-800': theme("colors.bl-green-800"),
    '--bl-green-600': theme("colors.bl-green-600"),
    '--bl-green-500': theme("colors.bl-green-500"),
    '--bl-green-300': theme("colors.bl-green-300"),
    '--bl-green-200': theme("colors.bl-green-200"),
    '--bl-green-100': theme("colors.bl-green-100"),

    '--bl-orange-800': theme("colors.bl-orange-800"),
    '--bl-orange-600': theme("colors.bl-orange-600"),
    '--bl-orange-500': theme("colors.bl-orange-500"),
    '--bl-orange-200': theme("colors.bl-orange-200"),
    '--bl-orange-100': theme("colors.bl-orange-100"),

    '--bl-blue-800': theme("colors.bl-blue-800"),
    '--bl-blue-600': theme("colors.bl-blue-600"),
    '--bl-blue-500': theme("colors.bl-blue-500"),
    '--bl-blue-200': theme("colors.bl-blue-200"),
    '--bl-blue-100': theme("colors.bl-blue-100"),

    '--bl-blue-light-800': theme("colors.bl-blue-light-800"),
    '--bl-blue-light-600': theme("colors.bl-blue-light-600"),
    '--bl-blue-light-500': theme("colors.bl-blue-light-500"),
    '--bl-blue-light-200': theme("colors.bl-blue-light-200"),
    '--bl-blue-light-100': theme("colors.bl-blue-light-100"),
  },
  
  '*': {
    margin: '0px',
    fontFamily: 'Poppins, sans-serif'
  },

  'body': {
    fontSize: '62.5%',
  },
  
  'input.ng-invalid': {
    borderColor: theme("colors.bl-red-500")
  },

  'input:disabled': {
    backgroundColor: theme("colors.bl-grey-100")
  },

  /* Fix for additional buttons showing up in date-pickers in webkit-browsers */
  'input[type="date"]': {
    '-webkit-appearance': 'none'
  },

  'input[type="date"]::-webkit-inner-spin-button': {
    '-webkit-appearance': 'none',
    display: 'none'
  },
  'input[type="date"]::-webkit-outer-spin-button': {
    '-webkit-appearance': 'none',
    display: 'none'
  },

  'input[type="date"]::-webkit-calendar-picker-indicator': {
    '-webkit-appearance': 'none',
    color: 'transparent'
  }
});
