import React,{useState} from 'react'
import "./Css_Files/SingleCustomer.css"
import {Link} from "react-router-dom"
function SingleCustomer({Key,ID,AccountNo,City,ContactNumber,CurrentBalance,HouseNo,name,email,AadharCard}) {
    return (
        <div className="singlecustomer">
            <div className="SingleItem">
               <h3>Name</h3>
               <p>{name}</p>
            </div>
            <div className="SingleItem">
               <h3>Account-Number</h3>
               <p>{AccountNo}</p>
            </div>
            <div className="SingleItem">
               <h3>Current Balance</h3>
               <p>Rs. {CurrentBalance}</p>
            </div>
            <div className="SingleItem">
               <h3>Contact Number</h3>
               <p>{ContactNumber}</p>
            </div>
            <div className="SingleItem">
               <h3>Aadhar Card Number</h3>
               <p>{AadharCard}</p>
            </div>
            <div className="SingleItem">
               <h3>Email</h3>
               <p>{email}</p>
            </div>
            <div className="SingleItem">
               <h3>City</h3>
               <p>{City}</p>
            </div>
            <Link className="link_page" to={`/single${ID}`}>
               Click to see more details...
            </Link>
        </div>
    )
}


export default SingleCustomer

