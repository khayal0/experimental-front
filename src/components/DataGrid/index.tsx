import React, { useState } from 'react';
import ReactDataGrid, { TextEditor } from 'react-data-grid';
import Block from 'shared/components/Block';
import Button from 'shared/components/Button';
import Footer from 'shared/components/Footer';

import './index.scss';

const columns = [
    { editor: TextEditor, key: 'id', name: 'ID' },
    { editor: TextEditor, key: 'title', name: 'Title' },
    { editor: TextEditor, key: 'count', name: 'Count' },
    { editor: TextEditor, key: 'count', name: 'Count' },
    { editor: TextEditor, key: 'count', name: 'Count' },
    { editor: TextEditor, key: 'count', name: 'Count' },
    { editor: TextEditor, key: 'count', name: 'Count' },
    { editor: TextEditor, key: 'count', name: 'Count' },
    { editor: TextEditor, key: 'count', name: 'Count' },
    { editor: TextEditor, key: 'count', name: 'Count' },
    { editor: TextEditor, key: 'count', name: 'Count' },
];

const rows = [
    { id: 0, title: 'row1', count: 20, id1: 0, title1: 'row1', count1: 20 },
    { id: 0, title: 'row1', count: 20, id1: 0, title1: 'row1', count1: 20 },
    { id: 0, title: 'row1', count: 20, id1: 0, title1: 'row1', count1: 20 },
    { id: 0, title: 'row1', count: 20, id1: 0, title1: 'row1', count1: 20 },
    { id: 0, title: 'row1', count: 20, id1: 0, title1: 'row1', count1: 20 },
    { id: 0, title: 'row1', count: 20, id1: 0, title1: 'row1', count1: 20 },
    { id: 0, title: 'row1', count: 20, id1: 0, title1: 'row1', count1: 20 },
    { id: 0, title: 'row1', count: 20, id1: 0, title1: 'row1', count1: 20 },
    { id: 0, title: 'row1', count: 20, id1: 0, title1: 'row1', count1: 20 },
    { id: 0, title: 'row1', count: 20, id1: 0, title1: 'row1', count1: 20 },
];

interface IGridState {
    fromRow: any;
    toRow: any;
    updated: any;
}

const DataGrid = () => {
    const [selectedRows, setSelectedRows] = useState(() => new Set<React.Key>());

    // function handleFill({ columnKey, sourceRow, targetRows }: any): any[] {
    //     return targetRows.map((row: any) => ({ ...row, [columnKey as keyof any]: sourceRow[columnKey as keyof any] }));
    // }

    //handlers

    const rowKeyGetter = (row: any) => {
        return row.id;
    };

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
                    rowHeight={40}
                    rowKeyGetter={rowKeyGetter}
                />
            </Block>
            <Footer />
        </Block>
    );
};

export default DataGrid;
