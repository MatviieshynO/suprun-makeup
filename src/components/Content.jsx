const Content = () => {
  return (
    <div className="content">
      <div className="flex-column sm:flex justify-around">
        <div className="flex-column p-2">
          <div className="sm:pt-20 text-content my-4">
            <h4 className="sm:text-[2.2vw] text-[6vw] uppercase sm:py-4 pt-6 text-center sm:pt-20 text-pink-700">
              Lorem ipsum dolor sit amet.
            </h4>
            <p className="text-[4vw] sm:text-[1.1vw] max-w-[90vw] sm:max-w-[40vw] text-start mx-auto pt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              labore quisquam suscipit, quibusdam ea id quo temporibus doloribus
              expedita earum sequi qui necessitatibus laudantium pariatur.
            </p>
          </div>
        </div>
        <div className="p-2 shadow-2xl shadow-black rounded-lg image-content">
          <img className="rounded-lg " src="images/content-image.png" alt="" />
        </div>
      </div>
      <div className="flex-column sm:hidden justify-around">
        <div className="sm:pt-20">
          <h4 className="text-[6vw] sm:text-[2.2vw] uppercase sm:py-4 text-center sm:pt-20 text-pink-700 pt-6">
            Lorem ipsum dolor sit amet.
          </h4>
          <p className="text-[4vw] sm:text-[1.1vw] sm:max-w-[40vw] text-start max-w-[90vw] mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            labore quisquam suscipit, quibusdam ea id quo temporibus doloribus
            expedita earum sequi qui necessitatibus laudantium pariatur.
          </p>
        </div>
        <div className="p-2 shadow-2xl shadow-black rounded-lg image-content-2">
          <img
            className="rounded-lg "
            src="images/content-image-2.png"
            alt=""
          />
        </div>
        <div className="hidden flex-column p-2">
          <div className="sm:pt-20">
            <h4 className="text-[6vw] sm:text-[2.2vw] uppercase sm:py-4 text-center sm:pt-20 text-pink-700 pt-6">
              Lorem ipsum dolor sit amet.
            </h4>
            <p className="text-[4vw] sm:text-[1.1vw] sm:max-w-[40vw] text-start max-w-[90vw] mx-auto">
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
