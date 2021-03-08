import React,{useEffect, useState} from 'react'
import {db} from "./firebase";
import "./Css_Files/Single2.css"

function Single5() {
    const [Customers,setCustomers]=useState([]);
    const [name,setName]=useState("");
    const [AccountNo,setAccountNo]=useState("");
    const [CurrentBalance,setCurrentBalance]=useState("");
    const [City,setCity]=useState("");
    const [ContactNumber,setContactNumber]=useState("");
    const [HouseNo,setHouseNo]=useState("");
    const [email,setEmail]=useState("");
    const [Address,setAddress]=useState("");
    const [AadharCard,setAadharCard]=useState("");


    useEffect(() => {
        db.collection("Customers")
          .onSnapshot((snapshot) => {
            setCustomers(
              snapshot.docs.map((doc) => ({
                id: doc.id, //Getting id
                data: doc.data(), //getting data
              }))
            );
          });
      }, []);
    
      useEffect(() => {
        Customers.map((customer)=>{
           if(customer.data.ID=="5"){
               setName(customer.data.name)
               setAccountNo(customer.data.AccountNo)
               setCurrentBalance(customer.data.CurrentBalance)
               setCity(customer.data.City)
               setContactNumber(customer.data.ContactNumber)
               setHouseNo(customer.data.HouseNo)
               setEmail(customer.data.email)
               setAddress(customer.data.Address)
               setAadharCard(customer.data.AadharCard)
           }
        })
    }, [Customers])
    return (
        <div className="single1">
          <div className="box">
            <h2>Name</h2>
            <p>{name}</p>
          </div>
          <div className="box">
            <h2>Account Number</h2>
            <p>{AccountNo}</p>
          </div>
          <div className="box">
            <h2>Current Balance</h2>
            <p>{CurrentBalance}</p>
          </div>
          <div className="box">
            <h2>Contact Number</h2>
            <p>{ContactNumber}</p>
          </div>
          <div className="box">
            <h2>Email</h2>
            <p>{email}</p>
          </div>
          <div className="box">
            <h2>AadharCard Number</h2>
            <p>{AadharCard}</p>
          </div>
          <div className="box">
            <h2>City</h2>
            <p>{City}</p>
          </div>
          <div className="box">
            <h2>House Number</h2>
            <p>{HouseNo}</p>
          </div>
          <div className="box">
            <h2>Address</h2>
            <p className="address">{Address}</p>
          </div>
          
        </div>
    )
}

export default Single5
