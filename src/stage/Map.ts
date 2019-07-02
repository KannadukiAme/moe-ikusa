import * as PIXI from 'pixi.js'

import Button from '../ui/Button'

export default class Map extends PIXI.Container {
  constructor() {
    super()

    this.addChild(new Button('正在游戏', new PIXI.Point(200, 200), () => { }))
  }
}
