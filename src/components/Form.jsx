import { useState } from "react";
import styled from "styled-components";

import Input from "./Input";
import SubmitButton from "./SubmitButton";

const StyledForm = styled.form`
  margin: 40px 0;
  padding: 40px 50px;

  box-shadow: 4px 4px 25px rgba(14, 76, 121, 0.18);
  border-radius: 10px;
  width: 500px;

  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 550px) {
    width: 90%;
    padding: 30px 20px;
  }
`;

const FormTitle = styled.h3`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 38px;

  color: #2b689b;
  margin: 40px 0 50px 0;
`;

const Note = styled.p`
  margin-right: auto;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;

  color: #2b689b;

  span {
    color: #ffb6c1;
  }
`;

const LogLinks = styled.div`
  a {
    text-decoration: none;

    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.01em;

    color: #2b689b;

    &:first-child {
      margin-right: 30px;
    }
  }
`;

const Form = () => {
  const [controlStringError, setControlStringError] = useState(null);
  const [newPasswordError, setNewPasswordError] = useState(null);
  const [repeatPasswordError, setRepeatPasswordError] = useState(null);

  const [userData, setUserData] = useState({
    name: "",
    controlString: "",
    newPassword: "",
    repeatPassword: "",
  });

  const submitForm = (e) => {
    e.preventDefault();

    if (userData.controlString !== process.env.REACT_APP_SECRET_KEY) {
      setControlStringError("Неверное контрольное слово");
      return;
    }

    if (userData.newPassword.length < 6) {
      setNewPasswordError("Пароль должен быть не менее 6 символов");
      return;
    }

    if (userData.newPassword !== userData.repeatPassword) {
      setRepeatPasswordError("Пароли не совпадают");
      return;
    }

    try {
      alert(`Пароль успешно изменен`);
    } finally {
      e.target.reset();
    }
  };

  return (
    <StyledForm onSubmit={submitForm}>
      <p>
        <img src="./img/icons/logo.svg" alt="Form logo" />
      </p>
      <FormTitle>Изменение пароля</FormTitle>

      <Input
        type="text"
        placeholder="Email / Логин"
        errorText={null}
        changeHandler={(e) =>
          setUserData((state) => ({ ...state, name: e.target.value }))
        }
        value={userData.name}
      />
      <Input
        type="text"
        placeholder="Контрольная строка"
        changeHandler={(e) =>
          setUserData((state) => ({ ...state, controlString: e.target.value }))
        }
        value={userData.controlString}
        errorText={controlStringError}
      />

      <Input
        type="password"
        placeholder="Новый пароль"
        changeHandler={(e) =>
          setUserData((state) => ({ ...state, newPassword: e.target.value }))
        }
        value={userData.newPassword}
        errorText={newPasswordError}
      />

      <Input
        type="password"
        placeholder="Подтверждение пароля"
        changeHandler={(e) =>
          setUserData((state) => ({ ...state, repeatPassword: e.target.value }))
        }
        value={userData.repeatPassword}
        errorText={repeatPasswordError}
      />

      <Note>
        <span>*</span> Обязательные поля
      </Note>

      <SubmitButton title="Изменить пароль" />
      <LogLinks>
        <a href="./">Зарегистироваться</a>
        <a href="./">Войти</a>
      </LogLinks>
    </StyledForm>
  );
};

export default Form;
