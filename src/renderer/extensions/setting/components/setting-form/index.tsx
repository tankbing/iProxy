import { CheckOutlined, CloseOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import { Select, Button, Popover, Switch, InputNumber, Alert, Tooltip, Table, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { CoreAPI } from '../../../../core-api';
import { message } from 'antd';
import { shell } from 'electron';
import * as remote from '@electron/remote';
import { debounce } from 'lodash';
import './index.less';
import { APP_VERSION } from '../../../../const';
import { useRequest } from '@umijs/hooks';
import { getWhistlePort } from '../../../../utils';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';

const version = APP_VERSION;

const PluginInfoCard = () => {
    const [port, setPort] = useState(0);
    const { t } = useTranslation();

    const pluginDataRequest = useRequest(`http://127.0.0.1:${port}/cgi-bin/plugins/get-plugins`, {
        manual: true,
    });

    useEffect(() => {
        getWhistlePort(CoreAPI).then(port => {
            setPort(port);
            pluginDataRequest.run();
        });
    }, []);

    const pluginCols = [
        {
            title: t('Name'),
            dataIndex: 'moduleName',
            key: 'name',
        },
        {
            title: t('Version'),
            dataIndex: 'version',
            key: 'version',
        },
        {
            title: t('Modified time'),
            dataIndex: 'mtime',
            key: 'mtime',
            render(time: number) {
                return <span>{new Date(time).toLocaleString()}</span>;
            },
        },
        {
            title: t('Path'),
            dataIndex: 'path',
            key: 'path',
            render(text: string) {
                return <Popover title={text}>{text.slice(0, 10)}</Popover>;
            },
        },
    ];

    const data = _.values(pluginDataRequest?.data?.plugins || []);

    const onRefresh = () => {
        pluginDataRequest.refresh();
    };

    return (
        <Table
            loading={pluginDataRequest.loading}
            dataSource={data}
            columns={pluginCols}
            footer={() => (
                <Button loading={pluginDataRequest.loading} onClick={onRefresh}>
                    {t('Refresh')}
                </Button>
            )}
        ></Table>
    );
};

class InnerSettingForm extends React.Component {
    state = {
        isUpdating: false,
    };
    render() {
        const {
            // @ts-ignore
            // eslint-disable-next-line
            t,
        } = this.props;

        // @ts-ignore
        // eslint-disable-next-line
        const { getFieldDecorator } = this.props.form;

        const checkUpdate = async () => {
            this.setState({
                ...this.state,
                isUpdating: true,
            });
            try {
                const result = await CoreAPI.update();
                if (!result) {
                    message.success(t('Already latest version'));
                } else {
                    message.success(t('Update success, app will restart'));
                    setTimeout(() => {
                        remote.app.relaunch();
                        remote.app.quit();
                    }, 800);
                }
            } catch (e) {
                // @ts-ignore
                message.error(e.toString());
            }
            this.setState({
                ...this.state,
                isUpdating: false,
            });
        };

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 5 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        return (
            <Form {...formItemLayout}>
                <Form.Item label={t('Daily software white-list')}>
                    {getFieldDecorator('softwareWhiteList', {
                        valuePropName: 'checked',
                        initalValue: true,
                    })(<Switch checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} />)}
                </Form.Item>

                <Form.Item label={t('Enable hotkey')}>
                    {getFieldDecorator('enableHotkeys', {
                        valuePropName: 'checked',
                        initalValue: false,
                    })(<Switch checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} />)}
                    <Tooltip title={t('Toggle Proxy') + ' | Cmd/Ctrl+Shift+Alt+P'}>
                        <QuestionCircleOutlined style={{ marginLeft: '5px' }}></QuestionCircleOutlined>
                    </Tooltip>
                </Form.Item>

                <Form.Item label={t('Disable TLS Check')}>
                    {getFieldDecorator('disableTlsCheck', {
                        valuePropName: 'checked',
                        initalValue: true,
                    })(<Switch checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} />)}
                </Form.Item>
                <Form.Item label={t('Default Port')}>
                    {getFieldDecorator('defaultPort')(<InputNumber min={1024} max={65534} />)}
                </Form.Item>
                <Form.Item label={t('Copyright')}>
                    <Typography>
                        Version {version} Made with love
                    </Typography>
                </Form.Item>
                <Form.Item label={t('Actions')}>
                    <Button className="action-btn" loading={this.state.isUpdating} onClick={checkUpdate} type="primary">
                        {t('Check Update')}
                    </Button>
                    <Popover
                        content={
                            <img src="https://img.alicdn.com/tfs/TB1mK5Ks5_1gK0jSZFqXXcpaXXa-546-720.png_350x350" />
                        }
                        title={t('Use DingTalk scan to discuss')}
                        trigger="hover"
                    >
                        <Button
                            onClick={() => {
                                shell.openExternal('https://www.heigoou.com');
                            }}
                            className="action-btn"
                        >
                            {t('Get Help')}
                        </Button>
                    </Popover>
                </Form.Item>
                <Form.Item label={t('Plugins')}>
                    <PluginInfoCard />
                </Form.Item>
            </Form>
        );
    }
}

// debounce input
const saveSettings = debounce((props, changedValues, allValues) => {
    const { t } = props;
    CoreAPI.store.set('settings', allValues);
    CoreAPI.eventEmmitter.emit('iproxy-settings-changed', { changedValues });
    message.destroy();
    message.success(t('Saved'));
}, 500);

export const SettingForm = Form.create({
    mapPropsToFields(props) {
        // @ts-ignore
        const { settings } = props;

        if (settings.disableTlsCheck !== false) {
            settings.disableTlsCheck = true;
        }

        return {
            updateChannel: Form.createFormField({
                value: settings.updateChannel,
            }),
            softwareWhiteList: Form.createFormField({
                value: settings.softwareWhiteList,
            }),
            defaultPort: Form.createFormField({
                value: settings.defaultPort,
            }),
            enableHotkeys: Form.createFormField({
                value: settings.enableHotkeys,
            }),
            disableTlsCheck: Form.createFormField({
                value: settings.disableTlsCheck,
            }),
        };
    },
    onValuesChange(props, changedValues, allValues) {
        saveSettings(props, changedValues, allValues);
    },
})(InnerSettingForm);
