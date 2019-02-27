/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2018 - 2019 digitsensitive
 * @description  Blockade: Main Menu Scene
 * @license      Digitsensitive
 */
import Phaser from 'phaser';
import CONST from '../const/const';

export default class MainMenuScene extends Phaser.Scene {
  // private startKey: Phaser.Input.Keyboard.Key;
  // private bitmapTexts: Phaser.GameObjects.BitmapText[] = [];
  // private circleGraphic: Phaser.GameObjects.Graphics;
  // private circleGeom: Phaser.Geom.Circle;

  constructor() {
    super({
      key: 'MainMenuScene',
    });
  }

  init() {
    this.startKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);

    CONST.P1_SCORE = 0;
    CONST.P2_SCORE = 0;
  }

  // preload() {}

  create() {
    const playText = this.add.bitmapText(
      this.cameras.main.width / 2,
      this.cameras.main.height / 2,
      CONST.font.name,
      'Play',
      CONST.font.sizes.subTitle,
    );
    playText.setOrigin(0.5);
  }

  update() {
    if (this.startKey.isDown) {
      this.scene.start('GameScene');
    }
  }
}
