import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import Select, { Theme } from 'react-select';
import Block from 'shared/components/Block';
import Button from 'shared/components/Button';
import Footer from 'shared/components/Footer';
import InputText from 'shared/components/Inputs/InputText';

import { IInputValue, ISelectValue } from 'models';

import 'react-datepicker/dist/react-datepicker.css';
import './index.scss';

const SendData = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [selectedSite, setSelectedSite] = useState<any>(null);
    const [startDate, setStartDate] = useState(new Date());
    const options = [
        { value: 'baku', label: 'Baku' },
        { value: 'haifa', label: 'Haifa' },
        { value: 'netanya', label: 'Netanya' },
        { value: 'istanbul', label: 'Istanbul' },
        { value: 'lachin', label: 'Lachin' },
    ];

    // handlers
    const handleSend = () => {
        setLoading(true);
    };
    const handleDateChange = (value: Date) => {
        setStartDate(value);
    };
    const handleChangeSite = (value: ISelectValue) => {
        setSelectedSite(value);
    };
    const handleCommunalChange = (value: IInputValue) => {
        console.log(value);
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
        <Block className="send-data-container">
            <div className="ghost-element"></div>
            <Block className="send-data">
                <Block className="send-data__title">
                    <span>Send Data</span>
                </Block>
                <Block className="send-data__inputs-wrapper">
                    <Select
                        className="send-data__select"
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
                            className="send-data__datepicker"
                            dateFormat="dd-MM-yyyy"
                            onChange={handleDateChange}
                            selected={startDate}
                        />
                    </Block>

                    <InputText onChange={handleCommunalChange} name="gas" type="number" placeholder="Gas" />
                    <InputText onChange={handleCommunalChange} name="electric" type="number" placeholder="Electric" />
                    <InputText onChange={handleCommunalChange} name="water" type="number" placeholder="Water" />
                    <Button className="send-data__continue" loading={loading} onClick={handleSend}>
                        Send
                    </Button>
                </Block>
            </Block>
            <Footer />
        </Block>
    );
};

export default SendData;
