jQuery(document).ready(function () {
    //myApp.loginScreen();
    var mySwiper = myApp.swiper('.swiper-container', {
        pagination: '.swiper-pagination'
    });
});

$$('.about_modal').on('click', function () {
    myApp.alert('<b>Md. Sadequr Rahman</b><br/>Sr. Software Engineer (Team Leader)<br/>Dream Door Soft Ltd.<br/><small>Version 1.0.0</small>', 'About');
});

$$('.contribute_modal').on('click', function () {
    myApp.alert('Send email to info@winexsoft.com to share your idea.', 'Contribute');
});

function facebook_share()
{
    var url = "https://play.google.com/store/apps/details?id=com.uvamethodstosolve.winexsoft";
    var ref = cordova.InAppBrowser.open('https://www.facebook.com/sharer/sharer.php?u=' + url + '&t=UVA+Methods+To+Solve', '_system', 'location=no');
}

function twitter_share()
{
    var url = "https://play.google.com/store/apps/details?id=com.uvamethodstosolve.winexsoft";
    var ref = cordova.InAppBrowser.open('https://twitter.com/share?url=' + url + '&via=bdsadeq&text=UVA+Methods+To+Solve', '_system', 'location=no');
}

