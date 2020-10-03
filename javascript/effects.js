var _3DPretty = function() {
    var obj = [],
        _x = 0,
        _y = 0,
        _x1 = 0,
        _y1 = 0,
        parts = 500,
        $, _tx, _ty, _w, _h;
    
      var resize = function() {
        _w = window.innerWidth * 1;
        _h = window.innerHeight * 0.5;
      }
      var set = function(n, f) {
        if (!!n) parts = n;
        $ = document.getElementById('space');
        window.addEventListener('mousemove', function(e) {
          _x = e.clientX;
          _y = e.clientY;
        });
        window.addEventListener('touchmove', function(e) {
          e.preventDefault();
          _x = e.touches[0].clientX;
          _y = e.touches[0].clientY;
        });
        resize();
        window.addEventListener('resize', resize);
        _set(f);
        run();
      }
      var run = function() {
        window.requestAnimationFrame(run);
        anime();
      }
      var _set = function(f) {
        for (var i = 0; i < parts; i++) {
          var o = {};
          o.p = document.createElement('span');
          $.appendChild(o.p);
          var r = i / parts, j, a, b;
          j = i % (parts * .5);
          a = Math.floor(j) / 100 + (Math.floor(j / 2) % 10) / 5 * Math.PI * 2;
          b = Math.acos(-0.9 + (j % 4) * 0.6);
          r = !!f ? f(r) : r - r * r + .5;
          var sbr = Math.sin(b) * r;
          o.x = Math.sin(a) * sbr;
          o.y = Math.cos(a) * sbr;
          o.z = Math.cos(b) * r;
          obj.push(o);
          o.transform = function() {
          var ax = .005 * _tx,
              ay = .005 * _ty,
              cx = Math.cos(ax),
              sx = Math.sin(ax),
              cy = Math.cos(ay),
              sy = Math.sin(ay);
    
          var z = this.y * sx + this.z * cx;
              this.y = this.y * cx + this.z * -sx;
              this.z = this.x * -sy + z * cy;
              this.x = this.x * cy + z * sy;
    
           var sc = 1 / (1 + this.z),
                x = this.x * sc * _h + _w - sc * 2,
                y = this.y * sc * _h + _h - sc * 2;
    
            var p = this.p.style;
            if (x >= 0 && y >= 0 && x < _w * 2 && y < 600) {
              var c = Math.round(256 + (-this.z * 256));
              p.left = Math.round(x) + 'px';
              p.top = Math.round(y) + 'px';
              p.width = Math.round(sc * 3) + 'px';
              p.height = Math.round(sc * 3) + 'px';
              p.background = 'hsla(' + y + ',80%,40%,1)';
              p.zIndex = 200 + Math.floor(-this.z * 100);
            } else p.width = "0px";
          }
        }
      }
      var anime = function() {
        var se = .2 / _h;
        _tx = (_y + _x1) * se;
        _ty = (_x + _y1) * se;
        _x1 += _ty;
        _y1 += _ty;
        for (var i = 0, o; o = obj[i]; i++) o.transform();
      }
      return {
        set: set
      }
    }();
    window.onload = function() {
      _3DPretty.set(400, function(r) {
        return r * r;
      });
    }