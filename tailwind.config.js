module.exports = {
  theme: {
    colors: { 
      'transparent': 'transparent',
      'black': '#22292f',
      'white': '#ffffff',
      'bl-background': '#F1F6F8',

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
        
      'bl-orange-800': '#6D4714',
      'bl-orange-600': '#DB8D29',
      'bl-orange-500': '#F39D2D',
      'bl-orange-200': '#FCE7CB',
      'bl-orange-100': '#FEF5EA',
        
      'bl-blue-800': '#061A25',
      'bl-blue-700': '#082331',
      'bl-blue-600': '#0C344A',
      'bl-blue-500': '#0D3A52',
      'bl-blue-400': '#567586',
      'bl-blue-300': '#9EB0BA',
      'bl-blue-200': '#C3CED4',
      'bl-blue-100': '#E7EBEE',
        
      'bl-blue-light-800': '#284956',
      'bl-blue-light-600': '#4F93AB',
      'bl-blue-light-500': '#58A3BE',
      'bl-blue-light-200': '#D5E8EF',
      'bl-blue-light-100': '#EEF6F9',
        
      'bl-grey-800': '#2D3748',
      'bl-grey-700': '#4A5568',
      'bl-grey-600': '#718096',
      'bl-grey-500': '#A0AEC0',
      'bl-grey-400': '#CBD5E0',
      'bl-grey-300': '#E2E8F0',
      'bl-grey-200': '#EDF2F7',
      'bl-grey-100': '#F7FAFC',
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