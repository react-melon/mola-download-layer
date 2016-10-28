(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', './DownloadLayer'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('./DownloadLayer'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.DownloadLayer);
        global.DownloadLayerSchema = mod.exports;
    }
})(this, function (exports, _DownloadLayer) {
    'use strict';

    exports.__esModule = true;
    Object.defineProperty(exports, 'type', {
        enumerable: true,
        get: function () {
            return _DownloadLayer.type;
        }
    });
    Object.defineProperty(exports, 'level', {
        enumerable: true,
        get: function () {
            return _DownloadLayer.level;
        }
    });
    var editorProps = exports.editorProps = {
        movable: false,
        resizable: 'none',
        droppable: false,
        selectable: true,
        style: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '2.9249rem'
        }
    };

    exports['default'] = {
        type: 'object',
        properties: {
            title: {
                title: '标题',
                type: 'string',
                minLength: 1,
                maxLength: 20
            },
            subTitle: {
                title: '副标题',
                type: 'string',
                minLength: 1,
                maxLength: 20
            },
            itunesSchema: {
                title: '苹果 AppStoreSchema 链接',
                type: 'string',
                format: 'uri',
                description: '在 ios 平台浏览器中直接打开 AppStore 的 app 页面'
            },
            apkURL: {
                title: '安卓 apk 下载链接',
                type: 'string',
                format: 'uri',
                description: '可以是 apk 的下载链接，或者自己站点也可'
            },
            yingyongbaoURL: {
                title: '应用宝链接',
                type: 'string',
                format: 'uri',
                description: '在微信浏览器中最好使用应用宝链接'
            },
            weiboAndroidImageURL: {
                title: '',
                type: 'string',
                format: 'uri',
                description: '在微博中使用的『在浏览器中打开』引导图片'
            },
            weiboIOSImageURL: {
                title: '',
                type: 'string',
                format: 'uri',
                description: '在微博中使用的『在浏览器中打开』引导图片'
            }
        },
        required: ['title', 'subTitle']
    };
});
//# sourceMappingURL=DownloadLayer.schema.js.map
