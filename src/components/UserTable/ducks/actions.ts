import { EUser } from './types';

export const userSelected = (id: string): any => {
    return {
        type: EUser.USERSELECTED,
        payload: id,
    };
};

export const usersDataRequested = (): any => {
    return {
        type: EUser.USERSDATAREQUESTED,
    };
};
