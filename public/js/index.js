'use strict';

(function () {
  'use strict';

  angular.module('marsmap', []);
})();
'use strict';

(function () {
  'use strict';

  function marsMapController() {
    // const vm = this;
  }

  angular.module('marsmap').component('marsMap', {
    controller: marsMapController,
    templateUrl: '/tmpl/map.html'
  });
})();

// https://www.redblobgames.com/grids/hexagons/
// https://www.redblobgames.com/grids/hexagons/implementation.html
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  'use strict';

  var HexService = function HexService() {
    _classCallCheck(this, HexService);
  };

  angular.module('marsmap').service('HexService', HexService);
})();