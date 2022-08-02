import styled from "styled-components";

export const ContentStyle = styled.div`
  section:first-child {
    height: 3.5rem;
    align-items: flex-start;
    border-top: none;
    margin-top: 0;
    h3 {
      margin: 0 0 0 4.6153846vw;
      font-size: 1.5rem;
      color: #3a3f43;
      font-weight: 400;
    }
  }

  .FoodItemList:last-child {
    min-height: calc(
      100vh - 6rem - 7.4375rem + 0.5rem
    ); //- height of section, - height of header - height of border
  }
`;
