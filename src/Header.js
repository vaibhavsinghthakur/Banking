import React from 'react'
import "./Css_Files/Header.css"
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import  {Link} from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <div className="header_bank_logo">
               <AccountBalanceIcon className="header_logo"/>
               <h2>TCP Bank</h2>
            </div>
            <Link className="Link_tag" to="/">
              Home
            </Link>
            <Link className="Link_tag" to="/CustomerTable">
              CustomersTable
            </Link>
            <Link className="Link_tag" to="/Allcustomers">
              Allcustomers
            </Link>
            <Link className="Link_tag" to="/AllTransactions">
              TransactionsHistory
            </Link>
            
        </div>
    )
}

export default Header
