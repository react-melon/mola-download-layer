/**
 * @file 手百下载组件
 * @author leon <ludafa@outlook.com>
 */

import React, {Component, PropTypes} from 'react';

import {
    registerComponent,
    MOLA_COMPONENT_LEVEL_FIXED,
    os,
    browser
} from 'mola';

import cx from 'classnames';

export const type = 'DownloadLayer';
export const level = MOLA_COMPONENT_LEVEL_FIXED;

export class DownloadLayer extends Component {

    constructor(...args) {
        super(...args);
        this.state = {
            open: !browser.baidu,
            weiboOpen: false
        };
        this.showWeiboLayer = this.showWeiboLayer.bind(this);
    }

    showWeiboLayer(e) {
        e.preventDefault();
        this.setState({weiboOpen: true});
    }

    renderWeiboLayer() {

        if (!this.state.weiboOpen) {
            return null;
        }

        const {
            weiboAndroidImageURL,
            weiboIOSImageURL
        } = this.props;

        let image = os.ios ? weiboIOSImageURL : weiboAndroidImageURL;
        return (
            <div
                style={{backgroundImage: `url(${image})`}}
                onClick={() => this.setState({weiboOpen: false})} />
        );
    }

    render() {

        if (!this.state.open) {
            return null;
        }

        let {
            className = null,
            style = null,
            title,
            subTitle,
            itunesSchema,
            apkURL,
            yingyongbaoURL,
            logoURL
        } = this.props;

        let href = '';
        let onClick = null;

        if (browser.weibo) {
            onClick = this.showWeiboLayer;
        }
        else if (browser.weixin) {
            href = yingyongbaoURL;
        }
        else {
            href = os.ios ? itunesSchema : apkURL;
        }

        return (
            <div
                className={cx('mola-baidu-app-download-layer', className)}
                style={style}>
                <i onClick={() => this.setState({open: false})}>x</i>
                <b style={{backgroundImage: `url(${logoURL})`}}/>
                <section>
                    <h4>{title}</h4>
                    <p>{subTitle}</p>
                </section>
                <a href={href} onClick={onClick}>下载体验</a>
                {this.renderWeiboLayer()}
            </div>
        );
    }

}

DownloadLayer.displayName = type;

DownloadLayer.propTypes = {
    logoURL: PropTypes.string.isRequired,
    itunesSchema: PropTypes.string.isRequired,
    apkURL: PropTypes.string.isRequired,
    weiboAndroidImageURL: PropTypes.string.isRequired,
    weiboIOSImageURL: PropTypes.string.isRequired,
    yingyongbaoURL: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired
};

export default registerComponent(type, level)(DownloadLayer);
