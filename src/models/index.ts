import { EUser } from 'components/UserTable/ducks/types';
import { IRootStateCombinedReducer } from 'store/combinedReducer';
import { EUpload } from 'components/ImageUpload/ducks/types';
// IUser

export interface IUser {
    id: string;
    name: string;
    date: string;
    email: string;
    phone: string;
    status: string;
    totaltasks: number;
}

export interface IUsers {
    byId: { [key: string]: IUser };
    allIds: string[];
    selectedUserId: string;
}

export interface IUserSlected {
    type: EUser;
    payload: string;
}

// saga models

export interface IDataRequested {
    type: EUser;
}
export interface IUsersDataReceived {
    type: EUser;
    payload: {
        byId: { [key: string]: IUser };
        allIds: string[];
    };
}

// export interface IUserActions extends ISelectUser {} // to give reducer's action
export interface IRootState extends IRootStateCombinedReducer {}

// upload shared components
export interface IUploadStarted {
    type: EUpload;
    payload: any;
}

// ImageUpload component

// export interface IProductUploadStarted {
//     type: EUpload;
// }

export interface IProduct {
    name: string;
    price: number;
    oldPrice: number;
    info: string;
}

// Select and Input types
export interface ISelectValue {
    label: string;
    value: string;
}
export interface IInputValue {
    name: string;
    value: string;
}

// communals
export interface IUtilities {
    electric: number;
    gas: number;
    water: number;
}
