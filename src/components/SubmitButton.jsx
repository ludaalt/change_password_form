import styled from "styled-components";

const StyledButton = styled.button`
  padding: 20px 80px 20px 40px;
  margin: 30px 0;
  background: #ffd970;

  background-image: url("./img/icons/arrow.svg");
  background-repeat: no-repeat;
  background-position: 85% 50%;

  border-radius: 5px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 21px;

  color: #0e406a;

  :hover {
    background-color: #f3c649;
    background-position: 90% 50%;
    transition: background-position 0.3s;
  }

  @media (max-width: 550px) {
    padding: 20px 70px 20px 30px;
  }
`;

const SubmitButton = ({ title }) => {
  return <StyledButton type="submit">{title}</StyledButton>;
};

export default SubmitButton;
