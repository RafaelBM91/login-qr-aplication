import * as React from 'react';

import { State } from './models';

import { LoadQR } from '../../Components/LoadQR';

class WithLoadQR extends React.Component<{},State> {
    constructor (props) {
        super(props);
        this.state = {
            value: '',
            generate: false
        };
    }
    changeText = (event: any) => {
        this.setState({ value: event.target.value });
    }
    clickSubmit = () => {
        console.log( this.state.value.length );
        if (this.state.value.length > 0) {
            let value = `{
                user: ${this.state.value},
                expire: ${new Date(new Date().getTime() + (1 * 60000)).toString()}
            }`;
            console.log( value );
            // this.setState({ generate: true, value: this.state.value });
            this.setState({ generate: true, value });
        } 
    }
    render (): JSX.Element {
        return (
            <LoadQR 
                value={this.state.value}
                changeText={this.changeText}
                clickSubmit={this.clickSubmit}
                generate={this.state.generate}
            />
        );
    }
}

export { WithLoadQR };
