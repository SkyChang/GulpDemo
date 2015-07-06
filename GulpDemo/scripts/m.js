module.exports = (function () {

    var my = function () {
    }

    my.prototype.add = function (a, b) {
        return a + b;
    }
    return my;
}());