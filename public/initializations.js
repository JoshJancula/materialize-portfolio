var elem = document.querySelector('.sidenav');
var instance = new M.Sidenav(elem, {});

// side nav
$(document).ready(function() {
    $('.sidenav').sidenav();
    $('.tabs').tabs({
        onShow: function(tab) {
            $('#test6').carousel();
        }
    });
});



// Modal 
$(document).ready(function() {
    $('.modal').modal();
});

 $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
      stopPropagation: false // Stops event propagation
    }
  );
