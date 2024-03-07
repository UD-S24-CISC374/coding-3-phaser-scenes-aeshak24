import Phaser from "phaser";
export default class FifthScene extends Phaser.Scene {
    constructor() {
        super({ key: "FifthScene" });
    }
    create() {
        const text = this.add.text(400, 400, "Fifth Scene", {
            fontSize: "32px",
            color: " #0000FF",
        });
        text.setOrigin(0.5, 0.5);

        const escKey = this.input.keyboard?.addKey(
            Phaser.Input.Keyboard.KeyCodes.ESC
        );

        escKey?.on("down", () => {
            this.scene.stop("FifthScene");
            this.scene.resume("MainScene");
        });
    }
}
