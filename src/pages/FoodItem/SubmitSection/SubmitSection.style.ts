import styled from "styled-components";

export const SubmitSectionStyle = styled.div`
  width: 100%;
  input {
    display: block;
    margin: 0.8125rem auto 1.25rem;
    width: 92.3077%;
    height: 3.1875rem;
    border-radius: 2.4375rem;
    border: none;
    background-color: #1c6dc9;

    //text
    &[type="submit" i] {
      color: white;
      font-family: "Roboto", sans-serif;
      font-size: 1rem;
      font-weight: 500;
      line-height: 1.171875rem;
      padding: 0;
    }
  }
`;
