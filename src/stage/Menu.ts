import * as PIXI from 'pixi.js'

import Button from '../ui/Button'

export default class Meun extends PIXI.Container {
  constructor() {
    super()

    this.addChild(new Button('开始游戏', { w: 200, h: 50 }, { x: 200, y: 200 }, () => { console.log('点击 开始游戏') }))
  }
}
