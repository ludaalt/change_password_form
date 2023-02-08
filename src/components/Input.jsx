import styled from "styled-components";

const InputBox = styled.div`
  position: relative;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 50px;
  }

  &:last-child {
    margin-bottom: 30px;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  border: none;
  background: none;
  padding: 10px 25px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;

  @media (max-width: 335px) {
    padding: 8px 12px;
  }

  &::placeholder {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;

    color: #6b95b9;

    @media (max-width: 335px) {
      font-size: 15px;
    }
  }

  & + span::before {
    position: absolute;
    content: "*";
    margin: auto;
    display: flex;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;

    color: #ffb6c1;
    top: 10px;
    left: 10px;

    @media (max-width: 335px) {
      left: 1%;
    }
  }
`;

const Error = styled.p`
  margin-top: 5px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;

  color: #f13f58;
`;

const Input = ({ type, placeholder, errorText, changeHandler }) => {
  return (
    <InputBox>
      <StyledInput
        type={type}
        placeholder={placeholder}
        required
        autocomplete="false"
        onChange={(e) => changeHandler(e)}
        style={{
          borderBottom: errorText ? "1px solid #FFB6C1" : "1px solid #2b689b",
        }}
      />
      <span></span>
      <Error>{errorText}</Error>
    </InputBox>
  );
};

export default Input;
