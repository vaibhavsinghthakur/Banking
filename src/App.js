import './App.css';
import Header from "./Header.js";
import { BrowserRouter as Router, Switch, Route, Link ,useParams} from "react-router-dom";
import AllCustomers from "./AllCustomers.js";
import Home from "./Home.js";
import Single1 from "./Single1.js"
import Single2 from "./Single2.js"
import Single3 from "./Single3.js"
import Single4 from "./Single4.js"
import Single5 from "./Single5.js"
import Single6 from "./Single6.js"
import Single7 from "./Single7.js"

import TableTransfer1 from "./TableTransfer1.js";
import TableTransfer2 from "./TableTransfer2.js";
import TableTransfer3 from "./TableTransfer3.js";
import TableTransfer4 from "./TableTransfer4.js";
import TableTransfer5 from "./TableTransfer5.js";
import TableTransfer6 from "./TableTransfer6.js";
import TableTransfer7 from "./TableTransfer7.js";

import TransferMoney from "./TransferMoney.js";
import AllTransactions from "./AllTransactions.js"
import CustomerTable from "./CustomerTable.js"

function App() {
  return (
    <div className="app">
      <Router>
        <Header/>
       <Switch>
         <Route path="/Allcustomers">
           <AllCustomers/>
         </Route>
         <Route path="/TransferMoney">
           <TransferMoney/>
         </Route>
         <Route path={'/AllCustomers/:customerID'}>
           
         </Route>
         <Route path="/AllTransactions">
           <AllTransactions/>
         </Route>
         <Route path="/single1">
            <Single1/>
         </Route>
         <Route path="/single2">
            <Single2/>
         </Route>
         <Route path="/single3">
            <Single3/>
         </Route>
         <Route path="/single4">
            <Single4/>
         </Route>
         <Route path="/single5">
            <Single5/>
         </Route>
         <Route path="/single6">
            <Single6/>
         </Route>
         <Route path="/single7">
            <Single7/>
         </Route>
         <Route path="/TableTransfer1">
            <TableTransfer1/>
         </Route>
         <Route path="/TableTransfer2">
            <TableTransfer2/>
         </Route>  
         <Route path="/TableTransfer3">
            <TableTransfer3/>
         </Route> 
         <Route path="/TableTransfer4">
            <TableTransfer4/>
         </Route> 
         <Route path="/TableTransfer5">
            <TableTransfer5/>
         </Route> 
         <Route path="/TableTransfer6">
            <TableTransfer6/>
         </Route> 
         <Route path="/TableTransfer7">
            <TableTransfer7/>
         </Route> 
         
         
         <Route path="/CustomerTable">
             <CustomerTable/>
         </Route>
         <Route path="/">
           <Home/>
         </Route>
       </Switch>
      </Router>
    </div>
  );
}

export default App;
