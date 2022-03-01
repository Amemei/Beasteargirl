//=============================================================================
// RecollectionMode.js
// Copyright (c) 2015 rinne_grid
// This plugin is released under the MIT license.
// http://opensource.org/licenses/mit-license.php
//
// Version
// 1.0.0 2015/12/26 公開
// 1.1.0 2016/04/19 回想一覧にサムネイルを指定できるように対応
// 1.1.1 2016/05/03 セーブデータ20番目のスイッチが反映されない不具合を修正
//                  セーブデータ間のスイッチ共有オプション
//                  (share_recollection_switches)を追加
// 1.1.2 2016/05/09 回想用のCGリストのキーを数字から文字列に変更
// 1.1.3 2016/11/23 セーブデータが増えた場合にロード時間が長くなる問題を解消
// 1.1.4 2016/12/23 CG閲覧時にクリック・タップで画像送りができるよう対応
// 1.1.5 2017/01/26 CG・シーンで一部サムネイルが表示されない問題を解消
//=============================================================================

/*:ja
 * @plugindesc 回想モード機能を追加します。
 * @author rinne_grid
 *
 *
 * @help このプラグインには、プラグインコマンドはありません。
 *
 */

//-----------------------------------------------------------------------------
// ◆ プラグイン設定
//-----------------------------------------------------------------------------
    var rngd_recollection_mode_settings = {
  "rec_cg_set": {
    "1": {
      "title": "塞蕾娜胸爱抚",
      "common_event_id": 200,
      "switch_id": 121,
      "thumbnail": "ts",
      "pictures": []
    },
    "2": {
      "title": "性接待服务",
      "common_event_id": 201,
      "switch_id": 122,
      "thumbnail": "t01",
      "pictures": []
    },
    "3": {
      "title": "塞蕾娜自慰",
      "common_event_id": 202,
      "switch_id": 123,
      "thumbnail": "ts",
      "pictures": []
    },
    "4": {
      "title": "少女的乘骑位",
      "common_event_id": 203,
      "switch_id": 124,
      "thumbnail": "t35",
      "pictures": []
    },
    "5": {
      "title": "波太奇的性骚扰",
      "common_event_id": 204,
      "switch_id": 125,
      "thumbnail": "ts",
      "pictures": []
    },
    "6": {
      "title": "阿兹罗乱交",
      "common_event_id": 205,
      "switch_id": 126,
      "thumbnail": "t02",
      "pictures": []
    },
    "7": {
      "title": "塞蕾娜摄影",
      "common_event_id": 213,
      "switch_id": 133,
      "thumbnail": "ts",
      "pictures": []
    },
    "8": {
      "title": "丽莎胸交",
      "common_event_id": 214,
      "switch_id": 134,
      "thumbnail": "t16",
      "pictures": []
    },
    "9": {
      "title": "玛雅口交",
      "common_event_id": 215,
      "switch_id": 135,
      "thumbnail": "t34",
      "pictures": []
    },
    "10": {
      "title": "丽莎自慰",
      "common_event_id": 216,
      "switch_id": 136,
      "thumbnail": "tl",
      "pictures": []
    },
    "11": {
      "title": "AV摄影",
      "common_event_id": 217,
      "switch_id": 137,
      "thumbnail": "t17",
      "pictures": []
    },
    "12": {
      "title": "丽莎摄影",
      "common_event_id": 218,
      "switch_id": 138,
      "thumbnail": "tl",
      "pictures": []
    },
    "13": {
      "title": "纳迪雅性骚扰",
      "common_event_id": 219,
      "switch_id": 139,
      "thumbnail": "ts",
      "pictures": []
    },
    "14": {
      "title": "嗑药派对",
      "common_event_id": 220,
      "switch_id": 140,
      "thumbnail": "t19",
      "pictures": []
    },
    "15": {
      "title": "乳头服侍",
      "common_event_id": 221,
      "switch_id": 141,
      "thumbnail": "t03",
      "pictures": []
    },
    "16": {
      "title": "被猪强奸",
      "common_event_id": 222,
      "switch_id": 142,
      "thumbnail": "t04",
      "pictures": []
    },
    "17": {
      "title": "色情接待",
      "common_event_id": 223,
      "switch_id": 143,
      "thumbnail": "t18",
      "pictures": []
    },
    "18": {
      "title": "纳迪雅足交",
      "common_event_id": 224,
      "switch_id": 144,
      "thumbnail": "t36",
      "pictures": []
    },
    "19": {
      "title": "街道露出徘徊",
      "common_event_id": 225,
      "switch_id": 145,
      "thumbnail": "t05",
      "pictures": []
    },
    "20": {
      "title": "玛雅逆性交",
      "common_event_id": 226,
      "switch_id": 146,
      "thumbnail": "t38",
      "pictures": []
    },
    "21": {
      "title": "清扫屁穴",
      "common_event_id": 227,
      "switch_id": 147,
      "thumbnail": "t20",
      "pictures": []
    },
    "22": {
      "title": "淫纹发情做爱",
      "common_event_id": 228,
      "switch_id": 148,
      "thumbnail": "t06",
      "pictures": []
    },
    "23": {
      "title": "马尔格后背位",
      "common_event_id": 229,
      "switch_id": 149,
      "thumbnail": "t21",
      "pictures": []
    },
    "24": {
      "title": "劳拉壁穴",
      "common_event_id": 230,
      "switch_id": 150,
      "thumbnail": "t37",
      "pictures": []
    },
    "25": {
      "title": "丽莎的口交服务",
      "common_event_id": 231,
      "switch_id": 151,
      "thumbnail": "t22",
      "pictures": []
    },
    "26": {
      "title": "塞蕾娜土下座",
      "common_event_id": 232,
      "switch_id": 152,
      "thumbnail": "t07",
      "pictures": []
    },
    "27": {
      "title": "塞蕾娜纯爱H",
      "common_event_id": 233,
      "switch_id": 153,
      "thumbnail": "t13",
      "pictures": []
    },
    "28": {
      "title": "丽莎纯爱H",
      "common_event_id": 234,
      "switch_id": 154,
      "thumbnail": "t28",
      "pictures": []
    },
    "29": {
      "title": "３P口服侍",
      "common_event_id": 235,
      "switch_id": 155,
      "thumbnail": "t32",
      "pictures": []
    },
    "30": {
      "title": "３P插入",
      "common_event_id": 236,
      "switch_id": 156,
      "thumbnail": "t33",
      "pictures": []
    },
    "31": {
      "title": "纳迪雅H",
      "common_event_id": 257,
      "switch_id": 170,
      "thumbnail": "t39",
      "pictures": []
    },
    "32": {
      "title": "劳拉H",
      "common_event_id": 258,
      "switch_id": 171,
      "thumbnail": "t40",
      "pictures": []
    },
    "33": {
      "title": "迷失的塞蕾娜",
      "common_event_id": 237,
      "switch_id": 157,
      "thumbnail": "ts",
      "pictures": []
    },
    "34": {
      "title": "给阿巴蒂尼口交",
      "common_event_id": 238,
      "switch_id": 158,
      "thumbnail": "t01",
      "pictures": []
    },
    "35": {
      "title": "阿巴蒂尼乘骑位",
      "common_event_id": 239,
      "switch_id": 159,
      "thumbnail": "t08",
      "pictures": []
    },
    "36": {
      "title": "怀孕乘骑位",
      "common_event_id": 242,
      "switch_id": 160,
      "thumbnail": "t08",
      "pictures": []
    },
    "37": {
      "title": "塞蕾娜奴隶调教",
      "common_event_id": 243,
      "switch_id": 161,
      "thumbnail": "t06",
      "pictures": []
    },
    "38": {
      "title": "公开便器自慰",
      "common_event_id": 245,
      "switch_id": 162,
      "thumbnail": "t09",
      "pictures": []
    },
    "39": {
      "title": "完全堕落后背位",
      "common_event_id": 246,
      "switch_id": 163,
      "thumbnail": "t10",
      "pictures": []
    },
    "40": {
      "title": "落入陷阱的丽莎",
      "common_event_id": 247,
      "switch_id": 164,
      "thumbnail": "tl",
      "pictures": []
    },
    "41": {
      "title": "给马尔格口交",
      "common_event_id": 248,
      "switch_id": 165,
      "thumbnail": "t22",
      "pictures": []
    },
    "42": {
      "title": "马尔格性交",
      "common_event_id": 249,
      "switch_id": 190,
      "thumbnail": "t23",
      "pictures": []
    },
    "43": {
      "title": "怀孕性交",
      "common_event_id": 252,
      "switch_id": 166,
      "thumbnail": "t23",
      "pictures": []
    },
    "44": {
      "title": "对丽莎的重度调教",
      "common_event_id": 253,
      "switch_id": 167,
      "thumbnail": "t21",
      "pictures": []
    },
    "45": {
      "title": "马尔格的奴隶",
      "common_event_id": 255,
      "switch_id": 168,
      "thumbnail": "t24",
      "pictures": []
    },
    "46": {
      "title": "完全堕落正常位",
      "common_event_id": 256,
      "switch_id": 169,
      "thumbnail": "t25",
      "pictures": []
    },
    "47": {
      "title": "塞蕾娜怀孕",
      "common_event_id": 206,
      "switch_id": 127,
      "thumbnail": "ts",
      "pictures": []
    },
    "48": {
      "title": "塞蕾娜治疗",
      "common_event_id": 211,
      "switch_id": 131,
      "thumbnail": "ts",
      "pictures": []
    },
    "49": {
      "title": "丽莎怀孕",
      "common_event_id": 207,
      "switch_id": 128,
      "thumbnail": "tl",
      "pictures": []
    },
    "50": {
      "title": "丽莎治疗",
      "common_event_id": 212,
      "switch_id": 132,
      "thumbnail": "tl",
      "pictures": []
    },
    "51": {
      "title": "被视奸的自慰",
      "common_event_id": 260,
      "switch_id": 172,
      "thumbnail": "t11",
      "pictures": []
    },
    "52": {
      "title": "帮忙口交",
      "common_event_id": 262,
      "switch_id": 173,
      "thumbnail": "t12",
      "pictures": []
    },
    "53": {
      "title": "充满爱意的性交",
      "common_event_id": 264,
      "switch_id": 174,
      "thumbnail": "t11",
      "pictures": []
    },
    "54": {
      "title": "无法被满足的性交",
      "common_event_id": 266,
      "switch_id": 181,
      "thumbnail": "t11",
      "pictures": []
    },
    "55": {
      "title": "塞蕾娜外遇",
      "common_event_id": 270,
      "switch_id": 176,
      "thumbnail": "t06",
      "pictures": []
    },
    "56": {
      "title": "丽莎素股",
      "common_event_id": 272,
      "switch_id": 178,
      "thumbnail": "t26",
      "pictures": []
    },
    "57": {
      "title": "甜蜜的口交",
      "common_event_id": 274,
      "switch_id": 179,
      "thumbnail": "t27",
      "pictures": []
    },
    "58": {
      "title": "甜蜜的性交",
      "common_event_id": 276,
      "switch_id": 180,
      "thumbnail": "t26",
      "pictures": []
    },
    "59": {
      "title": "无法满足的做爱",
      "common_event_id": 278,
      "switch_id": 182,
      "thumbnail": "t26",
      "pictures": []
    },
    "60": {
      "title": "丽莎外遇",
      "common_event_id": 271,
      "switch_id": 177,
      "thumbnail": "t21",
      "pictures": []
    }
  },
  "rec_mode_bgm": {
    "bgm": {
      "name": "h",
      "pan": 0,
      "pitch": 100,
      "volume": 30
    }
  },
  "rec_mode_window": {
    "x": 260,
    "y": 180,
    "recollection_title": "回想房间",
    "str_select_recollection": "要看回想吗",
    "str_select_cg": "只看CG",
    "str_select_back_title": "回到标题界面"
  },
  "rec_list_window": {
    "item_height": 3,
    "item_width": 4,
    "show_title_text": true,
    "title_text_align": "center",
    "never_watch_picture_name": "never_watch_picture",
    "never_watch_title_text": "？？？"
  },
  "sandbox_map_id": 50,
  "share_recollection_switches": true
};

    function rngd_hash_size(obj) {
        var cnt = 0;
        for(var o in obj) {
            cnt++;
        }
        return cnt;
    }

//-----------------------------------------------------------------------------
// ◆ Scene関数
//-----------------------------------------------------------------------------

    //=========================================================================
    // ■ Scene_Recollection
    //=========================================================================
    // 回想用のシーン関数です
    //=========================================================================
    function Scene_Recollection() {
        this.initialize.apply(this, arguments);
    }

    Scene_Recollection.prototype = Object.create(Scene_Base.prototype);
    Scene_Recollection.prototype.constructor = Scene_Recollection;

    Scene_Recollection.prototype.initialize = function() {
        Scene_Base.prototype.initialize.call(this);
    };

    Scene_Recollection.prototype.create = function() {
        Scene_Base.prototype.create.call(this);
        this.createWindowLayer();
        this.createCommandWindow();
    };

    // 回想モードのカーソル
    Scene_Recollection.rec_list_index = 0;

    // 回想モードの再読み込み判定用 true: コマンドウィンドウを表示せず回想リストを表示 false:コマンドウィンドウを表示
    Scene_Recollection.reload_rec_list = false;

    Scene_Recollection.prototype.createCommandWindow = function() {

        if(Scene_Recollection.reload_rec_list) {
            // 回想モード選択ウィンドウ
            this._rec_window = new Window_RecollectionCommand();
            this._rec_window.setHandler('select_recollection', this.commandShowRecollection.bind(this));
            this._rec_window.setHandler('select_cg', this.commandShowCg.bind(this));
            this._rec_window.setHandler('select_back_title', this.commandBackTitle.bind(this));

            // リロードの場合：選択ウィンドウを非表示にする
            this._rec_window.visible = false;
            this._rec_window.deactivate();
            this.addWindow(this._rec_window);

            // 回想リスト
            this._rec_list = new Window_RecList(0, 0, Graphics.width, Graphics.height);

            // リロードの場合：回想リストを表示にする
            this._rec_list.visible = true;
            this._rec_list.setHandler('ok', this.commandDoRecMode.bind(this));
            this._rec_list.setHandler('cancel', this.commandBackSelectMode.bind(this));
            this._mode = "recollection";
            this._rec_list.activate();
            this._rec_list.select(Scene_Recollection.rec_list_index);

            this.addWindow(this._rec_list);

            // CG参照用ダミーコマンド
            this._dummy_window = new Window_Command(0, 0);
            this._dummy_window.deactivate();
            this._dummy_window.visible = false;
            this._dummy_window.setHandler('ok', this.commandDummyOk.bind(this));
            this._dummy_window.setHandler('cancel', this.commandDummyCancel.bind(this));
            this._dummy_window.addCommand('next', 'ok');
            this.addWindow(this._dummy_window);

            Scene_Recollection.reload_rec_list = false;

        } else {
            // 回想モード選択ウィンドウ
            this._rec_window = new Window_RecollectionCommand();
            this._rec_window.setHandler('select_recollection', this.commandShowRecollection.bind(this));
            this._rec_window.setHandler('select_cg', this.commandShowCg.bind(this));
            this._rec_window.setHandler('select_back_title', this.commandBackTitle.bind(this));
            this.addWindow(this._rec_window);

            // 回想リスト
            this._rec_list = new Window_RecList(0, 0, Graphics.width, Graphics.height);
            this._rec_list.visible = false;
            this._rec_list.setHandler('ok', this.commandDoRecMode.bind(this));
            this._rec_list.setHandler('cancel', this.commandBackSelectMode.bind(this));
            this._rec_list.select(Scene_Recollection.rec_list_index);
            this.addWindow(this._rec_list);

            // CG参照用ダミーコマンド
            this._dummy_window = new Window_Command(0, 0);
            this._dummy_window.deactivate();
            this._dummy_window.playOkSound = function(){}; // CGﾓｰﾄﾞの場合、OK音を鳴らさない
            this._dummy_window.visible = false;
            this._dummy_window.setHandler('ok', this.commandDummyOk.bind(this));
            this._dummy_window.setHandler('cancel', this.commandDummyCancel.bind(this));
            this._dummy_window.addCommand('next', 'ok');
            this.addWindow(this._dummy_window);
        }

    };

    //-------------------------------------------------------------------------
    // ● 開始処理
    //-------------------------------------------------------------------------
    Scene_Recollection.prototype.start = function() {
        Scene_Base.prototype.start.call(this);
        this._rec_window.refresh();
        this._rec_list.refresh();
        AudioManager.playBgm(rngd_recollection_mode_settings.rec_mode_bgm.bgm);
        Scene_Recollection._rngd_recollection_doing = false;
    };

    //-------------------------------------------------------------------------
    // ● 更新処理
    //-------------------------------------------------------------------------
    Scene_Recollection.prototype.update = function() {
        Scene_Base.prototype.update.call(this);

    };

    //-------------------------------------------------------------------------
    // ● 「回想を見る」を選択した際のコマンド
    //-------------------------------------------------------------------------
    Scene_Recollection.prototype.commandShowRecollection = function() {
        // モードウィンドウの無効化とリストウィンドウの有効化
        this.do_exchange_status_window(this._rec_window, this._rec_list);
        this._mode = "recollection";
    };

    //-------------------------------------------------------------------------
    // ● 「CGを見る」を選択した際のコマンド
    //-------------------------------------------------------------------------
    Scene_Recollection.prototype.commandShowCg = function() {
        this.do_exchange_status_window(this._rec_window, this._rec_list);
        this._mode = "cg";
    };

    //-------------------------------------------------------------------------
    // ● 「タイトルに戻る」を選択した際のコマンド
    //-------------------------------------------------------------------------
    Scene_Recollection.prototype.commandBackTitle = function() {
        Scene_Recollection.rec_list_index = 0;
        SceneManager.goto(Scene_Title);
    };

    //-------------------------------------------------------------------------
    // ● 回想orCGモードから「キャンセル」して前の画面に戻った場合のコマンド
    //-------------------------------------------------------------------------
    Scene_Recollection.prototype.commandBackSelectMode = function() {
        this.do_exchange_status_window(this._rec_list, this._rec_window);
    };

    //-------------------------------------------------------------------------
    // ● 回想orCGモードにおいて、実際の回想orCGを選択した場合のコマンド
    //-------------------------------------------------------------------------
    Scene_Recollection.prototype.commandDoRecMode = function() {
        var target_index = this._rec_list.index() + 1;
        Scene_Recollection.rec_list_index = target_index - 1;

        if (this._rec_list.is_valid_picture(this._rec_list.index() + 1)) {
            // 回想モードの場合
            if (this._mode == "recollection") {
                Scene_Recollection._rngd_recollection_doing = true;

                DataManager.setupNewGame();
                $gamePlayer.setTransparent(255);
                this.fadeOutAll();
                // TODO: パーティを透明状態にする

                //$dataSystem.optTransparent = false;
                $gameTemp.reserveCommonEvent(rngd_recollection_mode_settings.rec_cg_set[target_index]["common_event_id"]);
                $gamePlayer.reserveTransfer(rngd_recollection_mode_settings.sandbox_map_id, 0, 0, 0);
                SceneManager.push(Scene_Map);

                // CGモードの場合
            } else if (this._mode == "cg") {
                this._cg_sprites = [];
                this._cg_sprites_index = 0;

                // シーン画像をロードする
                rngd_recollection_mode_settings.rec_cg_set[target_index].pictures.forEach(function (name) {
                    // CGクリックを可能とする
                    var sp = new Sprite_Button();
                    sp.setClickHandler(this.commandDummyOk.bind(this));
                    sp.processTouch = function() {
                        Sprite_Button.prototype.processTouch.call(this);

                    };
                    sp.bitmap = ImageManager.loadPicture(name);
                    // 最初のSprite以外は見えないようにする
                    if (this._cg_sprites.length > 0) {
                        sp.visible = false;
                    }

                    // TODO: 画面サイズにあわせて、拡大・縮小すべき
                    this._cg_sprites.push(sp);
                    this.addChild(sp);

                }, this);

                this.do_exchange_status_window(this._rec_list, this._dummy_window);
                this._dummy_window.visible = false;
            }
        } else {
            this._rec_list.activate();
        }
    };

    Scene_Recollection.prototype.commandDummyOk = function() {

        if(this._cg_sprites_index < this._cg_sprites.length - 1) {
            this._cg_sprites[this._cg_sprites_index].visible = false;
            this._cg_sprites_index++;
            this._cg_sprites[this._cg_sprites_index].visible = true;
            SoundManager.playOk();

            this._dummy_window.activate();
        } else {
            SoundManager.playOk();
            this.commandDummyCancel();
        }
    };

    Scene_Recollection.prototype.commandDummyCancel = function() {
        this._cg_sprites.forEach(function(obj) {
            obj.visible = false;
            obj = null;
        });
        this.do_exchange_status_window(this._dummy_window, this._rec_list);
    };

    // コモンイベントから呼び出す関数
    Scene_Recollection.prototype.rngd_exit_scene = function() {
        if(Scene_Recollection._rngd_recollection_doing) {
            // Window_RecListを表示する
            Scene_Recollection.reload_rec_list = true;
            SceneManager.push(Scene_Recollection);
        }
    };

    //-------------------------------------------------------------------------
    // ● ウィンドウの無効化と有効化
    //-------------------------------------------------------------------------
    // win1: 無効化するウィンドウ
    // win2: 有効化するウィンドウ
    //-------------------------------------------------------------------------
    Scene_Recollection.prototype.do_exchange_status_window = function(win1, win2) {
        win1.deactivate();
        win1.visible = false;
        win2.activate();
        win2.visible = true;
    };
    //-------------------------------------------------------------------------
    // ● セーブ・ロード・ニューゲーム時に必要なスイッチをONにする
    //-------------------------------------------------------------------------
    Scene_Recollection.setRecollectionSwitches = function() {
        // 各セーブデータを参照し、RecollectionMode用のスイッチを検索する
        // スイッチが一つでもONになっている場合は回想をONにする
        for(var i = 1; i <= DataManager.maxSavefiles(); i++) {
            var data = null;
            try {
                data = StorageManager.loadFromLocalFile(i);
            } catch(e) {
                data = StorageManager.loadFromWebStorage(i);
            }
            if(data) {
                var save_data_obj = JsonEx.parse(data);
                var rec_cg_max = rngd_hash_size(rngd_recollection_mode_settings.rec_cg_set);

                for(var j = 0; j < rec_cg_max; j++) {
                    var cg = rngd_recollection_mode_settings.rec_cg_set[j+1];
                    if(save_data_obj["switches"]._data[cg.switch_id] &&
                        save_data_obj["switches"]._data[cg.switch_id] == true) {
                        $gameSwitches.setValue(cg.switch_id, true);
                    }
                }
            }
        }
    };

//-----------------------------------------------------------------------------
// ◆ Window関数
//-----------------------------------------------------------------------------

    //=========================================================================
    // ■ Window_RecollectionCommand
    //=========================================================================
    // 回想モードかCGモードを選択するウィンドウです
    //=========================================================================
    function Window_RecollectionCommand() {
        this.initialize.apply(this, arguments);
    }

    Window_RecollectionCommand.prototype = Object.create(Window_Command.prototype);
    Window_RecollectionCommand.prototype.constructor = Window_RecollectionCommand;

    Window_RecollectionCommand.prototype.initialize = function() {
        Window_Command.prototype.initialize.call(this, 0, 0);
        this.x = rngd_recollection_mode_settings.rec_mode_window.x;
        this.y = rngd_recollection_mode_settings.rec_mode_window.y;

    };

    Window_RecollectionCommand.prototype.makeCommandList = function() {
        Window_Command.prototype.makeCommandList.call(this);
        this.addCommand(rngd_recollection_mode_settings.rec_mode_window.str_select_recollection, "select_recollection");
        this.addCommand(rngd_recollection_mode_settings.rec_mode_window.str_select_cg, "select_cg");
        this.addCommand(rngd_recollection_mode_settings.rec_mode_window.str_select_back_title, "select_back_title");
    };

    //=========================================================================
    // ■ Window_RecollectionList
    //=========================================================================
    // 回想またはCGを選択するウィンドウです
    //=========================================================================
    function Window_RecList() {
        this.initialize.apply(this, arguments);
    }

    Window_RecList.prototype = Object.create(Window_Selectable.prototype);
    Window_RecList.prototype.constructor = Window_RecList;

    //-------------------------------------------------------------------------
    // ● 初期化処理
    //-------------------------------------------------------------------------
    Window_RecList.prototype.initialize = function(x, y, width, height) {
        Window_Selectable.prototype.initialize.call(this, x, y, width, height);
        this.windowWidth = width;
        this.windowHeight = height;
        this.select(0);
        this._formationMode = false;
        this.get_global_variables();
        this.refresh();

    };

    Window_RecList.prototype.maxItems = function() {
        return rngd_hash_size(rngd_recollection_mode_settings.rec_cg_set);
    };

    Window_RecList.prototype.itemHeight = function() {
        return (this.height - this.standardPadding()) / rngd_recollection_mode_settings.rec_list_window.item_height;
    };

    Window_RecList.prototype.maxPageItems = function() {
        return rngd_hash_size(rngd_recollection_mode_settings.rec_cg_set);
    };

    Window_RecList.prototype.maxCols = function() {
        return rngd_recollection_mode_settings.rec_list_window.item_width;
    };

    Window_RecList.prototype.maxPageRows = function() {
        var pageHeight = this.height;// - this.padding * 2;
        return Math.floor(pageHeight / this.itemHeight());
    };

    Window_RecList.prototype.drawItem = function(index) {
        var rec_cg = rngd_recollection_mode_settings.rec_cg_set[index+1];
        var rect = this.itemRect(index);
        var text_height = 0;
        if(rngd_recollection_mode_settings.rec_list_window.show_title_text) {
            if(this._global_variables["switches"][rec_cg.switch_id]) {
                this.contents.drawText(rec_cg.title, rect.x + 4, rect.y + 4, this.itemWidth(), 32,
                    rngd_recollection_mode_settings.rec_list_window.title_text_align);
            } else {
                this.contents.drawText(rngd_recollection_mode_settings.rec_list_window.never_watch_title_text,
                    rect.x + 4, rect.y + 4, this.itemWidth(), 32,
                    rngd_recollection_mode_settings.rec_list_window.title_text_align);
            }
            text_height = 32;
        }

        // CGセットのスイッチ番号が、全てのセーブデータを走査した後にTrueであればピクチャ表示
        if(this._global_variables["switches"][rec_cg.switch_id]) {

            var thumbnail_file_name = rec_cg.pictures[0];
            if(rec_cg.thumbnail !== undefined && rec_cg.thumbnail !== null) {
                thumbnail_file_name = rec_cg.thumbnail;
            }

            this.drawRecollection(thumbnail_file_name, 0, 0,
                this.itemWidth() - 36, this.itemHeight() - 8 - text_height, rect.x + 16, rect.y + 4 +text_height);


        } else {
            this.drawRecollection(rngd_recollection_mode_settings.rec_list_window.never_watch_picture_name,
                    0, 0 , this.itemWidth() - 36,
                    this.itemHeight() - 8 - text_height, rect.x + 16, rect.y + 4 + text_height);

        }

    };

    //-------------------------------------------------------------------------
    // ● 全てのセーブデータを走査し、対象のシーンスイッチ情報を取得する
    //-------------------------------------------------------------------------
    Window_RecList.prototype.get_global_variables = function() {
        this._global_variables = {
            "switches": {}
        };
        var maxSaveFiles = DataManager.maxSavefiles();
        for(var i = 1; i <= maxSaveFiles; i++) {
            if(DataManager.loadGameSwitch(i)) {
                var rec_cg_max = rngd_hash_size(rngd_recollection_mode_settings.rec_cg_set);

                for(var j = 0; j < rec_cg_max; j++) {
                    var cg = rngd_recollection_mode_settings.rec_cg_set[j+1];
                    if($gameSwitches._data[cg.switch_id]) {
                        this._global_variables["switches"][cg.switch_id] = true;
                    }
                }
            }
        }
    };
    //-------------------------------------------------------------------------
    // ● index番目に表示された回想orCGが有効かどうか判断する
    //-------------------------------------------------------------------------
    Window_RecList.prototype.is_valid_picture = function(index) {
        // CG情報の取得と対象スイッチの取得
        var _rec_cg_obj = rngd_recollection_mode_settings.rec_cg_set[index];
        return ( this._global_variables["switches"][_rec_cg_obj.switch_id] == true);

    };


(function(){

//-----------------------------------------------------------------------------
// ◆ 組み込み関数Fix
//-----------------------------------------------------------------------------

    Window_Base.prototype.drawRecollection = function(bmp_name, x, y, width, height, dx, dy) {
        var bmp = ImageManager.loadPicture(bmp_name);

        var _width = width;
        var _height = height;
        if(_width > bmp.width) {
            _width = bmp.width - 1;
        }

        if(_height > bmp.height) {
            _height = bmp.height - 1;
        }
        this.contents.blt(bmp, x, y, _width, _height, dx, dy);
    };

    var Window_TitleCommand_makeCommandList =
        Window_TitleCommand.prototype.makeCommandList;

    Window_TitleCommand.prototype.makeCommandList = function() {
        Window_TitleCommand_makeCommandList.call(this);
        this.clearCommandList();
        this.addCommand(TextManager.newGame,   'newGame');
        this.addCommand(TextManager.continue_, 'continue', this.isContinueEnabled());
        this.addCommand(rngd_recollection_mode_settings.rec_mode_window.recollection_title, 'recollection');
        this.addCommand(TextManager.options,   'options');
    };

    Scene_Title.prototype.commandRecollection = function() {
        SceneManager.push(Scene_Recollection);
    };

    var Scene_Title_createCommandWindow = Scene_Title.prototype.createCommandWindow;
    Scene_Title.prototype.createCommandWindow = function() {
        Scene_Title_createCommandWindow.call(this);
        this._commandWindow.setHandler('recollection', this.commandRecollection.bind(this));
    };

    // セーブデータ共有オプションが指定されている場合のみ、カスタマイズ
    if(rngd_recollection_mode_settings["share_recollection_switches"]) {
        DataManager.makeSaveContents = function() {
            // A save data does not contain $gameTemp, $gameMessage, and $gameTroop.

            Scene_Recollection.setRecollectionSwitches();

            var contents = {};
            contents.system       = $gameSystem;
            contents.screen       = $gameScreen;
            contents.timer        = $gameTimer;
            contents.switches     = $gameSwitches;
            contents.variables    = $gameVariables;
            contents.selfSwitches = $gameSelfSwitches;
            contents.actors       = $gameActors;
            contents.party        = $gameParty;
            contents.map          = $gameMap;
            contents.player       = $gamePlayer;

            return contents;
        };

        DataManager.extractSaveContents = function(contents) {
            $gameSystem        = contents.system;
            $gameScreen        = contents.screen;
            $gameTimer         = contents.timer;
            $gameSwitches      = contents.switches;
            $gameVariables     = contents.variables;
            $gameSelfSwitches  = contents.selfSwitches;
            $gameActors        = contents.actors;
            $gameParty         = contents.party;
            $gameMap           = contents.map;
            $gamePlayer        = contents.player;

            Scene_Recollection.setRecollectionSwitches();
        };

        DataManager.setupNewGame = function() {
            this.createGameObjects();
            Scene_Recollection.setRecollectionSwitches();
            this.selectSavefileForNewGame();
            $gameParty.setupStartingMembers();
            $gamePlayer.reserveTransfer($dataSystem.startMapId,
                $dataSystem.startX, $dataSystem.startY);
            Graphics.frameCount = 0;
        };
    }

//-----------------------------------------------------------------------------
// ◆ DataManager関数
//-----------------------------------------------------------------------------

    //-------------------------------------------------------------------------
    // ● スイッチのみロードする
    //-------------------------------------------------------------------------
    DataManager.loadGameSwitch = function(savefileId) {
        try {
            return this.loadGameSwitchWithoutRescue(savefileId);
        } catch (e) {
            console.error(e);
            return false;
        }
    };

    DataManager.loadGameSwitchWithoutRescue = function(savefileId) {
        var globalInfo = this.loadGlobalInfo();
        if (this.isThisGameFile(savefileId)) {
            var json = StorageManager.load(savefileId);
            this.createGameObjectSwitch();
            this.extractSaveContentsSwitches(JsonEx.parse(json));
            //this._lastAccessedId = savefileId;
            return true;
        } else {
            return false;
        }
    };

    DataManager.createGameObjectSwitch = function() {
        $gameSwitches      = new Game_Switches();
    };

    DataManager.extractSaveContentsSwitches = function(contents) {
        $gameSwitches      = contents.switches;
    };

})();