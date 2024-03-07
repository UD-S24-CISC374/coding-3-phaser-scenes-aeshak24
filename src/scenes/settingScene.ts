import Phaser from "phaser";
export default class SettingScene extends Phaser.Scene {
    private backgroundColor: string;
    private scoreText?: Phaser.GameObjects.Text;
    private score: number;

    constructor() {
        super({ key: "SettingScene" });
    }
    init(data: {
        backgroundColor: string;
        scoreText: Phaser.GameObjects.Text;
        score: number;
    }) {
        this.backgroundColor = data.backgroundColor;
        this.scoreText = data.scoreText;
        this.score = data.score;
    }
    create() {
        this.scoreText = this.add.text(16, 16, "score:0", {
            fontSize: "32px",
            color: "#000000",
        });
        this.scoreText.setText("Score: " + this.score);
        this.cameras.main.setBackgroundColor(this.backgroundColor);
        const text = this.add.text(
            this.cameras.main.width / 2,
            50,
            "Settings",
            {
                fontSize: "32px",
                color: "#000000",
            }
        );
        text.setOrigin(0.5, 0.5);
    }
}
