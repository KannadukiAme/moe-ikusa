import * as PIXI from 'pixi.js'

export default class Button extends PIXI.Text {

  normalStyle: PIXI.TextStyle
  hoverStyle: PIXI.TextStyle

  constructor(text: string, position?: PIXI.Point, onClick?: Function) {
    super(text)

    this.normalStyle = new PIXI.TextStyle({
      fill: 0x9d93ab,
      fontFamily: 'Arial',
      fontSize: 50
    })

    this.hoverStyle = new PIXI.TextStyle({
      fill: 0xf588ca,
      fontFamily: 'Arial',
      fontSize: 60
    })

    this.style = this.normalStyle

    this.position = position

    this.interactive = true
    this
      .on('click', onClick)
      .on('touchstart', onClick)
      .on('pointerover', () => {
        this.style = this.hoverStyle
      })
      .on('pointerout', () => {
        this.style = this.normalStyle
      })
  }
}
