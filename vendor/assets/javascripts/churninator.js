var churninator = (function () {

  var _el, _elWidth, _elHeight, _w, _h;
  var _churninate = function _churninate(e) {
    e.stopImmediatePropagation(); // Don't let em churn!
    e.preventDefault();
    var speed = Math.floor(Math.random() * 2000) + 500; // All night coding? This could help.
    var oldBottom = _el.getBoundingClientRect().bottom; // Not nice to look at.
    var oldRight = _el.getBoundingClientRect().right; // UKIP voters.
    var newBottom = _getRandomInt(0, _h - _elHeight); // You're gonna need one.
    var newRight =  _getRandomInt(0, _w - _elWidth); // No, not alt-right - screw those guys.
    var move = Math.floor(Math.random() * 1) + 4; // to the EU, out of Brexit Britan. 

    if (move < 2) {
      _hideAndMove(newBottom, newRight);
      return false;
    }
    return false;
  };


  var _getRandomInt = function _getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    result = Math.floor(Math.random() * (max - min)) + min;
    return result;
  }

  var _hideAndMove = function _hideAndMove(newBottom, newRight){
    _el.style.zIndex = "100";
    _el.style.position = "fixed";
    _el.style.visibility = "hidden";
    _el.style.bottom = newBottom + 'px';
    _el.style.right = newRight + 'px';
    _el.style.visibility = "visible";
  };

  var _slide = function _slide(curPos, finalPos) {
    // TODO
  };

   return {
    churninate: function churninate() {
      _el = document.getElementById('cancel');
      if (!_el) { return; }
      _elWidth = (!!_el.style.width) ? parseInt(_el.style.width) : 100;
      _elHeight = (!!_el.style.height) ? parseInt(_el.style.height) : 100;
      _w = window.innerWidth;
      _h = window.innerHeight;
      _el.addEventListener('click', _churninate);
    }
  };
}());