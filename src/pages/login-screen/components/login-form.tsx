import React, { ChangeEvent, useState } from 'react';
import {useAppDispatch} from '../../../hooks/use-app-dispatch.ts';
import {loginAction} from '../../../store/api-actions.ts';
import {toast} from 'react-toastify';


function LoginForm(): JSX.Element {
  const dispatch = useAppDispatch();

  const passwordRegex = /^(?=.*[0-9])(?=.*[a-zA-Z])/;
  const [credits, setCredits] = useState({
    email: '',
    password: ''
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCredits((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (passwordRegex.test(credits.password)) {
      dispatch(loginAction(credits));
      return;
    }

    toast.warn('Validation error: password must contain one letter and number!');
  };

  return (
    <form className="login__form form" onSubmit={handleFormSubmit}>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <input
          className="login__input form__input"
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
      </div>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Password</label>
        <input
          className="login__input form__input"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
      </div>
      <button
        className="login__submit form__submit button"
        type="submit"
      >
        Sign in
      </button>
    </form>
  );
}

export default LoginForm;
