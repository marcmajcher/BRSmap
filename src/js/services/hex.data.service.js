(() => {
  'use strict';

  function HexDataService() {
    return {
      rows: [{
          offset: 2,
          hexes: [{}]
        },
        {
          offset: 1,
          hexes: [{},
            {},
          ]
        },
        {
          offset: 1,
          hexes: [{},
            {},
            {},
          ]
        },
        {
          offset: 0,
          hexes: [{},
            {},
            {},
            {},
          ]
        },
        {
          offset: 0,
          hexes: [{},
            {},
            {},
            {},
            {},
          ]
        },
        {
          offset: 0,
          hexes: [{},
            {},
            {},
            {},
          ]
        },
        {
          offset: 0,
          hexes: [{},
            {},
            {},
            {},
            {},
          ]
        },
        {
          offset: 0,
          hexes: [{},
            {},
            {},
            {},
          ]
        },
        {
          offset: 0,
          hexes: [{},
            {},
            {},
            {},
            {},
          ]
        },
        {
          offset: 0,
          hexes: [{},
            {},
            {},
            {},
          ]
        },
        {
          offset: 0,
          hexes: [{},
            {},
            {},
            {},
            {},
          ]
        },
        {
          offset: 0,
          hexes: [{},
            {},
            {},
            {},
          ]
        },
        {
          offset: 0,
          hexes: [{},
            {},
            {},
            {},
            {},
          ]
        },
        {
          offset: 0,
          hexes: [{},
            {},
            {},
            {},
          ]
        },
        {
          offset: 1,
          hexes: [{},
            {},
            {},
          ]
        },
        {
          offset: 1,
          hexes: [{},
            {},
          ]
        },
        {
          offset: 2,
          hexes: [{}]
        },
      ]
    };
  }

  angular.module('marsmap').service('HexDataService', HexDataService);
})();
