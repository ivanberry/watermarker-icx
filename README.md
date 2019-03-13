# 使用

## 参见

[前端水印生成方案](https://musicfe.cn/page/15)

-   simple tool to create water maker
-   @param container
-   @param width: canvas 宽
-   @param height: canvas 高
-   @param textAlign: 文本对齐方式
-   @param textBaseline
-   @param font: 字体设置
-   @param fillStyle: 填充颜色
-   @param content: 文本内容
-   @param rotate: 旋转角度
-   @param zIndex: 层级

## 安装

```bash
npm install --save watermarker-icx
```

## 使用

默认情况下，仅依赖`document.body`，可以灵活在入口处调用。

1. 独立版本使用

引入独立版本

```html
<script src='path/to/watermarker-standalone.js'></script>
```

调用使用

```javascript
// pure javascript
document.addEventListener("DOMContentLoaded", function() {
	createMarker();
});

// jQuery
$(document).ready(function() {
	createMarker();
});
```

2. 模块环境使用

以 React 项目为例:

```javascript
import createMarker from watermarker-icx;

componentDidMount() {
	createMarker();
}
```
