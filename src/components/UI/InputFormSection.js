import { styled } from "styled-components";

const InputFormSection = styled.section`
  width: 30rem;
  max-width: 90%;
  margin: 3rem auto;
  padding: 2rem;
  border-radius: 10px;
  background-color: #95d5b2;
  box-shadow: ${(props) => {
    if (props.isValid) {
      return "3px 3px #b7e4c7";
    } else {
      return "3px 3px salmon";
    }
  }};
`;

export default InputFormSection;
