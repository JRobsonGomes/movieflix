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
  const { register, handleSubmit, formState: { errors } } = useForm<FormState>();
  const [hasError, setHasError] = useState(false);
  const history = useHistory();
  const location = useLocation<LocationState>();

  const { from } = location.state || { from: { pathname: "/movies" } };

  const onSubmit = (data: FormState) => {
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
        <div className="login-input-content">
          <input
            {...register("username", {
              required: "Campo obrigatório",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Email inválido"
              }
            })}
            className={`form-control ${errors.username ? 'is-invalid' : ''}`}
            type='text'
            placeholder='Email'
          />
          {errors.username && (
            <div className="invalid-feedback d-block">
              {errors.username.message}
            </div>
          )}
        </div>
        <div className="login-input-content">
          <input
            {...register("password", {
              required: "Campo obrigatório",
              minLength: {
                value: 5,
                message: "Mínimo 5 caracteres"
              }
            })}
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            type='password'
            placeholder='Senha'
          />
          {errors.password && (
            <div className="invalid-feedback d-block">
              {errors.password.message}
            </div>
          )}
        </div>
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