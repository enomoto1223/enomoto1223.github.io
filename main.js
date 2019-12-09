//********************************************************
//*
//*    <main.js>
//*
//********************************************************
//定数の定義
var SCREEN_WIDTH    = 320;              // スクリーン幅
var SCREEN_HEIGHT   = 480;              // スクリーン高さ
var SCREEN_CENTER_X = SCREEN_WIDTH/2;   // スクリーン幅の半分
var SCREEN_CENTER_Y = SCREEN_HEIGHT/2;  // スクリーン高さの半分
 
//------------------------------------------
//
//  main
//
//------------------------------------------
tm.main(function() {
    var app = tm.display.CanvasApp("#world");
    app.resize(SCREEN_WIDTH, SCREEN_HEIGHT);
    app.fitWindow();
     
    app.replaceScene(TitleScene());
     
    app.run();
});
 
//------------------------------------------
//
//  TitleScene
//
//------------------------------------------
tm.define("TitleScene", {
    superClass : "tm.app.TitleScene",   
    init : function() {
        this.superInit({
            title :  "ゲームタイトル",
            width:SCREEN_WIDTH,
            height:SCREEN_HEIGHT,
        });
        //画面をタッチした時の処理
        this.addEventListener("pointingend", function(e) {
            // シーンの遷移
            e.app.replaceScene(GameScene());
        });
    }
});
 
//------------------------------------------
//
//  GameScene
//
//------------------------------------------
tm.define("GameScene", {
    superClass: "tm.app.Scene",
     
    init: function() {
        this.superInit();
    },
});
