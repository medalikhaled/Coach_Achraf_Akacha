import styles from '../../styles/Home.module.css'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import Switcher from './themeSwitcher.jsx'
import DropDownMenu from './dropDown'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/images/logos/transparentBlack.png'
import logo2 from '../../public/images/logos/transparentWhite.png'

// box-shadow: rgb(2 1 1 / 10%) 0px 5px 20px -5px;

export default function Nav(): JSX.Element {
  const { systemTheme, theme, setTheme } = useTheme()
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    setTheme(toggle ? 'light' : 'dark')
  }, [toggle, setTheme])

  const renderThemeChanger = () => {
    //detect the current theme
    const currentTheme = theme === 'system' ? systemTheme : theme

    if (currentTheme === 'dark') {
      return <Switcher setToggle={setToggle} toggle={toggle} isDark={true} />
    } else {
      return <Switcher setToggle={setToggle} toggle={toggle} isDark={false} />
    }
  }

  return (
    <nav
      className={`fixed left-0 top-0 z-[999] flex h-16 w-full items-center justify-between px-[2rem] backdrop-blur-[10px] backdrop-saturate-[180%] ${
        !toggle ? 'bg-white/20' : 'bg-black/50'
      } `}
    >
      <div
        aria-label="Logo Icon"
        className={`hover:cursor-pointers flex items-center justify-center gap-1 md:ml-[100px]`}
      >
        <Link href="/">
          <Image
            src={theme === 'dark' ? logo2 : logo}
            aria-label="logo"
            style={{ borderRadius: '50%' }}
            width={'35px'}
            height={'35px'}
            onLoadStart={() => console.log('loading')}
            onLoadingComplete={() => console.log('loaded')}
          />
        </Link>

        <h1 className="ml-2 flex flex-col items-center justify-center text-center font-teko text-sm font-light uppercase leading-4 text-black dark:text-white">
          <span className="mr-1 text-center">Team</span>
          <span className="text-center">Akacha</span>
        </h1>
      </div>

      <div className="hidden items-center justify-center space-x-6 text-2xl uppercase md:flex">
        <Link href={'/#services'}>
          <span className="font-teko font-light text-white transition-all duration-200 ease-in-out hover:cursor-pointer hover:underline dark:text-white ">
            Services
          </span>
        </Link>
        <Link href={'/'}>
          <span className=" font-teko font-light  text-white transition-all duration-200 ease-in-out hover:cursor-pointer hover:underline dark:text-white ">
            Home
          </span>
        </Link>
        <Link href={'/contact'}>
          <span className=" font-teko font-light text-white transition-all duration-200 ease-in-out hover:cursor-pointer hover:underline dark:text-white ">
            Contact
          </span>
        </Link>
      </div>

      <div className="flex flex-row items-center justify-center">
        {renderThemeChanger()}
        <DropDownMenu />
      </div>
    </nav>
  )
}
