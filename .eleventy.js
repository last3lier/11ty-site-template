const pug = require('pug');

module.exports = function (eleventyConfig) {
  eleventyConfig.setLibrary('pug', pug);
  eleventyConfig.setPugOptions({ debug: true });
  eleventyConfig.setTemplateFormats('md,html,liquid,njk,pug')

  eleventyConfig.addWatchTarget("./src/sass/");
  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  }
}