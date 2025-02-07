import React from "react";
import Footer from '../../ClientsDashboard/components/Footer';
import "../admin.css";
import { API } from '../../config'
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function EditModuleContent() {
    const location = useLocation()
    var modOldInfo = location.state
    console.log(modOldInfo)
    const navigate = useNavigate();
    const [values, setValues] = useState({
        title: modOldInfo.title,
        image: "",
    })


    // Destructing so as to be able to send to the backend


    const handleChange = event => {
        setValues({
            ...values, [event.target.name]: event.target.value
        })
    }

    const id = modOldInfo.id;
    const submitModule = (moduleInfo) => {
        axios.put(`${API}/module/module/${id}`, moduleInfo)
            .then(res => {
                alert(res)
                // if (res.status === 200)
                // alert('service successfully added')
                // else
                // Promise.reject()
            })
            .catch(err => {
                // alert('Something went wrong')
                // console.log(err)
            })

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const { name, title, image, time_spent, score  } = values;
        submitModule({
            name,
            title,
            image,
            time_spent,
            score
        });
        // sessionStorage.setItem('name', 'success');
        // alert('Course Updated Successfully')
        navigate('/adminmodulepage');
    }

    return (
        <>
            <main className="px-md-4 wrapper2 dashboard-pages ml-3">
                <div className="add-module d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                     <h4><p><Link className="return-home" style={{textDecoration: 'none'}} to='/adminmodulepage'><span className="home">Home</span></Link> <span className="stroke_color">/</span> <span className="add-modulee" style={{color: 'gray', fontStyle: 'bold', fontWeight: '550' }}>Edit Module</span></p></h4>
                </div>
                <div class="single-pro-review-area mt-t-30 mg-b-15 module-forms">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="product-payment-inner-st">
                                    <div><p className="mt-3 mb-4" style={{color: 'gray', fontStyle: 'bold', fontWeight: '550' }}>Edit Module Data</p></div>
                                    <div id="myTabContent" class="tab-content custom-product-edit">
                                        <div class="product-tab-list">
                                            <div class="row">
                                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <div class="review-content-section">
                                                        <div class="row">
                                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                <div class="devit-card-custom">
                                                                    <form onSubmit={handleSubmit}>
                                                                        <div className="form-group">
                                                                            <label htmlFor='title' style={{marginBottom: "-12px"}} className="FormLable"><p>Title</p></label>
                                                                            <input type="text" className="form-control input" placeholder="Enter module title" name="title" value={values.title} onChange={handleChange} />
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label htmlFor='image' style={{marginBottom: "-12px"}} className="FormLable"><p>Image</p></label>
                                                                            <input type="file" className="form-control" onchange="document.getElementById('prepend-big-btn').value = this.value;" placeholder="Select module image" name="image" value={values.image} onChange={handleChange} />
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
                <div style={{marginTop:"17rem"}} className="space-creater"></div>
                <div className="add-clients-footer"><Footer destination="admin" /></div>
            </main>

        </>
    )
}

export default EditModuleContent;