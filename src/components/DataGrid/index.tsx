import React, { useState } from 'react';
import ReactDataGrid, { TextEditor } from 'react-data-grid';
import Block from 'shared/components/Block';
import Button from 'shared/components/Button';
import Footer from 'shared/components/Footer';

import './index.scss';

const columns = [
    { editor: TextEditor, key: 'comment', name: 'comment' },
    { editor: TextEditor, key: 'city', name: 'city' },
    { editor: TextEditor, key: 'january', name: 'January' },
    { editor: TextEditor, key: 'feburary', name: 'feburary' },
    { editor: TextEditor, key: 'march', name: 'march' },
    { editor: TextEditor, key: 'april', name: 'april' },
    { editor: TextEditor, key: 'may', name: 'may' },
    { editor: TextEditor, key: 'june', name: 'june' },
];

const initialRows = [
    { comment: '', city: 'Haifa', january: 223140, feburary: 3243240, march: 'row1', april: 20324 },
    { comment: 'too much consuption', city: 'row1', january: 42120, feburary: 0, march: 'row1', april: 23240 },
    { comment: '', city: 'Baku', january: 20, feburary: 342430, march: 'row1', april: 23420 },
    { comment: '', city: 'Istanbul', january: 2420, feburary: 4335230, march: 'row1', april: 230 },
    { comment: '', city: 'Rome', january: 320, feburary: 3420, march: 'row1', april: 220 },
    { comment: '', city: 'Denver', january: 120, feburary: 110, march: 'row1', april: 1120 },
    { comment: '', city: 'Bisbane', january: 20, feburary: 240, march: 'row1', april: 3320 },
    { comment: '', city: 'Koyoto', january: 220, feburary: 1240, march: 'row1', april: 3320 },
    { comment: '', city: 'Prague', january: 210, feburary: 50, march: 'row1', april: 1220 },
    { comment: '', city: 'Madrid', january: 210, feburary: 440, march: 'row1', april: 12320 },
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

    // function handleFill({ columnKey, sourceRow, targetRows }: any): any[] {
    //     return targetRows.map((row: any) => ({ ...row, [columnKey as keyof any]: sourceRow[columnKey as keyof any] }));
    // }

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
                    //not used
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
