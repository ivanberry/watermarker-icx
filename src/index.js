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
function createMaker({
  // 使用 ES6 的函数默认值方式设置参数的默认取值
  // 具体参见 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Default_parameters
  container = document.body,
  width = '300px',
  height = '200px',
  textAlign = 'center',
  textBaseline = 'middle',
  font = '20px Microsoft Yahei',
  fillStyle = 'rgba(184, 184, 184, 0.15)',
  content = 'iCarbonX',
  rotate = '30',
  zIndex = 1000,
} = {}) {
  const _wm = document.querySelector('._wm');

  if(_wm) {
    return false;
  }

  const [args] = arguments;

  const canvas = document.createElement('canvas');

  canvas.setAttribute('width', width);
  canvas.setAttribute('height', height);
  const ctx = canvas.getContext('2d');

  ctx.textAlign = textAlign;
  ctx.textBaseline = textBaseline;
  ctx.font = font;
  ctx.fillStyle = fillStyle;
  ctx.rotate(Math.PI / 180 * rotate);
  ctx.fillText(content, parseFloat(width) / 2, parseFloat(height) / 2);

  const base64Url = canvas.toDataURL();

  const watermarkDiv = _wm || document.createElement('div');
  const styleStr = `
          position:absolute;
          top:0;
          left:0;
          width:100%;
          height:100%;
          z-index:${zIndex};
          pointer-events:none;
          background-repeat:repeat;
          background-image:url('${base64Url}')`;

  watermarkDiv.setAttribute('style', styleStr);
  watermarkDiv.classList.add('_wm');

  if (!_wm) {
    container.style.position = 'relative';
    container.insertBefore(watermarkDiv, container.firstChild);
  }

  // 监控变化
  const MutationObserver =
    window.MutationObserver || window.WebKitMutationObserver;
  if (MutationObserver) {
    let mo = new MutationObserver(() => {
      const _wm = document.querySelector('._wm');
      // 只在__wm元素变动才重新调用 createMaker
      if ((_wm && _wm.getAttribute('style') !== styleStr) || !_wm) {
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
      childList: true,
    });
  }
}

export default createMaker;
