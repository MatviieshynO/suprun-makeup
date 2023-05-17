//Components

const Footer = () => {
  return (
    <div className="p-8 sm:pt-2 lg:p-0 bg-[url('https://img.freepik.com/premium-photo/concrete-wall-background_464463-1305.jpg?w=2000')] bg-norepeat bg-center bg-cover text-purple-1000 border-t-2 border-slate-600">
      <ul className="flex justify-center gap-4 sm:p-2 sm:text-[1.2vw]">
        <li className=" hover:text-pink-700 xl:text-[1.4vw] text-[5vw] sm:text-[2.5vw] lg:text-[2vw] uppercase">
          <a href="/">Privacy policy</a>
        </li>
        <li className=" hover:text-pink-700 xl:text-[1.4vw] text-[5vw] sm:text-[2.5vw] lg:text-[2vw] uppercase">
          <a href="/">Terms of use</a>
        </li>
      </ul>
      <div className="text-center sm:p-2 sm:text-[1.2vw] text-[3vw] pt-2 xl:text-[0.8vw]">
        Copyright © 2023{' '}
        <a href="https://matviieshyn.vercel.app/">Oleh Matviieshyn</a>. All
        rights reserved.
      </div>
    </div>
  )
}

export default Footer
