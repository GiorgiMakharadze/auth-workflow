import { Link } from "react-router-dom";
import styled from "styled-components";
import main from "../assets/main.svg";
import { Redirect } from "react-router-dom";
import { useGlobalContext } from "../context";
function Home() {
  const { user } = useGlobalContext();
  return (
    <>
      {user && <Redirect to="/dashboard" />}
      <Wrapper className="page">
        <div className="info">
          <h2>
            <span>Auth</span>
            Workflow
          </h2>
          <p>
            AuthWorkflow is a MERN stack application created by Giorgi
            Makharadze for user authentication and password management. It uses
            JWT authentication, bcrypt for password encryption, and nodemailer
            for sending password reset emails. The app provides user
            registration, login, logout, forgot password and reset password
            functionalities
          </p>
          <p>
            It allows users to update their profiles and change their passwords
            securely. The app is customizable to use different SMTP services for
            sending emails. AuthWorkflow provides a reliable and secure way to
            manage user authentication and password management for web
            applications.
          </p>

          <Link to="/login" className="btn">
            Login
          </Link>
          <Link to="/register" className="btn">
            Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  h2 {
    font-weight: 700;
  }
  h2 span {
    color: var(--primary-500);
  }
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 6rem;
    .main-img {
      display: block;
    }
  }
  .btn {
    margin-left: 0.25rem;
    margin-right: 0.25rem;
  }
`;

export default Home;
