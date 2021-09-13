var ShowHide = function() {
    "use strict";
    var pub = {};

    function showHide() {
        // var paras, img, i;
        // /*jshint -W040*/
        // paras = this.parentNode.getElementsByTagName("p");
        // img = this.parentNode.getElementsByTagName("img")[0];
        // /*jshint +W040*/

        // if (paras[0].style.display === "none") {
        //     for (i = 0; i < paras.length; i++) {
        //         paras[i].style.display = "block";
        //     }
        //     img.style.display = "block";
        // } else {
        //     for (i = 0; i < paras.length; i++) {
        //         paras[i].style.display = "none";
        //     }
        //     img.style.display = "none";
        // }

        $(this).siblings().toggle();
    }

    pub.setup = function() {
        var i, titles;
        titles = document.getElementsByTagName("h3");
        for (i = 0; i < titles.length; i++) {
            titles[i].onclick = showHide;
            titles[i].style.cursor = "pointer";
        }
    };

    return pub;

}();

if (window.addEventListener) {
    window.addEventListener('load', ShowHide.setup);
} else if (window.attachEvent) {
    window.attachEvent('onload', ShowHide.setup);
} else {
    /*jshint -W117*/
    alert("Could not attach 'ShowHide.setup' to the 'window.onload' event");
    /*jshint +W117*/
}