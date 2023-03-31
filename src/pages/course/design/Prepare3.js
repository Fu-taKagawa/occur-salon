import React,{useEffect} from 'react';
import firebase from '../../../config/firebase';
import Header from '../../../component/header/header';
import Footer from '../../../component/footer/footer';
import DesignNavi from '../../../component/navigation/DesignNavi';

const DesignPre3 = () =>{
    const user = firebase.auth().currentUser;
    const designId = 'prepare3';
    const docRef = firebase.firestore().collection(`userAuth/${user.uid}/design`).doc(designId);
    useEffect(() => {
        function OnLoad(){
            const navi__designPre1 = document.querySelector('.navi__design-pre3');
            navi__designPre1.classList.add('bg__orange');
        }
        OnLoad();
        docRef.get().then((doc) => {
            if (doc.exists) {
                if (!doc.data().timestamp) {
                docRef.update({ timestamp: firebase.firestore.FieldValue.serverTimestamp() });
                } else {
                docRef.update({ timestamp: firebase.firestore.FieldValue.serverTimestamp() });
                }
            }
            if (doc.exists) {
                if (!doc.data().text) {
                    docRef.update({ text: '3.本講座を進めていくにあたってのガイダンス' });
                }
                if (!doc.data().title) {
                    docRef.update({ title: '事前準備編' });
                }
            }
        });
    },[])
    return (
        <>
            <Header/>
            <section className='video'>
                <DesignNavi/>
                <div className='video__main'>
                    <div className='video__main__item'>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/pTwSEgflLq0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default DesignPre3