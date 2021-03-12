import React, { useState } from 'react';
import ReactDataGrid, { TextEditor } from 'react-data-grid';
import { Link } from 'react-router-dom';
import { PATHS } from 'routes/paths';
import Block from 'shared/components/Block';
import Button from 'shared/components/Button';
import Footer from 'shared/components/Footer';

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
    { key: 'july', width: 120, name: 'july', editor: TextEditor },
    // { key: 'august', width: 120, name: 'august', editor: TextEditor },
    // { key: 'september', width: 120, name: 'september', editor: TextEditor },
    // { key: 'october', width: 120, name: 'october', editor: TextEditor },
    // { key: 'november', width: 120, name: 'november', editor: TextEditor },
    // { key: 'december', width: 120, name: 'december', editor: TextEditor },
];

const initialRows = [
    {
        comment: '',
        city: 'Haifa',
        moderator: 'Shai',
        january: 100_232.232,
        feburary: 3243240,
        march: 0,
        april: 20324,
    },
    {
        comment: 'too much energy need for Garden',
        city: 'Garden',
        moderator: 'Shai',
        january: 42120,
        feburary: 0,
        march: 0,
        april: 23240,
    },
    {
        comment: '',
        city: 'Baku',
        moderator: 'Shai',
        january: 20,
        feburary: 342430,
        march: 0,
        april: 23420,
    },
    {
        comment: '',
        city: 'Istanbul',
        moderator: 'Khayal',
        january: 2420,
        feburary: 4335230,
        march: 0,
        april: 230,
    },
    {
        comment: '',
        city: 'Rome',
        moderator: 'Alin',
        january: 320,
        feburary: 3420,
        march: 0,
        april: 220,
    },
    {
        comment: 'beautiful city',
        city: 'Denver',
        moderator: 'Lian',
        january: 120,
        feburary: 110,
        march: 0,
        april: 1120,
    },
    {
        comment: '',
        city: 'Bisbane',
        moderator: 'Lian',
        january: 20,
        feburary: 240,
        march: 0,
        april: 3320,
    },
    {
        comment: '',
        city: 'Koyoto',
        moderator: 'Mor',
        january: 220,
        feburary: 1240,
        march: 0,
        april: 3320,
    },
    {
        comment: 'march is weird',
        city: 'Prague',
        moderator: 'Mor',
        january: 210,
        feburary: 50,
        march: 0,
        april: 1220,
    },
    {
        comment: 'march is weird',
        city: 'Prague',
        moderator: 'Mor',
        january: 210,
        feburary: 50,
        march: 0,
        april: 1220,
    },
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
