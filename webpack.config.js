const path = require('path');

module.exports = {
  mode: 'development',
  entry: './public/App.jsx', // Punkt wejścia Twojej aplikacji React
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js', // Skompilowany plik wynikowy
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Transpilacja plików .js i .jsx
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
  resolve: {
    extensions: ['.js', '.jsx'] // Rozpoznawanie plików .js i .jsx
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true, // Dodaj to, jeśli używasz React Router
  }
};
