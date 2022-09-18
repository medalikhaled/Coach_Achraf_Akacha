import { useId, Fragment } from 'react'

const Modal = ({ ref, children }) => {
  const id = useId()
  return (
    <Fragment>
      <label htmlFor={id} className="modal-button btn">
        open modal
      </label>
      <input type="checkbox" id={id} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor={id}
            className="btn btn-circle btn-sm absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You&apos;ve been selected for a chance to get one year of
            subscription to use Wikipedia for free!
          </p>
        </div>
      </div>
    </Fragment>
  )
}

export default Modal
