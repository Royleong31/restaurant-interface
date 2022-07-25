import styled from "styled-components";

export const CategoryLiStyle = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  list-style: none;
  width: 91.3%;
  height: 3.6875rem;
  margin: auto;

  :not(&:last-child) {
    border-bottom: 0.0625rem solid #e8e8e8;
  }
`;
