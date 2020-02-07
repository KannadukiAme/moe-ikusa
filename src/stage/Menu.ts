import * as PIXI from 'pixi.js'

import Button from '../ui/Button'

import '../declare'

import musume from '../assets/img/madoka.jpg'

export default class Menu extends PIXI.Container {

  titleText: PIXI.Text

  constructor() {
    super()

    this.initMusume()
    this.initTitle()
    this.initMenuButtons()
  }

  initTitle() {
    this.titleText = new PIXI.Text('萌・戦', { fill: 0xf588ca, fontSize: 80 })

    this.titleText.position = new PIXI.Point(180, 160)

    this.addChild(this.titleText)
  }

  initMusume() {
    const girl: PIXI.Sprite = new PIXI.Sprite(PIXI.Texture.from(musume))

    girl.position = new PIXI.Point(0, 0)

    this.addChild(girl)
  }

  initMenuButtons() {
    const beginPosition = {
      x: 200,
      y: 280
    }

    const lineHeight: number = 60

    this.addChild(new Button('START', new PIXI.Point(beginPosition.x, beginPosition.y), () => { this.emit('start') }))
    this.addChild(new Button('CONTINUE', new PIXI.Point(beginPosition.x, beginPosition.y + lineHeight), () => { }))
    this.addChild(new Button('LOAD', new PIXI.Point(beginPosition.x, beginPosition.y + lineHeight * 2), () => { }))
    this.addChild(new Button('SETTINGS', new PIXI.Point(beginPosition.x, beginPosition.y + lineHeight * 3), () => { }))
  }
}
