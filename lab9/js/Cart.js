/*global Cookie*/
var Cart = (function(){
    "use strict";
    var pub = {};

    function addToCart(){
        /*jshint -W040*/
        var title = this.parentNode.parentNode.getElementsByTagName("h3")[0].innerText;
        var price = this.parentNode.getElementsByTagName("span")[0].innerText;
        /*jshint +W040*/
        var cart = window.sessionStorage.getItem("CC_Cart");
        var item = {};

        item.title = title;
        item.price = price;

        if(cart === null){
            cart = [];
        }else{
            cart = JSON.parse(cart);
        }

        cart.push(item);
        window.sessionStorage.setItem("CC_Cart", JSON.stringify(cart));
    }

    pub.setup = function(){
        var i;
        var btns = document.getElementsByClassName("buy");

        for (i = 0; i < btns.length; i++) {
            btns[i].onclick = addToCart;
            btns[i].style.cursor = "pointer";
        }
    };

    return pub;
}());

if (window.addEventListener) {
    window.addEventListener('load', Cart.setup);
} else if (window.attachEvent) {
    window.attachEvent('onload', Cart.setup);
} else {
    /*jshint -W117*/
    alert("Could not attach 'Cart.setup' to the 'window.onload' event");
    /*jshint +W117*/
}