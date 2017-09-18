(() => {
  'use strict';

  function marsMapController(HexDataService, InfoPanelService) {
    const ctrl = this;

    ctrl.rows = HexDataService.rows;

    ctrl.onClick = (hex) => {
      InfoPanelService.setHex(hex);
    };
  }

  angular.module('marsmap')
    .component('marsMap', {
      controller: ['HexDataService', 'InfoPanelService', marsMapController],
      templateUrl: '/tmpl/map.html'
    });
})();
