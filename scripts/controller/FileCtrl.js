define(function(require){
    var Util = require('scripts/util');
    var Serializer = require('scripts/serializer/json-serializer');
	var editor = require('scripts/controller/EditorCtrl');
	var song = require('scripts/model/song');

    var FileCtrl =  function($scope){

        this.saveFile = function(){
            Util.saveFile('song.json', Serializer.serialize($scope.song));
        };

        this.openFile = function(ev){
            $("#hiddenFileInput")
                .click()
                .bind('change', function(){
                    var reader = new FileReader();
                    reader.onload = function(e){
                        $scope.&parent.song = Serializer.deserialize(e.target.result);
                    };
                    reader.readAsText($("#hiddenFileInput")[0].files[0]);
                });
        };
    };

    return FileCtrl;
});