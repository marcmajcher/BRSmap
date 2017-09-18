(() => {
  'use strict';

  function infoPanelController() {
    const ctrl = this;

  }

  angular.module('marsmap')
    .component('infoPanel', {
      controller: infoPanelController,
      templateUrl: '/tmpl/infopanel.html'
    });
})();
