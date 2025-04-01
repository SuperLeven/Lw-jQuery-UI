$(document).ready(function () {
    $.fn.LwRange = function (options) {
        var defaultOptions = {
            name: '',
            min: 0,
            max: 100,
            value: 0,
            step: 1,
            disabled: false,
            tooltip: true,
            tipsFormat: function (value) {
                return value;
            },
            valueFormat: function (value) {
                return value;
            },
            onChange: function (value) {
            },
        };

        this.options = $.extend(defaultOptions, options);
        var that = this;
        var disabledAttr = this.options.disabled ? ' disabled' : ''; // 根据 disabled 选项生成 disabled 属性
        var html = '<div class="lw-custom-container d-flex align-items-center"><div class="lw-custom-range"><input type="range" class="lw-original-range" min="' + this.options.min + '" max="' + this.options.max + '" step="' + this.options.step + '" name="' + this.options.name + '" value="' + this.options.value + '"' + disabledAttr + '>' +
            '<div class="lw-custom-track"><div class="lw-custom-progress bg-primary"></div></div>' +
            '<div class="lw-custom-thumb"></div>' +
            '<div class="lw-range-value' + (this.options.tooltip ? '' : ' d-none') + '">' + this.options.tipsFormat(this.options.value) +
            '</div></div><span class="lw-range-content ml-4">' + this.options.valueFormat(this.options.value) + '</span></div>';
        return this.each(function () {
            var $original = $(this);
            $original.html(html);

            // 使用事件委托绑定事件
            $original.on('input', '.lw-original-range', function () {
                var $originalRange = $(this);
                var value = $originalRange.val();
                var percent = (value / $originalRange.attr('max')) * 100;

                // 直接更新位置避免动画延迟
                $original.find('.lw-custom-progress').css('width', percent + '%');
                $original.find('.lw-custom-thumb').css('left', percent + '%'); if (that.options.tooltip) {
                    var formattedValue = that.options.tipsFormat(value); // 调用 tipsFormat 格式化值
                    $original.find('.lw-range-value').text(formattedValue).css('left', percent + '%'); // 使用格式化后的值
                }
                $('.lw-range-content').text(that.options.valueFormat(value));

                // 调用 onChange 回调函数
                that.options.onChange(value);
            });

            $original.on('mousedown touchstart', '.lw-original-range', function (e) {
                var $originalRange = $(this);
                var value = $originalRange.val() || 0;
                var percent = (value / $originalRange.attr('max')) * 100;
                $original.find('.lw-custom-thumb').addClass('active');
                if (that.options.tooltip) {
                    var formattedValue = that.options.tipsFormat(value); // 调用 tipsFormat 格式化值
                    $original.find('.lw-range-value').text(formattedValue).css('left', percent + '%'); // 使用格式化后的值
                    $original.find('.lw-range-value').css('opacity', 1);
                }
            });

            $original.on('mouseenter', '.lw-original-range', function () {
                var $originalRange = $(this);
                var value = $originalRange.val() || 0;
                var percent = (value / $originalRange.attr('max')) * 100;
                if (that.options.tooltip) {
                    var formattedValue = that.options.tipsFormat(value); // 调用 tipsFormat 格式化值
                    $original.find('.lw-range-value').text(formattedValue).css('left', percent + '%'); // 使用格式化后的值
                    $original.find('.lw-range-value').css('opacity', 1);
                }
            });

            $original.on('mouseleave touchend', '.lw-original-range', function () {
                $original.find('.lw-custom-thumb').removeClass('active');
                if (that.options.tooltip) $original.find('.lw-range-value').css('opacity', 0);
            });
        });
    };
});