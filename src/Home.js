import React from 'react';
import { Link } from 'react-router-dom';
import Header from './component/header/header';
import Footer from './component/footer/footer';

import listImg from './img/list-img.png'

function Home() {
  return (
    <>
      <Header/>
      <section className='home'>
        <div className='home__area'>
          <div className='home__area__content'>
            <h1>学習中のコンテンツ</h1>
            <div className='home__area__content__btn'>
              <div className='home__area__content__btn-graduated btn-active'>
                <Link to='/'>卒業コンテンツ</Link>
              </div>
              <div className='home__area__content__btn-design btn-inactive'>
                <Link to='/'>デザイン案件獲得コンサル</Link>
              </div>
            </div>
            <div className='home__area__content__progress'>
              <div className='home__area__content__progress__detail'>
                <p>事前準備編</p>
                <p>1.本講座を進めていくにあたってのガイダンス</p>
              </div>
              <div className='home__area__content__progress__link'>
                <Link to={'/design/prepare1'}>続きから学習する</Link>
              </div>
            </div>
          </div>
          <div className='home__area__course'>
            <h1>コース一覧</h1>
            <div className='home__area__course__item'>
              <div className='home__area__course__item-design'>
                <h2>デザイン案件獲得コンサル</h2>
                <div className='home__area__course__item-img'>
                  <img src={listImg} alt="イメージ" />
                </div>
                <div className='home__area__course__item__text'>
                  <p>ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。</p>
                </div>
                <div className='home__area__course__item__bought'>
                  <p>購入済み</p>
                </div>
                <div className='home__area__course__item__attend'>
                  <Link to={'/designList'}>
                    <div className='home__area__course__item__attend__link'>
                      受講する
                    </div>
                  </Link>
                </div>
              </div>
              <div className='home__area__course__item-design'>
                <h2>卒業コンテンツ</h2>
                <div className='home__area__course__item-img'>
                  <img src={listImg} alt="イメージ" />
                </div>
                <div className='home__area__course__item__text'>
                  <p>ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。</p>
                </div>
                <div className='home__area__course__item__bought'>
                  <p>購入済み</p>
                </div>
                <div className='home__area__course__item__attend'>
                  <Link to={'/graduatedList'}>
                    <div className='home__area__course__item__attend__link'>
                      受講する
                    </div>
                  </Link>
                </div>
              </div>
              <div className='home__area__course__item-design'>
                <h2>LP案件獲得コンサル</h2>
                <div className='home__area__course__item-img'>
                  <img src={listImg} alt="イメージ" />
                </div>
                <div className='home__area__course__item__text'>
                  <p>ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。</p>
                </div>
                <div className='home__area__course__item__bought'>
                  <p>購入済み</p>
                </div>
                <div className='home__area__course__item__attend'>
                  <Link to={'/'}>
                    <div className='home__area__course__item__attend__link'>
                      受講する
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default Home;