# 使用

## 参见

[前端水印生成方案](https://imweb.io/topic/5985e4ed35d7d0a321c5eb82)

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

```react
...
import createMarker from watermarker-icx
...

componentDidMount() {
	...
	createMarker();
	...
}
```
