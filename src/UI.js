import styled from '@emotion/styled';

export const Input = styled.input`
  background-color: white;
  border: 10px solid ${props => props.borderColor};
  margin: 1%;
  padding: 10px;
  font-family: Helvetica;
  font-weight: bold;
  font-size: 45px;
  text-align: center;

  height: ${props => (props.height ? props.height + 30 : null)}px;

  ${props => (props.primary ? 'background-color: orange' : null)};
`;
