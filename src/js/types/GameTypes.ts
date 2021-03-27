export type ConfigType = {
  shipSize: number;
  fps: number;
  rotationSpd: number;
  acceleration: number;
  braking: number;
  astrSize: number;
  astrSpd: number;
  astrNum: number;
  bulletSpd: number;
}

export type AnsteroidType = {
  x: number;
  y: number;
  radius: number;
  xv: number;
  yv: number;
}

export type State = {
  score: number;
  isGameOver: boolean;
}