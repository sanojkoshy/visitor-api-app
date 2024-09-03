import React from 'react'
import NavBar from './NavBar'

const AddVisitor = () => {
    return (
       <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">First Name</label>
                            <input type="text" className="form-control" placeholder="Enter The First Name" />
                        </div>
                        <div className="col col-12 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Last Name</label>
                        <input type="text" className="form-control"placeholder="Enter The Last Name" />
                        </div>
                        <div className="col col-12 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Whom To Meet</label>
                       <select name="" id="" className="form-select">
                       <option value=" select">select</option>
                        <option value="principal">Principal</option>
                        <option value=" hod">HOD</option>
                        <option value="advisor">Advisor</option>
                        <option value="warden">warden</option>
                        <option value="faculity">Faculity</option>
                       </select>
                        </div>
                        <div className="col col-12 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Purpose</label>
                        <input type="text" className="form-control"placeholder="Enter Purpose " />
                        </div>
                        <div className="col col-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </div>
    )
}

export default AddVisitor
