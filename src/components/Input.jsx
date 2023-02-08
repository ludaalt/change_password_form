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
  border-bottom: 1px solid #2b689b;
  padding: 10px 25px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;

  &::placeholder {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;

    color: #6b95b9;
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
  }
`;

const Input = ({ type, placeholder }) => {
  return (
    <InputBox>
      <StyledInput
        type={type}
        placeholder={placeholder}
        required
        autocomplete="false"
      />
      <span></span>
    </InputBox>
  );
};

export default Input;
