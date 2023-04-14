import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const logIn = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(getAuth(), email, password);
            navigate('/');
        } catch(err) {
            setError(err.message);
        }
    }

    return (
        <>
            <div className="card my-5 shadow" style={{borderRadius: "15px", marginLeft: "2rem", marginRight: "2rem"}}>
            <div className="container py-4">
            <div className="text-center">
            <h1><b><u>WELCOME</u></b></h1>
            {error && <p className="error">{error}</p>}
            <form>
            <div className="form-group">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address:</label>
            <input type="email" 
                className="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                placeholder="Your email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                >
            </input>
            <small id="emailHelp" className="form-text text-muted">This email address needs not to be your </small>
            </div>
            <div className="form-group">
            <label htmlFor="exampleInputPassword1" className="form-label">Your Password:</label>
            <input type="password" 
                className="form-control" 
                id="exampleInputPassword1" 
                placeholder='Your password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                />
            </div>
            <button onClick={e => logIn(e)} className="btn btn-primary">Log In</button>
            </form>
            <Link to="/create-account">Don't have an account? Create one here</Link>
            </div>
            </div>
            </div>
        </>
    );
}

export default LoginPage;