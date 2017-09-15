(() => {
  'use strict';

  function marsMapController() {
    // const vm = this;
  }

  angular.module('marsmap')
    .component('marsMap', {
      controller: marsMapController,
      templateUrl: '/tmpl/map.html'
    });
})();

// https://www.redblobgames.com/grids/hexagons/
// https://www.redblobgames.com/grids/hexagons/implementation.html
