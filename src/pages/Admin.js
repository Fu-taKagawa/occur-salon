import React, {useState,useEffect} from "react";
import firebase from "../config/firebase";
import { Redirect } from "react-router-dom";
import Header from "../component/header/header";

const Admin = () =>{
    const currentUser = firebase.auth().currentUser;
    if (currentUser && currentUser.email === 'root@gmail.com') {
        return (
            <>
                <Header/>
                <section className="home">
                    <div className="home__area">
                        <div>
                        </div>
                    </div>
                </section>
            </>
        )
    } else {
        return <Redirect to={'/'}/>;
    }
}

export default Admin