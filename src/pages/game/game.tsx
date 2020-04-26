import * as React from "react";


const STROKE_COLOR = '#fff'


function drawRect(ctx) {
    ctx.fillStyle = "#FFA500";
    ctx.fillRect(25, 25, 100, 100);
}

const drwCircle = ctx => {
    ctx.beginPath();
    ctx.fillStyle = '#000000';
    ctx.arc(25, 25, 16, 0, Math.PI*2, true);
    ctx.fill();
}

const drwWhiteCircle = ctx => {
    ctx.beginPath();
    ctx.fillStyle = '#ffffff';
    ctx.arc(125, 225, 16, 0, Math.PI*2, true);
    ctx.fill();
}

const drwLintVertical = (ctx, x) => {
    ctx.beginPath();
    ctx.fillStyle = "#FFA500";
    ctx.lineWidth = 0.5;
    ctx.strokeStyle = STROKE_COLOR;
    ctx.moveTo(x, 0);
    ctx.lineTo(x, 1000);
    ctx.stroke(); 
}


const drwLintHorizontal = (ctx, y) => {
    ctx.beginPath();
    ctx.fillStyle = "#FFA500";
    ctx.lineWidth = 0.5;
    ctx.strokeStyle = STROKE_COLOR;
    ctx.moveTo(0, y);
    ctx.lineTo(1000, y);
    ctx.stroke()
}


const drwLines = (ctx) => {
    for (let i = 0; i < 1000; i+=50) {
        drwLintVertical(ctx, i);
        drwLintHorizontal(ctx, i);
    }
}

const drwBg = ctx => {
    ctx.fillStyle = "#cd9a5b";
    ctx.fillRect(0, 0, 1000, 1000);
    ctx.fill();
}



export default class Game extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
    }

    componentDidMount(){
        var canvas = document.getElementById('tutorial') as any;
        var ctx = canvas.getContext('2d');
       
        drwBg(ctx);

        drwLines(ctx);

        drwCircle(ctx);


        drwWhiteCircle(ctx);
    }

    render() {
        return(
            <div>
                <canvas id="tutorial" width="1000" height="800"></canvas>
            </div>
        )
    }
}