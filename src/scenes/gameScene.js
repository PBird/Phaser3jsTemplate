/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2018 - 2019 digitsensitive
 * @description  Blockade: Game Scene
 * @license      Digitsensitive
 */
import Phaser from 'phaser';

import Bottle from '../objects/bottle';
import Platform from '../objects/platform';
import CONST from '../const/const';

export default class GameScene extends Phaser.Scene {
  // field and game setting
  // private gameHeight: number;
  // private gameWidth: number;
  // private boardWidth: number;
  // private boardHeight: number;
  // private horizontalFields: number;
  // private verticalFields: number;
  // private tick: number;

  // objects
  // private bottle: Bottle;
  // private platform: Platform

  // texts
  // private scoreText: Phaser.GameObjects.BitmapText;

  constructor() {
    super({
      key: 'GameScene',
    });
  }

  init() {
    this.gameHeight = this.sys.canvas.height;
    this.gameWidth = this.sys.canvas.width;
    this.boardWidth = this.gameWidth - 2 * CONST.FIELD_SIZE;
    this.boardHeight = this.gameHeight - 2 * CONST.FIELD_SIZE;
    this.horizontalFields = this.boardWidth / CONST.FIELD_SIZE;
    this.verticalFields = this.boardHeight / CONST.FIELD_SIZE;
    this.tick = 0;
    this.physics.world.setBounds(0, 0, this.gameWidth, this.gameHeight, true, true, false, true);
    // console.log(this.gameWidth, this.gameHeight);
  }

  // preload() {}

  create() {
    // objects
    this.bottle = new Bottle(this, this.gameWidth / 2, this.gameHeight / 2);
    this.platform = new Platform(this, this.gameWidth / 3, this.gameHeight / 3);
  }

  // update(time) {}
}
