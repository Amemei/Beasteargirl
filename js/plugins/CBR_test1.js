/*
##################################################
	作者: COBRA
	改造や配布しても大丈夫だよ
	寧ろ積極的に配布して皆のゲーム快適にしてあげて
	もし音信普通になったら誰でもいいから引き継いで
	http://cobrara.blogspot.jp/
	https://twitter.com/onarinin_san
##################################################
*/

/*:
* @plugindesc メニューの色かえるやつ
* @author COBRA
* @help Version 1.0.0　2020/4/16
* rpg_core.js v1.6.1に対応
* 
*/

Window_MenuStatus.prototype.initialize = function(x, y) {
    var width = this.windowWidth();
    var height = this.windowHeight();
    Window_Selectable.prototype.initialize.call(this, x, y, width, height);
    this._formationMode = false;
    this._pendingIndex = -1;
    this.refresh();
	
	//専用プラグインだしここ変更
	this._refreshCursor = function() {
		var pad = this._padding;
		var x = this._cursorRect.x + pad - this.origin.x;
		var y = this._cursorRect.y + pad - this.origin.y;
		var w = this._cursorRect.width;
		var h = this._cursorRect.height;
		var m = 4;
		var x2 = Math.max(x, pad);
		var y2 = Math.max(y, pad);
		var ox = x - x2;
		var oy = y - y2;
		var w2 = Math.min(w, this._width - pad - x2);
		var h2 = Math.min(h, this._height - pad - y2);
		var bitmap = new Bitmap(w2, h2);
	
		this._windowCursorSprite.bitmap = bitmap;
		this._windowCursorSprite.setFrame(0, 0, w2, h2);
		this._windowCursorSprite.move(x2, y2);
	
		if (w > 0 && h > 0 && this._windowskin) {
			var skin = this._windowskin;
			var p = 96;
			var q = 48;
			bitmap.blt(skin, p+m, p+m, q-m*2, q-m*2, ox+m, oy+m, w-m*2, h-m*2);
			bitmap.blt(skin, p+m, p+0, q-m*2, m, ox+m, oy+0, w-m*2, m);
			bitmap.blt(skin, p+m, p+q-m, q-m*2, m, ox+m, oy+h-m, w-m*2, m);
			bitmap.blt(skin, p+0, p+m, m, q-m*2, ox+0, oy+m, m, h-m*2);
			bitmap.blt(skin, p+q-m, p+m, m, q-m*2, ox+w-m, oy+m, m, h-m*2);
			bitmap.blt(skin, p+0, p+0, m, m, ox+0, oy+0, m, m);
			bitmap.blt(skin, p+q-m, p+0, m, m, ox+w-m, oy+0, m, m);
			bitmap.blt(skin, p+0, p+q-m, m, m, ox+0, oy+h-m, m, m);
			bitmap.blt(skin, p+q-m, p+q-m, m, m, ox+w-m, oy+h-m, m, m);
		}
		bitmap.adjustTone(150,-255,-255);//ここだけ
	};
};