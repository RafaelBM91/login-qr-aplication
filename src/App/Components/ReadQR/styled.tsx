import styled, { css } from 'styled-components';

import {
    MicaQR,
    ButtonPauseStop,
    MicaPerimeterQR
} from './models';

const ReadCodeQR = styled.div`
    position: relative;
    width: 640px;
    height: 480px;
`;

const VideoQR = styled.video`
    display: none;
`;

const CanvasQR = styled.canvas`
    position: absolute;
    top: 0;
    left: 0;
    width: 640px;
    height: 480px;
`;

const MicaPauseQR = styled.div`
    display: none;
    ${(props: MicaQR) => props.display === 'true' && css`
        display: flex !important;
    `};
    position: absolute;
    top: 0;
    left: 0;
    width: 640px;
    height: 480px;
    background-color: #000;
    opacity: .6;
    justify-content: center;
    align-items: center;
`;

const MicaActiveQR = styled.div`
    display: none;
    ${(props: MicaQR) => props.display === 'true' && css`
        display: block !important;
    `};
    position: absolute;
    top: 0;
    left: 0;
    width: 544px;
    height: 384px;
    background-color: transparent;
    border: solid rgba(0,0,0,.5);
    border-width: 48px;
`;

const ButtonControl = styled.button`
    display: ${(props: ButtonPauseStop) => css`${props.display || 'block'}`};
    padding: 10px;
    cursor: pointer;
    outline: none;
`;

const BtnPlay = ButtonControl.extend`
    width: 110px;
    height: 110px;
    background-image: url(/images/play.png);
    background-repeat: no-repeat;
    background-size: 80px 80px;
    background-position: 20px 13px;
    border-radius: 55px;
    border: 0px solid;
`;

const BtnPause = BtnPlay.extend`
    background-image: url(/images/pause.svg);
    background-position: 16px 15px;
`;

const MicaPerimeterQR = styled.div`
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    width: 524px;
    height: 364px;
    border: 10px dashed red;
    justify-content: center;
    align-items: center;
    ${(props: MicaPerimeterQR) => props.hover && css`
        &&:hover ${BtnPause} {
            display: block;
        }
    `}
`;

const TimmerQR = styled.div`
    position: absolute;
    top: 105%;
    left: 90%;
    width: 80px;
    height: auto;
    color:#FFF;
    font-style: italic;
`;

export {
    ReadCodeQR,
    VideoQR,
    CanvasQR,
    MicaPauseQR,
    MicaActiveQR,
    ButtonControl,
    BtnPlay,
    BtnPause,
    MicaPerimeterQR,
    TimmerQR
};
