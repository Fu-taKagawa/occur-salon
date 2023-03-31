import React,{useEffect} from "react";
import firebase from "../../../config/firebase";
import Header from "../../../component/header/header";
import Footer from "../../../component/footer/footer";
import { Link } from "react-router-dom";
import DesignContent from "../../../component/listContent/DesignContent";
import homeIcon from '../../../img/home-icon.svg'
import angleRight from '../../../img/angle-right.svg'

const DesignList =()=>{
    return(
        <>
            <Header/>
            <section className="listTop">
                <div className="listTop__title">
                    <h1>デザイン案件獲得コンサル</h1>
                </div>
                <div className="listTop__flow">
                    <Link to='/'>
                        <img src={homeIcon} alt="Home" />
                    </Link>
                    <div className="listTop__flow__arrow">
                        <img src={angleRight} alt="AngleRight" />
                    </div>
                    <p>デザイン案件獲得コンサル</p>
                </div>
            </section>
            <section className="listHome">
                <div className="list__area">
                    <div className="list__area__content">
                        <h1>事前準備編</h1>
                        <DesignContent title='1.本講座を進めていくにあたってのガイダンス (15:08)' designId='prepare1'/>
                        <DesignContent title='2.本講座を進めていくにあたってのガイダンス (15:08)' designId='prepare2'/>
                        <DesignContent title='3.本講座を進めていくにあたってのガイダンス (15:08)' designId='prepare3'/>
                    </div>
                    <div className="list__area__content">
                        <h1>HTML編</h1>
                        <DesignContent title='1.本講座を進めていくにあたってのガイダンス (15:08)' designId='sechtml1'/>
                        <DesignContent title='2.本講座を進めていくにあたってのガイダンス (15:08)' designId='sechtml2'/>
                        <DesignContent title='3.本講座を進めていくにあたってのガイダンス (15:08)' designId='sechtml3'/>
                    </div>
                    <div className="list__area__content">
                        <h1>CSS編</h1>
                        <DesignContent title='1.本講座を進めていくにあたってのガイダンス (15:08)' designId='seccss1'/>
                        <DesignContent title='2.本講座を進めていくにあたってのガイダンス (15:08)' designId='seccss2'/>
                        <DesignContent title='3.本講座を進めていくにあたってのガイダンス (15:08)' designId='seccss3'/>
                    </div>
                    <div className="list__area__content">
                        <h1>請求書編</h1>
                        <DesignContent title='1.本講座を進めていくにあたってのガイダンス (15:08)' designId='invoice1'/>
                        <DesignContent title='2.本講座を進めていくにあたってのガイダンス (15:08)' designId='invoice2'/>
                        <DesignContent title='3.本講座を進めていくにあたってのガイダンス (15:08)' designId='invoice3'/>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}
export default DesignList