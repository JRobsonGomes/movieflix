import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router-dom";
import { saveSessionData } from "utils/auth";
import { makeLogin } from "utils/request";
import './styles.scss';

type FormState = {
  username: string;
  password: string;
};

type LocationState = {
  from: string;
}

const Login = () => {
  const { register, handleSubmit } = useForm<FormState>();
  const [hasError, setHasError] = useState(false);
  const history = useHistory();
  const location = useLocation<LocationState>();

  const { from } = location.state || { from: { pathname: "/movies" } };

  const onSubmit = (data: FormState) => {
    console.log(data);
    makeLogin(data)
      .then(response => {
        setHasError(false);
        saveSessionData(response.data);
        history.replace(from);
      })
      .catch(() => {
        setHasError(true);
      });
  }

  return (
    <div className="login-container card-base">
      <h1>Login</h1>
      {hasError && (
        <div className="alert alert-danger p-2 mt-3" role="alert">
          Usuário ou senha inválidos!
        </div>)
      }
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("username", { required: true })}
          className="form-control"
          type='text'
          placeholder='Email'
        />
        <input
          {...register("password", { required: true })}
          className="form-control"
          type='password'
          placeholder='Senha'
        />
        <button
          className="btn btn-warning"
          type="submit"
        >
          Fazer Login
        </button>
      </form>
    </div>
  )
}

export default Login;