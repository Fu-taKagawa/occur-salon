import React from "react";
import { Link } from "react-router-dom";

import Header from "../component/header/header";
import Footer from "../component/footer/footer";

const UserInfo = () =>{
    return(
        <>
            <Header/>
            <section className="userInfo">
                <div className="userInfo__content">
                    <h1>会員情報</h1>
                    <div>
                        <div className="userInfo__content__box">
                            <div className="userInfo__content__box__text">
                                <p>名前</p>
                                <p>kagawa</p>
                            </div>
                            <Link><p>編集する</p></Link>
                        </div>
                        <div className="userInfo__content__box">
                            <div className="userInfo__content__box__text">
                                <p>メールアドレス</p>
                                <p>香川</p>
                            </div>
                            <Link><p>編集する</p></Link>
                        </div>
                        <div className="userInfo__content__box">
                            <div className="userInfo__content__box__text">
                                <p>パスワード</p>
                                <p>香川</p>
                            </div>
                            <Link><p>編集する</p></Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}
export default UserInfo