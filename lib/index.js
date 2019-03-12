'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * create water maker
 * @param container
 * @param width
 * @param height
 * @param textAlign
 * @param textBaseline
 * @param font
 * @param fillStyle
 * @param content
 * @param rotate
 * @param zIndex
 * @creator https://imweb.io/topic/5985e4ed35d7d0a321c5eb82
 */
function createMaker() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$container = _ref.container,
      container = _ref$container === undefined ? document.body : _ref$container,
      _ref$width = _ref.width,
      width = _ref$width === undefined ? '300px' : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? '200px' : _ref$height,
      _ref$textAlign = _ref.textAlign,
      textAlign = _ref$textAlign === undefined ? 'center' : _ref$textAlign,
      _ref$textBaseline = _ref.textBaseline,
      textBaseline = _ref$textBaseline === undefined ? 'middle' : _ref$textBaseline,
      _ref$font = _ref.font,
      font = _ref$font === undefined ? '20px Microsoft Yahei' : _ref$font,
      _ref$fillStyle = _ref.fillStyle,
      fillStyle = _ref$fillStyle === undefined ? 'rgba(184, 184, 184, 0.15)' : _ref$fillStyle,
      _ref$content = _ref.content,
      content = _ref$content === undefined ? 'iCarbonX' : _ref$content,
      _ref$rotate = _ref.rotate,
      rotate = _ref$rotate === undefined ? '30' : _ref$rotate,
      _ref$zIndex = _ref.zIndex,
      zIndex = _ref$zIndex === undefined ? 1000 : _ref$zIndex;

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
  var styleStr = '\n          position:absolute;\n          top:0;\n          left:0;\n          width:100%;\n          height:100%;\n          z-index:' + zIndex + ';\n          pointer-events:none;\n          background-repeat:repeat;\n          background-image:url(\'' + base64Url + '\')';

  watermarkDiv.setAttribute('style', styleStr);
  watermarkDiv.classList.add('_wm');

  if (!_wm) {
    container.style.position = 'relative';
    container.insertBefore(watermarkDiv, container.firstChild);
  }

  // 监控变化
  var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
  if (MutationObserver) {
    var mo = new MutationObserver(function () {
      var _wm = document.querySelector('._wm');
      // 只在__wm元素变动才重新调用 createMaker
      if (_wm && _wm.getAttribute('style') !== styleStr || !_wm) {
        console.log('create new water maker');
        // 避免一直触发
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

/* eslint-disable no-undef */
if (typeof module !== 'undefined' && module.exports) {
  // CMD
  module.exports = createMaker;
} else if (typeof define === 'function' && define.amd) {
  // AMD
  define(function () {
    return createMaker;
  });
} else {
  window.createMaker = createMaker;
}

// module.exports = createMarker;
exports.default = createMaker;