/*import React,{useState,useEffect} from 'react'
import "./Css_Files/TransferMoney.css"
import {db} from "./firebase";
import firebase from "firebase";

function TransferMoney() {
   const [userEnteredAccountNo,setuserEnteredAccountNo]=useState("")
   const [userEnteredName,setuserEnteredName]=useState("")
   const [userEnteredAmount,setuserEnteredAmount]=useState("")
   const [moneyTransferTo,setmoneyTransferTo]=useState("")
   const [checkCondition,setCheckCondition]=useState(false);



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

  

   const handleClick = (e) =>{
    e.preventDefault();
    
   
    alert(`Rs. ${userEnteredAmount} Transferred from AccountNumber-${userEnteredAccountNo} to AccountNumber-${moneyTransferTo} `)

    let D=`Rs. ${userEnteredAmount} Transferred from AccountNumber-${userEnteredAccountNo} to AccountNumber-${moneyTransferTo} `;  
    
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
        if(moneyTransferTo==="100101"){
            let realmoney=0;
            if (customer.id==="DN1UsE5x4Uf1vRp1IUxZ"){
                realmoney=parseInt(customer.data.CurrentBalance)+parseInt(userEnteredAmount);
                db.collection("Customers").doc("DN1UsE5x4Uf1vRp1IUxZ").update({
                    "CurrentBalance":realmoney ,
                })
            }
        }
        else if(moneyTransferTo==="100102"){
            let realmoney=0;
            if (customer.id==="DSGkBkkrrVyuOcXV1RyT"){
                realmoney=parseInt(customer.data.CurrentBalance)+parseInt(userEnteredAmount);
                db.collection("Customers").doc("DSGkBkkrrVyuOcXV1RyT").update({
                    "CurrentBalance":realmoney ,
                })
            }
        }
        else if(moneyTransferTo==="100103"){
            let realmoney=0;
            if (customer.id==="SIktLJ4T830Cc6F4rFaC"){
                realmoney=parseInt(customer.data.CurrentBalance)+parseInt(userEnteredAmount);
                db.collection("Customers").doc("SIktLJ4T830Cc6F4rFaC").update({
                    "CurrentBalance":realmoney ,
                })
            } 
        }
        else if(moneyTransferTo==="100104"){
            let realmoney=0;
            if (customer.id==="JlqsidG6pIkxoyL51Swt"){
                realmoney=parseInt(customer.data.CurrentBalance)+parseInt(userEnteredAmount);
                db.collection("Customers").doc("JlqsidG6pIkxoyL51Swt").update({
                    "CurrentBalance":realmoney ,
                })
            }
        }
        else if(moneyTransferTo==="100105"){
            let realmoney=0;
            if (customer.id==="0hVoqDHymv2h2bUXiIrY"){
                realmoney=parseInt(customer.data.CurrentBalance)+parseInt(userEnteredAmount);
                db.collection("Customers").doc("0hVoqDHymv2h2bUXiIrY").update({
                    "CurrentBalance":realmoney ,
                })
            }
        }
        else if(moneyTransferTo==="100106"){
            let realmoney=0;
            if (customer.id==="EOUcWoBawgagaj0tIyTO"){
                realmoney=parseInt(customer.data.CurrentBalance)+parseInt(userEnteredAmount);
                db.collection("Customers").doc("EOUcWoBawgagaj0tIyTO").update({
                    "CurrentBalance":realmoney ,
                })
            }
        }
        else if(moneyTransferTo==="100107"){
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
        if(userEnteredAccountNo==="100101" &&
        userEnteredName==="Saurav Das"){
            let realmoney=0;
            if (customer.id==="DN1UsE5x4Uf1vRp1IUxZ"){
                realmoney=parseInt(customer.data.CurrentBalance)-parseInt(userEnteredAmount);
                db.collection("Customers").doc("DN1UsE5x4Uf1vRp1IUxZ").update({
                    "CurrentBalance":realmoney ,
                })
            }
        }
        else if(userEnteredAccountNo==="100102" &&
        userEnteredName==="Ravi Kumar"){
            let realmoney=0;
            if (customer.id==="DSGkBkkrrVyuOcXV1RyT"){
                realmoney=parseInt(customer.data.CurrentBalance)-parseInt(userEnteredAmount);
                db.collection("Customers").doc("DSGkBkkrrVyuOcXV1RyT").update({
                    "CurrentBalance":realmoney ,
                })
            }
        }
        else if(userEnteredAccountNo==="100103" &&
        userEnteredName==="Shreya Singh"){
            let realmoney=0;
            if (customer.id==="SIktLJ4T830Cc6F4rFaC"){
                realmoney=parseInt(customer.data.CurrentBalance)-parseInt(userEnteredAmount);
                db.collection("Customers").doc("SIktLJ4T830Cc6F4rFaC").update({
                    "CurrentBalance":realmoney ,
                })
            } 
        }
        else if(userEnteredAccountNo==="100104" &&
        userEnteredName==="kunal Singh"){
            let realmoney=0;
            if (customer.id==="JlqsidG6pIkxoyL51Swt"){
                realmoney=parseInt(customer.data.CurrentBalance)-parseInt(userEnteredAmount);
                db.collection("Customers").doc("JlqsidG6pIkxoyL51Swt").update({
                    "CurrentBalance":realmoney ,
                })
            }
        }
        else if(userEnteredAccountNo==="100105" &&
        userEnteredName==="Kishan Kumar"){
            let realmoney=0;
            if (customer.id==="0hVoqDHymv2h2bUXiIrY"){
                realmoney=parseInt(customer.data.CurrentBalance)-parseInt(userEnteredAmount);
                db.collection("Customers").doc("0hVoqDHymv2h2bUXiIrY").update({
                    "CurrentBalance":realmoney ,
                })
            }
        }
        else if(userEnteredAccountNo==="100106" &&
        userEnteredName==="Rishabh Tiwari"){
            let realmoney=0;
            if (customer.id==="EOUcWoBawgagaj0tIyTO"){
                realmoney=parseInt(customer.data.CurrentBalance)-parseInt(userEnteredAmount);
                db.collection("Customers").doc("EOUcWoBawgagaj0tIyTO").update({
                    "CurrentBalance":realmoney ,
                })
            }
        }
        else if(userEnteredAccountNo==="100107" &&
        userEnteredName==="Zoya Akhtar"){
            let realmoney=0;
            if (customer.id==="nTiQHoRxrEW6fKSgrBNz"){
                realmoney=parseInt(customer.data.CurrentBalance)-parseInt(userEnteredAmount);
                db.collection("Customers").doc("nTiQHoRxrEW6fKSgrBNz").update({
                    "CurrentBalance":realmoney ,
                })
            }
        }

    

    });
    


    setuserEnteredAccountNo("");
    setuserEnteredName("");
    setuserEnteredAmount("");
    setmoneyTransferTo("");
    
}


    return (
        <div className="transfermoney">
         <h1>Money Transfer</h1>
          <div className="transfer_money_part">
            <form className="form">
            <input
                    value={userEnteredAccountNo}
                    onChange={(e) => setuserEnteredAccountNo(e.target.value)}
                    type="text"
                    placeholder={"Enter Your Account Number"}
                    type="number"
                />
                <input
                    placeholder="Enter your Name"
                    value={userEnteredName}
                    onChange={(e) => setuserEnteredName(e.target.value)}
                />
                <input
                   type="number"
                   placeholder="Enter Amount of Money you want to transfer"
                   value={userEnteredAmount}
                   onChange={(e)=>setuserEnteredAmount(e.target.value)
                   }
                /> 
                <input
                   type="number"
                   placeholder="Enter the Account Number of Person you want to send money to"
                   value={moneyTransferTo}
                   onChange={(e)=>setmoneyTransferTo(e.target.value)
                   }
                /> 
                  
                <button 
                onClick={handleClick} 
                type="submit" 
                disabled={!userEnteredAccountNo}
                disabled={!userEnteredName}
                disabled={!userEnteredAmount}
                disabled={!moneyTransferTo}
                >
                    Handle submit
                </button>
              </form>
            </div>  
        </div>
    )
}

export default TransferMoney

/*

    if(userEnteredName==="Kishan Kumar" || userEnteredName==="Saurav Das" || userEnteredName==="Ravi Kumar" || userEnteredName==="Rishabh Tiwari" || userEnteredName==="kunal Singh" || userEnteredName==="Shreya Singh" || userEnteredName==="Zoya Akhtar")
    {
         
        if(userEnteredAccountNo==="100101" || userEnteredAccountNo==="100102" || userEnteredAccountNo==="100103" ||userEnteredAccountNo==="100104" ||userEnteredAccountNo==="100105" ||
        userEnteredAccountNo==="100106" ||
        userEnteredAccountNo==="100107")
        {*/

    /*
        }
    }else{
           alert("Sorry Some of Your Details are Wrong , Enter again");
    }*/        

    