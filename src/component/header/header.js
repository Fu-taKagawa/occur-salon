import React from "react";
import { Link } from "react-router-dom";
import firebase from "../../config/firebase";
const Header=()=>{
    const AdminButton = () => {
        const currentUser = firebase.auth().currentUser;
        if (currentUser && currentUser.email === 'root@gmail.com') {
            return (
            <div className='adminBtn'>
                <Link to={'/admin'}>管理者専用</Link>
            </div>
            )
        } else {
            return null;
        }
    };
    return(
        <>
            <header>
                <div className="header">
                    <div className="logo">
                        <Link to={'/'}><h1>卒業生サロン</h1></Link>
                    </div>
                    <AdminButton/>
                    <div className="gnavi__wrap">
                        <ul className="gnavi__lists">
                            <li className="gnavi__list">
                                <Link to={'/userInfo'} className="gnavi__link">マイページ</Link>
                                <ul className="dropdown__lists">
                                    <li className="dropdown__list"><Link to={'/userInfo'}>会員情報</Link></li>
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