import { useState } from 'react'
import axios from 'axios'

const Contacts = () => {
  const [yourName, setYourName] = useState('')
  const [yourEmail, setYourEmail] = useState('')
  const [yourTelephoneNumber, setYourTelephoneNumber] = useState(null)
  const [bodyMessage, setBodyMessage] = useState('')

  async function sendToMailMessage() {
    await axios
      .post('https://matviieshyn-server.vercel.app/messageSuprun', {
        yourName,
        yourEmail,
        yourTelephoneNumber,
        bodyMessage,
      })
      .then(function (response) {
        if (!yourName) {
          return alert('Empty yourName ')
        } else if (!yourEmail) {
          return alert('Empty yourEmail')
        } else if (!yourTelephoneNumber) {
          return alert('Empty yourTelephoneNumber')
        } else if (!bodyMessage) {
          return alert('Empty bodyMessage')
        }
        return alert('Complete sending message')
      })
      .catch(function (error) {
        alert('error sending message')
      })
    setYourName('')
    setYourEmail('')
    setYourTelephoneNumber('')
    setBodyMessage('')
  }
  return (
    <div className=" flex-column sm:justify-around sm:p-4 contacts mb-4">
      <div className="">
        <h2 className="sm:text-[3vw] xl:text-[2vw] text-[8vw] uppercase text-center text-pink-700 py-4">
          Send me message
        </h2>
        <p className=" sm:text-[2vw] xl:text-[1.3vw] text-center py-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque id
        </p>
      </div>
      <div className="flex justify-center">
        <div className="pt-2 mt-2 shadow-lg border-t-2 border-pink-700 shadow-black sm:py-4 sm:my-4 md:min-w-[75vw] xl:min-w-[55vw] sm:min-w-[95vw] rounded-lg form-contacts min-w-[95%]">
          <div className="flex justify-center p-2">
            <input
              type="text"
              placeholder="Enter your name"
              className="flex sm:min-w-[95%] border sm:p-2 rounded-lg bg-zinc-200 w-full p-2"
              onChange={(e) => setYourName(e.target.value)}
              value={yourName}
            />
          </div>

          <div className="flex justify-center p-2">
            <input
              type="email"
              placeholder="Enter e-mail"
              className="flex sm:min-w-[95%] border sm:p-2 rounded-lg bg-zinc-200 w-full p-2"
              onChange={(e) => setYourEmail(e.target.value)}
              value={yourEmail}
            />
          </div>

          <div className="flex justify-center p-2">
            <input
              type="text"
              placeholder="Your phone number"
              className="flex sm:min-w-[95%] border sm:p-2 rounded-lg bg-zinc-200 w-full p-2"
              onChange={(e) => setYourTelephoneNumber(e.target.value)}
              value={yourTelephoneNumber}
            />
          </div>
          <div className="flex justify-center p-2">
            <textarea
              placeholder="Place to message"
              rows="5"
              className="border sm:min-w-[95%] sm:p-2 sm:my-2 rounded-lg bg-zinc-200 w-full p-2"
              onChange={(e) => setBodyMessage(e.target.value)}
              value={bodyMessage}
            ></textarea>
          </div>

          <div className="flex justify-center py-4">
            <button
              onClick={() => sendToMailMessage()}
              className="p-2 w-[80%] flex sm:min-w-[90%] border border-black sm:p-2 sm:my-2 rounded-lg justify-center uppercase hover:text-pink-700 hover:border-pink-700 "
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts
