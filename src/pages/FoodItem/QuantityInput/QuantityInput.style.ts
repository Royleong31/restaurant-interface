import styled from "styled-components";

export const QuantityInputStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem 0;
  border-bottom: solid 0.125rem #f7f7f7;
  /* border-top: solid 0.5rem #f7f7f7; */
  box-shadow: 0px -6px 16px rgba(0, 0, 0, 0.05);
  span {
    font-size: 1.25rem;
    font-weight: 500;
    user-select: none;
  }
`;

export const animateOptions = {
  from: { transform: "translateY(-0.3rem)", opacity: 0.8 },
  to: { transform: "translateY(0)", opacity: 1 },
  reset: true,
  // delay: 200,
  config: {
    mass: 0.1,
    tension: 52,
    friction: 2,
    velocity: 0.016,
  },
};
