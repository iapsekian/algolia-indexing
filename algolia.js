function processSearch1(inputId){
    var e = document.getElementById(inputId);
    var c = e.value;
    var o = location.origin;
    var p = location.pathname;
    window.location.href = o + '/en/search' + '?query=' + c;
}

function processSearch2(inputId){
    var e = document.getElementById(inputId);
    var c = e.value;
    var o = location.origin;
    var p = location.pathname;
    window.location.href = o + p + '?query=' + c;
}

function processThemesSearch(inputId){
    var e = document.getElementById(inputId);
    var c = e.value;
    var o = location.origin;
    var p = location.pathname;
    window.location.href = o + p + '?query=' + c + '#searchResultStarting';
}

var client = algoliasearch("86BJDEFD7C", "c48d1003210ae40852c33a253bc0eca3");
var tours = client.initIndex('BookUrTours');
var cities = client.initIndex('BookUrCities');
var attractions = client.initIndex('BookUrAttractions');