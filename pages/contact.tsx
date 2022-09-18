import { NextPage } from 'next'
import { useState, useId, FC } from 'react'

const Contact: NextPage = (): JSX.Element => {
  return (
    <main className="h-screen min-h-screen w-full px-4 pt-24">
      <ContactForm />
    </main>
  )
}

export default Contact

const ContactForm: FC = (): JSX.Element => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const id = useId()
  return (
    <form className="">
      <label htmlFor={id + 'name'}>
        <input
          id={id + 'name'}
          type="text"
          placeholder="Your Name"
          name="name"
          className="input input-bordered input-info mb-2 w-full max-w-xs rounded-md px-4 py-2"
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label htmlFor={id + 'email'}>
        <input
          id={id + 'email'}
          type="text"
          placeholder="Your Email"
          name="email"
          className="input input-bordered input-info mb-2 w-full max-w-xs rounded-md px-4 py-2"
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label htmlFor={id + 'message'}>
        <input
          id={id + 'message'}
          type="text"
          placeholder="Your Message"
          name="text"
          className="input input-lg input-bordered  input-info mb-2 w-full max-w-xs rounded-md px-4 py-2"
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>
      <br />

      <button
        type="submit"
        className="btn btn-wide rounded-lg bg-darksecond py-2 px-8 text-lg text-white dark:bg-white dark:text-darkfirst "
      >
        Send
      </button>
    </form>
  )
}
