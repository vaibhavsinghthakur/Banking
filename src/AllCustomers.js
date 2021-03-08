import React,{useState,useEffect} from 'react'
import {db} from "./firebase"
import SingleCustomer from "./SingleCustomer.js"

function AllCustomers() {
  const [Customers,setCustomers]=useState([]);

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
  return (
        <div className="AllCustomers">
           <h1 style={{textAlign:"center",marginTop:"20px",fontSize:"2.6rem",color:"darkblue", textShadow: "2px 2px 4px blue"}}>All Customers in TCP bank</h1>     
           <div style={{display:"flex",flexWrap:"wrap",margin:"30px",alignItems:"center",justifyContent:"center"}}> 
           {Customers.map((customer) => {
                return (
                    <SingleCustomer
                    key={customer.id}
                    ID={customer.data.ID}
                    AccountNo={customer.data.AccountNo}
                    City={customer.data.City}
                    ContactNumber={customer.data.ContactNumber}
                    CurrentBalance={customer.data.CurrentBalance}
                    HouseNo={customer.data.HouseNo}
                    name={customer.data.name}
                    email={customer.data.email}
                    AadharCard={customer.data.AadharCard}
                />
                );
            })}
          </div>
        </div>
    )
}

/*
*/
export default AllCustomers
