// es5 for browser compatibility
function validateCookie() {
    const pairs = document.cookie.split(';');
    const cookies = {};
    pairs.forEach(function (value) {
        const pair = value.split('=');
        cookies[(pair[0] + '').trim()] = unescape(pair.slice(1).join('='));
    });
    const hasAuth = !!cookies.jeuid;

    if (!hasAuth) {
        window.location.href = '/torpedo/v1/login';
    }
};

function submitForm() {
    document.forms['myform'].submit();
};
