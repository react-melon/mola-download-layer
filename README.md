# mola-baidu-invoker

[![Build Status](https://travis-ci.org/react-melon/mola-baidu-invoker.svg?branch=master)](https://travis-ci.org/react-melon/mola-baidu-invoker)
[![Coverage Status](https://coveralls.io/repos/github/react-melon/mola-baidu-invoker/badge.svg?branch=master)](https://coveralls.io/github/react-melon/mola-baidu-invoker?branch=master)

## Usage

```js
import React from 'react';
import MolaBaiduInvoker from 'mola-baidu-invoker';
import ReactDOM from 'react-dom';

import './index.styl';

ReactDOM.render(
    <MolaBaiduInvoker />,
    document.getElementById('app')
);
```

## Dependences

1. mms-js-sdk

    > 目前 mms-js-sdk 没有 npm 包，只有一个 gitlab 地址，并且是 develop 分支，不是很稳定的代码；

    > 因此，在外网也是没有办法安装这个依赖的 !

    配置：

    1. 如果使用 webpack 请在配置中加入

        ```js
        resolve: {
            extensions: ['', '.js', '.styl'],
            modulesDirectories: ['node_modules'],
            alias: {
                'mms-js-sdk': 'mms-js-sdk/src'
            }
        }
        ```

    2. 如果使用 amd 请加入 paths 配置：

        ```js
        require.config({
            paths: {
                'mms-js-sdk': '../relative/to/your/mms-js-sdk/src'
            }
        });
        ```


2. grahp-js-sdk

    这个是一个 cdn 文件，请在 html 中直接写死引入：

    ```html
    <script src="//graph.baidu.com/uresource/mms/mobile.js"></script>
    ```

    接下来需要配置：

    1. 如果使用 Webpack，请在配置中加入 external 配置，将全局变量 `BD_MMS` 转化成包 `grahp-js-sdk` 使用:

        ```js
        externals: {
            'graph-js-sdk': 'BD_MMS'
        }
        ```

    2. 如果是使用 amd 的话，请在 script 标签后加入

        ```js
        define('grahp-js-sdk', function () {
            return BD_MMS;
        });
        ```

## Setup

### webpack

1. please check out [this](https://github.com/react-melon/melon#如何在-webpack-中使用-melon) first.

2. `npm install -S mola-baidu-invoker`

### bower

1. `bower install -S mola-baidu-invoker`
2. config your `requirejs` / `esl`

    ```js
    require.config({
        paths: {
            'mola-baidu-invoker': 'bower_components/mola-baidu-invoker/lib/MolaBaiduInvoker'
        }
    });
    ```

## API Document

check [this](https://doc.esdoc.org/github.com/react-melon/mola-baidu-invoker/) out

## Run the example

```sh
git clone git@github.com:react-melon/mola-baidu-invoker.git
cd mola-baidu-invoker
npm install
npm start
open http://localhost:8080/example
```
