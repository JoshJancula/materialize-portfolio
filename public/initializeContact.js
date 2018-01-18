var elem = document.querySelector('.modal');
var instance = new M.Modal(elem, {});
var elem2 = document.querySelector('.sidenav');
// var instance2 = new M.Sidenav(elem2, {});

  $(document).ready(function() {
    $('.sidenav').sidenav();
    $('.modal').modal();
   
});
   