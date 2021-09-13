/*global Cookie*/
var ShowCart = (function(){
    "use strict";
    var pub = {};



    pub.setup = function(){
        var i, total, outStr;
        total = 0;
        var cart = window.sessionStorage.getItem("CC_Cart");
        // var target = document.getElementById("cart");
        outStr = "<h2>Cart Contents</h2>";
        if (cart === null){
            $("#cart").append("<p>Your cart is empty.</p>");
        }else{
            cart = JSON.parse(cart);
            outStr += "<table id='cartContents'><tr><th>Title</th><th>Price</th></tr>"
            for (i = 0; i < cart.length; i++) {
                outStr += "<td>" + cart[i].title + "</td><td>" + cart[i].price + "</td></tr>";
                total += parseFloat(cart[i].price);
            }
            outStr += "</table>" + "<p>Total Price: $" + total.toFixed(2) + "</p>";
            // target.innerHTML = outStr;
            $("#cart").replaceWith(outStr);
        }

    };

    return pub;
}());

if (window.addEventListener) {
    window.addEventListener('load', ShowCart.setup);
} else if (window.attachEvent) {
    window.attachEvent('onload', ShowCart.setup);
} else {
    /*jshint -W117*/
    alert("Could not attach 'Cart.setup' to the 'window.onload' event");
    /*jshint +W117*/
}