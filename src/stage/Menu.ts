import * as PIXI from 'pixi.js'

import Button from '../ui/Button'

export default class Menu extends PIXI.Container {

  titleText: PIXI.Text

  constructor() {
    super()

    this.initTitle()
    this.initMusume()
    this.initMenuButtons()
  }

  initTitle() {
    this.titleText = new PIXI.Text('MOE-IKUSA', { fill: 0x000000 })

    this.titleText.position = new PIXI.Point(100, 10)

    this.addChild(this.titleText)
  }

  initMusume() {
    const girl: PIXI.Sprite = new PIXI.Sprite(PIXI.Texture.from('/girl.jpg'))

    girl.position = new PIXI.Point(500, 20)
    girl.height = 243 * 3
    girl.width = 112 * 3

    this.addChild(girl)
  }

  initMenuButtons() {
    this.addChild(new Button('START', { w: 200, h: 50 }, { x: 200, y: 200 }, () => { this.emit('start') }))
    this.addChild(new Button('CONTINUE', { w: 200, h: 50 }, { x: 200, y: 240 }, () => { }))
    this.addChild(new Button('LOAD', { w: 200, h: 50 }, { x: 200, y: 280 }, () => { }))
    this.addChild(new Button('SETTINGS', { w: 200, h: 50 }, { x: 200, y: 320 }, () => { }))
  }
}
