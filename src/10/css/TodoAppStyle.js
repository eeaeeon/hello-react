import styled from "styled-components";

const H1 = styled.h1`
  padding: 1rem 100px;
  background: rgb(100, 200, 200);
  color: white;
`;

const Input = styled.input`
  padding: 5px 100px;
  background: rgb(80, 80, 80);
  color: white;
  ::placeholder {
    color: rgb(200, 200, 200);
  }
`;

const Button = styled.button`
  padding: 5px 10px;
  background: rgb(200, 200, 200);
`;

export default { H1, Input, Button };
