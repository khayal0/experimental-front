// Upload Component
// now is it moved to parent component??
export interface ISelectedFile {
    preview: any;
    raw: File;
}

//Generic models
export enum EDrag {
    DRAGENTER = 'dragEnter',
    DRAGLEAVE = 'dragLeave',
    DRAGOVER = 'dragOver',
    DROP = 'drop',
}
