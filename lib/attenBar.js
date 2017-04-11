function getCPU() {
    var agent = navigator.userAgent.toLowerCase();
    if (agent.indexOf("win64") >= 0 || agent.indexOf("wow64") >= 0) return "x64";
    return navigator.cpuClass;
}

function getBrowserInfo() {
    var agent = navigator.userAgent.toLowerCase();
    var regStr_ie = /msie [\d.]+;/gi;
    var regStr_ff = /firefox\/[\d.]+/gi;
    var regStr_chrome = /chrome\/[\d.]+/gi;
    var regStr_saf = /safari\/[\d.]+/gi;

    //IE
    if (agent.indexOf("msie") > 0) {
        return agent.match(regStr_ie);
    }
    //firefox
    else if (agent.indexOf("firefox") > 0) {
        return agent.match(regStr_ff);
    }
    //Chrome
    else if (agent.indexOf("chrome") > 0) {
        return agent.match(regStr_chrome);
    }
    //Safari
    else if (agent.indexOf("safari") > 0 && agent.indexOf("chrome") < 0) {
        return agent.match(regStr_saf);
    }
    else {
        return "";
    }

}

function display() {
    $("#versionBar").hide();
}