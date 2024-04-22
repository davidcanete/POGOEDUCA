import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Figtree', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'dodger-blue': {
          '50': '#f1f7fe',
          '100': '#e2eefc',
          '200': '#bfdbf8',
          '300': '#86bef3',
          '400': '#469cea',
          '500': '#2a8ae2',
          '600': '#1064b9',
          '700': '#0e4f96',
          '800': '#10447c',
          '900': '#133a67',
          '950': '#0d2544',
        },
        'malibu': {
          '50': '#f1f9fe',
          '100': '#e2f1fc',
          '200': '#bfe3f8',
          '300': '#7ac7f2',
          '400': '#45b2eb',
          '500': '#1d98da',
          '600': '#107ab9',
          '700': '#0e6196',
          '800': '#10527c',
          '900': '#134567',
          '950': '#0d2c44',
        },
        'bgfooter': {
          '50': '#f7f7f7',
          '100': '#ededed',
          '200': '#d9d9d9',
          '300': '#c8c8c8',
          '400': '#adadad',
          '500': '#999999',
          '600': '#888888',
          '700': '#7b7b7b',
          '800': '#676767',
          '900': '#545454',
          '950': '#363636',
        },
      }
    },
  },
  plugins: [
    forms
  ],
};
