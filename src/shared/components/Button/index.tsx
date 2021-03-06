import React, { ReactNode, FC, HTMLAttributes } from 'react';

import './index.scss';

export enum EButtonType {
    SUBMIT = 'submit',
    RESET = 'reset',
    BUTTON = 'button',
}

interface IProps extends HTMLAttributes<HTMLElement> {
    type?: EButtonType;
    className?: string;
    id?: string;
    children?: ReactNode | string;
    disabled?: boolean;
    loading?: boolean;
}

const Button: FC<IProps> = ({
    type = EButtonType.BUTTON,
    disabled = false,
    loading,
    children,
    className,
    ...others
}) => {
    disabled = loading ? true : disabled;
    className = className || 'button-lib';
    return (
        <button {...{ ...others }} className={`${className} ${loading ? className + '--loading' : ''}`}>
            {loading ? <div className="dot-flashing"></div> : children}
        </button>
    );
};

export default Button;
