import Phaser from "phaser";
export default class ThirdScene extends Phaser.Scene {
    constructor() {
        super({ key: "ThirdScene" });
    }
    create() {
        const text = this.add.text(400, 400, "Third Scene", {
            fontSize: "32px",
            color: " #00FF00",
        });
        text.setOrigin(0.5, 0.5);

        const escKey = this.input.keyboard?.addKey(
            Phaser.Input.Keyboard.KeyCodes.ESC
        );
        this.input.on("pointerdown", () => {
            this.scene.start("FourthScene");
        });
    }
}
