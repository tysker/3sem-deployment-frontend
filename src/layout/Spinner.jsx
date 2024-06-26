import { Fragment } from 'react';
import spinner from '../assets/spinner.gif';

export default function Spinner(){
    return (
        <Fragment>
        <img
            src={spinner}
            style={{ width: '200px', margin: 'auto', display: 'block'}}
            alt="Loading..."
        />
        </Fragment>
    );
}

