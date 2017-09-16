(() => {
  'use strict';

  function marsMapController(HexDataService) {
    const ctrl = this;

    ctrl.rows = HexDataService.rows;
  }

  angular.module('marsmap')
    .component('marsMap', {
      controller: ['HexDataService', marsMapController],
      templateUrl: '/tmpl/map.html'
    });
})();

// https://www.redblobgames.com/grids/hexagons/
// https://www.redblobgames.com/grids/hexagons/implementation.html
