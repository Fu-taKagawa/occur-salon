import React from "react";
import DesignListBtn from "../btn/DesignListBtn";

const DesignContent = (props) =>{
    const title = props.title;
    const itemId = props.itemId;
    return(
        <>
            <div className="list__area__content__item">
                <div className='list__area__content__item__detail'>
                    <p>{title}</p>
                </div>
                <div className='list__area__content__item__link'>
                    <DesignListBtn itemId={itemId}/>
                </div>
            </div>
        </>
    )
}

export default DesignContent