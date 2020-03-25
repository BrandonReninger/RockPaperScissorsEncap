import Weapons from "../models/Weapons.js"





let _weapons = new Weapons(_weaponsObjConfig)


export default class GameService {
    constructor() {
        console.log("howdy from GameServices")
    }
}