(() => {
  'use strict';

  angular.module('marsmap')
    .component('marsMap', {
      controller: marsMapController,
      templateUrl: '/tmpl/map.html'
    });

  function marsMapController() {
    // const vm = this;
  }
})();

// https://www.redblobgames.com/grids/hexagons/
// https://www.redblobgames.com/grids/hexagons/implementation.html
