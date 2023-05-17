const Content = () => {
  return (
    <div className="sm:flex-column ">
      {/* 1 */}
      <div className="flex-column sm:flex md:gap-10 xl:max-h-[600px] xl:overflow-hidden xl:mt-14">
        <div className="flex-column p-2  w-full xl:w-[50%]">
          <div className="sm:pt-6 my-4">
            <h4 className="sm:text-[3vw] text-[6vw] xl:text-[2vw] uppercase sm:py-4 pt-6 text-center sm:pt-6 text-pink-700">
              Lorem ipsum dolor sit amet.
            </h4>
            <p className="text-[4vw] xl:text-[1.3vw] sm:text-[2.2vw] lg:text-[1.8vw] max-w-[90vw] sm:max-w-[40vw] text-start mx-auto pt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              labore quisquam suscipit, quibusdam ea id quo temporibus doloribus
              expedita earum sequi qui necessitatibus laudantium pariatur.
            </p>
          </div>
        </div>
        <div className="p-2 shadow-2xl shadow-black rounded-lg image-content w-full flex justify-center xl:w-[35%] xl:flex">
          <img
            className="rounded-lg lg:w-[98%] xl:w-[98%] xl:h-full"
            src="images/content-image.png"
            alt=""
          />
        </div>
      </div>
      {/* 2 */}
      {/* mobile vesion */}
      <div className="flex-column justify-around sm:flex md:gap-10 xl:max-h-[650px] xl:overflow-hidden xl:mt-14">
        <div className="sm:pt-20 sm:hidden ">
          <h4 className="text-[6vw]  sm:text-[2.2vw] uppercase sm:py-4 text-center sm:pt-20 text-pink-700 pt-6">
            Lorem ipsum dolor sit amet.
          </h4>
          <p className="text-[4vw] sm:text-[1.1vw] sm:max-w-[40vw] text-start max-w-[90vw] mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            labore quisquam suscipit, quibusdam ea id quo temporibus doloribus
            expedita earum sequi qui necessitatibus laudantium pariatur.
          </p>
        </div>
        {/* mobile version */}
        <div className="p-2 lg:shadow-black shadow-2xl shadow-black rounded-lg image-content-2 w-full flex justify-center xl:w-[35%] xl:flex">
          <img
            className="rounded-lg lg:w-[98%] xl:w-[98%] xl:h-full"
            src="images/content-image-2.png"
            alt=""
          />
        </div>
        {/* sm lg version */}
        <div className="flex-column p-2 w-full xl:w-[50%]">
          <div className="sm:pt-4">
            <h4 className="sm:text-[3vw] xl:text-[2vw] text-[6vw] uppercase sm:py-4 pt-6 text-center sm:pt-6 text-pink-700">
              Lorem ipsum dolor sit amet.
            </h4>
            <p className="text-[4vw] xl:text-[1.3vw] sm:text-[2.2vw] lg:text-[1.8vw] max-w-[90vw] sm:max-w-[40vw] text-start mx-auto pt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              labore quisquam suscipit, quibusdam ea id quo temporibus doloribus
              expedita earum sequi qui necessitatibus laudantium pariatur.
            </p>
          </div>
        </div>
        {/* sm version */}
      </div>
    </div>
  )
}

export default Content
