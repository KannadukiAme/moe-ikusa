import * as PIXI from 'pixi.js'
import Menu from './stage/Menu'
import Map from './stage/Map'

export default class MoeGame extends PIXI.Application {
  menuStage: Menu
  mapStage: Map

  constructor() {
    super({
      transparent:true, resolution: window.devicePixelRatio || 1, view: document.querySelector('#c')
    })

    this.menuStage = new Menu()
    this.stage = this.menuStage

    // 开始游戏
    this.menuStage.on('start', () => {
      this.mapStage = new Map()
      this.switchStage(this.mapStage)
    })

    this.resizeTo = window

    console.log('游戏加载完毕')
  }


  switchStage(stage: PIXI.Container) {
    this.stage = this.mapStage
  }
}
