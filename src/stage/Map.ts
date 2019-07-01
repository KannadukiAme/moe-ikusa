import * as PIXI from 'pixi.js'

import Button from '../ui/Button'

export default class Map extends PIXI.Container {
  constructor() {
    super()

    this.addChild(new Button('正在游戏', { w: 200, h: 50 }, { x: 200, y: 200 }, () => { }))
  }
}
