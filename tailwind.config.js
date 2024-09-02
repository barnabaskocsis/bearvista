/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: { // will be 'text-<color_name>', 'bg-<color_name>', 'border-<color_name>'
      'black-primary': '#1C1C1E',
      'black-secondary': '#20232A',
      'white-primary': '#E5E5EA',
      'white-secondary': '#F2F2F7',
      'white': '#FFFFFF',
      'white-faded': '#FFFFFF40',
      'white-800': '#F4F6F8',
      'primary': '#0064FF',
      'primary-faded': '#0064FF1A',
      'secondary': '#0C2027',
      'tertiary-white': '#F5F5F5',
      'error': '#FF5555',
      'alert-red': '#DA1E28',
      'delete-red': '#FF4545',
      'status-red': '#FF0457',
      'status-red-faded': '#FBE7E9',
      'success': '#76E988',
      'status-green': '#009C64',
      'status-green-faded': '#75EBD980',
      'dark-green': '#006E25',
      'light-brown': '#CDB565',
      'light-brown-faded': '#CDB56533',
      'grey-100': '#F4F7FB',
      'grey-200': '#EDF0F7',
      'grey-300': '#E2E7F0',
      'grey-400': '#CBD2E0',
      'grey-400-faded': '#CBD2E033',
      'grey-500': '#A0ABC0',
      'grey-600': '#717D96',
      'grey-700': '#4A5468',
      'grey-800': '#2D3648',
      'grey-900': '#1A202C',
      'black-faded': '#00000080',
      'risk-1': '#4295C7',
      'risk-2': '#A0C9DF',
      'risk-3': '#FD9273',
      'risk-4': '#EE3D2F',
      'risk-5': '#68010D',
      'damage': '#B43032',
    },
    fontSize: { // will be text-<font_name>
      '12px': ['0.75rem', {
        lineHeight: '0.825rem',
        fontWeight: 500,
      }],
      '14px': ['0.875rem', {
        lineHeight: '1.3125rem',
        letterSpacing: '-0.01em'
      }],
      '16px': ['1rem', {
        lineHeight: '1.5rem',
        letterSpacing: '-0.01em'
      }],
      '18px': ['1.125rem', {
        lineHeight: '1.6875rem',
        letterSpacing: '-0.01em'
      }],
      '22px': ['1.375rem', {
        lineHeight: '2.0625rem',
        letterSpacing: '-0.01em'
      }],
      '24px': ['1.5rem', {
        lineHeight: '1.65rem',
      }],
      '26px': ['1.625rem', {
        lineHeight: '1.95rem',
      }],
      '32px': ['2rem', {
        lineHeight: '2.420625rem',
      }],
    },
  },
  plugins: [],
}

