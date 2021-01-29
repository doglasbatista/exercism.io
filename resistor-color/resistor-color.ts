const colors: Record<string, number> = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3, 
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9
}

export const colorCode = (colorName: string) : number => {
  return colors[colorName];
}

export const COLORS = Object.keys(colors)
