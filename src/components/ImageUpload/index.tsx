import React, { FC, useState } from 'react';
import { connect } from 'react-redux';
import Button from 'shared/components/Button';
import Block from 'shared/components/Block';
import InputText from 'shared/components/Inputs/InputText';
import Upload from 'shared/components/Upload';
import { uploadStarted } from './ducks/actions';
import { IProduct } from 'models';

// import ImageList from './ImageList';

import './index.scss';

interface IProps {}

const ImageUpload: FC<any> = ({ uploadStarted }) => {
    // const productId = '1';
    const formData = new FormData();
    const [product, setProduct] = useState<IProduct>({
        name: 'xxxxxxxxxxxx',
        price: 22,
        oldPrice: 222,
        info: 'this is best product you con buy',
    });

    // formData.set('productId', productId);

    // @ts-ignore
    for (var pair of formData.entries()) {
        console.log(pair[0] + ', ' + pair[1]);
    }

    const handleProductUpload = () => {
        uploadStarted(formData);
        setTimeout(() => {
            window.location.reload();
        }, 4000);
    };

    const handleImageSelect = (image: any) => {
        console.log('== handleImageSelect_image ==>', image);
        formData.append('image', image.raw);
        formData.append('product', JSON.stringify(product));
    };

    const handleProductChange = ({ name, value }: { name: string; value: string | number }) => {
        // console.table(product);
        setProduct({ ...product, [name]: value.toString() });
    };
    return (
        <>
            <Block className="image-upload">
                <Block className="image-upload__dropbox">
                    <Upload handleImageSelect={handleImageSelect} multiple={false} />
                </Block>

                <Block>
                    <Block className="image-upload__information">
                        <InputText
                            onChange={handleProductChange}
                            placeholder="example:  MAC lipstick"
                            label="name"
                            name="name"
                            type="text"
                        />
                        <Block className="image-upload__information__prices">
                            <InputText
                                onChange={handleProductChange}
                                placeholder="ex: 45"
                                label="price"
                                name="price"
                                type="number"
                                className="image-upload__information--price"
                            />
                            <InputText
                                onChange={handleProductChange}
                                placeholder="ex: 65"
                                label="old price"
                                name="oldPrice"
                                type="number"
                                className="image-upload__information--price"
                            />
                        </Block>
                    </Block>
                    <Block>
                        <span>Information</span>
                    </Block>
                    <Block>
                        <textarea
                            onChange={e => {
                                handleProductChange({ name: 'information', value: e.currentTarget.value });
                            }}
                            className="image-upload__information--textarea"
                            cols={62}
                            rows={14}
                            placeholder="information about the product"
                            maxLength={1600}
                        ></textarea>
                    </Block>
                    <Button onClick={handleProductUpload} className="image-upload__done-button">
                        Upload
                    </Button>
                </Block>
            </Block>
        </>
    );
};
export default connect(null, { uploadStarted })(ImageUpload);
