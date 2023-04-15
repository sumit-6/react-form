import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const CreateAccountPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const createAccount = async (e) => {
    e.preventDefault();
    try {
      if (password !== confirmPassword) {
        setError("Password and confirm password do not match");
        return;
      }

      await createUserWithEmailAndPassword(getAuth(), email, password);
      navigate("/");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <>
      <div
        className="card my-5 shadow"
        style={{
          borderRadius: "15px",
          marginLeft: "2rem",
          marginRight: "2rem",
        }}
      >
        <div className="container py-4">
          <div className="text-center">
            <h1>
              <b>
                <u>CREATE ACCOUNT</u>
              </b>
            </h1>
            {error && <p className="error">{error}</p>}
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email Address:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                <small id="emailHelp" className="form-text text-muted">
                  This email address needs not to be your actual email address
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password:
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword2" className="form-label">
                  Repeat Your Password:
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword2"
                  placeholder="Re-enter the password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <button
                onClick={(e) => createAccount(e)}
                className="btn btn-primary"
              >
                Register
              </button>
            </form>
            <Link to="/login">Already have an account? Log in here</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAccountPage;
