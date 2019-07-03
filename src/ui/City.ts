import * as PIXI from 'pixi.js'

export default class City extends PIXI.Container {
  constructor(name: string, position: PIXI.Point) {
    super()

    this.init(name, position)
  }

  init(name: string, position: PIXI.Point) {
    const text = new PIXI.Text(name, { fill: 0xf588ca, fontSize: 40 })
    text.position = position
    const graphics = new PIXI.Graphics();

    // Rectangle
    graphics.beginFill(0xDE3249);
    graphics.drawRect(position.x + 40, position.y, 10, 10);
    graphics.endFill();


    this.addChild(text)
    this.addChild(graphics)
  }
}
