type ConfigType = any
type AnsteroidType = {
  x: number,
  y: number,
  radius: number,
  xv: number,
  yv: number
}

export default class Asteroid {
  private config: ConfigType
  private asteroid: AnsteroidType

  constructor (config) {
    this.config = config
  }

  create (x, y, r = this.config.astrSize / 2) {
    const velocity = (Math.random() * this.config.astrSpd) / this.config.fps;
    return (this.asteroid = {
      x: x,
      y: y,
      radius: r,
      xv: velocity * this.changeDirection(),
      yv: velocity * this.changeDirection(),
    });
  }

  move () {
    this.asteroid.x += this.asteroid.xv;
    this.asteroid.y += this.asteroid.yv;
  }

  changeDirection() {
    return Math.random() < 0.5 ? 1 : -1;
  }
}
