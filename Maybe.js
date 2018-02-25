// Maybe
// Maybe = function(x) {
//   this.__value = x;
// };
//
// Maybe.of = function(x) {
//   return new Maybe(x);
// };
//
// Maybe.prototype.isNothing = function() {
//   return (this.__value === null || this.__value === undefined);
// };
//
// Maybe.prototype.map = function(f) {
//   return this.isNothing() ? Maybe.of(null) : Maybe.of(f(this.__value));
// };
//
// Maybe.prototype.chain = function(f) {
//   return this.map(f).join();
// };
//
// Maybe.prototype.ap = function(other) {
//   return this.isNothing() ? Maybe.of(null) : other.map(this.__value);
// };
//
// Maybe.prototype.join = function() {
//   return this.__value;
// }

const Maybe = x => ({
  isNothing: () => x === null || x === undefined,
  map: f => Maybe(x).isNothing() ? Maybe(null) : Maybe(f(x)),
  chain: f => Maybe(x).map(f).join(),
  ap: other => Maybe(x).isNothing() ? Maybe(null) : other.map(x)
  join: () => x
});
