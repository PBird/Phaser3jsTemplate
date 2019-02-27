import Phaser from 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'BootScene',
    });
  }

  preload() {
    this.load.bitmapFont('Senior', 'src/assets/font/pcsenior.png', 'src/assets/font/pcsenior.fnt');
  }

  update() {
    this.scene.start('LoadScene');
  }
}
