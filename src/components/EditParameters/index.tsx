import React, { useState } from 'react';
import ReactDataGrid, { TextEditor } from 'react-data-grid';
import { Link } from 'react-router-dom';
import { PATHS } from 'routes/paths';
import Block from 'shared/components/Block';
import Button from 'shared/components/Button';
import Footer from 'shared/components/Footer';
import { initialRows } from './utilities';

import './index.scss';

const columns = [
    { key: 'comment', width: 239, name: 'comment', editor: TextEditor },
    { key: 'city', width: 100, name: 'city' },
    { key: 'moderator', width: 100, name: 'moderator' },
    { key: 'january', width: 120, name: 'january', editor: TextEditor },
    { key: 'feburary', width: 120, name: 'feburary', editor: TextEditor },
    { key: 'march', width: 120, name: 'march', editor: TextEditor },
    { key: 'april', width: 120, name: 'april', editor: TextEditor },
    { key: 'may', width: 120, name: 'may', editor: TextEditor },
    { key: 'june', width: 120, name: 'june', editor: TextEditor },
];

interface IGridState {
    fromRow: any;
    toRow: any;
    updated: any;
}

const DataGrid = () => {
    const [rows, setRows] = useState(initialRows);
    const [selectedRows, setSelectedRows] = useState(() => new Set<React.Key>());

    //handlers

    const rowKeyGetter = (row: any) => {
        return row.id;
    };
    // const RowRenderer = ({ renderBaseRow, ...props }) => {
    //     const color = props.idx % 2 ? 'green' : 'blue';
    //     return <div style={{ color }}>{renderBaseRow({ ...props, height: ((props.idx % 2) + 1) * 40 })}</div>;
    // };
    return (
        <Block className="data-grid-container">
            <Block className="data-grid__inputs-wrapper">
                <Link className="lib-black-button" to={PATHS.ADMINPAGE}>
                    Back
                </Link>
                {/* <Button className="lib-black-button" loading={false} onClick={() => {}}>
                    Refresh
                </Button> */}
                <Button className="lib-black-button" loading={false} onClick={() => {}}>
                    Save
                </Button>
            </Block>
            <Block className="data-grid__table">
                <ReactDataGrid
                    rows={rows}
                    columns={columns}
                    className="data-grid-component"
                    rowHeight={50}
                    headerRowHeight={40}
                    onRowsChange={setRows}
                    rowKeyGetter={rowKeyGetter}
                    selectedRows={selectedRows}
                    onSelectedRowsChange={setSelectedRows}
                />
            </Block>
            <Footer />
        </Block>
    );
};

export default DataGrid;
