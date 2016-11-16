(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', 'mola', 'classnames', './babelHelpers'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('mola'), require('classnames'), require('./babelHelpers'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.mola, global.classnames, global.babelHelpers);
        global.DownloadLayer = mod.exports;
    }
})(this, function (exports, _react, _mola, _classnames, babelHelpers) {
    'use strict';

    exports.__esModule = true;
    exports.DownloadLayer = exports.level = exports.type = undefined;

    var _react2 = babelHelpers.interopRequireDefault(_react);

    var _classnames2 = babelHelpers.interopRequireDefault(_classnames);

    /**
     * @file 手百下载组件
     * @author leon <ludafa@outlook.com>
     */

    var type = exports.type = 'DownloadLayer';
    var level = exports.level = _mola.MOLA_COMPONENT_LEVEL_FIXED;

    var DownloadLayer = exports.DownloadLayer = function (_Component) {
        babelHelpers.inherits(DownloadLayer, _Component);

        function DownloadLayer() {
            babelHelpers.classCallCheck(this, DownloadLayer);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            var _this = babelHelpers.possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args)));

            _this.state = {
                open: !_mola.browser.baidu,
                weiboOpen: false
            };
            _this.showWeiboLayer = _this.showWeiboLayer.bind(_this);
            return _this;
        }

        DownloadLayer.prototype.showWeiboLayer = function showWeiboLayer(e) {
            e.preventDefault();
            this.setState({ weiboOpen: true });
        };

        DownloadLayer.prototype.renderWeiboLayer = function renderWeiboLayer() {
            var _this2 = this;

            if (!this.state.weiboOpen) {
                return null;
            }

            var _props = this.props,
                weiboAndroidImageURL = _props.weiboAndroidImageURL,
                weiboIOSImageURL = _props.weiboIOSImageURL;


            var image = _mola.os.ios ? weiboIOSImageURL : weiboAndroidImageURL;
            return _react2['default'].createElement('div', {
                style: { backgroundImage: 'url(' + image + ')' },
                onClick: function onClick() {
                    return _this2.setState({ weiboOpen: false });
                } });
        };

        DownloadLayer.prototype.render = function render() {
            var _this3 = this;

            if (!this.state.open) {
                return null;
            }

            var _props2 = this.props,
                _props2$className = _props2.className,
                className = _props2$className === undefined ? null : _props2$className,
                _props2$style = _props2.style,
                style = _props2$style === undefined ? null : _props2$style,
                title = _props2.title,
                subTitle = _props2.subTitle,
                itunesSchema = _props2.itunesSchema,
                apkURL = _props2.apkURL,
                yingyongbaoURL = _props2.yingyongbaoURL,
                logoURL = _props2.logoURL;


            var href = '';
            var onClick = null;

            if (_mola.browser.weibo) {
                onClick = this.showWeiboLayer;
            } else if (_mola.browser.weixin) {
                href = yingyongbaoURL;
            } else {
                href = _mola.os.ios ? itunesSchema : apkURL;
            }

            return _react2['default'].createElement(
                'div',
                {
                    className: (0, _classnames2['default'])('mola-baidu-app-download-layer', className),
                    style: style },
                _react2['default'].createElement('i', { onClick: function onClick() {
                        return _this3.setState({ open: false });
                    } }),
                _react2['default'].createElement('b', { style: { backgroundImage: 'url(' + logoURL + ')' } }),
                _react2['default'].createElement(
                    'section',
                    null,
                    _react2['default'].createElement(
                        'h4',
                        null,
                        title
                    ),
                    _react2['default'].createElement(
                        'p',
                        null,
                        subTitle
                    )
                ),
                _react2['default'].createElement(
                    'a',
                    { href: href, onClick: onClick },
                    '\u4E0B\u8F7D\u4F53\u9A8C'
                ),
                this.renderWeiboLayer()
            );
        };

        return DownloadLayer;
    }(_react.Component);

    DownloadLayer.displayName = type;

    DownloadLayer.propTypes = {
        logoURL: _react.PropTypes.string.isRequired,
        itunesSchema: _react.PropTypes.string.isRequired,
        apkURL: _react.PropTypes.string.isRequired,
        weiboAndroidImageURL: _react.PropTypes.string.isRequired,
        weiboIOSImageURL: _react.PropTypes.string.isRequired,
        yingyongbaoURL: _react.PropTypes.string.isRequired,
        title: _react.PropTypes.string.isRequired,
        subTitle: _react.PropTypes.string.isRequired
    };

    exports['default'] = (0, _mola.registerComponent)(type, level)(DownloadLayer);
});
//# sourceMappingURL=DownloadLayer.js.map
