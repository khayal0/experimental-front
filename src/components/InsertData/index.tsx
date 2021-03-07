import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import Select, { Theme } from 'react-select';
import Block from 'shared/components/Block';
import Button from 'shared/components/Button';
import Footer from 'shared/components/Footer';
import InputText from 'shared/components/Inputs/InputText';
import dateFnsFormat from 'date-fns/format';

import 'react-datepicker/dist/react-datepicker.css';
import './index.scss';

const InsertData = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [date, setDate] = useState<Date>(new Date());
    const [gas, setGas] = useState<number>();
    const [electric, setElectric] = useState<number>();
    const [water, setWater] = useState<number>();
    const [selectedSite, setSelectedSite] = useState<any>(null);
    const [startDate, setStartDate] = useState(new Date());
    const options = [
        { value: 'baku', label: 'Baku' },
        { value: 'haifa', label: 'Haifa' },
        { value: 'netanya', label: 'Netanya' },
        { value: 'istanbul', label: 'Istanbul' },
    ];
    // handlers
    const handleSend = () => {
        setLoading(true);
    };
    const handleDateChange = (e: any) => {
        console.log(e);
        setDate(date);
    };
    const handleChangeSite = (e: any) => {
        setSelectedSite(e);
    };

    //custom style for select
    const selectStyle = (theme: Theme) => ({
        ...theme,
        spacing: {
            ...theme.spacing,
            controlHeight: 30,
            baseUnit: 3,
        },
    });

    return (
        <Block className="insert-data-container">
            <div className="ghost-element"></div>
            <Block className="insert-data">
                <Block className="insert-data__title">
                    <span>Send Data</span>
                </Block>
                <Block className="insert-data__inputs-wrapper">
                    <Select
                        className="insert-data__select"
                        value={selectedSite}
                        onChange={handleChangeSite}
                        options={options}
                        height="12px"
                        isSearchable={true}
                        theme={selectStyle}
                        placeholder="Select a site"
                    />
                    <Block className="datepicker-wrapper">
                        <DatePicker
                            className="insert-data__datepicker"
                            dateFormat="dd-MM-yyyy"
                            onChange={(value: Date) => setDate(value)}
                            selected={date}
                        />
                    </Block>

                    <InputText onChange={handleDateChange} name="gas" type="text" placeholder="Gas" />
                    <InputText onChange={handleDateChange} name="electric" type="text" placeholder="Electric" />
                    <InputText onChange={handleDateChange} name="water" type="text" placeholder="Water" />
                    <Button className="insert-data__continue" loading={loading} onClick={handleSend}>
                        Send
                    </Button>
                </Block>
            </Block>
            <Footer />
        </Block>
    );
};

export default InsertData;
