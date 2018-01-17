  
  window.onload = function() {
 // get my portfolio info
 $.ajax("/api/portfolio/", {
     type: "GET",
 }).done(function(response) {
     console.log(response);
     // everything we get back.. 
     var results = response;
     
     for (var i = 0; i < results.length; i++) {
     var image = results[i].image;
     var link = results[i].link;
     var name = results[i].name;
     var summary = results[i].summary;

       var portfolioImage = $("<div class='item'>");
     // make one of these for each thing in there
     image = "<div class= 'dynamicImage'><a href='" + link + "'><img src=" + image + " class='portfolioImage'></a>Click to explore app!</div>";
  
     var ul = $("<ul class='dropdown-content' id='dropdown" + name + "'>")
     // <!-- Dropdown Trigger -->
     var dropdownList = $("<a>");
     dropdownList.addClass("dropdown-button btn" + name);
     dropdownList.attr('data-activates', "dropdown");
       var s = "<li>" + "-" + summary + "</li>";
                ul.append(s);
     // adding each summary to dropdown list (don't have it in json yet so just using name for test purposes)
     dropdownList.text(name);
     dropdownList.append(ul);
    
     // prepend the recipeDiv to the "#portfolio" div in the HTML
     portfolioImage.append(image);
     portfolioImage.append(dropdownList);
     $("#portfolio").append(portfolioImage);

// // drowpdown buttons
//  $('.dropdown-button').dropdown({
//       inDuration: 300,
//       outDuration: 225,
//       constrainWidth: false, // Does not change width of dropdown to that of the activator
//       hover: false, // Activate on hover
//       gutter: 0, // Spacing from edge
//       belowOrigin: true, // Displays dropdown below the button
//       alignment: 'left', // Displays dropdown with edge aligned to the left of button
//       stopPropagation: false // Stops event propagation
//     }
//   );


     }
     
 });
 
 
 
   };
   
   
   
   
   
  