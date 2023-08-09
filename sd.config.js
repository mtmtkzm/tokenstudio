const StyleDictionaryModule = require('style-dictionary')

const StyleDictionary = StyleDictionaryModule.extend({
  source: ['./style-dictionary/tokens/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: './style-dictionary/build/',
      files: [
        {
          destination: '_variables.css',
          format: 'css/variables',
        }
      ]
    }
  }
})
StyleDictionary.buildAllPlatforms()
