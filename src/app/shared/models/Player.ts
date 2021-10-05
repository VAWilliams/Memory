const baseImageUrl = "../../assets/images/player";
const imageUrls: string[] = [
    `${baseImageUrl}/Player-1.svg`,
    `${baseImageUrl}/Player-2.svg`
];

export class Player {
    imageUrl: string;
    name: string;
    score: number;
    current: boolean;

    static numberOfPlayers: number = 0;
    
    constructor(name: string) {
        this.imageUrl = imageUrls[Player.numberOfPlayers++];
        this.name = name;
        this.score = 0;
        this.current = false;
    }
}