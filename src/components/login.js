import React from 'react';

class LoginComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email: "",
        password: "",
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange = (event) => {
      this.setState({ [event.target.name]: event.target.value });
    };
    handleSubmit(event) {
      alert("Vous bien connectez");
      event.preventDefault();
    }
  
    render() {
      return (
        <section className="LoginComponent">
          <a href="/register">Register</a>
          <h2>Login</h2>
          <form action="" onSubmit={this.handleSubmit}>
            <label htmlFor="email">Entrer ton adresse mail: </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="monemail@adresse.com"
              onChange={this.handleChange}
              value={this.state.email}
            />
            <br />
            <label htmlFor="pass">
              Entrer un mot de passe (6 caractèers minimum):
            </label>
            <input
              type="password"
              id="pass"
              name="password"
              minilength="6"
              onChange={this.handleChange}
              value={this.state.password}
              required
              placeholder="**"
            />
            <br></br>
            <input type="submit" value="Login" />
          </form>
        </section>
      );
    }
  }
export default LoginComponent;