import React from 'react'
import "./Css_Files/Home.css"
function Home() {
    return (
        <div className="home">
            <div className="home_heading">
                <h1>The Sparks Foundation Internship</h1>
                <h2>Basic Banking System</h2>    
            </div>
            <div className="home_below">
                <h1>Welcome to TCP bank.</h1>
                <p>You can Tranfer Money from One user to another.</p>
                <span>To transfer money you just need to Enter your Account Number ,Your Name, Amount of money you want to transfer , and the Account Number of the person whom you are sending Money to. </span>
            </div>
        </div>
    )
}

export default Home
