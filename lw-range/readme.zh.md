# LwRange一个基于jQuery的ios风格的滑块组件
- 本组件基于jQuery实现，所以需要引入jQuery库
- 组件预览 :  

    ![alt text](image.png)

### 使用方法
- 引入jQuery库
```
<script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>
<script src="lw-range/index.js"></script>
<link rel="stylesheet" href="lw-range/index.css">
```
- 在页面中添加一个div标签，并添加一个id/class属性，如：
```html
<!-- id选择器 -->
<div id="lw-range"></div>
<!-- 类选择器初始化多个组件 -->
<div class="lw-range"></div> 
<div class="lw-range"></div>
```

- 初始化组件
```
$(function(){
    $('.lw-range').LwRange(options)
})
```

### Options Object说明

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| min | 滑块最小值 | Number | 0 |
| max | 滑块最大值 | Number | 100 |
| step | 滑块步长 | Number | 1 |
| value | 滑块初始值 | Number | 0 |
| tooltip | 是否显示滑块提示 | Boolean | true |
|tipsFormat | 滑块值tooltip格式化 | Function | (value)=>value |
| onChange | 滑块值改变时触发 | Function | (value)=>{} |
| valueFormat | 滑块右侧内容格式化 | Function | (value)=>value |
| disabled | 是否禁用滑块 | Boolean | false |
| name | 滑块name | String | '' |
