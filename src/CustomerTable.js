import React,{useState,useEffect} from 'react'
import "./Css_Files/CustomerTable.css"
import {db} from "./firebase";
import {Link} from "react-router-dom";
function CustomerTable() {
   
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
        <div className="customertable">
        <div className="customertable_heading">
        <h1>All Customers in TCP bank.</h1>
        <p>Here to transfer money from one user to another just click on the SELECT button which is in Column "Send Money", You will be able to send money from that user to any other present in the Database.</p>
        </div>
        <table className="tables">
            <tr>
                <th>Name</th>
                <th>Account Number</th> 
                <th>Current balance</th>
                <th>Email</th>
                <th>Contact Number</th>
                <th>Aadhar Card Number</th>
                <th>Send Money</th>
            </tr>                       
        {
            Customers.map((Customer)=>{
                return(
                    <tr>     
                        <td>{Customer.data.name}</td>
                        <td>{Customer.data.AccountNo}</td>
                        <td>Rs. {Customer.data.CurrentBalance}</td>
                        <td>{Customer.data.email}</td>
                        <td>{Customer.data.ContactNumber}</td>
                        <td>{Customer.data.AadharCard}</td>
                        <td ><Link className="Linkit" to={`/TableTransfer${Customer.data.ID}`}>SELECT</Link></td>
                    </tr>
                    );
            })
        }
        </table>
        </div>
    )
}

export default CustomerTable
