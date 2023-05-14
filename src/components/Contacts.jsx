const Contacts = () => {
  return (
    <div className=" flex sm:justify-around p-10 contacts">
      <div className="p-4 my-[6%]">
        <h2 className="text-[2vw] uppercase mb-10 text-center text-pink-700">
          Send me message
        </h2>
        <p className=" text-[1.2vw]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque id
        </p>
      </div>
      <div className="flex justify-center">
        <form
          action=""
          className="shadow-lg border-t-2 border-pink-700 shadow-black py-4 my-4 min-w-[50vw] rounded-lg form-contacts"
        >
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
              placeholder="Place to message"
              rows="5"
              className="border min-w-[90%] p-2 my-2 rounded-lg"
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button className="flex min-w-[90%] border border-black p-2 my-2 rounded-lg justify-center uppercase hover:text-pink-700 hover:border-pink-700 ">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contacts
