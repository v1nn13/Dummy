var SILLY = (function (module) {

    module.DoIt = function(resultsObject) {
        resultsObject.append(Date() + '<br />');
    };

    return module;
    
}(SILLY || {}));