function animate(obj, target,callback) {
    //让元素只有一个定时器在执行，需要清除以前的定时器
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer)
            if(callback) {
                callback();
            }

        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 10);
}
