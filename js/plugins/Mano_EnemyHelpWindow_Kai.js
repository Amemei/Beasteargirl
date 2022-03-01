// [SQUARE PHOENIX] : http://enix.web.fc2.com/
//=============================================================================
// Manosasayaki_EnemyInformationWindow.js
// ----------------------------------------------------------------------------
// Copyright (c) 2017-2017 Sigureya
// This software is released under the MIT License.
// http://opensource.org/licenses/mit-license.php
// ----------------------------------------------------------------------------
// [Twitter]: https://twitter.com/Sigureya/
// [github]:https://github.com/Sigureya/RPGmakerMV
//=============================================================================

/*:ja
 * @plugindesc 攻撃対象を選ぶ段階で相手の弱点を表示します。
 *
 * @author 原作：しぐれん（魔のささやき）改変：SQUARE_PHOENIX
 *
 * @param WindowRect
 *
 * @param WindowWidth
 * @type number
 * @desc ウィンドウの幅
 * @default 300
 * @parent WindowRect
 *
 * @param WindowHeight
 * @type number
 * @desc ウィンドウの高さ
 * @default 150
 * @parent WindowRect
 *
 * @param WindowX
 * @type number
 * @desc ウィンドウのX座標
 * @default
 * @parent WindowRect
 *
 * @param WindowY
 * @type number
 * @desc ウィンドウのY座標
 * @default
 * @parent WindowRect
 *
 * @param 弱点判定ライン
 *
 * @param WeakLine
 * @type number
 * @desc 弱点の閾値。
 * 属性有効度がこの数値を上回ると、弱点として表示します。
 * @default 100
 * @parent 弱点判定ライン
 *
 * @param ResistanceLine
 * @type number
 * @desc 耐性の閾値
 * 属性有効度がこの数値を下回ると、耐性として表示します。
 * @default 100
 * @parent 弱点判定ライン
 *
 * @param displayName
 * @param WeakName
 * @desc 弱点の表示名。
 * @default 弱点：
 * @parent displayName
 *
 * @param ResistanceName
 * @desc 耐性の表示名。
 * @default 耐性：
 * @parent displayName
 *
 * @param displayMode
 * @type select
 * @option text
 * @option icon
 * @desc 属性を文字で表示するかアイコンで表示するかを決めます。
 * @default icon
 *
 * @param iconList
 * @type string[]
 * @desc 属性アイコン用のアイコンIDを定義します。
 * 属性の並び順と同じように、並べてください。
 * @default ["77","64","65","66","67","68","69","70","71"]
 * @parent dataType
 *
 * @help
 * エネミーを選んでいる時に弱点を表示します。
 * 原作のプラグインをアイコンモードに対応させました。
 * 利用規約：
 しぐれん様のプラグインを改造していますので、しぐれん様の規約に準じます。
↓しぐれん様の規約
MITライセンスとします。
ReadMeに以下の記述をお願いします。
しぐれん
[Twitter]: https://twitter.com/Sigureya/
[github]:https://github.com/Sigureya/RPGmakerMV
↓SQUARE_PHOENIXの規約
自己責任でご自由にお使いください。
 */

(function (global) {
    'use strict';
// ========================================================================
// パラメータの型変換
// 　　値の型を自動で判定して変換します。入れ子対応。
// ========================================================================
var paramParse = function(obj) {
    return JSON.parse(JSON.stringify(obj, paramReplace), paramRevive);
};
var paramReplace = function(key, value) {
    try {
        return JSON.parse(value || null);
    } catch (e) {
        return value;
    }
};
// 値が計算式やJavaScriptであれば実行します。コアスクリプト非対応。
// 明示的に文字列型にするにはパラメータをシングルクォートで囲ってください。
var paramRevive = function(key, value) {
    try {
        return eval(value || value);
    } catch (e) {
        return value;
    }
};
var pluginName = 'Mano_EnemyHelpWindow_Kai';
var parameters = PluginManager.parameters(pluginName);
var param = paramParse(parameters);
    function toIcon(elementId){
 var icon_array = param.iconList;//zokusei_list;//zokusei_list.split(',');
        return '\\I['+icon_array[elementId-1]+']';
    }
    function toElementName(elementId){
        return $dataSystem.elements[elementId];
    }
	//var param = PluginManager.parameters('Mano_EnemyHelpWindow');
	var enemyHelp ={
        weakLine:Number(param.WeakLine)/100,
	    resistanceLine:Number(param.ResistanceLine)/100,
        weakName : String(param.WeakName),
        resistanceName :String(param.ResistanceName),
        displayMode : String(param.displayMode),
        rect :{
            x:parseInt(param.WindowX),
            y:parseInt(param.WindowY),
            width:Number(param.WindowWidth),
            height:Number(param.WindowHeight)
        },
        elementIcon:param.iconList,
      };
    const elementItemFunc=enemyHelp.displayMode==='text' ? toElementName:toIcon;

class Window_EenmyHelp extends Window_Base{
    constructor(x,y,w,h){
        super(x,y,w,h);
        this._textCache =[];
    }
    clearCache(){
        this._textCache.length=0;
    }
    createEnemyHelpText(battler){
        const len = $dataSystem.elements.length;
        var weakList=[];
        var resistanceList=[];

        for(var i=1; i< len;i+=1){
            const rate =battler.elementRate(i);
            if(rate> enemyHelp.weakLine){
                weakList.push(i);
            }else  if(rate < enemyHelp.resistanceLine){
                resistanceList.push(i);
            }
        }
        var weakText = '\n'+(enemyHelp.weakName);
        weakList.forEach(function(value){
            weakText += elementItemFunc(value);
        });
        var resistanceText ='\n' +enemyHelp.resistanceName;
        resistanceList.forEach(function(value){
            resistanceText += elementItemFunc(value);
        });

        return battler.name()+weakText + resistanceText;
    }

    setItem(enemyBattler){
        const enemy = enemyBattler.enemy();
        const index =enemyBattler.index();
        if(!this._textCache[index]){
            this._textCache[index]=this.createEnemyHelpText(enemyBattler);
        }

        this.contents.clear();
        this.drawTextEx(this._textCache[index],0,0);

    }
};

const Scene_Battle_createAllWindows = Scene_Battle.prototype.createAllWindows;
Scene_Battle.prototype.createAllWindows=function(){
    Scene_Battle_createAllWindows.call(this);
    const r = enemyHelp.rect;
    const x = !Number.isNaN(r.x) ? r.x : Graphics.boxWidth- r.width;
    const y = !Number.isNaN(r.y) ? r.y : this._enemyWindow.y - r.height;
    var help =new Window_EenmyHelp(x,y,r.width,r.height);
    this.addChild(help);
    help.hide();
    this._enemyHelpWindow_MA =help;
    this._enemyWindow.setHelpWindow(help);
};

Scene_Battle.prototype.isInputCompleted =function(){
    return !BattleManager.isInputting();
};
Scene_Battle.prototype.onInputComplete =function(){
    this._enemyHelpWindow_MA.clearCache();
};

const Scene_Battle_selectNextCommand = Scene_Battle.prototype.selectNextCommand;
Scene_Battle.prototype.selectNextCommand = function() {
    Scene_Battle_selectNextCommand.call(this);
    if(this.isInputCompleted()){
        this.onInputComplete();
    }
};


const Window_BattleEnemy_show = Window_BattleEnemy.prototype.show;
Window_BattleEnemy.prototype.show = function() {
    Window_BattleEnemy_show.call(this);
    this.showHelpWindow();
};

const Window_BattleEnemy_hide = Window_BattleEnemy.prototype.hide;
Window_BattleEnemy.prototype.hide = function() {
    Window_BattleEnemy_hide.call(this);
    this.hideHelpWindow();
};

//const Window_BattleEnemy_updateHelp=Window_BattleEnemy.prototype.updateHelp;
Window_BattleEnemy.prototype.updateHelp = function() {
//    Window_BattleEnemy_updateHelp.call(this);
    this.setHelpWindowItem(this.enemy());
};

})();
