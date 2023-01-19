# Notes

Project made as an empty folder. src/index.js is default webpack entry.

## Webpack

Webpack is used to handle and bundle non-js files. Out of the box, webpack only understands JSON and Javascript. Special loaders for stuff like scss, for example.

However, babel is **required** for React.js, as jsx/tsx files need to be converted to plain js. Babel requires presets based on the type of javascript we are working with.

## Setup-required packages and their purpose:

Webpack
`npm install webpack webpack-cli webpack-dev-server --save-dev`
Webpack HTML plugin, for injecting bundle into HTML file
`npm install html-webpack-plugin --save-dev`
React
`npm install react react-dom`
Babel
`npm install @babel/core babel-loader --save-dev`
Babel presets for ES2015+ syntax and React
`npm install @babel/preset-env @babel/preset-react --save-dev`
Tailwind + PostCSS (according to tailwind docs - "most seamless way to integrate with .. webpack")
`npm install -D tailwindcss postcss autoprefixer`


## Used guides:

Basic webpack setup (Module Bundlers Explained)
https://www.youtube.com/watch?v=5IG4UmULyoA

Setting up typescript with webpack
https://webpack.js.org/guides/typescript/

Setting up react with webpack and babel
https://medium.com/age-of-awareness/setup-react-with-webpack-and-babel-5114a14a47e9

Setting up TailwindCSS with React:
https://dev.to/ivadyhabimana/setup-tailwind-css-in-a-react-project-configured-from-scratch-a-step-by-step-guide-2jc8

## Further questions:

Do I need module.exports.output in webpack.config.js if html-webpack-plugin injets it into its own tag?