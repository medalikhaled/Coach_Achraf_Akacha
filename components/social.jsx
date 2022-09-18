import { useState, useEffect } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { useTheme } from 'next-themes'

function Social() {
  const { theme: isDark } = useTheme()
  const [socialTheme, setSocialTheme] = useState([...theme])

  return (
    <List>
      {socialTheme.map((social) => {
        return (
          <ListItem theme={social} key={social.name} isDark={isDark === 'dark'}>
            <Link href={social.url}>{social.svg}</Link>
          </ListItem>
        )
      })}
    </List>
  )
}

export default Social

//Data for social media links

const theme = [
  {
    name: 'Instagram',
    gradient: 'url(#a)',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <defs>
          <linearGradient id="a" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#405de6" stopOpacity={0.8} />
            <stop offset="20%" stopColor="#5851db" stopOpacity={0.8} />
            <stop offset="40%" stopColor="#833ab4" stopOpacity={0.8} />
            <stop offset="60%" stopColor="#c13584" stopOpacity={0.8} />
            <stop offset="80%" stopColor="#e1306c" />
            <stop offset="100%" stopColor="#fd1d1d" />
          </linearGradient>
        </defs>
        <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.615 6h-9.23c-.766 0-1.385.62-1.385 1.384v9.23c0 .766.619 1.386 1.385 1.386h9.23c.766 0 1.385-.62 1.385-1.385v-9.23c0-.765-.619-1.385-1.385-1.385zm-4.615 3.693c1.274 0 2.309 1.032 2.309 2.307s-1.035 2.307-2.309 2.307-2.307-1.033-2.307-2.307 1.033-2.307 2.307-2.307zm4.5 6.346c0 .255-.207.461-.461.461h-8.078c-.254 0-.461-.207-.461-.461v-5.039h.949c-.045.158-.078.32-.102.486-.023.168-.038.339-.038.514 0 2.04 1.652 3.693 3.691 3.693s3.691-1.653 3.691-3.693c0-.174-.015-.346-.039-.514-.023-.166-.058-.328-.102-.486h.95v5.039zm0-6.991c0 .255-.207.462-.461.462h-1.088c-.256 0-.461-.208-.461-.462v-1.087c0-.255.205-.461.461-.461h1.088c.254 0 .461.207.461.461v1.087z" />
      </svg>
    ),
    url: 'https://www.instagram.com/athlete_akacha/?fbclid=IwAR1S4BjY8mpJr4pD66mwl6EP1yHaZ-Yxcjy-glQFqQWvngVcjjPpePBZ9bQ',
  },

  {
    name: 'Whatsapp',
    color: 'green',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-5.971 18l.844-3.081c-.52-.902-.794-1.925-.794-2.973.001-3.279 2.668-5.946 5.946-5.946 1.591.001 3.084.62 4.206 1.744 1.123 1.124 1.741 2.618 1.74 4.207-.001 3.279-2.669 5.946-5.946 5.946-.995 0-1.976-.25-2.844-.724l-3.152.827zm3.298-1.903c.838.497 1.638.796 2.696.796 2.724 0 4.943-2.217 4.944-4.942.001-2.731-2.208-4.945-4.94-4.946-2.726 0-4.943 2.217-4.944 4.942 0 1.112.326 1.946.873 2.817l-.499 1.824 1.87-.491zm5.694-2.732c-.037-.062-.136-.099-.285-.174-.149-.074-.879-.434-1.015-.483-.136-.05-.235-.074-.334.074-.099.149-.384.483-.47.583-.087.099-.173.112-.322.037-.149-.074-.627-.231-1.195-.737-.442-.394-.74-.881-.827-1.029-.087-.149-.009-.229.065-.303l.223-.26.149-.248c.05-.099.025-.186-.012-.26l-.458-1.103c-.121-.29-.243-.25-.334-.255l-.286-.007c-.099 0-.26.037-.396.186s-.52.508-.52 1.24c0 .731.532 1.438.607 1.537.074.099 1.048 1.6 2.538 2.243.354.153.631.245.847.313.356.113.68.097.936.059.285-.043.879-.359 1.003-.706.123-.348.123-.645.086-.707z" />
      </svg>
    ),
    url: 'https://api.whatsapp.com/send/?phone=21624670205&text&type=phone_number&app_absent=0&fbclid=IwAR2cvkQWSzyt5o00BjpZyhMjsG8-0bkqauXBOXr74TTwpLzj5g7jv3VQEao',
  },

  {
    name: 'Facebook',
    color: '#4267B2',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 10h-2v2h2v6h3v-6h1.82l.18-2h-2v-.833c0-.478.096-.667.558-.667h1.442v-2.5h-2.404c-1.798 0-2.596.792-2.596 2.308v1.692z" />
      </svg>
    ),
    url: 'https://www.facebook.com/akacha.achraf.1',
  },
]

//Styled Components

const List = styled.ul`
  position: absolute;
  margin-left: 50%;
  transform: translateX(-50%);
  list-style: none;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  gap: 15px;
  z-index: 1000;
  z-index: 0;
`

const ListItem = styled.li`
  svg {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    will-change: filter;
    fill: ${({ isDark }) => (isDark ? '#fff' : '#000')};
    transition: all 0.2s ease-in-out;
  }

  @media (max-width: 768px) {
    svg {
      width: 45px;
      height: 45px;
    }
  }

  svg:hover {
    cursor: pointer;
    fill: ${({ theme }) => theme.color ?? theme.gradient};
    filter: drop-shadow(0 0 1em ${({ theme }) => theme.color ?? '#f09'});
  }
`
