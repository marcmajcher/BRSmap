'use strict';

(function () {
  'use strict';

  angular.module('marsmap', []);
})();
'use strict';

(function () {
  'use strict';

  function infoPanelController(InfoPanelService) {
    var ctrl = this;

    ctrl.info = InfoPanelService;
  }

  angular.module('marsmap').component('infoPanel', {
    controller: ['InfoPanelService', infoPanelController],
    templateUrl: '/tmpl/infopanel.html'
  });
})();
'use strict';

(function () {
  'use strict';

  function marsMapController(HexDataService, InfoPanelService) {
    var ctrl = this;

    ctrl.rows = HexDataService.rows;

    ctrl.onClick = function (hex) {
      InfoPanelService.setHex(hex);
    };
  }

  angular.module('marsmap').component('marsMap', {
    controller: ['HexDataService', 'InfoPanelService', marsMapController],
    templateUrl: '/tmpl/map.html'
  });
})();
'use strict';

(function () {
  'use strict';

  function HexDataService() {
    return {
      rows: [{
        offset: 2,
        hexes: [{
          id: 38,
          neighbors: [],
          resources: []
        }]
      }, {
        offset: 1,
        hexes: [{
          id: 61,
          neighbors: [],
          resources: []
        }, {
          id: 39,
          neighbors: [],
          resources: []
        }]
      }, {
        offset: 1,
        hexes: [{
          id: 60,
          neighbors: [],
          resources: []
        }, {
          id: 20,
          neighbors: [],
          resources: []
        }, {
          id: 40,
          neighbors: [],
          resources: []
        }]
      }, {
        offset: 0,
        hexes: [{
          id: 59,
          neighbors: [],
          resources: []
        }, {
          id: 37,
          neighbors: [],
          resources: ['M']
        }, {
          id: 21,
          neighbors: [],
          resources: ['Pw', 'W']
        }, {
          id: 41,
          neighbors: [],
          resources: []
        }]
      }, {
        offset: 0,
        hexes: [{
          id: 58,
          neighbors: [],
          resources: []
        }, {
          id: 36,
          neighbors: [],
          resources: ['M', 'O']
        }, {
          id: 8,
          neighbors: [],
          resources: ['W']
        }, {
          id: 22,
          neighbors: [],
          resources: ['M', 'Pw']
        }, {
          id: 42,
          neighbors: [],
          resources: []
        }]
      }, {
        offset: 0,
        hexes: [{
          id: 35,
          neighbors: [],
          resources: ['W']
        }, {
          id: 19,
          neighbors: [],
          resources: ['O']
        }, {
          id: 9,
          neighbors: [],
          resources: [],
          colony: 'Morrigan'
        }, {
          id: 23,
          neighbors: [],
          resources: ['M', 'W']
        }]
      }, {
        offset: 0,
        hexes: [{
          id: 57,
          neighbors: [],
          resources: []
        }, {
          id: 18,
          neighbors: [],
          resources: [],
          colony: 'Eris'
        }, {
          id: 2,
          neighbors: [],
          resources: ['O']
        }, {
          id: 10,
          neighbors: [],
          resources: [],
          colony: 'Shiva'
        }, {
          id: 43,
          neighbors: [],
          resources: []
        }]
      }, {
        offset: 0,
        hexes: [{
          id: 34,
          neighbors: [],
          resources: ['M', 'O']
        }, {
          id: 7,
          neighbors: [],
          resources: ['M']
        }, {
          id: 3,
          neighbors: [],
          resources: ['M', 'Pw']
        }, {
          id: 24,
          neighbors: [],
          resources: ['M']
        }]
      }, {
        offset: 0,
        hexes: [{
          id: 56,
          neighbors: [],
          resources: []
        }, {
          id: 17,
          neighbors: [],
          resources: ['M']
        }, {
          id: 1,
          neighbors: [],
          resources: [],
          colony: 'Ares HQ'
        }, {
          id: 11,
          neighbors: [],
          resources: ['Ps']
        }, {
          id: 44,
          neighbors: [],
          resources: []
        }]
      }, {
        offset: 0,
        hexes: [{
          id: 33,
          neighbors: [],
          resources: ['O']
        }, {
          id: 6,
          neighbors: [],
          resources: ['O', 'Pw']
        }, {
          id: 4,
          neighbors: [],
          resources: ['M']
        }, {
          id: 25,
          neighbors: [],
          resources: ['M', 'O']
        }]
      }, {
        offset: 0,
        hexes: [{
          id: 55,
          neighbors: [],
          resources: []
        }, {
          id: 16,
          neighbors: [],
          resources: [],
          colony: 'Athena'
        }, {
          id: 5,
          neighbors: [],
          resources: ['O']
        }, {
          id: 12,
          neighbors: [],
          resources: [],
          colony: 'Victoria'
        }, {
          id: 45,
          neighbors: [],
          resources: []
        }]
      }, {
        offset: 0,
        hexes: [{
          id: 32,
          neighbors: [],
          resources: ['Ps']
        }, {
          id: 15,
          neighbors: [],
          resources: [],
          colony: 'Minerva'
        }, {
          id: 13,
          neighbors: [],
          resources: []
        }, {
          id: 26,
          neighbors: [],
          resources: ['Ps']
        }]
      }, {
        offset: 0,
        hexes: [{
          id: 54,
          neighbors: [],
          resources: []
        }, {
          id: 31,
          neighbors: [],
          resources: ['O', 'Ps']
        }, {
          id: 14,
          neighbors: [],
          resources: []
        }, {
          id: 27,
          neighbors: [],
          resources: []
        }, {
          id: 46,
          neighbors: [],
          resources: []
        }]
      }, {
        offset: 0,
        hexes: [{
          id: 53,
          neighbors: [],
          resources: []
        }, {
          id: 30,
          neighbors: [],
          resources: ['M']
        }, {
          id: 28,
          neighbors: [],
          resources: ['M']
        }, {
          id: 47,
          neighbors: [],
          resources: []
        }]
      }, {
        offset: 1,
        hexes: [{
          id: 52,
          neighbors: [],
          resources: []
        }, {
          id: 29,
          neighbors: [],
          resources: []
        }, {
          id: 48,
          neighbors: [],
          resources: []
        }]
      }, {
        offset: 1,
        hexes: [{
          id: 51,
          neighbors: [],
          resources: []
        }, {
          id: 49,
          neighbors: [],
          resources: []
        }]
      }, {
        offset: 2,
        hexes: [{
          id: 48,
          neighbors: [],
          resources: []
        }]
      }]
    };
  }

  angular.module('marsmap').service('HexDataService', HexDataService);
})();
'use strict';

(function () {
  'use strict';

  function InfoPanelService() {
    return {
      setHex: function setHex(hex) {
        this.hex = hex;
      },
      hex: undefined
    };
  }

  angular.module('marsmap').service('InfoPanelService', InfoPanelService);
})();