'use strict';

(function () {
  'use strict';

  angular.module('marsmap', []);
})();
'use strict';

(function () {
  'use strict';

  function marsMapController(HexDataService) {
    var ctrl = this;

    ctrl.rows = HexDataService.rows;
  }

  angular.module('marsmap').component('marsMap', {
    controller: ['HexDataService', marsMapController],
    templateUrl: '/tmpl/map.html'
  });
})();

// https://www.redblobgames.com/grids/hexagons/
// https://www.redblobgames.com/grids/hexagons/implementation.html
'use strict';

(function () {
  'use strict';

  function HexDataService() {
    return {
      rows: [{
        offset: 2,
        hexes: [{}]
      }, {
        offset: 1,
        hexes: [{}, {}]
      }, {
        offset: 1,
        hexes: [{}, {}, {}]
      }, {
        offset: 0,
        hexes: [{}, {}, {}, {}]
      }, {
        offset: 0,
        hexes: [{}, {}, {}, {}, {}]
      }, {
        offset: 0,
        hexes: [{}, {}, {}, {}]
      }, {
        offset: 0,
        hexes: [{}, {}, {}, {}, {}]
      }, {
        offset: 0,
        hexes: [{}, {}, {}, {}]
      }, {
        offset: 0,
        hexes: [{}, {}, {}, {}, {}]
      }, {
        offset: 0,
        hexes: [{}, {}, {}, {}]
      }, {
        offset: 0,
        hexes: [{}, {}, {}, {}, {}]
      }, {
        offset: 0,
        hexes: [{}, {}, {}, {}]
      }, {
        offset: 0,
        hexes: [{}, {}, {}, {}, {}]
      }, {
        offset: 0,
        hexes: [{}, {}, {}, {}]
      }, {
        offset: 1,
        hexes: [{}, {}, {}]
      }, {
        offset: 1,
        hexes: [{}, {}]
      }, {
        offset: 2,
        hexes: [{}]
      }]
    };
  }

  angular.module('marsmap').service('HexDataService', HexDataService);
})();