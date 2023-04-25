SceneManager._screenWidth       = 720;
SceneManager._screenHeight      = 912;
SceneManager._boxWidth          = 720;
SceneManager._boxHeight         = 912;
//一格48*48
Graphics._updateAllElements = function() {
    this._updateRealScale();
    this._updateErrorPrinter();
    this._updateCanvas();
    this._updateVideo();
    this._updateUpperCanvas();
    this._updateRenderer();
    this._updateFilterArea();
    this._updateScreenSprites();
    this._onWindowResize(); //新增這行程式碼
};