class Player {
    constructor () {
        this.width = 10;
        this.height = 5;
        this.positionX = 50;
        this.positionY = 0;
        this.domElm = null

        this.createDomELement();
    }
    createDomELement () {
        // step1: create the element
        this.domElm = document.createElement("div");

        // step2: add content or modify
        this.domElm.setAttribute("id", "player")
        this.domElm.style.width =  this.width + "vw"
        this.domElm.style.height = this.height + "vh"
        this.domElm.style.left = this.positionX + "vw";
        this.domElm.style.bottom = this.positionY + "vh";
        
        //step3: append to the dom: `parentElm.appendChild()`
        const boardElm = document.getElementById("board");
        boardElm.appendChild(this.domElm)
    }
    moveLeft(){
        this.positionX--
        this.domElm.style.left = this.positionX + "vw";
    }
    moveRight(){
        this.positionX++
        this.domElm.style.left = this.positionX + "vw";
    }
}

class Obstacle {
    constructor () {
        this.width = 10;
        this.height = 5;
        this.positionX = Math.floor(Math.random() * (100 - this.width +1))
        this.positionY = 100;
        this.domElm = null

        this.createDomELement();
    }
    createDomELement(){
        // step1: create the element
        this.domElm = document.createElement("div");

        // step2: add content or modify
        this.domElm.setAttribute("class", "obstacle")
        this.domElm.style.width =  this.width + "vw"
        this.domElm.style.height = this.height + "vh"
        this.domElm.style.left = this.positionX + "vw";
        this.domElm.style.bottom = this.positionY + "vh";

        //step3: append to the dom: `parentElm.appendChild()`
        const boardElm = document.getElementById("board");
        boardElm.appendChild(this.domElm)
    }
    moveDown(){
        this.positionY--
        this.domElm.style.bottom = this.positionY + "vh";
    }
}

const player = new Player();
const obstacles = [];

//generating infinite obstacles and pushing them to the array every X amount of time
setInterval (() => {
    const newObstacle = new Obstacle ()
    obstacles.push(newObstacle)
}, 3000)

//make the obstacles in the array move from up to down
setInterval(() => {
   obstacles.forEach((obstacleInstances) => {
    obstacleInstances.moveDown()
   })
}, 30)

//add movement to the player
document.addEventListener("keydown", (e) => {
    if (e.code === "ArrowLeft") {
        player.moveLeft()
    } else if (e.code === "ArrowRight") {
        player.moveRight();
    }
})