# LwRange - An iOS Style Slider Component Based on jQuery
- This component is based on jQuery, so you need to include the jQuery library.
- Component Preview:

    ![alt text](image.png)

### Usage
- Include the jQuery library
```html
<script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>
<script src="lw-range/index.js"></script>
<link rel="stylesheet" href="lw-range/index.css">
```
- Add a div tag to the page and add an id/class attribute, for example:
```html
<!-- id selector -->
<div id="lw-range"></div>
<!-- class selector to initialize multiple components -->
<div class="lw-range"></div> 
<div class="lw-range"></div>
```

- Initialize the component
```js
$(function(){
    $('.lw-range').LwRange(options)
})
```

### Options Object Explanation

| Parameter | Description | Type | Default Value |
| --- | --- | --- | --- |
| min | Minimum value of the slider | Number | 0 |
| max | Maximum value of the slider | Number | 100 |
| step | Slider step | Number | 1 |
| value | Initial value of the slider | Number | 0 |
| tooltip | Whether to display the slider tooltip | Boolean | true |
|tipsFormat | Slider value tooltip formatting | Function | (value)=>value |
| onChange | Triggered when the slider value changes | Function | (value)=>{} |
| valueFormat | Slider right content formatting | Function | (value)=>value |
| disabled | Whether to disable the slider | Boolean | false |
| name | Slider name | String | '' |
