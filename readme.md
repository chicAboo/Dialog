### 安装
`npm install`

### 运行
`npm run dev`

### 使用方法

###### 1. 基础弹框
```
    $('body').Dialog({
        content: '基础弹框测试'
    });
```
`content`表示弹框的内容区，可自定义

###### 2. 基础弹框测试(内容居中)
```
    $('body').Dialog({
        title: '基础弹框(内容居中）',
        content: '基础弹框测试',
        isContentCenter: true
    });
```
`title`弹框的标题， isContentCenter表示是否居中，true为居中，默认为false

###### 3. 不显示头部弹框
```
    $('body').Dialog({
        content: '弹框测试',
        isContentCenter: true,
        isHeader: false
    });
```
`isHeader`是否显示头部，true为显示，默认为true

###### 4. 不显示底部弹框
```
    $('body').Dialog({
        content: '不显示底部',
        isContentCenter: true,
        isFooter: false
    });
```
`isFooter`是否显示底部，true为显示，默认为true

###### 5. 点击空白关闭弹窗
```
    $('body').Dialog({
        content: '点击空白关闭弹窗',
        isContentCenter: true,
        maskClick: true
    });
```
`maskClick`点击背景是否关闭弹窗，true为点击能关闭，默认false

###### 6. 确认和取消回调
```
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
```
`confirmCallback`确认回调；`cancelCallback`取消回调

### API
###### 1. 参数
参数|说明|类型|默认值
---|:--:|---:|---
title|标题|string|信息提示框
maskClick|点击背景是否关闭弹窗|Boolean|false
content|弹框内容，可添加HTML元素|--|--
isHeader|是否显示头部：true为显示|Boolean|true
isFooter|是否显示底部：true为显示|Boolean|true
isContentCenter|内容区是否水平居中显示，true为水平居中|Boolean|false
onlyConfirm|是否只显示确认按钮|Boolean|false
confirmName|确认按钮名称|string|确认
cancelName|取消按钮名称|string|取消

###### 2. 方法
参数|说明
---|:---
confirmCallback|确认回调
cancelCallback|取消回调
