import React,{useState,useEffect} from 'react'
import {db} from "./firebase";
import SingleTransaction from "./SingleTransaction";
import "./Css_Files/AllTransaction.css";

function AllTransactions() {

    const [AllTransactions,setAllTransactions]=useState([]);

    useEffect(() => {
        db.collection("AllTransactions")
        .orderBy("timestamp", "desc")
          .onSnapshot((snapshot) => {
            setAllTransactions(
              snapshot.docs.map((doc) => ({
                id: doc.id, //Getting id
                data: doc.data() //getting data
              }))
            );
          });
      }, [AllTransactions]);
    
    return (
        <div className="alltransaction">  
          <h1>All Transcations History</h1>
          <div className="alltransactionsingle">
           <table className="tables">       
                <tr>
                    <th>Date-Time (Indian Standard Time)</th>
                    <th>Money Transferred</th> 
                </tr> 
            {AllTransactions.map((AllTransaction) => {
                return(
                <tr>
                  <td className="date">{AllTransaction.data.Timestamp.slice(0,34)}</td>
                  <td className="data">{AllTransaction.data.T1}</td>
                </tr>
                );  
            })}
            </table>
           
          </div>
        </div>
    )
}

export default AllTransactions

/*
{AllTransactions.map((AllTransaction) => {
                return(
                  <SingleTransaction
                      key={AllTransaction.id}
                      T1={AllTransaction.data.T1}
                      Timestamp={AllTransaction.data.Timestamp}
                  />
                );  
            })}*/