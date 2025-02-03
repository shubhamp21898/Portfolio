window.flyAlertSetTimeoutObj = null;
function fnFlyAlert(data, type) {
    flyAlertSetTimeoutObj=null;
    $('.flyAlert').remove();
    if ($('.flyAlert').length == 0) {
        if (type == 'error') {
            $('body').append('<div class="flyAlert">' + data + '</div>');
        } else {
            $('body').append('<div class="flyAlert success">' + data + '</div>');
        }
        setTimeout(function () {
            $('.flyAlert').addClass('active');
            flyAlertSetTimeoutObj = setTimeout(function () {
                $('.flyAlert').removeClass('active');
                setTimeout(function () {
                    $('.flyAlert').remove();
                }, 1000);
            }, 1500);
        }, 100);
    }
}
function encPassword(password){
    var pass= btoa(password);
    return pass.toString();
}
function decPassword(password){
    var pass= atob(password);
    return pass.toString();
}
