module.exports = (ctx) => ({
  map: ctx.env === 'development' ? ctx.options.map : false,
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
})