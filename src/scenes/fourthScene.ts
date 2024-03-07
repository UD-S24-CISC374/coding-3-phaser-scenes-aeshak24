import Phaser from "phaser";
export default class FourthScene extends Phaser.Scene {
    constructor() {
        super({ key: "FourthScene" });
    }
    create() {
        const text = this.add.text(400, 400, "Fourth Scene", {
            fontSize: "32px",
            color: " #FF0000",
        });
        text.setOrigin(0.5, 0.5);

        // this.load.image("flower", "assets/flower.png");
        // this.add.image(400, 300, "flower");
        //this.add.image(400, 300, "elevator");

        // const escKey = this.input.keyboard?.addKey(
        //     Phaser.Input.Keyboard.KeyCodes.ESC
        //  );
        //const elevator = this.add.sprite(400, 300, "elevator").setInteractive();
        // elevator.on("pointerdown", () => {
        //   this.scene.start("SecondScene");
        // this.add.elevator.setInteractive();
        // this.add. elevator.on("pointerdown", () => {
        //  this.scene.start("SecondScene");
        //  });
        //  escKey?.on("down", () => {
        //    this.scene.stop("FourthScene");
        //   this.scene.resume("MainScene");
        //  });
        this.input.on("pointerdown", () => {
            this.scene.start("FifthScene");
        });
    }
}
