import './styles.scss';

const Login = () => {

  return (
    <div className="login-container card-base">
      <h1>Login</h1>
      <form>
        <input
          className="form-control"
          type='text'
          placeholder='Email'
        />
        <input
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