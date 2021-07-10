import { ICredentials } from 'models';
import { EAuth } from './types';

export const parametersRequested = (credentials: ICredentials) => {
    return {
        type: EAuth.AUTHREQUESTED,
        payload: credentials,
    };
};

// export interface ILoginRequested {
//     type: EAuth;
//     payload: ICredentials;
// }
