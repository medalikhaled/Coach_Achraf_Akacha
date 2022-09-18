import styled from 'styled-components'

export const Scroll = styled.div`
  z-index: 9999;
  position: absolute;
  top: ${({ positionTop }) => positionTop};
  left: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: bounce 5s ease;

  span {
    font-size: 10px;
    writing-mode: vertical-rl;
    margin-bottom: 5px;
    margin-left: 2px;
  }

  &:hover svg {
    animation: bounceSvg 1s ease-in infinite;

    @keyframes bounceSvg {
      0%,
      100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-5px);
      }
    }
  }

  &:hover {
    cursor: pointer;
    animation: bounce 1s ease-in infinite;
  }
  @keyframes bounce {
    0% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-20px);
    }

    100% {
      transform: translateY(0);
    }
  }
`
