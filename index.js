var preferences = require("sdk/simple-prefs");
var hotkeyManager = require("./lib/hotkeyManager");
var pageWorkerManager = require("./lib/pageWorkerManager");

//attach content scripts to appropriate websites
exports.main = function () {
    pageWorkerManager.Init();
};

exports.onUnload = function () {
    hotkeyManager.UnregisterHotkeys();
    pageWorkerManager.Destroy();
};

function onPrefChange() { //re-register content scripts
    hotkeyManager.UnregisterHotkeys();
    pageWorkerManager.Destroy();
    pageWorkerManager.Init();
}

preferences.on("", onPrefChange);