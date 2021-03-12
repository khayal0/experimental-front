import { IRootStateCombinedReducer } from 'store/combinedReducer';

// export interface IUserActions extends ISelectUser {} // to give reducer's action
export interface IRootState extends IRootStateCombinedReducer {}

// Select and Input types
export interface ISelectValue {
    label: string;
    value: string;
}
export interface IInputValue {
    name: string;
    value: string;
}

// Login
export interface ICredentials {
    username: string;
    password: string;
}

// utilities
export interface IUtilities {
    electric: number;
    gas: number;
    water: number;
}

// actions

export interface IToken {
    token: string;
}

export enum EUserRole {
    ADMIN = 'admin',
    MODERTOR = 'moderator',
}
