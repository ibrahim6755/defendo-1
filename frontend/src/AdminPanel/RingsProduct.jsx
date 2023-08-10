import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import { useAddRingDetailsMutation } from '../features/rings'
import * as Yup from 'yup';
import { useEffect } from 'react';


function RingsProduct() {

    const [addRingDetails, { error }] = useAddRingDetailsMutation();

    const initialValues = {
        name: '',
        price: '',
        quantity: '',
    }


    const validationSchema = Yup.object().shape({
        name: Yup.string().required(''),
        price: Yup.string().required(''),
        quantity: Yup.string().required('')
    });



    const [colors, setColors] = useState([]);

    const handleAddColor = () => {
        // Access the input field value (assuming the input has the 'colorInput' ref attribute)
        const colorInput = document.getElementById('colorInput');
        const newColor = colorInput.value;

        if (newColor.trim() !== '') {
            setColors((prevColors) => [...prevColors, newColor]);
            colorInput.value = '';

        }
    };

    const handleRemoveColor = (colorIndex) => {
        // Remove the color from the 'colors' array
        setColors((prevColors) => prevColors.filter((color, index) => index !== colorIndex));
    };

    const [variants, setVariants] = useState([]);

    const handleAddVariant = () => {
        const sizeInput = document.getElementById('sizeInput');
        const stockInput = document.getElementById('stockInput');
        const newSize = sizeInput.value;
        const newStock = stockInput.value;

        if (newSize.trim() !== '' && newStock.trim() !== '') {
            setVariants((prevVariants) => [...prevVariants, { size: newSize, stock: newStock }]);

            sizeInput.value = '';
            stockInput.value = '';
        }
    };
    const handleRemoveVariant = (variantIndex) => {
        setVariants((prevVariants) => prevVariants.filter((_, index) => index !== variantIndex));
    };

    const [image, setImage] = useState('');
    const [image1, setImage1] = useState('');

    

    const handleSubmit = async (values, { resetForm }) => {


        const formData = new FormData();

        formData.append('name', values.name);
        formData.append('price', values.price);
        formData.append('quantity', values.quantity);
        formData.append('img', image);
        formData.append('img2', image1);
        formData.append('colors', colors);
        formData.append('variants', variants);

        // const newRing = {
        //     name: values.name,
        //     price: values.price,
        //     quantity: values.quantity,
        //     img: image,
        //     img2: image1,
        //     colors: colors,
        //     variants: variants
        // }
        try {
            await addRingDetails(formData);
            resetForm();
        } catch (error) {

            console.log(error);
        }
        console.log(formData);

    }

    return (
        <div className="login-wrapper p-5">
            <div className="row">
                <div className="container">
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                        {({ errors, touched, values }) => (
                            <Form className="form">
                                <h1 className="h3 mb-3 fw-normal text-center text-uppercase heading">Add Product <strong>RING</strong></h1>
                                <div className="display">
                                    <div className="inside-form">
                                        <Field className='email p-1 my-2' type="text" placeholder='Name' name="name" />
                                        {errors.name && <ErrorMessage className="error-message" name="name" component="div" />}
                                        <Field className='password p-1 my-2' type="text" placeholder='Price' name="price" />
                                        {errors.price && <ErrorMessage className="error-message" name="price" component="div" />}
                                        <Field className='password p-1 my-2' type="text" placeholder='Quantity' name="quantity" />
                                        {errors.quantity && <ErrorMessage className="error-message" name="quantity" component="div" />}
                                        <div>
                                            <h2>Colors :</h2>
                                            <input type="text" id="colorInput" placeholder="Enter color name" />
                                            <button type="button" onClick={handleAddColor}>Add Color</button>
                                            <ul>
                                                {colors.map((color, index) => (
                                                    <li key={index}>
                                                        {color}
                                                        <button type="button" onClick={() => handleRemoveColor(index)}>Remove</button>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h2>Variant Management</h2>
                                            <div>
                                                <input type="text" id="sizeInput" placeholder="Enter size" />
                                                <input type="number" id="stockInput" placeholder="Enter stock" />
                                                <button type="button" onClick={handleAddVariant}>Add Variant</button>
                                            </div>
                                            <ul>
                                                {variants.map((variant, index) => (
                                                    <li key={index}>
                                                        Size: {variant.size}, Stock: {variant.stock}
                                                        <button type="button" onClick={() => handleRemoveVariant(index)}>Remove</button>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h2>Product Image:</h2>
                                            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
                                            {image && <img src={image} alt="Product" style={{ maxWidth: '200px', marginTop: '10px' }} />}
                                            <input type="file" onChange={(e) => setImage1(e.target.files[0])} />
                                            {image1 && <img src={image1} alt="Product" style={{ maxWidth: '200px', marginTop: '10px' }} />}
                                        </div>
                                        <button className='login-btn my-3 p-2 py-2' type="submit">ADD</button>
                                    </div>
                                </div>

                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default RingsProduct;
