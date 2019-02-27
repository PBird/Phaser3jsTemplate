export default class Platform {
  // private obj: Phaser.GameObjects.Sprite;
  constructor(scene, x, y) {
    this.obj = scene.physics.add.sprite(x, y, 'platform');

    this.init();
  }

  init() {
    this.obj.setCollideWorldBounds(true);
    this.obj.setBounce(0.5);
    this.obj.body.setAllowGravity(true);
  }
}
