import { ICredentials } from 'models';
import { EAuth } from './types';

export const loginRequested = (credentials: ICredentials) => {
    return {
        type: EAuth.AUTHSTARTED,
        payload: credentials,
    };
};
