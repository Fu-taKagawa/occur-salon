import React from "react";
import Header from "../component/header/header";
import Footer from "../component/footer/footer";

const law=()=>{
    return(
        <>
            <Header/>
            <section className="home-white">
                <div className="home__area">
                    <div className="law__content">
                        <h1>特定商取引法に基づく表記</h1>
                        <div className="law__content__box">
                            <div className="law__content__box__item">
                                <div className="law__content__box__item__title-top">
                                    <h2>事業者の名称等</h2>
                                </div>
                                <div className="law__content__box__item__text">
                                    <p>販売業者名：合同会社occur</p>
                                    <p>代表責任者名：香川 湧暉</p>
                                    <p>所在地：〒6510084 兵庫県神戸市中央区磯辺通2丁目2‐10ワンノットトレーズビル2階WAY・OUT内</p>
                                    <p>電話番号：09082337145</p>
                                </div>
                            </div>
                            <div className="law__content__box__item">
                                <div className="law__content__box__item__title">
                                    <h2>商品・サービスの対価</h2>
                                </div>
                                <div className="law__content__box__item__text">
                                    <p>各商品ページに記載</p>
                                </div>
                            </div>
                            <div className="law__content__box__item">
                                <div className="law__content__box__item__title">
                                    <h2>商品代金以外の必要料金</h2>
                                </div>
                                <div className="law__content__box__item__text">
                                    <p>銀行振込の場合、振込手数料、消費税</p>
                                </div>
                            </div>
                            <div className="law__content__box__item">
                                <div className="law__content__box__item__title">
                                    <h2>お支払い方法</h2>
                                </div>
                                <div className="law__content__box__item__text">
                                    <p>銀行振込・クレジットカード</p>
                                </div>
                            </div>
                            <div className="law__content__box__item">
                                <div className="law__content__box__item__title">
                                    <h2>商品引渡し時期</h2>
                                </div>
                                <div className="law__content__box__item__text">
                                    <p>クレジット決済が完了後、商品・サービスの視聴ページにて閲覧可能になります。</p>
                                </div>
                            </div>
                            <div className="law__content__box__item">
                                <div className="law__content__box__item__title">
                                    <h2>返品・返金</h2>
                                </div>
                                <div className="law__content__box__item__text">
                                    <p>商品の性質上、返品や料金お支払い後の返品はお受けできません</p>
                                </div>
                            </div>
                            <div className="law__content__box__item">
                                <div className="law__content__box__item__title">
                                    <h2>商品に契約内容不適合がある場合の対応</h2>
                                </div>
                                <div className="law__content__box__item__text">
                                    <p>商品・サービスに契約内容不適合がある場合、当社は、当社に故意又は重大な過失がある場合を除き責任を負いません。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default law