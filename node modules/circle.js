function Circle( x, y, r){
  this.x = x;
  this.y = y;
  this.r = r;
}
Circle.prototype.isOverlapped = function(obj){
  var cc = Math.sqrt(Math.pow((this.x + obj.x), 2) + Math.pow((this.y + obj.y), 2));
  return (cc === this.r + obj.r) ? 0 : (cc > this.r + obj.r) ? 1: -1;
}
module.exports = Circle;