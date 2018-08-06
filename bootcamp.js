var bootcamp = {
    utilities: {}
    , layout: {}
    , page: {
        handlers: {
        }
        , startUp: null
    }
    , services: {}
    , ui: {}
  
};
bootcamp.moduleOptions = {
        APPNAME: "TextApp"
        , extraModuleDependencies: []
        , runners: []
        , page: bootcamp.page//we need this object here for later use
}

var BOOTCAMP_AUTH = null;

bootcamp.layout.startUp = function () {

    console.debug("bootcamp.layout.startUp");

    if(BOOTCAMP_AUTH)
    {
        console.debug("setting BOOTCAMP_AUTH header to " + BOOTCAMP_AUTH);
        $.ajaxSetup({
            headers: { 'BOOTCAMP_AUTH': BOOTCAMP_AUTH }
        });


    }

    //this does a null check on bootcamp.page.startUp
    if (bootcamp.page.startUp) {
        console.debug("bootcamp.page.startUp");
        bootcamp.page.startUp();
    }
};
bootcamp.APPNAME = "TextApp";//legacy



$(document).ready(bootcamp.layout.startUp);