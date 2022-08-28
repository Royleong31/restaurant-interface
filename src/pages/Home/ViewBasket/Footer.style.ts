import styled from "styled-components";

export const FooterStyle = styled.div`
  position: sticky;
  bottom: 0;
  width: auto;
  padding: 0.8125rem 0 1.25rem;
  background-color: white;
  box-shadow: 0px -6px 16px rgb(0 0 0 / 5%);
  button {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: auto;
    padding: 0 1.75rem;
    width: 90.51282%;
    height: 3.25rem;
    background-color: #1c5dc9;
    border: none;
    border-radius: 2.4375rem;
    cursor: pointer;
  }

  p {
    margin: 0;
    color: white;
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.171875rem;
    padding: 0;
    span {
      display: inline-block;
      margin: 0 0.5rem;
      transform: translateY(0.2rem);
      font-size: 1.5rem;
    }
  }
`;

// export const SubmitSectionStyle = styled.div<props>`
//   width: 100%;
//   input {
//     display: block;
//     margin: 0.8125rem auto 1.25rem;
//     width: 92.3077%;
//     height: 3.1875rem;
//     border-radius: 2.4375rem;
//     border: none;
//     background-color: #1c6dc9;
//     cursor: pointer;

//     //text
//     &[type="submit" i] {
//       color: white;
//       font-family: "Roboto", sans-serif;
//       font-size: 1rem;
//       font-weight: 500;
//       line-height: 1.171875rem;
//       padding: 0;
//     }
//     &:hover {
//       /* -webkit-box-shadow: 0px 0px 28px 50px #000000;
//       box-shadow: 0px 0px 28px 50px #000000; */
//       -webkit-box-shadow: 0px 0px 15px 7px rgba(0, 0, 0, 0.12);
//       box-shadow: 0px 0px 15px 7px rgba(0, 0, 0, 0.12);
//       filter: brightness(1.05);
//     }
//     &:active {
//       -webkit-box-shadow: unset;
//       box-shadow: unset;
//       filter: brightness(1);
//     }
//   }
//   input:disabled {
//     cursor: default;
//     background-color: #c4c4c4;
//     &:hover {
//       box-shadow: none;
//       filter: none;
//     }
//   }
// `;
