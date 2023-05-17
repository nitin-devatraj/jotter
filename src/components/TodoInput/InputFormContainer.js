import { styled } from "styled-components";

const InputFormContainer = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${(props) => (props.isValid ? "white" : "salmon")};
  }

  & input {
    display: block;
    width: 100%;
    border: none;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
    height: 30px;
    border-radius: 2px;
    background-color: ${(props) => (props.isValid ? "white" : "salmon")};
  }

  & input:focus {
    outline: none;
    background: whitesmoke;
  }
`;

export default InputFormContainer;
