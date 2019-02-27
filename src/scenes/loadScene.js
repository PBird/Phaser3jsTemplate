import Phaser from 'phaser';
import CONST from '../const/const';

export default class LoadScene extends Phaser.Scene {
  // private loadingBar: Phaser.GameObjects.Graphics;
  // private progressBar: Phaser.GameObjects.Graphics;
  // private loadingText: Phaser.GameObjects.BitmapText;
  constructor() {
    super({
      key: 'LoadScene',
    });
  }

  preload() {
    // set the background and create loading bar
    this.cameras.main.setBackgroundColor('0x98d687');
    this.loadingText = this.add
      .bitmapText(
        this.cameras.main.width / 2,
        this.cameras.main.height / 4,
        CONST.font.name,
        'Loading...',
        CONST.font.sizes.title,
      )
      .setOrigin(0.5);
    this.createLoadingbar();

    this.load.on(
      'progress',
      (value) => {
        this.progressBar.clear();
        this.progressBar.fillStyle(0xfff6d3, 1);
        this.progressBar.fillRect(
          this.cameras.main.width / 4,
          this.cameras.main.height / 2 - 16,
          (this.cameras.main.width / 2) * value,
          16,
        );
      },
      this,
    );

    // delete bar graphics, when loading complete
    this.load.on(
      'complete',
      () => {
        this.progressBar.destroy();
        this.loadingBar.destroy();
        this.loadingText.destroy();
      },
      this,
    );

    // load out package
    this.load.spritesheet('bottle', 'src/assets/images/bottle.png', {
      frameWidth: 32,
      frameHeight: 96,
    });
    this.load.spritesheet('platform', 'src/assets/images/platform.png', {
      frameWidth: 32,
      frameHeight: 32,
    });
  }

  update() {
    this.scene.start('MainMenuScene');
  }

  createLoadingbar() {
    this.loadingBar = this.add.graphics();
    this.loadingBar.fillStyle(0x5dae47, 1);
    this.loadingBar.fillRect(
      this.cameras.main.width / 4 - 2,
      this.cameras.main.height / 2 - 18,
      this.cameras.main.width / 2 + 4,
      20,
    );
    this.progressBar = this.add.graphics();
  }
}
