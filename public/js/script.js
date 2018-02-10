window.onload = function() {
    // get my portfolio info
    $.ajax("/api/portfolio/", {
        type: "GET",
    }).done(function(response) {
        // everything we get back.. 
        var results = response;

        for (var i = 0; i < results.length; i++) {
            var image = results[i].image;
            var link = results[i].link;
            var name = results[i].name;
            var summary = results[i].summary;

            var portfolioImage = $("<div class='item'>");
            // make one of these for each thing in there
            image = "<div class= 'dynamicImage'><a href='" + link + "'><img src=" + image + " class='portfolioImage'></a><p class='hoverText'>" + summary + "</p></div>";

            var ul = $("<ul class='dropdown-content' id='dropdown" + name + "'>")
            //  Dropdown Trigger
            var dropdownList = $("<a>");
            dropdownList.addClass("dropdown-trigger btn");
            dropdownList.attr('data-target', "dropdown" + name);
            $('.dropdown-trigger').dropdown();
            dropdownList.text(name);
            // prepend the portfolioImage to the "#portfolio" div in the HTML
            portfolioImage.append(image);
            portfolioImage.prepend(dropdownList);
            portfolioImage.append(ul);
            $("#portfolio").append(portfolioImage);




            // set image to regular opacity
            $(document).ready(function() {
                $('img').animate({
                    opacity: 1
                });

                // function for on hover of image fade the image
                $('img').hover(function() {
                    $(this).stop().animate({ opacity: .4 }, 200);

                }, function() {
                    $(this).stop().animate({ opacity: 1 }, 500)
                    // $(this).fadeOut();
                });
            });

            // function when you hover over image to display text
            $(document).ready(function() {
                $('.hoverText').hide();
            });
            $('.dynamicImage').hover(function() {
                // show user the hoverText
                $(this).find('.hoverText').fadeIn();

            }, function() {
                // fade it out and hide it
                $(this).find('.hoverText').fadeOut();
            });



        }

    });



};
