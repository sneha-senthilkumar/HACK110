import {
    Sprite,
    Container,
    Application,
    Rectangle,
    Graphics,
    DisplayObject,
    Text
} from "pixi.js";


const app: Application = new Application(490, 490);
document.body.appendChild(app.view);

let background: Sprite = Sprite.fromImage("./tictactoe.jpg");

app.stage.addChild(background);

let count: number = 0;

class Quadrant {
    leftX: number;
    rightX: number;	
    topY: number; 
    bottomY: number;
    icon: string = "";
    age: number = 0;

    constructor(leftX: number, rightX: number, topY: number, bottomY: number) {
        this.leftX = leftX;
        this.rightX = rightX;
        this.topY = topY;
        this.bottomY = bottomY;
    }

  

    addChara(event: MouseEvent, q: Quadrant): void {
        
        if (count % 2 === 1) {
            let puppy: Sprite = Sprite.fromImage("./puppy.png");
            puppy.x = (q.leftX); 
            puppy.y = (q.topY); 
            q.icon = "puppy";
            app.stage.addChild(puppy);
        } else {
            let kitty: Sprite = Sprite.fromImage("./cat.png");
            kitty.x = (q.leftX);  
            kitty.y = (q.topY); 
            q.icon = "kitty";
            app.stage.addChild(kitty);
        }
        
        count++;

        setTimeout(function(): void {
            if (count === 9) {
                app.stage.removeChildren();
                app.stage.addChild(background);            
            }
        }, 4000);
        // if (count === 9) {
        //     app.stage.removeChildren();
        //     app.stage.addChild(background);            
        // }




    }
}

let quad0: Quadrant = new Quadrant(20, 165, 0, 165);
let quad1: Quadrant = new Quadrant(175, 320, 0, 165);
let quad2: Quadrant = new Quadrant(330, 490, 0, 165);
let quad3: Quadrant = new Quadrant(20, 165, 170, 320);
let quad4: Quadrant = new Quadrant(175, 320, 170, 320);
let quad5: Quadrant = new Quadrant(330, 490, 170, 320);
let quad6: Quadrant = new Quadrant(20, 165, 325, 490);
let quad7: Quadrant = new Quadrant(175, 320, 325, 490);
let quad8: Quadrant = new Quadrant(330, 490, 325, 490);

let quadArray: Quadrant[] = [quad0, quad1, quad2, quad3, quad4, quad5, quad6, quad7, quad8];

app.view.onmousedown = function(event: MouseEvent): void {
    console.log(event.clientX);
    console.log(event.clientY);
    
    for (let i: number = 0; i < 9; i++) {
        if (quadArray[i].leftX < event.clientX && quadArray[i].rightX > event.clientX) {
            console.log("verified x");
            if (quadArray[i].topY < event.clientY && quadArray[i].bottomY > event.clientY) {
                console.log("verified y");
                quadArray[i].addChara(event, quadArray[i]);
                console.log("quadrant " + i);
            }
        }
    }

    win();
    

};

function win(): void {

    if (quad0.icon === "puppy" && quad1.icon === "puppy" && quad2.icon === "puppy") {
        moo();
    } else if (quad3.icon === "puppy" && quad4.icon === "puppy" && quad5.icon === "puppy") {
        moo();
    } else if (quad6.icon === "puppy" && quad7.icon === "puppy" && quad8.icon === "puppy") {
        moo();
    } else if (quad0.icon === "puppy" && quad3.icon === "puppy" && quad6.icon === "puppy") {
        moo();
    } else if (quad1.icon === "puppy" && quad4.icon === "puppy" && quad7.icon === "puppy") {
        moo();
    } else if (quad2.icon === "puppy" && quad5.icon === "puppy" && quad8.icon === "puppy") {
        moo();
    } else if (quad0.icon === "puppy" && quad4.icon === "puppy" && quad8.icon === "puppy") {
        moo();
    } else if (quad2.icon === "puppy" && quad4.icon === "puppy" && quad6.icon === "puppy") {
        moo();
    } else if (quad0.icon === "kitty" && quad1.icon === "kitty" && quad2.icon === "kitty") {
        moo();
    } else if (quad3.icon === "kitty" && quad4.icon === "kitty" && quad5.icon === "kitty") {
        moo();
    } else if (quad6.icon === "kitty" && quad7.icon === "kitty" && quad8.icon === "kitty") {
        moo();
    } else if (quad0.icon === "kitty" && quad3.icon === "kitty" && quad6.icon === "kitty") {
        moo();
    } else if (quad1.icon === "kitty" && quad4.icon === "kitty" && quad7.icon === "kitty") {
        moo();
    } else if (quad2.icon === "kitty" && quad5.icon === "kitty" && quad8.icon === "kitty") {
        moo();
    } else if (quad0.icon === "kitty" && quad4.icon === "kitty" && quad8.icon === "kitty") {
        moo();
    } else if (quad2.icon === "kitty" && quad4.icon === "kitty" && quad6.icon === "kitty") {
        moo();
    }
}

function moo(): void {
    let cow: Sprite = Sprite.fromImage("./bigcow.png");
    let mooSound: HTMLAudioElement = document.getElementById("moo") as HTMLAudioElement;
    cow.x = 60;
    cow.y = 70;
    app.stage.addChild(cow);
    mooSound.play();

}


