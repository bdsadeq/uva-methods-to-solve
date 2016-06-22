var myApp = new Framework7({
    modalTitle: 'Methods to Solve',
    // Enable Material theme
    material: true,
    onAjaxStart: function (xhr) {
        myApp.showIndicator();
    },
    onAjaxComplete: function (xhr) {
        myApp.hideIndicator();
    },
    onPageInit: function (app, page) {
        if (page.name === 'index') {
            //code
        }
    }
});

// Expose Internal DOM library
var $$ = Dom7;

// Add main view
var mainView = myApp.addView('.view-main', {
});


document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    document.addEventListener("backbutton", function (e) {
        e.preventDefault();

        var page_name = myApp.mainView.activePage.view.activePage.name;

        //navigator.notification.alert(page_name);//test code

        if (page_name == 'index')
        {
            //navigator.notification.confirm('Are you sure to exit ?', exitMTS, 'Exit', ['Cancel', 'Exit']);
            myApp.modal({
                title: 'Exit',
                text: 'Are you sure to exit ?',
                buttons: [
                    {
                        text: 'Cancel',
                        onClick: function () {
                            //myApp.alert('You clicked third button!')
                        }
                    },
                    {
                        text: 'Rate App',
                        onClick: function () {
                            //myApp.alert('You clicked second button!')
                            rate_app();
                        }
                    },
                    {
                        text: 'Exit',
                        onClick: function () {
                            //myApp.alert('You clicked first button!')
                            exitApp();
                        }
                    },
                ]
            });

        } else
        {
            mainView.router.back();
        }

    }, false);
}

function exitMTS(buttonIndex) {
    if (buttonIndex == 2)
    {
        navigator.app.exitApp();
    }
}

function exitApp() {

    navigator.app.exitApp();
}

function rate_app()
{
    //window.location.href = "https://play.google.com/store/apps/details?id=com.uvamethodstosolve.winexsoft";
    var url = "https://play.google.com/store/apps/details?id=com.uvamethodstosolve.winexsoft";
    var ref = cordova.InAppBrowser.open(url, '_system', 'location=no');
}
