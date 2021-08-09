/**
 * new page to display content of shopping cart
 */

    var Cart_content = (function () {
        "use strict";

        var pub = {};

        function New_page (cart_list) {

            var title, price, total_cost;
            total_cost = 0;
            var cartContent = document.getElementById("cart_details");
            // var tableOpening = "<table><tr><th>Movies</th><th>Price</th></tr>"
            // cartContent.innerHTML = tableOpening
            cart_list.forEach(function (cart) {
                // cartContent.innerHTML += "<tr><td>" + cart.title + "</td><td>" + cart.price + "</td></tr>";
                cartContent.innerHTML += "<p>" + cart.title +  " - $" + cart.price + "</p>";
                total_cost += parseFloat(cart.price);
            });

            // cartContent.innerHTML += "</table><p>Total cost = $" + total_cost.toFixed(2) + "</p>";
            cartContent.innerHTML += "<h4>Total cost = $" + total_cost.toFixed(2) + "</h4>";
            // alert(cartContent.innerHTML);
        }

        pub.setup = function () {
            var cart_list = Cookie.get("myCart");
            console.log(cart_list);
            if (cart_list === null) {
                document.getElementById("cart_details").innerHTML = "<p>Cart is empty</p>";
            } else {
                cart_list = JSON.parse(cart_list);
                New_page(cart_list);
            }
        };

        return pub;
    }());


if (window.addEventListener) {
    window.addEventListener('load', Cart_content.setup);
} else if (window.attachEvent) {
    window.attachEvent('onload', Cart_content.setup);
} else {
    alert("Could not attach ’Cart_content.setup’ to the ’window.onload’ event");
}