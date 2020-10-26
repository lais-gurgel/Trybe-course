import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        Login
        <form>
        <label>
          e-mail:
          <input type="text" name="name" />
        </label>
        <label>
          password:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Enviar" />
      </form>
      </div>
    );
  }
}

export default Login;