import React,{useEffect} from "react";
import firebase from "../../config/firebase";
import DesignListBtn from "../btn/DesignListBtn";

const DesignContent = (props) =>{
    const user = firebase.auth().currentUser;
    const title = props.title;
    const designId = props.designId;
    const docRef = firebase.firestore().collection(`userAuth/${user.uid}/design`).doc(designId);
    useEffect(()=>{
        docRef.get().then((doc) => {
            if (doc.exists) {
                if (!doc.data().viewed) {
                    docRef.update({ viewed: false });
                }
            }
        });
    },[])
    return(
        <>
            <div className="list__area__content__item">
                <div className='list__area__content__item__detail'>
                    <p>{title}</p>
                </div>
                <div className='list__area__content__item__link'>
                    <DesignListBtn designId={designId}/>
                </div>
            </div>
        </>
    )
}

export default DesignContent