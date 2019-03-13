"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * create water maker
 * @param container
 * @param width: canvas宽
 * @param height: canvas高
 * @param textAlign: 文本对齐方式
 * @param textBaseline
 * @param font: 字体设置
 * @param fillStyle: 填充颜色
 * @param content: 文本内容
 * @param rotate: 旋转角度
 * @param zIndex: 层级
 * @reference https://imweb.io/topic/5985e4ed35d7d0a321c5eb82
 * @origin author: microzhao
 * @author: ivanberry
 */
function createMaker() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$container = _ref.container,
      container = _ref$container === void 0 ? document.body : _ref$container,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? '300px' : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? '200px' : _ref$height,
      _ref$textAlign = _ref.textAlign,
      textAlign = _ref$textAlign === void 0 ? 'center' : _ref$textAlign,
      _ref$textBaseline = _ref.textBaseline,
      textBaseline = _ref$textBaseline === void 0 ? 'middle' : _ref$textBaseline,
      _ref$font = _ref.font,
      font = _ref$font === void 0 ? '20px Microsoft Yahei' : _ref$font,
      _ref$fillStyle = _ref.fillStyle,
      fillStyle = _ref$fillStyle === void 0 ? 'rgba(184, 184, 184, 0.15)' : _ref$fillStyle,
      _ref$content = _ref.content,
      content = _ref$content === void 0 ? 'iCarbonX' : _ref$content,
      _ref$rotate = _ref.rotate,
      rotate = _ref$rotate === void 0 ? '30' : _ref$rotate,
      _ref$zIndex = _ref.zIndex,
      zIndex = _ref$zIndex === void 0 ? 1000 : _ref$zIndex;

  var _wm = document.querySelector('._wm');

  if (_wm) {
    return false;
  }

  var _arguments = Array.prototype.slice.call(arguments),
      args = _arguments[0];

  var canvas = document.createElement('canvas');
  canvas.setAttribute('width', width);
  canvas.setAttribute('height', height);
  var ctx = canvas.getContext('2d');
  ctx.textAlign = textAlign;
  ctx.textBaseline = textBaseline;
  ctx.font = font;
  ctx.fillStyle = fillStyle;
  ctx.rotate(Math.PI / 180 * rotate);
  ctx.fillText(content, parseFloat(width) / 2, parseFloat(height) / 2);
  var base64Url = canvas.toDataURL();

  var watermarkDiv = _wm || document.createElement('div');

  var styleStr = "\n          position:absolute;\n          top:0;\n          left:0;\n          width:100%;\n          height:100%;\n          z-index:".concat(zIndex, ";\n          pointer-events:none;\n          background-repeat:repeat;\n          background-image:url('").concat(base64Url, "')");
  watermarkDiv.setAttribute('style', styleStr);
  watermarkDiv.classList.add('_wm');

  if (!_wm) {
    container.style.position = 'relative';
    container.insertBefore(watermarkDiv, container.firstChild);
  } // 监控变化


  var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

  if (MutationObserver) {
    var mo = new MutationObserver(function () {
      var _wm = document.querySelector('._wm'); // 只在__wm元素变动才重新调用 createMaker


      if (_wm && _wm.getAttribute('style') !== styleStr || !_wm) {
        console.log('create new water maker'); // 避免一直触发

        mo.disconnect();
        mo = null;
        createMaker(args);
      }
    });
    mo.observe(container, {
      attributes: true,
      subtree: true,
      childList: true
    });
  }
}

var _default = createMaker;
exports.default = _default;