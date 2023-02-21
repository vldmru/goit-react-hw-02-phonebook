import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  &:not(:last-child) {
     margin-bottom: 30px;
  }
`;

export const Button = styled.button`
  width: 100px;
  background-color: skyblue;
  cursor: pointer;
`;