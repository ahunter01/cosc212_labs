var Reviews = (function() { 

    var pub = {};

    function parseReviews(data, target) {
        $(data).find("review").each(function () {
            var rating = $(this).find("rating")[0].textContent;
            var user = $(this).find("user")[0].textContent;
            // $(target).append("<dt>" + user + ":</dt>" + "<dd>" + rating + "</dd>");
            $(target).append("<p>" + user + " : " + rating + "</p>");
        });
        if ($(data).find("review").length === 0) {
            $(target).html("No review available");
        }
        return target;
    }

    function showReviews() { 
        var target = $(this).parent().find(".review")[0];
        var source = $(this).parent().find("img")[0].src;
        var xmlSource = source.replace('/images/', '/reviews/').replace('.jpg', '.xml');
        $.ajax({
            type: "GET",
            url: xmlSource,
            cache: false,
            success: function(data) {
                if ($(target).empty());
                parseReviews(data, target);
            },
            error: function () {
                $(target).html("No review available");
              }
        });
    }

    pub.setup = function() {
        $(".film").append("<input type='button' class='showReviews' value='Show Reviews'> <div class='review'> </div>");
        $(".showReviews").click(showReviews);
        $(".review").css("display", "grid");
    }

    return pub; 
}());

$(document).ready(Reviews.setup);