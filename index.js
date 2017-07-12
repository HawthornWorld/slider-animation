
/**
 * Created by yanma on 17-7-5.
 */
var $ = function(id) {
    return document.getElementById(id);
};
var $box = $("transImageBox"),
    $oTrigger = $("transImageTrigger").getElementsByTagName("a"),
    $len = $oTrigger.length;
for(var i = 0; i < $len; i++) {
    $oTrigger[i].onclick = function(){
        var index = Number(this.href.replace(/.*#/g,'')) || 1;//key steps
        $box.style.marginLeft = (1 - index) * 300 + "px";//key steps
        return false;
    };
}
