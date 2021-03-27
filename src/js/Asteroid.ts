import { AnsteroidType, ConfigType } from './types/GameTypes'
export default class Asteroid {
  private asteroid: AnsteroidType

  constructor (private config: ConfigType) {
    this.config = config
  }

  create (x: number, y: number, r: number = this.config.astrSize / 2) {
    const velocity = (Math.random() * this.config.astrSpd) / this.config.fps;
    return (this.asteroid = {
      x: x,
      y: y,
      radius: r,
      xv: velocity * this.changeDirection(),
      yv: velocity * this.changeDirection(),
    });
  }

  move (): void {
    this.asteroid.x += this.asteroid.xv
    this.asteroid.y += this.asteroid.yv
  }

  changeDirection ():number {
    return Math.random() < 0.5 ? 1 : -1
  }
}
