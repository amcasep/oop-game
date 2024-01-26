class Player {
    constructor () {
        this.positionX = 0;
        this.positionY = 0;
        this.width = 20;
        this.height = 20;
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
}

const player = new Player();