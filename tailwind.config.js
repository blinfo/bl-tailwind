module.exports = {
  theme: {
    colors: { 
      'transparent': 'transparent',
      'black': '#000000',
      'white': '#ffffff',

      'bl-grey-900': '#111827',
      'bl-grey-800': '#1f2937',
      'bl-grey-700': '#374151',
      'bl-grey-600': '#4b5563',
      'bl-grey-500': '#6b7280',
      'bl-grey-400': '#9ca3af',
      'bl-grey-300': '#d1d5db',
      'bl-grey-200': '#e5e7eb',
      'bl-grey-100': '#f3f4f6',
      'bl-grey-50': '#f9fafb',

      'bl-red-800': '#661715',
      'bl-red-600': '#cc2f2a',
      'bl-red-500': '#e3342f',
      'bl-red-300': '#F4AEAC',
      'bl-red-200': '#f8cccb',
      'bl-red-100': '#fcebea',
        
      'bl-green-800': '#195733',
      'bl-green-600': '#32ae67',
      'bl-green-500': '#38c172',
      'bl-green-300': '#AFE6C7',
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
      'xlg': '1140px',
      'xl': '1441px',
      'xxl': '1790px',
    },
    fontFamily: {
      'sans': 'Poppins, Open Sans, system-ui',
    },

    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
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
      },
      boxShadow: {
        xs: '0 1px 2px rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 2px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.1)', 
        lg: '0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        orange: '0 0 0 3px rgba(243, 157, 45, 0.5)',
        red: '0 0 0 3px rgba(227, 52, 47, 0.5)',
        
      }
    }
  },
  variants: {
    extend: {
      margin: ['last'],
    },
    appearance: ['responsive'],
    zIndex: ['responsive'],
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
