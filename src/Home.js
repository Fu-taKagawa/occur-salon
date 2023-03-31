import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import firebase from './config/firebase';
import Header from './component/header/header';
import Footer from './component/footer/footer';
import listImg from './img/list-img.png'
import course_design from './img/course-design.png'

function Home() {
  const user = firebase.auth().currentUser;
  const [latestItem, setLatestItem] = useState(null);
  const [activeButton, setActiveButton] = useState('design');
  const handleButtonClick = (button) => {
    setActiveButton(button);
    console.log(button)
  };
  useEffect(()=>{
    firebase.firestore().collection(`userAuth/${user.uid}/items`)
    .orderBy("timestamp", "desc") // timestampフィールドを降順でソートする
    .limit(1) // 最新の1つだけを取得する
    .get()
    .then((querySnapshot) => {
      if (!querySnapshot.empty) {
        const latestItem = querySnapshot.docs[0];
        setLatestItem(latestItem);
      } else {
        console.log("No items found.");
      }
    })
    .catch((error) => {
      console.error("Error getting latest item: ", error);
    });
  },[])
  return (
    <>
      <Header/>
      <section className='home'>
        <div className='home__area'>
          <div className='home__area__content'>
            <h1>学習中のコンテンツ</h1>
            <div className='home__area__content__btn'>
              <button className={`home__area__content__btn-design ${activeButton === 'design' ? 'btn-active' : 'btn-inactive'}`} onClick={() => handleButtonClick('design')}>
                <div>
                  デザイン案件獲得コンサル
                </div>
              </button>
              <button className={`home__area__content__btn-graduated ${activeButton === 'graduated' ? 'btn-active' : 'btn-inactive'}`} onClick={() => handleButtonClick('graduated')}>
                <div>
                  卒業コンテンツ
                </div>
              </button>
            </div>
            {
              activeButton === 'design' &&(
              <div className='home__area__content__progress'>
                <div className='home__area__content__progress__detail'>
                  {latestItem && <p>{latestItem.data().title}</p>}
                  {latestItem && <p>{latestItem.data().text}</p>}
                </div>
                <div className='home__area__content__progress__link'>
                  {latestItem && (<Link to={`/design/${latestItem.id}`}>続きから学習する</Link>)}
                </div>
              </div>
              )
            }
            {
              activeButton === 'graduated' && (
              <div className='home__area__content__progress'>
                <div className='home__area__content__progress__detail'>
                  {latestItem && <p>{latestItem.data().title}</p>}
                  {latestItem && <p>{latestItem.data().text}</p>}
                </div>
                <div className='home__area__content__progress__link'>
                  {latestItem && (<Link to={`/design/${latestItem.id}`}>続きから学習</Link>)}
                </div>
              </div>
              )
            }
          </div>
          <div className='home__area__course'>
            <h1>コース一覧</h1>
            <div className='home__area__course__item'>
              <div className='home__area__course__item-design'>
                <h2>デザイン案件獲得コンサル</h2>
                <div className='home__area__course__item-img'>
                  <img src={course_design} alt="イメージ" />
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
              <div className='home__area__course__item-graduated'>
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
              <div className='home__area__course__item-lp'>
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