/**
 * Form Filler function for the Classic Cinema site.
 *
 * Created by: Nick Meek, 07/08/2019
 */


/**
 * Module pattern
 */
var FillForm = (function(){
    var pub = {};

    /**
     * A function to ease the hurt of filling out the Classic Cinema form
     * hundreds and hundreds of times.
     */
    pub.fillForm = function(){
        document.getElementById("deliveryName").value = "A Name";
        document.getElementById("deliveryEmail").value = "Bill@microsoft.com";
        document.getElementById("deliveryAddress1").value = "An Address";
        document.getElementById("deliveryAddress2").value = "More Address";
        document.getElementById("deliveryCity").value = "A City";
        document.getElementById("deliveryPostcode").value = "1234";
        document.getElementById("cardType").value = "amex";
        document.getElementById("cardNumber").value = "311111111111111";
        document.getElementById("cardValidation").value = "311111111111111";
        document.getElementById("cardYear").value = "2020";
    }

    return pub;
}());