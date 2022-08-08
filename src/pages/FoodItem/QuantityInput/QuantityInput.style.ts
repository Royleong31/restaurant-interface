import styled from "styled-components";

export const QuantityInputStyle = styled.div`
  width: 100%;
  border-bottom: solid 0.125rem #f7f7f7;

  margin: auto;
  width: 8.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem 0;
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
