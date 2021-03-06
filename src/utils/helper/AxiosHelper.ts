import axios from 'axios';
import DispatchType from '../../common/constants/DispatchType';
import { RestResponse } from '../../common/models';
import store from '../redux/store';

const defaultHeader = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
};

const handleError = (err: any) => {
    let errMsg;
    if (err.response) {
        errMsg = err.response.data.message;
    } else {
        errMsg = err;
    }
    store.dispatch({ type: DispatchType.APP.ERROR, data: errMsg });
    return {
        status: 'fail',
        message: errMsg,
    };
};

export const getHelper = async (api: string, headers: any = defaultHeader) => {
    const data = await axios
        .get(api, { headers })
        .then((response) => response.data)
        .catch(handleError);
    return data as RestResponse;
};

export const postHelper = async (
    api: string,
    body: any,
    headers: any = defaultHeader
) => {
    const data = await axios
        .post(api, body, { headers })
        .then((response) => response.data)
        .catch(handleError);
    return data as RestResponse;
};

export const putHelper = async (
    api: string,
    body: any,
    headers: any = defaultHeader
) => {
    const data = await axios
        .put(api, body, { headers })
        .then((response) => response.data)
        .catch(handleError);
    return data as RestResponse;
};

export const deleteHelper = async (
    api: string,
    headers: any = defaultHeader
) => {
    const data = await axios
        .delete(api, { headers })
        .then((response) => response.data)
        .catch(handleError);
    return data as RestResponse;
};
