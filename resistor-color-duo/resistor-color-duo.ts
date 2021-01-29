enum Colors {
    black,
    brown,
    red,
    orange, 
    yellow,
    green,
    blue,
    violet,
    grey,
    white
}

type inputColors = keyof typeof Colors

export class ResistorColor {
    private colors: inputColors[];

    constructor(colors: inputColors[]) {
        if (colors.length <= 1) {
            throw new Error("At least two colors need to be present");
        }

        this.colors = colors;
    }

    public value(): number {
        return Number(this.colors.slice(0, 2).map(color => Colors[color]).join(''));
    }
}
