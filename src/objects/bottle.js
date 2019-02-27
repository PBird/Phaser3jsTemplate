export default class Bottle {
  // private obj: Phaser.Physics.Arcade.Image
  constructor(scene, x, y) {
    this.obj = scene.physics.add.image(x, y, 'bottle');
    this.init();
  }

  init() {
    this.obj.setCollideWorldBounds(true);
    this.obj.setBounce(1);
    this.obj.body.setAllowGravity(true);
  }
}
