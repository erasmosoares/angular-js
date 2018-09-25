let a: number;
let b: boolean;
let c: string;
let d: any;

enum Color{Red = 0,Green = 1,Blue = 2};
let BackgroundColor = Color.Blue;

let message;
message = 'abc';
let endsWithC = (message as string).endsWith('c');

//Arrow functions (lambda expression)
let log = function(message){
    console.log(message);
}

let arrowLog = (message) =>{
    console.log(message);
}

//Interface
interface Point{
    a:number,
    b:number,
}

let drawPoint = (point:Point)=>{
    //..
}

class Point{

    constructor(private _x?:number, private _y?:number){ }

    get X(){
        return this._x;
    }

    set X(value){
        this._x = value;
    }
    draw(){

    }
}