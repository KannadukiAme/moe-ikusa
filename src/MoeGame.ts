import * as PIXI from 'pixi.js'
import Menu from './stage/Menu'

export default class MoeGame extends PIXI.Application {
  constructor() {
    super({
      width: 1024, height: 768, backgroundColor: 0x1099bb, resolution: window.devicePixelRatio || 1,
    })

    this.stage.addChild(new Menu());

    document.body.appendChild(this.view);

    console.log('游戏加载完毕')
  }
}
