import GameController from "./controllers/GameController.js"



class App {
    constructor() {
        this.gameController = new GameController()
        console.log("howdy from main.js")
    }
}



window["app"] = new App()