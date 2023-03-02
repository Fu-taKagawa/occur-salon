import React from "react";
import { Link } from "react-router-dom";
import firebase from "../../config/firebase";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/firestore'

const Header=()=>{
    return(
        <>
            <header>
                <div className="header">
                    <div className="logo">
                        <Link to={'/'}><h1>卒業生サロン</h1></Link>
                    </div>
                    <div className="gnavi__wrap">
                        <ul className="gnavi__lists">
                            <li className="gnavi__list">
                                <Link to={'/'} className="gnavi__link">マイページ</Link>
                                <ul className="dropdown__lists">
                                    <li className="dropdown__list">
                                        <Link to={'/userInfo'}>会員情報</Link>
                                    </li>
                                    <li className="dropdown__list"><Link onClick={() => firebase.auth().signOut()} to={'/login'}>ログアウト</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header