var SILLY = (function (module) {

    module.DoIt = function(resultsObject) {
        resultsObject.prepend(Date() + '<br />');
    };

    return module;
    
}(SILLY || {}));