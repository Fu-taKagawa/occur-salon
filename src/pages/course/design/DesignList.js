import React, {useState,useEffect} from "react";
import Header from "../../../component/header/header";
import Footer from "../../../component/footer/footer";
import { Link } from "react-router-dom";

import DesignListBtn from "../../../component/btn/DesignListBtn";
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
                        <div className="list__area__content__item">
                            <div className='list__area__content__item__detail'>
                                <p>1.本講座を進めていくにあたってのガイダンス (15:08)</p>
                            </div>
                            <div className='list__area__content__item__link'>
                                <DesignListBtn itemId='prepare1'/>
                            </div>
                        </div>
                        <div className="list__area__content__item">
                            <div className='list__area__content__item__detail'>
                                <p>2.本講座を進めていくにあたってのガイダンス (15:08)</p>
                            </div>
                            <div className='list__area__content__item__link'>
                                <DesignListBtn itemId='prepare2'/>
                            </div>
                        </div>
                        <div className="list__area__content__item">
                            <div className='list__area__content__item__detail'>
                                <p>3.本講座を進めていくにあたってのガイダンス (15:08)</p>
                            </div>
                            <div className='list__area__content__item__link'>
                                <DesignListBtn itemId='prepare3'/>
                            </div>
                        </div>
                    </div>
                    <div className="list__area__content">
                        <h1>HTML編</h1>
                        <div className="list__area__content__item">
                            <div className='list__area__content__item__detail'>
                                <p>1.本講座を進めていくにあたってのガイダンス (15:08)</p>
                            </div>
                            <div className='list__area__content__item__link'>
                                <DesignListBtn itemId='sechtml1'/>
                            </div>
                        </div>
                        <div className="list__area__content__item">
                            <div className='list__area__content__item__detail'>
                                <p>2.本講座を進めていくにあたってのガイダンス (15:08)</p>
                            </div>
                            <div className='list__area__content__item__link'>
                                <DesignListBtn itemId='sechtml2'/>
                            </div>
                        </div>
                        <div className="list__area__content__item">
                            <div className='list__area__content__item__detail'>
                                <p>3.本講座を進めていくにあたってのガイダンス (15:08)</p>
                            </div>
                            <div className='list__area__content__item__link'>
                                <DesignListBtn itemId='sechtml3'/>
                            </div>
                        </div>
                    </div>
                    <div className="list__area__content">
                        <h1>CSS編</h1>
                        <div className="list__area__content__item">
                            <div className='list__area__content__item__detail'>
                                <p>1.本講座を進めていくにあたってのガイダンス (15:08)</p>
                            </div>
                            <div className='list__area__content__item__link'>
                                <DesignListBtn itemId='seccss1'/>
                            </div>
                        </div>
                        <div className="list__area__content__item">
                            <div className='list__area__content__item__detail'>
                                <p>2.本講座を進めていくにあたってのガイダンス (15:08)</p>
                            </div>
                            <div className='list__area__content__item__link'>
                                <DesignListBtn itemId='seccss2'/>
                            </div>
                        </div>
                        <div className="list__area__content__item">
                            <div className='list__area__content__item__detail'>
                                <p>3.本講座を進めていくにあたってのガイダンス (15:08)</p>
                            </div>
                            <div className='list__area__content__item__link'>
                                <DesignListBtn itemId='seccss3'/>
                            </div>
                        </div>
                    </div>
                    <div className="list__area__content">
                        <h1>請求書編</h1>
                        <div className="list__area__content__item">
                            <div className='list__area__content__item__detail'>
                                <p>1.本講座を進めていくにあたってのガイダンス (15:08)</p>
                            </div>
                            <div className='list__area__content__item__link'>
                                <DesignListBtn itemId='invoice1'/>
                            </div>
                        </div>
                        <div className="list__area__content__item">
                            <div className='list__area__content__item__detail'>
                                <p>2.本講座を進めていくにあたってのガイダンス (15:08)</p>
                            </div>
                            <div className='list__area__content__item__link'>
                                <DesignListBtn itemId='invoice2'/>
                            </div>
                        </div>
                        <div className="list__area__content__item">
                            <div className='list__area__content__item__detail'>
                                <p>3.本講座を進めていくにあたってのガイダンス (15:08)</p>
                            </div>
                            <div className='list__area__content__item__link'>
                                <DesignListBtn itemId='invoice3'/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default DesignList