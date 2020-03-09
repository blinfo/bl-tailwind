module.exports = {
  theme: {
    colors: { 
      'transparent': 'transparent',
      'black': '#000000',
      'white': '#ffffff',

      'bl-grey-900': '#161e2e',
      'bl-grey-800': '#252f3f',
      'bl-grey-700': '#374151',
      'bl-grey-600': '#4b5563',
      'bl-grey-500': '#6b7280',
      'bl-grey-400': '#9fa6b2',
      'bl-grey-300': '#d2d6dc',
      'bl-grey-200': '#e5e7eb',
      'bl-grey-100': '#f7fafc',
      'bl-grey-50': '#f9fafb',

      'bl-red-800': '#661715',
      'bl-red-600': '#cc2f2a',
      'bl-red-500': '#e3342f',
      'bl-red-200': '#f8cccb',
      'bl-red-100': '#fcebea',
        
      'bl-green-800': '#195733',
      'bl-green-600': '#32ae67',
      'bl-green-500': '#38c172',
      'bl-green-200': '#cdf0dc',
      'bl-green-100': '#ebf9f1',
        
      'bl-orange-800': '#6d4714',
      'bl-orange-600': '#dB8d29',
      'bl-orange-500': '#f39d2d',
      'bl-orange-200': '#fce7cb',
      'bl-orange-100': '#fef5ea',
        
      'bl-blue-800': '#061a25',
      'bl-blue-600': '#0c344a',
      'bl-blue-500': '#0d3a52',
      'bl-blue-200': '#c3ced4',
      'bl-blue-100': '#e7ebee',
        
      'bl-blue-light-800': '#284956',
      'bl-blue-light-600': '#4f93ab',
      'bl-blue-light-500': '#58a3be',
      'bl-blue-light-200': '#d5e8ef',
      'bl-blue-light-100': '#eef6f9',
     },
     screens: {
      'sm': '576px',
      'md': '769px',
      'lg': '992px',
      'xl': '1441px'
    },
    fontFamily: {
      'sans': 'Poppins, Open Sans, system-ui',
    },
    extend: {
      spacing: {
        '96': '24rem',
      },
      minWidth: {
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '16': '4rem',
        '24': '6rem',
        '32': '8rem',
        '48': '12rem',
        '64': '16rem',
        '96': '24rem',
        '1/2': '50%',
      },
      minHeight: {
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '16': '4rem',
        '24': '6rem',
        '32': '8rem',
      }
    }
  },
  variants: {
    appearance: ['responsive'],
    zIndex: ['responsive'],
  },
  plugins: [
    // ...
  ],
}