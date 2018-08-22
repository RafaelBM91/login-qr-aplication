import * as React from 'react';
import { QRCode } from 'react-qr-svg';

import { LoadQR } from './models';

import {
    ContLoadQR,
    EntryName,
    ButonSubmit
} from './styled';

const LoadQR: React.SFC<LoadQR> = (props) => 
    <ContLoadQR>
        <EntryName type='text' onChange={(event) => props.changeText(event)} />
        &nbsp;&nbsp;
        <ButonSubmit onClick={(event) => props.clickSubmit()} >Generar Codigo.!</ButonSubmit>
        <br /><br />
        {
            (props.generate) ?
                <QRCode 
                    bgColor="#FFFFFF"
                    fgColor="#000000"
                    level="Q"
                    style={{ width: 256 }}
                    value={props.value}
                />
            :
                null
        }
    </ContLoadQR>

export { LoadQR };
