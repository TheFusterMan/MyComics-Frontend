import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './styles/LoginPage.css'

function LoginPage() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/chat');
    };

    return (
        <div className="login-container">
            <h1>MyComicsChat</h1>
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Логин"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleSubmit}>Вход</button>
                <a href="#">Если ещё нет аккаунта, то зарегистрируйтесь</a>
            </div>
        </div>
    );
}

export default LoginPage;