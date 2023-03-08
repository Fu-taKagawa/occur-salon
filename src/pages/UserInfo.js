import React ,{useState,useContext,useEffect}from "react";
import { Link } from "react-router-dom";
import Header from "../component/header/header";
import Footer from "../component/footer/footer";
import firebase from "../config/firebase";
import 'firebase/auth';
import { AuthContext } from "../AuthService";

const UserInfo = () =>{
    const users = useContext(AuthContext)
    const [name , setName] = useState('');
    const handleChangeBtn = () =>{
        const editBtn = document.querySelector('.userInfo__editBtn');
        const editEndBtn = document.querySelector('.userInfo__editEndBtn');
        editBtn.classList.add('display-none');
        editBtn.classList.remove('display-block')
        editEndBtn.classList.add('display-block');
        editEndBtn.classList.remove('display-none');
    }
    useEffect(() => {
        setName(users?.displayName || "");
    }, [users]);
    const handleRename = (e) => {
        e.preventDefault();
        const user = firebase.auth().currentUser;
        if (user) { // currentUserがnullでないことを確認する
            user.updateProfile({
                displayName: name
            }).then(() => {
                console.log("ユーザー名が更新されました");
            }).catch((error) => {
                console.error("ユーザー名を更新できませんでした: ", error);
            });
        } else {
            console.error("ユーザーがログインしていません");
        }
        window.location.reload(true)
    }
    return(
        <>
            <Header/>
            <section className="userInfo">
                <div className="userInfo__content">
                    <h1>会員情報</h1>
                    <div>
                        <div className="userInfo__content__box">
                            <div className="userInfo__content__box__text">
                                <p>名前</p>
                                <p>{users?.displayName}</p>
                            </div>
                            <Link className="userInfo__editBtn display-block" onClick={handleChangeBtn}>
                                <p>編集する</p>
                            </Link>
                            <form onSubmit={handleRename} className="userInfo__editEndBtn display-none">
                                <input type="text" placeholder={users?.displayName}
                                    onChange={e=>{
                                        setName(e.target.value)
                                    }}/>
                                <button type="submit">更新</button>
                            </form>
                        </div>
                        <div className="userInfo__content__box">
                            <div className="userInfo__content__box__text">
                                <p>メールアドレス</p>
                                <p>香川</p>
                            </div>
                            <Link><p>編集する</p></Link>
                        </div>
                        <div className="userInfo__content__box">
                            <div className="userInfo__content__box__text">
                                <p>パスワード</p>
                                <p>香川</p>
                            </div>
                            <Link><p>編集する</p></Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}
export default UserInfo