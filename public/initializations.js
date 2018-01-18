var elem = document.querySelector('.sidenav');
var instance = new M.Sidenav(elem, {});

// side nav
$(document).ready(function() {
    $('.sidenav').sidenav();
    $('.tabs').tabs({});
});
