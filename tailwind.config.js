/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        colors: {
            'action-interactive-default': '#1274A5',
            'action-interactive-hover': '0E687D',
            'action-outline-default': '#ffffff00',
            'action-outline-disabled': '#ffffff00',
            'action-outline-hover': '#E5F0E8',
            'action-primary-default': '#000000',
            'action-primary-disabled': '#000000',
            'action-primary-hover': '#000000',
            'border-default': '#808080',
            'border-subdued': '#D2D2D2',
            'border-blue': '#17AED0',
            'border-green': '#2B8528',
            'icon-blue': '#0E687D',
            'icon-green': '#2B8528',
            'icon-red': '#bb363c',
            'icon-yellow': '#a4580e',
            'surface-+1': '#F2F2F2',
            'surface-+2': '#E5E5E5',
            'surface-+3': '#BFBFBF',
            'surface-0': '#FFFFFF',
            'surface-inverse': '#000000',
            'text-default': '#121212',
            'text-disabled': '#BFBFBF',
            'text-inverse-default': '#FFFFFF',
            'text-inverse-subdued': '#E5E5E5',
            'text-placeholder': '#666666',
            'text-subdued': '#666666',
          },        
        extend: {}
    },
    plugins: [
        require('tailwindcss-opentype'),
    ]
}
