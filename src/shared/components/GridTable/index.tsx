import React, { FC } from 'react';
import Block from '../Block';
import './index.scss';

interface GridProps {
    headers: any;
    body: any;
    columnSize: string;
    className?: string;
}

const Grid: FC<GridProps> = ({ headers, body, columnSize, className }) => {
    return (
        <Block className={`grid-table  ${columnSize} ${className ? className : ''}`}>
            {headers}
            {body}
        </Block>
    );
};

export default Grid;
