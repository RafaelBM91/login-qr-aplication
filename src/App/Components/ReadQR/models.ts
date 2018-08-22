interface MicaQR {
    display: string;
}

interface ButtonPauseStop {
    display?: string;
}

interface MicaPerimeterQR {
    hover?: boolean;
}

interface State {
    pause: boolean;
    timer: number;
}

export { MicaQR, ButtonPauseStop, MicaPerimeterQR, State };
