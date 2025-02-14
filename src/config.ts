import Phaser from "phaser";
import MainScene from "./scenes/mainScene";
import PreloadScene from "./scenes/preloadScene";
import SecondScene from "./scenes/secondScene";
import ThirdScene from "./scenes/thirdScene";
import FourthScene from "./scenes/fourthScene";
import FifthScene from "./scenes/fifthScene";
import SettingScene from "./scenes/settingScene";

const DEFAULT_WIDTH = 800;
const DEFAULT_HEIGHT = 600;

export const CONFIG = {
    title: "My Untitled Phaser 3 Game",
    version: "0.0.1",
    type: Phaser.AUTO,
    backgroundColor: "#ffffff",
    scale: {
        parent: "phaser-game",
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: DEFAULT_WIDTH,
        height: DEFAULT_HEIGHT,
    },
    scene: [
        PreloadScene,
        MainScene,
        SecondScene,
        ThirdScene,
        FourthScene,
        FifthScene,
        SettingScene,
    ],
    physics: {
        default: "arcade",
        arcade: {
            debug: false,
            gravity: { y: 300 },
        },
    },
    input: {
        keyboard: true,
        mouse: true,
        touch: true,
        gamepad: false,
    },
    render: {
        pixelArt: false,
        antialias: true,
    },
};
