(() => {
  'use strict';

  // struct Hex { // Cube storage, axial constructor
  //     const int q, r, s;
  //     Hex(int q_, int r_): q(q_), r(r_), s(-q_ - r_) {}
  // };

  class HexService {
    constructor(q, r) {
      this.q = q;
      this.r = r;
      this.s = -q - r;
    }
  }

  angular.module('marsmap').service('HexService', HexService);
})();
