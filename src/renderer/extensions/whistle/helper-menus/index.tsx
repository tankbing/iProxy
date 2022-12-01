import { BugOutlined, FileTextOutlined, GithubOutlined, HomeOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

import * as remote from '@electron/remote';
import React from 'react';
import logger from 'electron-log';
import path from 'path';

const handleHomepage = () => remote.shell.openExternal('https://www.heigoou.com');
const handleIssue = () => remote.shell.openExternal('https://www.heigoou.com');
const handleGithub = () => remote.shell.openExternal('https://www.heigoou.com');
const handleShowLogs = () => {
    const logFile = logger.transports.file.file as string;
    const logDirectory = path.dirname(logFile);
    // @ts-ignore
    const openItem = remote.shell.openItem || remote.shell.openPath;
    openItem(logDirectory);
};

export function getHelperMenus(t: Function) {
    return [
        <Menu.Item key="home" onClick={handleHomepage}>
            <HomeOutlined />
            {t('Home Page & Document')}
        </Menu.Item>,
        <Menu.Item key="issue" onClick={handleIssue}>
            <BugOutlined />
            {t('Report issue')}
        </Menu.Item>,
        <Menu.Item key="github" onClick={handleGithub}>
            <GithubOutlined />
            {t('Github')}
        </Menu.Item>,
        <Menu.Item key="log" onClick={handleShowLogs}>
            <FileTextOutlined />
            {t('Show logs')}
        </Menu.Item>,
    ];
}
