import React,{useEffect} from 'react';
import firebase from '../../../config/firebase';
import Header from '../../../component/header/header';
import Footer from '../../../component/footer/footer';
import DesignNavi from '../../../component/navigation/DesignNavi';

const DesignPre1 = () =>{
    const user = firebase.auth().currentUser;
    const designId = 'prepare1';
    const docRef = firebase.firestore().collection(`userAuth/${user.uid}/design`).doc(designId);
    useEffect(() => {
        function OnLoad(){
            const navi__designPre1 = document.querySelector('.navi__design-pre1');
            navi__designPre1.classList.add('bg__orange');
        }
        OnLoad();
        docRef.get().then((doc) => {
            if (doc.exists) {
                // ドキュメントが存在する場合の処理
                if (!doc.data().timestamp) {
                // timestampフィールドが存在しない場合は、追加する
                docRef.update({ timestamp: firebase.firestore.FieldValue.serverTimestamp() });
                } else {
                // timestampフィールドが存在する場合は、更新する
                docRef.update({ timestamp: firebase.firestore.FieldValue.serverTimestamp() });
                }
            }
            if (doc.exists) {
                // ドキュメントが存在する場合の処理
                if (!doc.data().text) {
                // textフィールドが存在しない場合は、追加する
                    docRef.update({ text: '1.本講座を進めていくにあたってのガイダンス' });
                }
                if (!doc.data().title) {
                // textフィールドが存在しない場合は、追加する
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
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/01-OPHjwDLU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>        
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default DesignPre1