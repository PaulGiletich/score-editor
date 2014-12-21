define(function (require) {

    window.EditorCtrl = require('scripts/controller/EditorCtrl');
    window.FileCtrl = require('scripts/controller/FileCtrl');
    window.TrackViewCtrl = require('scripts/controller/TrackViewCtrl');
    window.KeyboardCtrl = require('scripts/controller/KeyboardCtrl');
    window.FretboardCtrl = require('scripts/controller/FretboardCtrl');
	window.DrumkitCtrl = require('scripts/controller/DrumkitCtrl');

    var app = angular.module("app", ['ui.bootstrap']);
    require(['domReady'], function(document){
        angular.bootstrap(document, ['app']);
    });

    return app;
});