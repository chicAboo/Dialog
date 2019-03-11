require('../component/dialog.css');
require('../component/dialog');

const _dialog = {
    init: () => {
        _dialog.baseDialog();
        _dialog.baseCenterDialog();
        _dialog.noHeaderDialog();
        _dialog.noFooterDialog();
        _dialog.clickBlankCloseDialog();
        _dialog.comfirmAndCancelCallBack();
    },
    /**
     *  基础弹框
     * */
    baseDialog: () => {
        $('.baseDialog').on('click', function () {

            $('body').Dialog({
                content: '基础弹框测试'
            });

        });
    },
    /**
     *  内容居中
     * */
    baseCenterDialog: () => {
        $('.baseCenterDialog').on('click', function () {

            $('body').Dialog({
                title: '基础弹框(内容居中）',
                content: '基础弹框测试',
                isContentCenter: true
            });

        });
    },
    /**
     *  不显示头部弹框
     * */
    noHeaderDialog: () => {
        $('.noHeaderDialog').on('click', function () {

            $('body').Dialog({
                content: '弹框测试',
                isContentCenter: true,
                isHeader: false
            });

        });
    },
    /**
     *  不显示底部弹框
     * */
    noFooterDialog: () => {
        $('.noFooterDialog').on('click', function () {

            $('body').Dialog({
                content: '不显示底部',
                isContentCenter: true,
                isFooter: false
            });

        });
    },
    /**
     *  点击空白关闭弹框
     * */
    clickBlankCloseDialog: () => {
        $('.clickBlankCloseDialog').on('click', function () {

            $('body').Dialog({
                content: '点击空白关闭弹窗',
                isContentCenter: true,
                maskClick: true
            });

        });
    },
    /**
     *  确认和取消回调
     * */
    comfirmAndCancelCallBack: () => {
        $('.comfirmAndCancelCallBack').on('click', function () {

            $('body').Dialog({
                content: '确认和取消回调',
                isContentCenter: true,
                maskClick: true,
                confirmName: '点我确认',
                cancelName: '点我取消',
                confirmCallback: function () {
                    alert('确认');
                },
                cancelCallback: function () {
                    alert('取消');
                }
            });

        });
    }
};

$(function () {
    _dialog.init();
});
