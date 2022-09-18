import { Switch } from '@headlessui/react'
import Sun from '../SVGs/sun'
import Moon from '../SVGs/moon'

export default function Switcher({ setToggle, toggle, isDark }) {
  return (
    // Instead of scaling it down change the values to a custom values later
    <div className="scale-[.7] py-16 md:mr-[70px]">
      <Switch
        checked={toggle}
        onChange={setToggle}
        className={`${toggle ? 'bg-darksecond/30' : 'bg-darksecond/90'}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${toggle ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full ${
              toggle ? 'bg-black' : 'bg-white'
            } text-center shadow-lg ring-0 transition duration-200 ease-in-out`}
        >
          <div className="flex h-full w-full items-center justify-center">
            {isDark ? <Sun /> : <Moon />}
          </div>
        </span>
      </Switch>
    </div>
  )
}
