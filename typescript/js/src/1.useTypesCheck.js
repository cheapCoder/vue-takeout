((function () {
    var flag = false;
    flag = null;
    console.log(flag);
    var n1 = 123;
    var n2 = 0x123;
    var n3 = 83;
    var n4 = 3;
    var n5 = undefined;
    var s1 = null;
    var s2 = s1 + n1;
    console.log(s2);
    var arr1 = [1, 2, 3, 1];
    var arr2 = [1, 2, 3]; // 泛型写法
    var turple1 = [123, new Object(), "heng", false];
    var Color;
    (function (Color) {
        Color[Color["red"] = 10] = "red";
        Color[Color["green"] = 11] = "green";
        Color[Color["blue"] = 12] = "blue";
    })(Color || (Color = {}));
    var color = Color.red;
    console.log(color);
    console.log(Color.red, Color.green, Color.blue);
    console.log(Color[11]);
    var what = 'li';
    what = 1234;
    var w2 = null;
    var obj = "new Object()";
    function getLength(s) {
        // return (s as string).length;
        return s.length;
    }
})());
