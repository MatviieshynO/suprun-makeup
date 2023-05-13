const Contacts = () => {
  return (
    <div>
      
      <div className="flex justify-center">
        <form action="" className="border py-10 my-10 min-w-[50vw] rounded-lg">
          <h2 className="text-center text-[2vw] uppercase mb-4">
            Send me message
          </h2>

          <div className="flex justify-center">
            <input
              type="text"
              placeholder="Enter your name"
              className="flex min-w-[90%] border p-2 my-2 rounded-lg"
            />
          </div>

          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Enter e-mail"
              className="flex min-w-[90%] border p-2 my-2 rounded-lg"
            />
          </div>

          <div className="flex justify-center">
            <input
              type="text"
              placeholder="Your phone number"
              className="flex min-w-[90%] border p-2 my-2 rounded-lg"
            />
          </div>
          <div className="flex justify-center">
            <textarea
              placeholder="place to message"
              rows="10"
              className="border min-w-[90%] p-2 my-2 rounded-lg"
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button className="flex min-w-[90%] border p-2 my-2 rounded-lg justify-center uppercase">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contacts
