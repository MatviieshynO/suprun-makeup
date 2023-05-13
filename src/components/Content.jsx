const Content = () => {
  return (
    <div>
      <div className="flex-column sm:flex justify-around">
        <div className="flex-column p-2">
          <div className="sm:pt-20">
            <h4 className="text-[2.2vw] uppercase py-4 text-center pt-20">
              Lorem ipsum dolor sit amet.
            </h4>
            <p className="text-[1.1vw] max-w-[40vw] text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              labore quisquam suscipit, quibusdam ea id quo temporibus doloribus
              expedita earum sequi qui necessitatibus laudantium pariatur.
            </p>
          </div>
        </div>
        <div className="p-2">
          <img
            className="rounded-lg"
            src="https://images.unsplash.com/photo-1594647210801-5124307f3d51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            alt=""
          />
        </div>
      </div>
      <div className="flex-column sm:flex justify-around">
        <div className="p-2">
          <img
            className="rounded-lg"
            src="https://images.unsplash.com/photo-1611826585949-b0ccabd2c1a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt=""
          />
        </div>
        <div className="flex-column p-2">
          <div className="sm:pt-20">
            <h4 className="text-[2.2vw] uppercase py-4 text-center pt-20">
              Lorem ipsum dolor sit amet.
            </h4>
            <p className="text-[1.1vw] max-w-[40vw] text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              labore quisquam suscipit, quibusdam ea id quo temporibus doloribus
              expedita earum sequi qui necessitatibus laudantium pariatur.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
