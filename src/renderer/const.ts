import path from 'path';
import * as remote from '@electron/remote';

export const SYSTEM_IS_MACOS = navigator.platform.toUpperCase().indexOf('MAC') >= 0;

export const FILES_DIR = remote.getGlobal('__filesDir');

// @ts-ignore
export const ICON_TEMPLATE_PATH = path.join(FILES_DIR, 'iconTemplate.png');

export const RULE_STORE_KEY = 'iproxy-rule';

export const GITHUB_PROJECT_PAGE = 'https://www.heigoou.com';
export const NEW_ISSUE_PAGE = 'https://www.heigoou.com';
export const DOCUMENT_URL = 'https://www.heigoou.com';

// @ts-ignore
export const IS_BUILD_FOR_PR = __BUILD_FOR_TRAVIS_PR__ ? true : false;
// @ts-ignore
export const BUILD_FOR_TRAVIS_COMMIT = __BUILD_FOR_TRAVIS_COMMIT__;

// @ts-ignore
export const APP_VERSION = __PACKAGE_INFO_VERSION__;

export const WHITELIST_DOMAINS = [
    'alilang-desktop-client.cn-hangzhou.log.aliyuncs.com',
    's-api.alibaba-inc.com',
    'alilang.alibaba-inc.com',
    'auth-alilang.alibaba-inc.com',
    'mdm-alilang.alibaba-inc.com',
    '***.apple.com',
    '*.mzstatic.com',
    '*.cdn-apple.com',
    '***.apple-cloudkit.com',
    '***.icloud.com',
    '***.icloud-content.com',
    '***.icloud.com.cn',
    'txy.live-play.acgvideo.com',
    'ocs-oneagent-server.alibaba.com',
    '*.jetbrains.com',
    'hubble.netease.com',
    'app.home.netease.com',
    'mdoor.netease.com',
    'mam.netease.com',
    'api.home.netease.com',
];
