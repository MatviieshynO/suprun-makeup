const Contacts = () => {
  return (
    <div className=" flex-column sm:justify-around sm:p-10 contacts">
      <div className="sm:p-4 sm:my-[6%]">
        <h2 className="sm:text-[2vw] text-[8vw] uppercase sm:mb-10 text-center text-pink-700 py-4">
          Send me message
        </h2>
        <p className=" sm:text-[1.2vw] text-center py-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque id
        </p>
      </div>
      <div className="flex justify-center">
        <form
          action=""
          className="pt-2 mt-2 shadow-lg border-t-2 border-pink-700 shadow-black sm:py-4 sm:my-4 sm:min-w-[50vw] rounded-lg form-contacts min-w-[95%]"
        >
          <div className="flex justify-center p-2">
            <input
              type="text"
              placeholder="Enter your name"
              className="flex sm:min-w-[90%] border sm:p-2 sm:my-2 rounded-lg bg-zinc-200 w-full p-2"
            />
          </div>

          <div className="flex justify-center p-2">
            <input
              type="email"
              placeholder="Enter e-mail"
              className="flex sm:min-w-[90%] border sm:p-2 sm:my-2 rounded-lg bg-zinc-200 w-full p-2"
            />
          </div>

          <div className="flex justify-center p-2">
            <input
              type="text"
              placeholder="Your phone number"
              className="flex sm:min-w-[90%] border sm:p-2 sm:my-2 rounded-lg bg-zinc-200 w-full p-2"
            />
          </div>
          <div className="flex justify-center p-2">
            <textarea
              placeholder="Place to message"
              rows="5"
              className="border sm:min-w-[90%] sm:p-2 sm:my-2 rounded-lg bg-zinc-200 w-full p-2"
            ></textarea>
          </div>

          <div className="flex justify-center py-4">
            <button className="p-2 w-[95%] flex sm:min-w-[90%] border border-black sm:p-2 sm:my-2 rounded-lg justify-center uppercase hover:text-pink-700 hover:border-pink-700 ">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contacts
