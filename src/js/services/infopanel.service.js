(() => {
  'use strict';

  function InfoPanelService() {
    return {
      setHex: function setHex(hex) {
        this.hex = hex;
      },
      hex: undefined,
    };
  }

  angular.module('marsmap').service('InfoPanelService', InfoPanelService);
})();
