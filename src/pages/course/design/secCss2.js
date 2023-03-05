import React from 'react';
import Header from '../../../component/header/header';
import Footer from '../../../component/footer/footer';
import DesignNavi from '../../../component/navigation/DesignNavi';

const designCss2 = () =>{
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

export default designCss2