# React Tutorials

## install nodejs

## create folder
```
mkdir reactAppTut
cd reactAppTut
```

## initial npm
```
npm init -y
```

## install React and ReactDOM
```
npm install react react-dom --save
```

## install webpack
```
npm install webpack webpack-dev-server webpack-cli --save
```

## install babel
```
babel 7.x 인경우 이 내용으로 업데이트 필요 

npm install @babel/core --save-dev
npm install babel-loader --save-dev
npm install @babel/preset-env --save-dev
npm install @babel/preset-es2015 --save-dev 
npm install @babel/preset-react --save-dev 
npm install html-webpack-plugin --save-dev
```

## Create Base Files
```
touch index.html
touch App.js
touch main.js
touch webpack.config.js
touch .babelrc
```

## webpack.config.js 설정하기. 
```
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './main.js',
    output: {
        path: path.join(__dirname, '/bundle'),
        filename: 'index_bundle.js'
    },
    devServer: {
        inline: true,
        port: 8080
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_module/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
}
```

## .babelrc 설정하기 
```
{
    "presets":["@babel/preset-env", "@babel/preset-react"]
}
```

## index.html 생성하기 
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>React App</title>
</head>
<body>
    <div id="app"></div>
    <script src="index_bundle.js"></script>
</body>
</html>
```

## App.js 
```
import React, { Component } from 'react';
class App extends Component {
    render() {
        return (
            <div>
                <h1>Hello World</h1>
            </div>
        )
    }
}

export default App;
```

## main.js 
```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

ReactDOM.render(<App />, document.getElementById('app'));
```

