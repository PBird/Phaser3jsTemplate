import Phaser from 'phaser';

import BootScene from './scenes/bootScene';
import MainMenuScene from './scenes/mainMenuScene';
import GameScene from './scenes/gameScene';
import LoadScene from './scenes/loadScene';

const config = {
  title: 'Blockade',
  version: '1.0',
  width: 360,
  height: 640,
  zoom: 1,
  type: Phaser.AUTO,
  parent: 'game',
  scene: [BootScene, LoadScene, MainMenuScene, GameScene],
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
      gravity: { y: 300 },
    },
  },
  input: {
    keyboard: true,
    mouse: true,
    touch: true,
    gamepad: false,
  },
  backgroundColor: '#000000',
  render: { pixelArt: true, antialias: false },
};

export default class Game extends Phaser.Game {}

window.addEventListener('load', () => {
  const game = new Game(config);
  console.log(game); // purpose : unused error dismiss
});
