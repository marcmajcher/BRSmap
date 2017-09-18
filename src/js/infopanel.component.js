(() => {
  'use strict';

  function infoPanelController(InfoPanelService) {
    const ctrl = this;

    ctrl.info = InfoPanelService;
  }

  angular.module('marsmap')
    .component('infoPanel', {
      controller: ['InfoPanelService', infoPanelController],
      templateUrl: '/tmpl/infopanel.html'
    });
})();
