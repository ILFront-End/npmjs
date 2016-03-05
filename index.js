//  从1099个名字中获取任意名字
(function () {
  'use strict';
    //  一共1099个
    var arr = []
    for (var i = 0; i < 1099; i++) {
        arr.push(i);
    }
    //  获取随机名字
    function getNickname() {
        //  取0~1099的随机数
        var random = Math.floor(Math.random() * 1099);
        
        return arr[random];
    }
    exports.getNickname = getNickname;
  }());