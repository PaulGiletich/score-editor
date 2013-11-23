HTMLCanvasElement.prototype.relMouseCoords = function relMouseCoords(event){
    var totalOffsetX = 0;
    var totalOffsetY = 0;
    var canvasX = 0;
    var canvasY = 0;
    var currentElement = this;

    do{
        totalOffsetX += currentElement.offsetLeft - currentElement.scrollLeft;
        totalOffsetY += currentElement.offsetTop - currentElement.scrollTop;
    }
    while(currentElement = currentElement.offsetParent);

    canvasX = event.pageX - totalOffsetX;
    canvasY = event.pageY - totalOffsetY;

    return {x:canvasX, y:canvasY}
};

OSTISMusic.Util = {};

OSTISMusic.Util.contains = function contains(rect, point){
    return (rect.x < point.x  &&
        rect.y < point.y &&
        rect.x + rect.w > point.x &&
        rect.y + rect.h > point.y);
};