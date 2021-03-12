class SpaceAge {
    seconds:number
    static earthRotation = 31557600

    constructor(seconds:number) {
      this.seconds = seconds
    }

    onEarth(){
      return this.calcYears(1)
    }

    onMercury(){
      return this.calcYears(0.2408467)
    }

    onVenus(){
      return this.calcYears(0.61519726)
    }

    onMars(){
      return this.calcYears(1.8808158)
    }

    onJupiter(){
      return this.calcYears(11.862615)
    }

    onSaturn(){
      return this.calcYears(29.447498)
    }

    onUranus(){
      return this.calcYears(84.016846)
    }

    onNeptune(){
      return this.calcYears(164.79132)
    }

    private calcYears(rotation:number) {
      return Number((this.seconds / (SpaceAge.earthRotation * rotation)).toFixed(2))
    }
}

export default SpaceAge;
