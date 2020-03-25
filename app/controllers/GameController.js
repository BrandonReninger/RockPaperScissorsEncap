import GameService from "../services/GameServices.js"


let gameService = new GameService()

//TODO finish draw
function draw() {
    document.getElementById("result").innerHTML
}



export default class GameController {
    constructor() {
        console.log("howdy from GameController")
    }

    rock() {
        _gameService.rock()
        draw()
    }
}