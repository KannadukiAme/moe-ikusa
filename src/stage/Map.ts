import * as PIXI from 'pixi.js'

import { CityInfo } from '../interface'
import City from '../ui/City';

export default class Map extends PIXI.Container {

  cityInfos: Array<CityInfo>

  constructor() {
    super()

    this.loadCityJson()

    this.draw()
  }

  /**
   * 加载城市信息
   */
  loadCityJson() {
    this.cityInfos = [
      {
        "name": "Yamagi",
        "type": "city",
        "position": [0, 100]
      },
      {
        "name": "Fuso",
        "type": "city",
        "position": [100, 220]
      },
      {
        "name": "Takao",
        "type": "city",
        "position": [900, 330]
      },
    ]
  }

  /**
   * 绘制
   */
  draw() {
    this.cityInfos.forEach(cityInfo => {
      this.drawCity(cityInfo)
    })
  }

  /**
   * 绘制城市
   * @param cityInfo
   */
  drawCity(cityInfo: CityInfo) {
    const city = new City(cityInfo.name, new PIXI.Point(...cityInfo.position))

    this.addChild(city)
  }
}
