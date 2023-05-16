//Components

const Footer = () => {
  return (
    <div className="p-8 bg-[url('https://img.freepik.com/premium-photo/concrete-wall-background_464463-1305.jpg?w=2000')] bg-norepeat bg-center bg-cover text-purple-1000 border-t-2 border-slate-600">
      <ul className="flex justify-center gap-4 sm:p-2 sm:text-[1.2vw]">
        <li className=" hover:text-pink-700 text-[5vw] uppercase">
          <a href="/">Privacy policy</a>
        </li>
        <li className=" hover:text-pink-700 text-[5vw] uppercase">
          <a href="/">Terms of use</a>
        </li>
      </ul>
      <div className="text-center sm:p-2 sm:text-[0.8vw] text-[3vw] pt-2">
        Copyright © 2023 <a href="/">Oleh Matviieshyn</a>. All rights reserved.
      </div>
    </div>
  )
}

export default Footer
