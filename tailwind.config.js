const plugin = require("tailwindcss/plugin");

const fooPlugin = plugin(function ({ addComponents  }) {
  addComponents ({
    '.btn-baz': {
      display: 'flex',
      alignItems: 'center',
      padding: '0.5rem 1rem',
      borderRadius: '0.5rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'opacity ease-in-out 0.5s',
    },
    '.btn-baz:hover': {
      opacity: '0.7',
    },
    '.btn-baz::before': {
      content: '""',
      display: 'inline-block',
      marginRight: '0.5rem',
      border: '0.25rem solid transparent',
      "@apply border-l-[0.5rem]": {},
      "@apply border-l-indigo-500": {},
      borderRight: 'none',
      verticalAlign: 'middle',
    },
  });
});

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    fooPlugin,
  ],
}

