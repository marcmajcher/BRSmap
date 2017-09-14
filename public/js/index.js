'use strict';

(function () {
  'use strict';

  angular.module('marsmap', []);
})();
'use strict';

(function () {
  'use strict';

  angular.module('marsmap').component('marsMap', {
    controller: marsMapController,
    templateUrl: '/tmpl/map.html'
  });

  function marsMapController() {
    // const vm = this;
  }
})();

// https://www.redblobgames.com/grids/hexagons/
// https://www.redblobgames.com/grids/hexagons/implementation.html
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  'use strict';

  // struct Hex { // Cube storage, axial constructor
  //     const int q, r, s;
  //     Hex(int q_, int r_): q(q_), r(r_), s(-q_ - r_) {}
  // };

  var HexService = function HexService(q, r) {
    _classCallCheck(this, HexService);

    this.q = q;
    this.r = r;
    this.s = -q - r;
  };

  angular.module('marsmap').service('HexService', HexService);
})();