import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewAll = () => {
    const [data, changedata] = useState([{ "_id": "66d082e97b7612f9931a2d86", "firstname": "Mathew", "lastname": "Jose", "purpose": "Official", "whomToMeet": "HOD EEE", "date": "2024-08-29T19:47:13.711Z", "__v": 0 }, { "_id": "66d08b487b7612f9931a2d8f", "firstname": "Manoj", "lastname": "T", "purpose": "Official", "whomToMeet": "Principal", "date": "2024-08-29T20:22:56.973Z", "__v": 0 }, { "_id": "66d0921a7b7612f9931a2d99", "firstname": "Hansel ", "lastname": "Sabu", "purpose": "Intership", "whomToMeet": "HOD", "date": "2024-08-29T20:52:02.751Z", "__v": 0 }, { "_id": "66d5ce207b7612f9931a2dc3", "firstname": "Madhav S", "lastname": "Pillai", "purpose": "Official", "whomToMeet": "Principal", "date": "2024-09-02T20:09:28.421Z", "__v": 0 }, { "_id": "66d5ce4e7b7612f9931a2dc9", "firstname": "Safna", "lastname": "S", "purpose": "Official", "whomToMeet": "HOD", "date": "2024-09-02T20:10:14.710Z", "__v": 0 }, { "_id": "66d5cec77b7612f9931a2dd8", "firstname": "Pooja", "lastname": "Krishnan", "purpose": "Admission", "whomToMeet": "HOD", "date": "2024-09-02T20:12:15.294Z", "__v": 0 }])
const functionData =()=>{
    axios.get("http://35.170.103.9:4057/getvistors").then((response)=>{changedata(response.data)}).catch()
}
useEffect(()=>{functionData()},[])
return (
    <div>
        <NavBar />
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">id</th>
                                        <th scope="col">First Name</th>
                                        <th scope="col">Last Name</th>
                                        <th scope="col">purpose</th>
                                        <th scope="col">Whom To visit</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        data.map(
                                            (value,index) => {
                                                return (<tr>
                                                    <th>{value._id}</th>
                                                    <td>{value.firstname}</td>
                                                    <td>{value.lastname}</td>
                                                    <td>{value.purpose}</td>
                                                    <td>{value.whomToMeet}</td>
                                                </tr>)
                                            }
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default ViewAll
