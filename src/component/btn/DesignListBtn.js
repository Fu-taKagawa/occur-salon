import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import firebase from "../../config/firebase";

const DesignListBtn = (props) =>{
    const [isItemViewed, setIsItemViewed] = useState(false);
    const designId = props.designId;
    useEffect(() => {
        const user = firebase.auth().currentUser;
        if (user && designId) {
            const itemRef = firebase.firestore().collection(`userAuth/${user.uid}/design`).doc(designId);
            itemRef.get().then((doc) => {
            if (doc.exists) {
                setIsItemViewed(doc.data().viewed);
                console.log(doc.data().viewed);
            }
            });
        }
    }, [designId]);
    const handleView = (designId) => {
        const user = firebase.auth().currentUser;
        const itemRef = firebase.firestore().collection(`userAuth/${user.uid}/design`).doc(designId);
        itemRef.update({ viewed: true })
            .then(() => {
                setIsItemViewed(true);
            })
            .catch((error) => {
                console.error(error);
            });
    };
    return(
        <>
            {isItemViewed ? (<Link to={`/design/${designId}`} className='bg__black'>復習する</Link>):(<Link to={`/design/${designId}`} onClick={() => handleView(designId)}>受講する</Link>)}
        </>
    )
}

export default DesignListBtn