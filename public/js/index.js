'use strict';

(function () {
  'use strict';

  angular.module('marsmap', []);
})();
'use strict';

(function () {
  'use strict';

  angular.module('marsmap').component('marsMap', {
    controller: marsMapController,
    templateUrl: '/tmpl/map.html'
  });

  function marsMapController() {
    // const vm = this;
  }
})();

// https://www.redblobgames.com/grids/hexagons/
// https://www.redblobgames.com/grids/hexagons/implementation.html
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  'use strict';

  var HexService = function HexService(q, r) {
    _classCallCheck(this, HexService);

    this.q = q;
    this.r = r;
    this.s = -q - r;
  };

  angular.module('marsmap').service('HexService', HexService);
})();

//
// bool operator == (Hex a, Hex b) {
//   return a.q == b.q && a.r == b.r && a.s == b.s;
// }
//
// bool operator != (Hex a, Hex b) {
//   return !(a == b);
// }
//
// Hex hex_add(Hex a, Hex b) {
//   return Hex(a.q + b.q, a.r + b.r, a.s + b.s);
// }
//
// Hex hex_subtract(Hex a, Hex b) {
//   return Hex(a.q - b.q, a.r - b.r, a.s - b.s);
// }
//
// Hex hex_multiply(Hex a, int k) {
//   return Hex(a.q * k, a.r * k, a.s * k);
// }
//
// int hex_length(Hex hex) {
//   return int((abs(hex.q) + abs(hex.r) + abs(hex.s)) / 2);
// }
//
// int hex_distance(Hex a, Hex b) {
//   return hex_length(hex_subtract(a, b));
// }
//
// const vector < Hex > hex_directions = {
//   Hex(1, 0, -1),
//   Hex(1, -1, 0),
//   Hex(0, -1, 1),
//   Hex(-1, 0, 1),
//   Hex(-1, 1, 0),
//   Hex(0, 1, -1)
// };
//
// Hex hex_direction(int direction /* 0 to 5 */ ) {
//   assert(0 <= direction && direction < 6);
//   return hex_directions[direction];
// }
//
// Hex hex_neighbor(Hex hex, int direction) {
//   return hex_add(hex, hex_direction(direction));
// }
//
// struct Orientation {
//   const double f0, f1, f2, f3;
//   const double b0, b1, b2, b3;
//   const double start_angle; // in multiples of 60°
//   Orientation(double f0_, double f1_, double f2_, double f3_,
//       double b0_, double b1_, double b2_, double b3_,
//       double start_angle_): f0(f0_), f1(f1_), f2(f2_), f3(f3_),
//     b0(b0_), b1(b1_), b2(b2_), b3(b3_),
//     start_angle(start_angle_) {}
// };
//
// const Orientation layout_pointy = Orientation(sqrt(3.0), sqrt(3.0) / 2.0, 0.0, 3.0 / 2.0,
//   sqrt(3.0) / 3.0, -1.0 / 3.0, 0.0, 2.0 / 3.0,
//   0.5);
// const Orientation layout_flat = Orientation(3.0 / 2.0, 0.0, sqrt(3.0) / 2.0, sqrt(3.0),
//   2.0 / 3.0, 0.0, -1.0 / 3.0, sqrt(3.0) / 3.0,
//   0.0);
//
// struct Layout {
//   const Orientation orientation;
//   const Point size;
//   const Point origin;
//   Layout(Orientation orientation_, Point size_, Point origin_): orientation(orientation_), size(size_), origin(origin_) {}
// };
//
// struct Point {
//   const double x, y;
//   Point(double x_, double y_): x(x_), y(y_) {}
// };
//
// Point hex_to_pixel(Layout layout, Hex h) {
//   const Orientation & M = layout.orientation;
//   double x = (M.f0 * h.q + M.f1 * h.r) * layout.size.x;
//   double y = (M.f2 * h.q + M.f3 * h.r) * layout.size.y;
//   return Point(x + layout.origin.x, y + layout.origin.y);
// }
//
// FractionalHex pixel_to_hex(Layout layout, Point p) {
//   {
//     const Orientation & M = layout.orientation;
//     Point pt = Point((p.x - layout.origin.x) / layout.size.x,
//       (p.y - layout.origin.y) / layout.size.y);
//     double q = M.b0 * pt.x + M.b1 * pt.y;
//     double r = M.b2 * pt.x + M.b3 * pt.y;
//     return FractionalHex(q, r, -q - r);
//   }
//
//
//   Point hex_corner_offset(Layout layout, int corner) {
//     Point size = layout.size;
//     double angle = 2.0 * M_PI *
//       (layout.orientation.start_angle + corner) / 6;
//     return Point(size.x * cos(angle), size.y * sin(angle));
//   }
//
//   vector < Point > polygon_corners(Layout layout, Hex h) {
//     vector < Point > corners = {};
//     Point center = hex_to_pixel(layout, h);
//     for (int i = 0; i < 6; i++) {
//       Point offset = hex_corner_offset(layout, i);
//       corners.push_back(Point(center.x + offset.x,
//         center.y + offset.y));
//     }
//     return corners;
//   }
//
//
//   struct FractionalHex {
//     const double q, r, s;
//     FractionalHex(double q_, double r_, double s_): q(q_), r(r_), s(s_) {}
//   };
//
//   Hex hex_round(FractionalHex h) {
//     int q = int(round(h.q));
//     int r = int(round(h.r));
//     int s = int(round(h.s));
//     double q_diff = abs(q - h.q);
//     double r_diff = abs(r - h.r);
//     double s_diff = abs(s - h.s);
//     if (q_diff > r_diff and q_diff > s_diff) {
//       q = -r - s;
//     }
//     else if (r_diff > s_diff) {
//       r = -q - s;
//     }
//     else {
//       s = -q - r;
//     }
//     return Hex(q, r, s);
//   }
//
//   float lerp(double a, double b, double t) {
//     return a * (1 - t) + b * t;
//     /* better for floating point precision than
//        a + (b - a) * t, which is what I usually write */
//   }
//
//   FractionalHex hex_lerp(Hex a, Hex b, double t) {
//     return FractionalHex(lerp(a.q, b.q, t),
//       lerp(a.r, b.r, t),
//       lerp(a.s, b.s, t));
//   }
//
//
//   vector < Hex > hex_linedraw(Hex a, Hex b) {
//     int N = hex_distance(a, b);
//     vector < Hex > results = {};
//     double step = 1.0 / max(N, 1);
//     for (int i = 0; i <= N; i++) {
//       results.push_back(hex_round(hex_lerp(a, b, step * i)));
//     }
//     return results;
//   }
//
//   vector < Hex > hex_linedraw(Hex a, Hex b) {
//     int N = hex_distance(a, b);
//     FractionalHex a_nudge(a.q + 1e-6, a.r + 1e-6, a.s - 2e-6);
//     FractionalHex b_nudge(b.q + 1e-6, b.r + 1e-6, b.s - 2e-6);
//     vector < Hex > results = {};
//     double step = 1.0 / max(N, 1);
//     for (int i = 0; i <= N; i++) {
//       results.push_back(
//         hex_round(hex_lerp(a_nudge, b_nudge, step * i)));
//     }
//     return results;
//   }
//
//   namespace std {
//     template < > struct hash < Hex > {
//       size_t operator()(const Hex & h) const {
//         hash < int > int_hash;
//         size_t hq = int_hash(h.q);
//         size_t hr = int_hash(h.r);
//         return hq ^ (hr + 0x9e3779b9 + (hq << 6) + (hq >> 2));
//       }
//     };
//   }
//
//
//   unordered_map < Hex, float > heights;
//   heights[Hex(1, -2, 3)] = 4.3;
//   cout << heights[Hex(1, -2, 3)];
//
//
//   // parallelogram:
//   unordered_set < Hex > map;
//   for (int q = q1; q <= q2; q++) {
//     for (int r = r1; r <= r2; r++) {
//       map.insert(Hex(q, r, -q - r)));
//   }
// }
//
// // triangle
// unordered_set < Hex > map;
// for (int q = 0; q <= map_size; q++) {
//   for (int r = 0; r <= map_size - q; r++) {
//     map.insert(Hex(q, r, -q - r));
//   }
// }
//
// unordered_set < Hex > map;
// for (int q = 0; q <= map_size; q++) {
//   for (int r = map_size - q; r <= map_size; r++) {
//     map.insert(Hex(q, r, -q - r));
//   }
// }
//
// // hexagons
//
// unordered_set < Hex > map;
// for (int q = -map_radius; q <= map_radius; q++) {
//   int r1 = max(-map_radius, -q - map_radius);
//   int r2 = min(map_radius, -q + map_radius);
//   for (int r = r1; r <= r2; r++) {
//     map.insert(Hex(q, r, -q - r));
//   }
// }
//
// // rectangles
//
// unordered_set < Hex > map;
// for (int r = 0; r < map_height; r++) {
//   int r_offset = floor(r / 2); // or r>>1
//   for (int q = -r_offset; q < map_width - r_offset; q++) {
//     map.insert(Hex(q, r, -q - r));
//   }
// }
//
// unordered_set < Hex > map;
// for (int q = 0; q < map_width; q++) {
//   int q_offset = floor(q / 2); // or q>>1
//   for (int r = -q_offset; r < map_height - q_offset; r++) {
//     map.insert(Hex(q, r, -q - r));
//   }
// }
//
//
//
// struct OffsetCoord {
//   const int col, row;
//   OffsetCoord(int col_, int row_): col(col_), row(row_) {}
// };
//
// const int EVEN = 1;
// const int ODD = -1;
//
// OffsetCoord qoffset_from_cube(int offset, Hex h) {
//   int col = h.q;
//   int row = h.r + int((h.q + offset * (h.q & 1)) / 2);
//   return OffsetCoord(col, row);
// }
//
// Hex qoffset_to_cube(int offset, OffsetCoord h) {
//   int q = h.col;
//   int r = h.row - int((h.col + offset * (h.col & 1)) / 2);
//   int s = -q - r;
//   return Hex(q, r, s);
// }
//
// OffsetCoord roffset_from_cube(int offset, Hex h) {
//   int col = h.q + int((h.r + offset * (h.r & 1)) / 2);
//   int row = h.r;
//   return OffsetCoord(col, row);
// }
//
// Hex roffset_to_cube(int offset, OffsetCoord h) {
//   int q = h.col - int((h.row + offset * (h.row & 1)) / 2);
//   int r = h.row;
//   int s = -q - r;
//   return Hex(q, r, s);
// }