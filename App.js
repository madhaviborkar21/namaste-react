import React from "react";
import  ReactDOM from "react-dom/client";


const Header = () =>{
return(
    <div className="header">
        <div className="logo-container">
             <img className="logo" src ="https://i.pinimg.com/564x/18/59/34/185934dc7ebd4a5d57af0f8a435fd05d.jpg"/>
        </div>
        <div className="nav-items">
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
        </ul>
        </div>
    </div>

);
};

const RestaurantCard = ({resName,cuisine,}) =>{

    return(
 <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
    <img className="res-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDy-Qyy0FdvsU-KhP4KKxjl9gtz1dGsB37E2xQkSqVBHH42IqqNwfBU4XhhpMoeXHrO7U&usqp=CAU"/>
    <h3 className="">{resName}</h3>
    <h4>{cuisine}</h4>
    <h4>4.3 stars</h4>
    <h4>38 mins</h4>
 </div>
    );
};

const Body = () =>{
    return(
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
               <RestaurantCard resName="Meghana Foods" cuisine="Biryani, North Indian"/>
               <RestaurantCard resName="KFC" cuisine="Burger, Fast Food"/>
               <RestaurantCard resName="MacDonald" cuisine="Burger, Coffee, Fast Food"/>
            </div>
        </div>
    )
}


const AppLayout =()=>{
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}
const jsxHeading = <h1 className="heading">Namste React using JSX</h1>
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);