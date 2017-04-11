
$(document).ready(function () {
    window.onmessage = function (e) {
        e = e || event;
        var jsObj = JSON.parse(e.data);
        if (jsObj && jsObj.CommandType == 1) {
            Active(jsObj.ToModule, e.data)
        }
    }
});
