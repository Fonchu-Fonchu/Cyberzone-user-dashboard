import React from "react";
import "../admin.css";
import Footer from '../components/Footer'
import { API } from '../../config'
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function AddServiceContent() {
    const location = useLocation()
    var servOldInfo = location.state
    console.log(servOldInfo)
    const navigate = useNavigate();

    const [values, setValues] = useState({
        service_id: servOldInfo.service_id,
        dashboard_id: servOldInfo.dashboard_id,
        service_name: servOldInfo.service_name,
        service_amount: servOldInfo.service_amount,
        number_of_subscribers: servOldInfo.number_of_subscribers,
        short_description: servOldInfo.short_description
    })

    // Destructing so as to be able to send to the backend

    const handleChange = event => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    }
    const id = servOldInfo.id;
    const submitService = (serviceInfo) => {
        axios.put(`${API}/service/${id}/update`, serviceInfo)
            .then(res => {
                alert(res)
                // if (res.status === 200)
                // alert('service successfully added')
                // else
                // Promise.reject()
            })
            .catch(err => {
                alert('Something went wrong')
                console.log(err)
            })

    }

    const clickAddService = (event) => {
        event.preventDefault();
        const { service_id, dashboard_id, service_name, service_amount, number_of_subscribers, short_description } = values;
        submitService({
            service_id,
            dashboard_id,
            service_name,
            service_amount,
            number_of_subscribers,
            short_description,
        });
        sessionStorage.setItem('name', 'success');
        navigate('/services');
    }

    return (
        <>
            <main className="px-md-4 wrapper2 dashboard-pages">
                <div className="breadcome-area clients-breadcome-area servicee">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="breadcome-list single-page-breadcome">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <div className="breadcome-heading">
                                                <form role="search" className="sr-input-func">
                                                    <input type="text" placeholder="Search..." className="search-int col-xs-12 form-control mobile-menu-search" />
                                                    <a href="#"><i className="fa fa-search"></i></a>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 mobile-menu-links">
                                            <ul className="breadcome-menu">
                                                <li><a style={{color: '#4ab2cc' }} href="admindashboard">Dashboard /</a></li>
                                                <li style={{color: 'gray' }}><span className="bread-blod">Edit Services</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="single-pro-review-area mt-t-30 mg-b-15 add-clients-page editService">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="product-payment-inner-st">
                                    <div><p className="mt-3 mb-4" style={{color: 'gray', fontStyle: 'bold', fontWeight: '550' }}>Edit Service Data</p></div>
                                    <div id="myTabContent" className="tab-content custom-product-edit">
                                        <div className="product-tab-list">
                                            <div className="row">
                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <div className="review-content-section">
                                                        <div className="row">
                                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                <div className="devit-card-custom">
                                                                    <form>
                                                                        <div className="form-group">
                                                                            <label htmlFor='name' style={{marginBottom: "-12px"}} className="FormLable"><p>Name</p></label>
                                                                            <input type="text" className="form-control input" placeholder="Enter service name" name="name" value={values.name} onChange={handleChange} />
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label htmlFor='description' style={{marginBottom: "-12px"}} className="FormLable"><p>Description</p></label>
                                                                            <input type="text" className="form-control input" placeholder="Enter short description for service" name="description" value={values.description} onChange={handleChange} />
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label htmlFor='amount' style={{marginBottom: "-12px"}} className="FormLable"><p>Amount</p></label>
                                                                            <input type="number" className="form-control input" placeholder="Enter service amount" name="amount" value={values.amount} onChange={handleChange} />
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label htmlFor='image' style={{marginBottom: "-12px"}} className="FormLable"><p>Image</p></label>
                                                                            <input type="file" className="form-control" onchange="document.getElementById('prepend-big-btn').value = this.value;" placeholder="Select module image" name="image" value={values.image} onChange={handleChange}  />
                                                                        </div>
                                                                        <button type="submit" style={{ background: '#4ab2cc', color: 'white' }} href="#!" className="add-service btn waves-effect waves-light">Submit</button>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: '7rem' }}></div>
                <div className="add-clients-footer"><Footer /></div>
            </main>

        </>
    )
}

export default AddServiceContent;
