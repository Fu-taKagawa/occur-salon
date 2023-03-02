import React,{ useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import firebase from "../config/firebase";
import { AuthContext } from "../AuthService";
const Login = ({history}) => {
    const user = useContext(AuthContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = e => {
    e.preventDefault();
        firebase
        .auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            history.push('/');
        })
        .catch(err => {
            console.log(err);
            alert('メールアドレス・パスワードに間違いがあります。')
        });
    };
    if (user) {
        return <Redirect to="/" />
    }

    return(
        <>
            <div className="login">
                <div className="login__area">
                    <h1>ログインページ</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="login__area__text">
                            <label htmlFor="email">メールアドレス</label>
                            <input
                                name="email"
                                type="email"
                                id="email"
                                placeholder="example@email.com"
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="login__area__text">
                            <label htmlFor="password">パスワード</label>
                            <input
                                name="password"
                                type="password"
                                id="password"
                                placeholder="password"
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit">ログイン</button>
                    </form>
                </div>
            </div>
        </>
    )
};

export default Login;