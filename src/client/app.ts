import BootState from './states/boot';

export default class App extends Phaser.Game {
    constructor(config: Phaser.IGameConfig) {
        super(config);

        this.state.add('boot', BootState);

        this.state.start('boot');
    }
}