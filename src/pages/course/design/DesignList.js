import React from "react";
import Header from "../../../component/header/header";
import Footer from "../../../component/footer/footer";
import { Link } from "react-router-dom";

import homeIcon from '../../../img/home-icon.svg'
import angleRight from '../../../img/angle-right.svg'

const designList =()=>{
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
                                <Link to={'/design/prepare1'}>受講する</Link>
                            </div>
                        </div>
                        <div className="list__area__content__item">
                            <div className='list__area__content__item__detail'>
                                <p>2.本講座を進めていくにあたってのガイダンス (15:08)</p>
                            </div>
                            <div className='list__area__content__item__link'>
                                <Link to={'/design/prepare2'}>受講する</Link>
                            </div>
                        </div>
                        <div className="list__area__content__item">
                            <div className='list__area__content__item__detail'>
                                <p>3.本講座を進めていくにあたってのガイダンス (15:08)</p>
                            </div>
                            <div className='list__area__content__item__link'>
                                <Link to={'/design/prepare3'}>受講する</Link>
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
                                <Link to={'/design/sechtml1'}>受講する</Link>
                            </div>
                        </div>
                        <div className="list__area__content__item">
                            <div className='list__area__content__item__detail'>
                                <p>2.本講座を進めていくにあたってのガイダンス (15:08)</p>
                            </div>
                            <div className='list__area__content__item__link'>
                                <Link to={'/design/sechtml2'}>受講する</Link>
                            </div>
                        </div>
                        <div className="list__area__content__item">
                            <div className='list__area__content__item__detail'>
                                <p>3.本講座を進めていくにあたってのガイダンス (15:08)</p>
                            </div>
                            <div className='list__area__content__item__link'>
                                <Link to={'/design/sechtml3'}>受講する</Link>
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
                                <Link to={'/design/seccss1'}>受講する</Link>
                            </div>
                        </div>
                        <div className="list__area__content__item">
                            <div className='list__area__content__item__detail'>
                                <p>2.本講座を進めていくにあたってのガイダンス (15:08)</p>
                            </div>
                            <div className='list__area__content__item__link'>
                                <Link to={'/design/seccss2'}>受講する</Link>
                            </div>
                        </div>
                        <div className="list__area__content__item">
                            <div className='list__area__content__item__detail'>
                                <p>3.本講座を進めていくにあたってのガイダンス (15:08)</p>
                            </div>
                            <div className='list__area__content__item__link'>
                                <Link to={'/design/seccss3'}>受講する</Link>
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
                                <Link to={'/design/invoice1'}>受講する</Link>
                            </div>
                        </div>
                        <div className="list__area__content__item">
                            <div className='list__area__content__item__detail'>
                                <p>2.本講座を進めていくにあたってのガイダンス (15:08)</p>
                            </div>
                            <div className='list__area__content__item__link'>
                                <Link to={'/design/invoice2'}>受講する</Link>
                            </div>
                        </div>
                        <div className="list__area__content__item">
                            <div className='list__area__content__item__detail'>
                                <p>3.本講座を進めていくにあたってのガイダンス (15:08)</p>
                            </div>
                            <div className='list__area__content__item__link'>
                                <Link to={'/design/invoice3'}>受講する</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default designList