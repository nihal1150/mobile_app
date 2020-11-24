import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom' 

export default function Home() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <span class="navbar-brand mb-0 h1">E-Mobile</span>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item1 active">
                        <Link class="nav-link" to="login">Login<span class="sr-only">(current)</span></Link>
                    </li>
                </ul>
            </nav>
            <h1 id="home">Welcome to E-Mobile Store</h1>
            <p id="hpara">Purchase Mobiles| Get Home Delivery|Get exciting offers|Purchase on EMI|</p>
           <div className="card" style={{width: "23rem"}}>
                <img src="iphone.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                <p style={{color:"fuchsia"}} class="card-text"><b>Apple</b><br/>website: WWW.iphone.com</p>
            </div>
            </div>
            <div className="card" style={{width: "23rem"}}>
            <img src="../m31.jpg" className="card-img-top"  height="300px"
              width="300px" alt="abs" />
                <div class="card-body">
                <p style={{color:"red"}} class="card-text"><b>Samsung</b><br/>website: WWW.samsung.com</p>
            </div>
            </div>
            <div className="card" style={{width: "23rem"}}>
                <img src="../moto.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                <p style={{color:"crimson"}} class="card-text"><b>Motorola</b><br/>website: WWw.moto.com</p>
            </div>
            </div>
            <div className="card" style={{width: "23rem"}}>
                <img src="poco.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                <p style={{color:"darkblue"}} class="card-text"><b>poco</b><br/>website: WWW.poco.com</p>
            </div>
            </div>
            <div className="card" style={{width: "23rem"}}>
                <img src="../vivo.jpg" class="card-img-top" alt="..."/>
                <div class="card-body" >
                <p style={{color:"grey"}} class="card-text"><b>Vivo</b><br/>website: WWW.vivo.com </p>
            </div>
            </div>
            <div className="card" style={{width: "23rem"}}>
                <img src="../nokia.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                <p style={{color:"red"}} class="card-text"><b>Nokia</b> <br/> website: WWW.oppo.com</p>
            </div>
            </div>
        </div>
    )
}
