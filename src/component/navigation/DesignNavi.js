import React from "react";
import { Link } from "react-router-dom";

const DesignNavi=()=>{
    return(
        <>
            <div className="video__navi">
                <div className="video__navi__content">
                    <h1>事前準備編</h1>
                    <Link to={'/design/prepare1'}>
                        <div className="video__navi__content__item navi__design-pre1">1.本講座を進めていくにあたってのガイダンス (15:08)</div>
                    </Link>
                    <Link to={'/design/prepare2'}>
                        <div className="video__navi__content__item navi__design-pre2">2.本講座を進めていくにあたってのガイダンス (15:08)</div>
                    </Link>
                    <Link to={'/design/prepare3'}>
                        <div className="video__navi__content__item navi__design-pre3">3.本講座を進めていくにあたってのガイダンス (15:08)</div>
                    </Link>
                </div>
                <div className="video__navi__content">
                    <h1>HTML編</h1>
                    <Link to={'/design/sechtml1'}>
                        <div className="video__navi__content__item navi__design-html1">1.本講座を進めていくにあたってのガイダンス (15:08)</div>
                    </Link>
                    <Link to={'/design/sechtml2'}>
                        <div className="video__navi__content__item navi__design-html2">2.本講座を進めていくにあたってのガイダンス (15:08)</div>
                    </Link>
                    <Link to={'/design/sechtml3'}>
                        <div className="video__navi__content__item navi__design-html3">3.本講座を進めていくにあたってのガイダンス (15:08)</div>
                    </Link>
                </div>
                <div className="video__navi__content">
                    <h1>CSS編</h1>
                    <Link to={'/design/seccss1'}>
                        <div className="video__navi__content__item navi__design-css1">1.本講座を進めていくにあたってのガイダンス (15:08)</div>
                    </Link>
                    <Link to={'/design/seccss2'}>
                        <div className="video__navi__content__item navi__design-css2">2.本講座を進めていくにあたってのガイダンス (15:08)</div>
                    </Link>
                    <Link to={'/design/seccss3'}>
                        <div className="video__navi__content__item navi__design-css3">3.本講座を進めていくにあたってのガイダンス (15:08)</div>
                    </Link>
                </div>
                <div className="video__navi__content">
                    <h1>請求書編</h1>
                    <Link to={'/design/invoice1'}>
                        <div className="video__navi__content__item navi__design-invoice1">1.本講座を進めていくにあたってのガイダンス (15:08)</div>
                    </Link>
                    <Link to={'/design/invoice2'}>
                        <div className="video__navi__content__item navi__design-invoice2">2.本講座を進めていくにあたってのガイダンス (15:08)</div>
                    </Link>
                    <Link to={'/design/invoice3'}>
                        <div className="video__navi__content__item navi__design-invoice3">3.本講座を進めていくにあたってのガイダンス (15:08)</div>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default DesignNavi