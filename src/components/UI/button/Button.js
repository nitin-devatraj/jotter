import { styled } from "styled-components";

const Button = styled.button`
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid whitesmoke;
  color: white;
  background: #52b788;
  border-radius: 5px;
  cursor: pointer;
  margin: 8px 0;

  &:focus {
    outline: none;
  }

  &:hover {
    transform: translateX(4px);
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

// const Button = (props) => {
//   return (
//     <button type={props.type} className="button" onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };

export default Button;
