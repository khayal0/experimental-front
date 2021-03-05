import React, { ChangeEvent, FC } from 'react';
import Block from 'shared/components/Block';
import './index.scss';

interface IProps {
    className?: string;
    onChange({ name, value }: { name: string; value: string | number }): void;
    label?: string;
    name?: string;
    type: 'text' | 'number' | 'textarea';
    placeholder?: string;
}

const InputText: FC<IProps> = ({ className, label, name, onChange, type, placeholder }) => {
    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        onChange({ name: e.currentTarget.name, value: e.currentTarget.value });
    };
    return (
        <Block className={`input-text  ${className ? className : ''}`}>
            <label>
                {label && <span>{label}</span>}
                <input type={type} onChange={handleInput} name={name} placeholder={placeholder} />
            </label>
        </Block>
    );
};

export default InputText;
