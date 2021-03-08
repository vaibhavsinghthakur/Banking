import React,{useState,useEffect} from 'react'
import {db} from "./firebase";
import "./Css_Files/TableTransfer1.css"
import firebase from "firebase";
function TableTransfer1() {

    const [Customers,setCustomers]=useState([]);
    const [name,setName]=useState("");
    const [AccountNo,setAccountNo]=useState("");
    const [CurrentBalance,setCurrentBalance]=useState("");


    const [userEnteredAccountNo,setuserEnteredAccountNo]=useState("");
    const [userEnteredAmount,setuserEnteredAmount]=useState("");

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
           if(customer.data.ID=="1"){
               setName(customer.data.name)
               setAccountNo(customer.data.AccountNo)
               setCurrentBalance(customer.data.CurrentBalance)
          }
        })
    }, [Customers])  

    const handleClick =(e)=>{
        e.preventDefault();
 
        if(CurrentBalance>=userEnteredAmount){
          
           
        alert(`Rs. ${userEnteredAmount} Transferred from AccountNumber-100101 to AccountNumber-${userEnteredAccountNo} `)

        let D=`Rs. ${userEnteredAmount} Transferred from AccountNumber-100101 to AccountNumber-${userEnteredAccountNo} `;  
        
        let tt=new Date()

        tt=tt.toString();
        
        db.collection("AllTransactions").add({
                T1: D,
                timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                Timestamp:tt,
        });

        tt=0;
        

        Customers.map((customer)=>{
                       
        //Money Added to the Other Account
        if(userEnteredAccountNo==="100102"){
            let realmoney=0;
            if (customer.id==="DSGkBkkrrVyuOcXV1RyT"){
                realmoney=parseInt(customer.data.CurrentBalance)+parseInt(userEnteredAmount);
                db.collection("Customers").doc("DSGkBkkrrVyuOcXV1RyT").update({
                    "CurrentBalance":realmoney ,
                })
            }
        }
        else if(userEnteredAccountNo==="100103"){
            let realmoney=0;
            if (customer.id==="SIktLJ4T830Cc6F4rFaC"){
                realmoney=parseInt(customer.data.CurrentBalance)+parseInt(userEnteredAmount);
                db.collection("Customers").doc("SIktLJ4T830Cc6F4rFaC").update({
                    "CurrentBalance":realmoney ,
                })
            } 
        }
        else if(userEnteredAccountNo==="100104"){
            let realmoney=0;
            if (customer.id==="JlqsidG6pIkxoyL51Swt"){
                realmoney=parseInt(customer.data.CurrentBalance)+parseInt(userEnteredAmount);
                db.collection("Customers").doc("JlqsidG6pIkxoyL51Swt").update({
                    "CurrentBalance":realmoney ,
                })
            }
        }
        else if(userEnteredAccountNo==="100105"){
            let realmoney=0;
            if (customer.id==="0hVoqDHymv2h2bUXiIrY"){
                realmoney=parseInt(customer.data.CurrentBalance)+parseInt(userEnteredAmount);
                db.collection("Customers").doc("0hVoqDHymv2h2bUXiIrY").update({
                    "CurrentBalance":realmoney ,
                })
            }
        }
        else if(userEnteredAccountNo==="100106"){
            let realmoney=0;
            if (customer.id==="EOUcWoBawgagaj0tIyTO"){
                realmoney=parseInt(customer.data.CurrentBalance)+parseInt(userEnteredAmount);
                db.collection("Customers").doc("EOUcWoBawgagaj0tIyTO").update({
                    "CurrentBalance":realmoney ,
                })
            }
        }
        else if(userEnteredAccountNo==="100107"){
            let realmoney=0;
            if (customer.id==="nTiQHoRxrEW6fKSgrBNz"){
                realmoney=parseInt(customer.data.CurrentBalance)+parseInt(userEnteredAmount);
                db.collection("Customers").doc("nTiQHoRxrEW6fKSgrBNz").update({
                    "CurrentBalance":realmoney ,
                })
            }
        }

        ////////////////////////////////////////
        //Money SUbtracted from the user account
        if(AccountNo==="100101" &&
        name==="Saurav Das"){
            let realmoney=0;
            if (customer.id==="DN1UsE5x4Uf1vRp1IUxZ"){
                realmoney=parseInt(customer.data.CurrentBalance)-parseInt(userEnteredAmount);
                db.collection("Customers").doc("DN1UsE5x4Uf1vRp1IUxZ").update({
                    "CurrentBalance":realmoney ,
                })
            }
        }
        });
  
        }else{
            alert("Not Enough Money");
        }
       
       setuserEnteredAccountNo("");
       setuserEnteredAmount("");
    }

    return (
        <div className="transfermoney">
            <div className="userdata">
                <div className="userdata_single">
                   <h2>Your Name -</h2>
                   <span>{name}</span> 
                </div>
                <div className="userdata_single">
                    <h2>Your Account Number -</h2>
                    <span>{AccountNo}</span>
                </div>
                <div className="userdata_single">
                    <h2>CurrentBalance -</h2>
                    <span>Rs. {CurrentBalance}</span>
                </div>
            </div>
            <p>Be Careful Please Enter Amount Less than or Equal to Your Current Balance.</p>
            <div className="transfer_money_part">
             <form className="form">
             <label className="labels">Enter Reciever's AccountNumber :</label>
                 <input
                    value={userEnteredAccountNo}
                    onChange={(e) => setuserEnteredAccountNo(e.target.value)}
                    type="number"
                    placeholder={"Enter Account Number of Receiver"}
                    type="number"
                />
              <label className="labels ll">Amount : </label>
                  
                <input
                   type="number"
                   placeholder="Enter Amount of Money you want to transfer"
                   value={userEnteredAmount}
                   onChange={(e)=>setuserEnteredAmount(e.target.value)
                   }
                /> 
                <button 
                onClick={handleClick} 
                type="submit" 
                disabled={!userEnteredAccountNo}
                disabled={!userEnteredAmount}
                >
                    Handle submit
                </button>
            </form>
            </div>
        </div>
    )
}

export default TableTransfer1
