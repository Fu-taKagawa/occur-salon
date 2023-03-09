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
    const [newEmail, setNewEmail] = useState('')
    const [currentPass, setCurrentPass] = useState('');
    const [newPass, setNewPass] = useState('')
    const handleChangeBtn1 = () =>{
        const editBtn1 = document.querySelector('.userInfo__editBtn1');
        const editEndBtn1 = document.querySelector('.userInfo__editEndBtn1');
        editBtn1.classList.add('display-none');
        editBtn1.classList.remove('display-block')
        editEndBtn1.classList.add('display-block');
        editEndBtn1.classList.remove('display-none');
    }
    const handleChangeBtn2 = () =>{
        const editBtn2 = document.querySelector('.userInfo__editBtn2');
        const editEndBtn2 = document.querySelector('.userInfo__editEndBtn2');
        editBtn2.classList.add('display-none');
        editBtn2.classList.remove('display-block')
        editEndBtn2.classList.add('display-block');
        editEndBtn2.classList.remove('display-none');
    }
    const handleChangeBtn3 = () =>{
        const editBtn3 = document.querySelector('.userInfo__editBtn3');
        const editEndBtn3 = document.querySelector('.userInfo__editEndBtn3');
        editBtn3.classList.add('display-none');
        editBtn3.classList.remove('display-block')
        editEndBtn3.classList.add('display-block');
        editEndBtn3.classList.remove('display-none');
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
                window.location.reload(true)
            }).catch((error) => {
                console.error("ユーザー名を更新できませんでした: ", error);
            });
        } else {
            console.error("ユーザーがログインしていません");
        }
    }
    const handleChangeMail=()=>{
        const user = firebase.auth().currentUser;
        if(user){
            user.updateEmail(newEmail)
            .then(() => {
                window.location.reload(true)
            }).catch((error) => {
                console.log(error);
            });
        }
    }
    const handleChangePassword = (e) => {
        e.preventDefault();
        const user = firebase.auth().currentUser;
        const credential = firebase.auth.EmailAuthProvider.credential(user.email, currentPass);
        user.reauthenticateWithCredential(credential)
            .then(() => {
            user.updatePassword(newPass)
                .then(() => {
                    window.location.reload(true)
                })
                .catch((error) => {
                    console.log(error);
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        handleChangeMail();
    };
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
                            <Link className="userInfo__editBtn1 display-block" onClick={handleChangeBtn1}>
                                <p>編集する</p>
                            </Link>
                            <form onSubmit={handleRename} className="userInfo__editEndBtn1 display-none">
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
                                <p>{users?.email}</p>
                            </div>
                            <Link className="userInfo__editBtn2 display-block" onClick={handleChangeBtn2}>
                                <p>編集する</p>
                            </Link>
                            <form onSubmit={handleSubmit} className="userInfo__editEndBtn2 display-none">
                                <input type="text" placeholder={users?.email}
                                    onChange={e=>{
                                        setNewEmail(e.target.value)
                                    }}/>
                                <button type="submit">更新</button>
                            </form>
                        </div>
                        <div className="userInfo__content__box">
                            <div className="userInfo__content__box__text">
                                <p>パスワード</p>
                                <p>---------</p>
                            </div>
                            <Link className="userInfo__editBtn3 display-block" onClick={handleChangeBtn3}>
                                <p>編集する</p>
                            </Link>
                            <form onSubmit={handleChangePassword} className="userInfo__editEndBtn3 display-none">
                                <input type="password" value={currentPass} placeholder="現在のパスワード" onChange={(e) => setCurrentPass(e.target.value)} />
                                <input type="password" value={newPass} placeholder="新しいパスワード" onChange={(e) => setNewPass(e.target.value)} />
                                <button type="submit">更新</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}
export default UserInfo