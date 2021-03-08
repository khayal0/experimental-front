import React, { useState } from 'react';
import ReactDataGrid, { TextEditor } from 'react-data-grid';
import Block from 'shared/components/Block';
import Button from 'shared/components/Button';
import Footer from 'shared/components/Footer';

import './index.scss';

const columns = [
    { editor: TextEditor, key: 'city', name: 'city' },
    { key: 'moderator', name: 'moderator' },
    { editor: TextEditor, key: 'january', name: 'January' },
    { editor: TextEditor, key: 'feburary', name: 'feburary' },
    { editor: TextEditor, key: 'march', name: 'march' },
    { editor: TextEditor, key: 'april', name: 'april' },
    { editor: TextEditor, key: 'comment', name: 'comment' },
];

const initialRows = [
    {
        comment: '',
        city: 'Haifa',
        moderator: 'Shai',
        january: 223140,
        feburary: 3243240,
        march: 'row1',
        april: 20324,
    },
    {
        comment: 'too much consuption',
        city: 'row1',
        moderator: 'Shai',
        january: 42120,
        feburary: 0,
        march: 'row1',
        april: 23240,
    },
    { city: 'Baku', moderator: 'Shai', january: 20, feburary: 342430, march: 'row1', april: 23420, comment: '' },
    { city: 'Istanbul', moderator: 'Khayal', january: 2420, feburary: 4335230, march: 'row1', april: 230, comment: '' },
    { city: 'Rome', moderator: 'Alin', january: 320, feburary: 3420, march: 'row1', april: 220, comment: '' },
    { city: 'Denver', moderator: 'Lian', january: 120, feburary: 110, march: 'row1', april: 1120, comment: '' },
    { city: 'Bisbane', moderator: 'Lian', january: 20, feburary: 240, march: 'row1', april: 3320, comment: '' },
    { city: 'Koyoto', moderator: 'Mor', january: 220, feburary: 1240, march: 'row1', april: 3320, comment: '' },
    { city: 'Prague', moderator: 'Mor', january: 210, feburary: 50, march: 'row1', april: 1220, comment: '' },
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
            {/* <Block className="data-grid__title">
                    <span>EDIT DATA</span>
                </Block> */}

            <Block className="data-grid__inputs-wrapper">
                <Button className="data-grid__continue" loading={false} onClick={() => {}}>
                    Back
                </Button>
                {/* <Button className="data-grid__continue" loading={false} onClick={() => {}}>
                    Refresh
                </Button> */}
                <Button className="data-grid__continue" loading={false} onClick={() => {}}>
                    Save
                </Button>
            </Block>
            <div className="ghost-element"></div>
            <Block className="data-grid__table">
                <ReactDataGrid
                    rows={rows}
                    columns={columns}
                    className="data-grid-component"
                    rowHeight={50}
                    headerRowHeight={30}
                    //not used
                    onRowsChange={setRows}
                    rowKeyGetter={rowKeyGetter}
                    selectedRows={selectedRows}
                    onSelectedRowsChange={setSelectedRows}
                    // rowRenderer={RowRenderer}
                />
            </Block>
            <Footer />
        </Block>
    );
};

export default DataGrid;
