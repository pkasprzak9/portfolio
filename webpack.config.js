const path = require('path');

module.exports = {
  mode: 'development', // Development mode for better debuggability

  // Entry point for React app
  entry: './public/App.jsx',

  // Output for the compiled bundle
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },

  // Module rules (Babel for JSX)
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },

  // Auto-resolve .js and .jsx extensions
  resolve: {
    extensions: ['.js', '.jsx']
  },

  // Development server setup
  devServer: {
    static: { directory: path.join(__dirname, 'public') },
    compress: true,
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true, // For React Router
  }
};
