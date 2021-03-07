import React, { useState } from 'react';
import ReactDataGrid, { FillEvent } from 'react-data-grid';
import Block from 'shared/components/Block';
import Button from 'shared/components/Button';
import Footer from 'shared/components/Footer';

import './index.scss';

const columns = [
    { key: 'id', name: 'ID' },
    { key: 'title', name: 'Title' },
    { key: 'count', name: 'Count' },
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
];

interface IGridState {
    fromRow: any;
    toRow: any;
    updated: any;
}

const DataGrid = () => {
    const [gridState, setGridState] = useState<any>(rows);

    const onGridRowsUpdated = ({ fromRow, toRow, updated }: IGridState) => {
        setGridState((gridState: any) => {
            const rows = gridState.slice();
            for (let i = fromRow; i <= toRow; i++) {
                rows[i] = { ...rows[i], ...updated };
            }
            return { rows };
        });
    };
    function handleFill({ columnKey, sourceRow, targetRows }: FillEvent<any>): any[] {
        return targetRows.map(row => ({ ...row, [columnKey as keyof any]: sourceRow[columnKey as keyof any] }));
    }
    return (
        <Block className="data-grid-container">
            <Block className="data-grid">
                <Block className="data-grid__title">
                    <span>EDIT DATA</span>
                </Block>
                {/* <Block className="data-grid__inputs-wrapper">
                    <Button className="data-grid__continue" loading={false} onClick={() => {}}>
                        Add Comment to Summary
                    </Button>
                    <Button className="data-grid__continue" loading={false} onClick={() => {}}>
                        Download Summary
                    </Button>
                    <Button className="data-grid__continue" loading={false} onClick={() => {}}>
                        Edit parameters
                    </Button>
                </Block> */}
            </Block>
            <Block className="data-grid__table">
                <ReactDataGrid
                    rows={rows}
                    columns={columns}
                    className="data-grid-component"
                    //@ts-ignore
                    onFill={handleFill}
                    rowHeight={39}
                />
            </Block>

            <Footer />
        </Block>
    );
};

export default DataGrid;
