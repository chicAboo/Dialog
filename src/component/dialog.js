/**
 * Created by zhutao on 2018/6/27.
 */

(function ($) {
    /**
     *   Dialog 弹框封装
     *   @param element jqueryDOm元素
     *   @param config 弹框选项配置
     *   {
    *       title               弹框名称
    *       maskClick           点击背景是否关闭弹窗
    *       content             弹框内容，可添加HTML元素
    *       isHeader            是否显示头部
    *       isFooter            是否显示尾部
    *       isContentCenter     内容区是否居中显示
    *       isShowConnect       连接测试显示
    *       onlyConfirm         只显示确认
    *       confirmName         确认按钮名称
    *       cancelName          取消按钮名称
    *       connectionName      连接测试名称
    *       confirmCallback     确认回调
    *       cancelCallback      取消回调
    *   }
     * */
    function Dialog(element, config) {
        this.ele = element;
        this.config = {
            title: '信息提示框',
            maskClick: false,
            width: 500,
            height: 'auto',
            content: '',
            isHeader: true,
            isFooter: true,
            onlyConfirm: false,
            isContentCenter: false,
            isConfirmClose: true,
            isShowConnect: false,
            confirmName: '确认',
            cancelName: '取消',
            connectionName: '连接测试',
            confirmCallback: function () {
            },
            cancelCallback: function () {
            },
            connctionCallback: function () {}
        };
        //扩展默认参数
        if (config && $.isPlainObject(config)) {
            this.config = $.extend({}, this.config, config);
        }
    }

    Dialog.prototype = {
        init: function () {
            const _this = this;
            _this.create();
        },
        //创建弹框
        create: function () {
            const _this = this;
            let _html = '',
                _centerContent = '',
                _width = '',
                _height = '';
            //内容区是否居中
            if (_this.config.isContentCenter) {
                _centerContent = 'centerContent';
            }
            if (_this.config.width !== 0 && _this.config.width > 300) {
                _width = _this.config.width;
            }
            if (_this.config.height !== 0 && _this.config.height > 100) {
                _height = _this.config.height;
                if (_height > 250) {
                    _height = 250;
                }
            }
            _html += '<div class="dialog-mask">';
            _html += '<div class="dialog-cotainer" style="width:'+ _width +'px;">';
            _html += '<div class="close-icon"></div>';
            //是否显示头部
            if (_this.config.isHeader) {
                _html += '<div class="dialog-header"><p>' + _this.config.title + '</p></div>';
            }
            _html += '<div class="dialog-content ' + _centerContent + '" style="height: '+ _height +'px;">' + _this.config.content + '</div>';
            //是否显示尾部
            if (_this.config.isFooter) {
                _html += '<div class="dialog-footer">';
                if (_this.config.isShowConnect) {
                    _html += '<button class="public-btn btn-test fl">' + _this.config.connectionName + '</button>';
                }
                if (_this.config.onlyConfirm) {
                    _html += '<button class="public-btn btn-save fr">' + _this.config.confirmName + '</button>';
                } else {
                    _html += '<button class="public-btn btn-cancel fr">' + _this.config.cancelName + '</button>';
                    _html += '<button class="public-btn btn-save fr">' + _this.config.confirmName + '</button>';
                }

                _html += '</div>';
            }
            _html += '</div></div>';

            $('body').append(_html);
            _this.eventBind();
        },
        //事件绑定
        eventBind: function () {
            // e.stopPropagation();
            const _this = this,
                _save = $('.btn-save');
            //确认回调
            _save.on('click', function (e) {
                if (!_save.attr('disabled')) {
                    _this.config.confirmCallback();
                    if (_this.config.isConfirmClose) {
                        _this.closeMask(e);
                    }
                }
            });
            //取消
            $('.dialog-mask').on('click', '.btn-cancel', function (e) {
                _this.config.cancelCallback();
                _this.closeMask(e);
            });
            //连接测试
            $('.dialog-mask').on('click', '.btn-test', function () {
                _this.config.connctionCallback();
            });

            //关闭
            $('.dialog-mask .close-icon').on('click', function (e) {
                _this.closeMask(e);
            });
            //点击空白，关闭弹窗
            if (_this.config.maskClick) {
                $(document).on('click', function (e) {
                    // e.preventDefault();
                    const _dialogMask = $('.dialog-mask');
                    if (_dialogMask.is(e.target) && _dialogMask.has(e.target).length === 0) {
                        _this.closeMask(e);
                    }
                });
            }
        },
        //关闭弹窗
        closeMask: function (e) {
            e.stopPropagation();
            $('.dialog-mask').remove();
        }
    };
    //封装到window对象上
    window.Dialog = Dialog;
    //封装到jquery对象上
    $.fn.Dialog = function (config) {
        var dialog = new Dialog(this, config);
        return dialog.init();
    }

})(jQuery);
