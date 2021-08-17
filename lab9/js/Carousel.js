var Carousel = function() {
"use strict";
    var imageList, imageIndex;
    var pub = {};

    function nextImage() {
        document.getElementById("carousel").innerHTML = imageList[imageIndex].makeHTML();
        imageIndex += 1;
        if (imageIndex === imageList.length) {
            imageIndex = 0;
        }
    }

    function MovieCategory(title, image, page) {
        this.title = title;
        this.image = image;
        this.page = page;

        this.makeHTML = function () {
            return "<figure><a href='" + this.page + "'><img src='" + this.image + "'><figcaption>" + this.title + "</figcaption></a></figure>";
        };
    }

    pub.setup = function() {
        imageList = [];
        imageList.push(new MovieCategory("Classic Movies", "images/Metropolis.jpg", "classic.html"));
        imageList.push(new MovieCategory("SciFi", "images/Plan_9_from_Outer_Space.jpg", "scifi.html"));
        imageList.push(new MovieCategory("Hitchcock", "images/Vertigo.jpg", "hitchcock.html"));
        imageIndex = 0;

        nextImage();
        setInterval(nextImage, 3000);
    };

    return pub;

}();

if (window.addEventListener) {
    window.addEventListener('load', Carousel.setup);
} else if (window.attachEvent) {
    window.attachEvent('onload', Carousel.setup);
} else {
    /*jshint -W117*/
    alert("Could not attach 'Carousel.setup' to the 'window.onload' event");
    /*jshint +W117*/
}
