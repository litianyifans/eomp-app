
//https://www.jianshu.com/p/b00cd3506782
/*对于iphone4，iphone5，iphone5s等320px宽的屏幕，1rem = 100px。那么假如640px宽的设计稿中某个元素是120px，那么换算到css中就可以方便的计算为.6rem；

相应的，
对于iphone6，iphone6s这种375px宽的屏幕，根元素font-size的值就是375/320 = 117.1875；
对于iphone6 plus，iphone6s plus这种414px宽的屏幕，根元素font-size的值就是414/320 = 129.375；*/
(function(doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function() {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
    };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
