import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import firebase from "../../config/firebase";

const DesignListBtn = (props) =>{
    const [isItemViewed, setIsItemViewed] = useState(false);
    const itemId = props.itemId;
    useEffect(() => {
        const user = firebase.auth().currentUser;
        if (user && itemId) {
            const itemRef = firebase.firestore().collection(`userAuth/${user.uid}/items`).doc(itemId);
            itemRef.get().then((doc) => {
            if (doc.exists) {
                setIsItemViewed(doc.data().viewed);
                console.log(doc.data().viewed);
            }
            });
        }
        }, [itemId]);
    const handleView = (itemId) => {
        const user = firebase.auth().currentUser;
        const itemRef = firebase.firestore().collection(`userAuth/${user.uid}/items`).doc(itemId);
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
            {isItemViewed ? (<Link to={`/design/${itemId}`} className='bg__black'>復習する</Link>):(<Link to={`/design/${itemId}`} onClick={() => handleView(itemId)}>受講する</Link>)}
        </>
    )
}

export default DesignListBtn