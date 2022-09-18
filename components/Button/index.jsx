import styles from './button.module.css'
import styled from 'styled-components'
import { useTheme } from 'next-themes'
import Link from 'next/link'

export function ButtonLayout({ children }) {
  return (
    <button
      className={`w-25 flex h-10 items-center justify-center rounded-2xl border-none bg-black py-2 px-4 font-[montserrat] text-sm font-[100] text-white`}
    >
      {children}
    </button>
  )
}

export default function Button({ children, link }) {
  const { theme } = useTheme()

  return (
    <Btn theme={theme}>
      <Link target="_blank" href={link ? link : '#'}>
        <h2>{children}</h2>
      </Link>
      <svg
        clipRule="evenodd"
        fillRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit={2}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m12.007 2c-5.518 0-9.998 4.48-9.998 9.998 0 5.517 4.48 9.997 9.998 9.997s9.998-4.48 9.998-9.997c0-5.518-4.48-9.998-9.998-9.998zm1.523 6.21s1.502 1.505 3.255 3.259c.147.147.22.339.22.531s-.073.383-.22.53c-1.753 1.754-3.254 3.258-3.254 3.258-.145.145-.335.217-.526.217-.192-.001-.384-.074-.531-.221-.292-.293-.294-.766-.003-1.057l1.977-1.977h-6.693c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.693l-1.978-1.979c-.29-.289-.287-.762.006-1.054.147-.147.339-.221.53-.222.19 0 .38.071.524.215z"
          fillRule="nonzero"
        />
      </svg>
    </Btn>
  )
}

export const Btn = styled.button`
  margin: 9rem 0 0 0; //Make this a prop
  font-family: 'Poppins', sans-serif;
  position: relative;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: transparent;
  padding: 0.5rem 1rem;
  border: 1px solid ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
  border-radius: 5px;
  color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
  transition: all 0.5s ease-in-out;
  z-index: 5;

  @media (max-width: 768px) {
    margin: 2rem 0;
  }

  h2 {
    z-index: 999;
  }

  svg {
    z-index: 999;
    fill: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
    width: 20px;
    height: 20px;
  }

  &::after {
    content: '';
    cursor: pointer;
    z-index: 10;
    border-radius: 5px;
    background-color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
    position: absolute;
    left: 0;
    top: 0;
    width: 0%;
    height: 100%;
    transition: all 0.5s ease-in-out;
  }

  &:hover {
    border: 1px solid transparent; //??
    cursor: pointer;
    color: ${({ theme }) => (theme === 'dark' ? '#000' : '#fff')};

    svg {
      fill: ${({ theme }) => (theme === 'dark' ? '#000' : '#fff')};
    }

    &::after {
      animation: reveal 0.2s ease-in-out forwards;
    }
  }

  @keyframes reveal {
    0% {
      width: 0%;
    }
    20% {
      width: 20%;
    }
    50% {
      width: 50%;
    }
    80% {
      width: 80%;
    }
    100% {
      width: 100%;
    }
  }
`
