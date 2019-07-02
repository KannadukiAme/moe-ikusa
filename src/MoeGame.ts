import * as PIXI from 'pixi.js'
import Menu from './stage/Menu'
import Map from './stage/Map'

export default class MoeGame extends PIXI.Application {
  menuStage: Menu = new Menu()
  mapStage: Map = new Map()

  constructor() {
    super({
      backgroundColor: 0x1099bb, resolution: window.devicePixelRatio || 1, view: document.querySelector('#c')
    })

    this.stage = this.menuStage

    // 开始游戏
    this.menuStage.on('start', () => {
      this.switchStage(this.mapStage)
    })

    this.resizeTo = window

    console.log('游戏加载完毕')
  }


  switchStage(stage: PIXI.Container) {
    this.stage = this.mapStage
  }
}
