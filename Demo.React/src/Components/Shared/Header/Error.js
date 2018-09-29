import React from 'react';
import { store } from '../../../index';
import * as ActionsTypes from '../../../Actions/types';

export default function Error(props) {
    debugger
    return (
        <div className="alert alert-danger">
            <button type="button" className="close" onClick={onClose} >
                <span>&times;</span>
            </button>
            <div>
            {props.error}
            </div>

        </div>
    );
}

function onClose() {
    console.log('close');
    store.dispatch({
        type: ActionsTypes.RESET_ERROR_MESSAGE,
        payload: null
    });
}