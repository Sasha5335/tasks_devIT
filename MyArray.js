function MyArrayProto() {
  this.push = function push() {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length++] = arguments[i];
    }
    return this.length;
  };

  this.pop = function () {
    if (this.length === 0) {
      return;
    }
    const lastItem = this[this.length - 1];
    delete this[--this.length];
    return lastItem;
  };

  this.map = function (func) {
    const result = new MyArray();

    for (let i = 0; i < this.length; i++) {
      const cbResult = func(this[i], i, this);
      result.push(cbResult);
    }

    return result;
  };

  this.filter = function filter(checkFunction) {
    const result = new MyArray();
    for (let i = 0; i < this.length; i++) {
      if (checkFunction(this[i], i, this)) {
        result.push(this[i]);
      }
    }
    return result;
  };

  this.reduce = function reduce(func) {
    const result = new MyArray();

    for (let i = 0; i < this.length; i++) {
      const cbResult = func(this[i], i, this);
      if (func(this[i], i, this)) {
        result.push(cbResult);
      }
    }
    return result;
  };

  this.every = function every(func) {
    for (let i = 0; i < this.length; i++) {
      if (!func(this[i], i, this)) {
        return false;
      }
    }
    return true;
  };
}

function MyArray(...args) {
  this.length = 0;

  for (let i = 0; i < arguments.length; i++) {
    this.push(arguments[i]);
  }
}

MyArray.isMyArray = function isMyArray(obj) {
  return obj instanceof MyArray;
};

MyArray.prototype = new MyArrayProto();

module.exports = MyArrayProto;
