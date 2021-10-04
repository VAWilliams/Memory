const baseImageUrl = "../assets/card";

export class Card {
    id: number;
    number: string;
    shape: string;
    images: string[];
    isSelected: boolean;
    

    constructor(number: string, shape: string) {
        this.id = 0;
        this.number = number;
        this.shape = shape;
        this.images = [
            `url("${baseImageUrl}/Front-${shape}-${number}.svg")`,
            `url("${baseImageUrl}/Back.svg")`
        ];
        this.isSelected = false;
    }
}