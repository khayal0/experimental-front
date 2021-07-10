import React, { FC, ChangeEvent, useState, useRef, useEffect } from 'react';
import Block from '../Block';
import Button from '../Button';
import { ISelectedFile, EDrag } from 'shared/models';
import { UploadIcon } from './icons';

import './index.scss';

interface IProps {
    handleImageSelect: any;
    multiple?: boolean;
}
const Upload: FC<IProps> = ({ handleImageSelect, multiple }) => {
    const uploadInputRef = useRef<HTMLInputElement>(null);
    const [selectedFile, setSelectedFile] = useState<ISelectedFile | null>(null);
    const [dropzononeHover, setDropzoneHover] = useState(false);
    const handleSelect = (event: ChangeEvent<HTMLInputElement>) => {
        // second check --> if files is an empty array, URL method error
        if (event.target.files && event.target.files.length > 0) {
            setSelectedFile({
                preview: URL.createObjectURL(event.target.files[0]),
                raw: event.target.files[0],
            });
        } else {
            // to remove preview
            setSelectedFile(null);
            handleImageSelect(null);
        }
    };
    const handleUpload = () => {
        if (selectedFile?.raw) {
            handleImageSelect(selectedFile);
            // console.log(' Success : file added to local state');
        } else {
            console.log('Error : No Selected Files');
        }
    };

    const handleDropClick = () => {
        uploadInputRef?.current?.click();
    };

    const handleDrop = (e: React.DragEvent, type: EDrag) => {
        e.preventDefault();
        e.stopPropagation();
        switch (type) {
            case EDrag.DRAGENTER:
                break;
            case EDrag.DRAGLEAVE:
                setDropzoneHover(false);
                break;
            case EDrag.DRAGOVER:
                setDropzoneHover(true);
                break;
            case EDrag.DROP:
                setDropzoneHover(false);
                uploadDrop(e.dataTransfer);
                break;
            default:
                console.log('handleDrop error');
        }
    };

    const uploadDrop = (dataTransfer: any) => {
        const imageFile = dataTransfer.files[0];
        setSelectedFile({
            preview: URL.createObjectURL(imageFile),
            raw: imageFile,
        });
    };

    const handleRemoveImage = () => {
        setSelectedFile(null);
    };

    useEffect(() => {
        handleUpload();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedFile]);

    return (
        <Block className="upload">
            <input type="file" name="fileInput" onChange={handleSelect} ref={uploadInputRef} multiple={multiple} />
            <div
                className={`upload__dropzone ${dropzononeHover ? ' upload__dropzone--hover' : null}`}
                onClick={handleDropClick}
                onDrop={e => handleDrop(e, EDrag.DROP)}
                onDragOver={e => handleDrop(e, EDrag.DRAGOVER)}
                onDragEnter={e => handleDrop(e, EDrag.DRAGENTER)}
                onDragLeave={e => handleDrop(e, EDrag.DRAGLEAVE)}
                draggable="true"
            >
                <Block className="upload__dropzone__icon">
                    <UploadIcon />
                    <span>Drop files here or click to Upload</span>
                </Block>
            </div>
            {selectedFile?.preview ? (
                <Block className="upload__preview">
                    <img className="upload__preview__image" alt="preview" src={selectedFile?.preview} />
                    <Block className="progress">
                        <div className="progress-value"></div>
                    </Block>
                    <Button className="close-btn" onClick={handleRemoveImage}>
                        <svg viewBox="0 0 200 200" width="17" height="21">
                            <rect width="200" height="200" fill="red" opacity="0"></rect>
                            <polygon points="166.61 44.7 155.3 33.39 100 88.69 44.7 33.39 33.39 44.7 88.69 100 33.39 155.3 44.7 166.61 100 111.31 155.3 166.61 166.61 155.3 111.31 100 166.61 44.7"></polygon>
                        </svg>
                    </Button>
                </Block>
            ) : null}
        </Block>
    );
};

export default Upload;
