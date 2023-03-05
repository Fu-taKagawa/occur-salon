import React from "react";
import { Link } from "react-router-dom";

const GraduatedNavi=()=>{
    return(
        <>
            <div className="video__navi">
                <div className="video__navi__content">
                    <h1>事前準備編</h1>
                    <Link to={'/graduated/prepare1'}>
                        <div className="video__navi__content__item">1.本講座を進めていくにあたってのガイダンス (15:08)</div>
                    </Link>
                    <Link to={'/graduated/prepare2'}>
                        <div className="video__navi__content__item">1.本講座を進めていくにあたってのガイダンス (15:08)</div>
                    </Link>
                    <Link to={'/graduated/prepare3'}>
                        <div className="video__navi__content__item">1.本講座を進めていくにあたってのガイダンス (15:08)</div>
                    </Link>
                </div>
                <div className="video__navi__content">
                    <h1>HTML編</h1>
                    <Link to={'/graduated/sechtml1'}>
                        <div className="video__navi__content__item">1.本講座を進めていくにあたってのガイダンス (15:08)</div>
                    </Link>
                    <Link to={'/graduated/sechtml2'}>
                        <div className="video__navi__content__item">1.本講座を進めていくにあたってのガイダンス (15:08)</div>
                    </Link>
                    <Link to={'/graduated/sechtml3'}>
                        <div className="video__navi__content__item">1.本講座を進めていくにあたってのガイダンス (15:08)</div>
                    </Link>
                </div>
                <div className="video__navi__content">
                    <h1>CSS編</h1>
                    <Link to={'/graduated/seccss1'}>
                        <div className="video__navi__content__item">1.本講座を進めていくにあたってのガイダンス (15:08)</div>
                    </Link>
                    <Link to={'/graduated/seccss2'}>
                        <div className="video__navi__content__item">1.本講座を進めていくにあたってのガイダンス (15:08)</div>
                    </Link>
                    <Link to={'/graduated/seccss3'}>
                        <div className="video__navi__content__item">1.本講座を進めていくにあたってのガイダンス (15:08)</div>
                    </Link>
                </div>
                <div className="video__navi__content">
                    <h1>請求書編</h1>
                    <Link to={'/graduated/invoice1'}>
                        <div className="video__navi__content__item">1.本講座を進めていくにあたってのガイダンス (15:08)</div>
                    </Link>
                    <Link to={'/graduated/invoice2'}>
                        <div className="video__navi__content__item">1.本講座を進めていくにあたってのガイダンス (15:08)</div>
                    </Link>
                    <Link to={'/graduated/invoice3'}>
                        <div className="video__navi__content__item">1.本講座を進めていくにあたってのガイダンス (15:08)</div>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default GraduatedNavi