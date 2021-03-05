import { IUploadStarted } from 'models';
import { EUpload } from './types';

export const uploadStarted = (product: any): IUploadStarted => {
    return {
        type: EUpload.UPLOADSTARTED,
        payload: product,
    };
};
