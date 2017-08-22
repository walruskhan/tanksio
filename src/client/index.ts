import 'p2';
import 'pixi';
import 'phaser';

import App from './app';

function main() {
    const gameConfig: Phaser.IGameConfig = {
        width: 640,
        height: 480,
        renderer: Phaser.AUTO,
        parent: '',
        resolution: 1
    };
    const app = new App(gameConfig);
}

main();