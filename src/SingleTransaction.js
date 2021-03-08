import React,{useState,useEffect} from 'react'
import "./Css_Files/SingleTransaction.css"
import {db} from "./firebase";

function SingleTransaction({key,T1,Timestamp}) {

    return (
        <div>
          <table className="tables">
          <tr>
                <th>Name</th>
                <th>Account Number</th> 
          </tr> 
          </table>
          <table className="tables">       
          <tr>
              <td>{Timestamp}</td>
              <td>{T1}</td>
          </tr>
          </table>
        </div>
    )
}

export default SingleTransaction
