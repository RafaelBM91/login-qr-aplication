import * as React from 'react';

import jsQR from "jsqr";

import { State } from './models';

import {
    ReadCodeQR,
    VideoQR,
    CanvasQR,
    MicaPauseQR,
    BtnPlay,
    MicaActiveQR,
    MicaPerimeterQR,
    BtnPause,
    TimmerQR
} from './styled';

class ReadQR extends React.Component<{},State> {
    video: any;
    canvasElement: any;
    canvas: any;
    counTimer: any;
    
    constructor (props: any) {
        super(props);
        this.state = {
            pause: true,
            timer: 15
        };
    }

    drawLine = (begin, end, color) => {
        this.canvas.beginPath();
        this.canvas.moveTo(begin.x, begin.y);
        this.canvas.lineTo(end.x, end.y);
        this.canvas.lineWidth = 4;
        this.canvas.strokeStyle = color;
        this.canvas.stroke();
    }

    stopRead = () => {
        this.setState({ pause: true, timer: 15 });
        clearInterval(this.counTimer);
    }

    startRead = () => {
        this.autoStopRead();
        this.counTimer = setInterval(() => this.setState({ timer: (this.state.timer - 1) }), 1000);
        this.setState({ pause: false });
    }

    shouldComponentUpdate (nextProps, nextState: State) {
        if (nextState.pause !== this.state.pause) {
            setTimeout(() => this.startGame(), 500);
        }
        return true;
    }

    autoStopRead = () => {
        setTimeout(() => this.stopRead(), (this.state.timer * 1000));
    }

    startGame = () => {
        if (this.video.readyState === this.video.HAVE_ENOUGH_DATA) {
            this.canvasElement.height = this.video.videoHeight;
            this.canvasElement.width = this.video.videoWidth;
            this.canvas.drawImage(this.video, 0, 0, this.canvasElement.width, this.canvasElement.height);
            let imageData = this.canvas.getImageData(0, 0, this.canvasElement.width, this.canvasElement.height);
            
            var code = jsQR(imageData.data, imageData.width, imageData.height);

            if (code) {
                this.stopRead();
                console.log( code );
                this.drawLine(code.location.topLeftCorner, code.location.topRightCorner, "#FF3B58");
                this.drawLine(code.location.topRightCorner, code.location.bottomRightCorner, "#FF3B58");
                this.drawLine(code.location.bottomRightCorner, code.location.bottomLeftCorner, "#FF3B58");
                this.drawLine(code.location.bottomLeftCorner, code.location.topLeftCorner, "#FF3B58");
            }
          }
          if (!this.state.pause)
            (window as any).requestAnimationFrame(this.startGame);
    }

    startCanvas = () => {
        this.canvas = this.canvasElement.getContext("2d");
        let background = new Image();
        background.src = "/images/qr_back.png";
        background.onload = () => {
            this.canvas.drawImage(background,-20,0,340,150);
        }
    }

    componentDidMount () {
        (navigator as any).mediaDevices.getUserMedia({ video: { facingMode: "environment" } }).then((stream) => {
            this.video.srcObject = stream;
            this.video.setAttribute("playsinline", true);
            this.video.play();
            (window as any).requestAnimationFrame(this.startGame);
        });
        this.startCanvas();
    }

    render (): JSX.Element {
        return (
            <ReadCodeQR>
                <VideoQR innerRef={(element: any) => this.video = element}></VideoQR>
                <CanvasQR innerRef={(element: any) => this.canvasElement = element} ></CanvasQR>
                <MicaPauseQR display={this.state.pause.toString()}>
                    <BtnPlay onClick={this.startRead} />
                </MicaPauseQR>
                <MicaActiveQR  display={(!this.state.pause).toString()}>
                    <MicaPerimeterQR hover={true}>
                        <BtnPause display={'none'} onClick={this.stopRead} />
                    </MicaPerimeterQR>
                    <TimmerQR>00:{((this.state.timer <= 9) ? '0' : '') + this.state.timer} seg</TimmerQR>
                </MicaActiveQR>
            </ReadCodeQR>
        );
    }
}

export { ReadQR };
