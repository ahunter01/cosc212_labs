/**
 * To store item added into a cookie.
 */

var Cart = (function () {
    "use strict" ;
    var pub = {};


    function button_alert() {
        var title, price;
        var cart_list = [];

        if (Cookie.get("myCart") !== null){
            cart_list = JSON.parse(Cookie.get("myCart")); //object from cart_list
        }


        title = this.parentNode.parentNode.getElementsByTagName("h3")[0].textContent;
        price = this.parentNode.getElementsByClassName("price")[0].textContent;

        var cart_obj = {};
        cart_obj.title = title;
        cart_obj.price = price;
        cart_list.push(cart_obj);
        Cookie.set("myCart", JSON.stringify(cart_list));// string of cart_list

    }



    //public data and function
    pub.setup = function() {
        var buttons, i, btn;
        buttons = document.getElementsByClassName("buy");
        for (i = 0; i < buttons.length; i += 1) {
            btn = buttons[i];
            btn.onclick = button_alert;
            btn.style.cursor = "pointer";
        }
    };
    return pub;
}());

if (window.addEventListener) {
    window.addEventListener('load', Cart.setup);
} else if (window.attachEvent) {
    window.attachEvent('onload', Cart.setup);
} else {
    alert("Could not attach ’Cart.setup’ to the ’window.onload’ event");
}