import React from "react";
import { Link } from "react-router-dom";

const Footer=()=>{
    return(
        <>
            <footer>
                <div className="footer">
                    <div className="footer__item">
                        <ul>
                            <li><Link to={'/terms'}>利用規約</Link></li>
                            <li><Link to={'/privacy'}>プライバシーポリシー</Link></li>
                            <li><Link to={'/law'}>特定商取引法に基づく表記</Link></li>
                        </ul>
                    </div>
                    <div className="footer__copyright">
                        <small>&copy;kuwanun design</small>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer