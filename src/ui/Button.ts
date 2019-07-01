import * as PIXI from 'pixi.js'

import { Size, Position } from '../interface'

export default class Button extends PIXI.Text {

  normalSytle: any
  hoverStyle: any

  constructor(text: string, size?: Size, position?: Position, onClick?: Function) {
    super(text)

    this.normalSytle = { fill: 0x000000, align: 'center' }
    this.hoverStyle = { fill: 0xff0000, align: 'center' }

    this.style = this.normalSytle
    // this.width = size.w
    // this.height = size.h
    this.anchor.x = 0.5
    this.anchor.y = 0.5
    this.position.x = position.x
    this.position.y = position.y

    this.interactive = true
    this
      .on('click', onClick)
      .on('touchstart', onClick)
      .on('pointerover', () => {
        this.style = this.hoverStyle
      })
      .on('pointerout', () => {
        this.style = this.normalSytle
      })
  }
}
