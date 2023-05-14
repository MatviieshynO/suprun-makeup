//Components

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-slate-800 via-purple-100 to-slate-800 text-purple-1000 border-t-2 border-slate-600">
      <ul className="flex justify-center gap-4 p-2 text-[1.2vw]">
        <li className=" hover:text-purple-800">
          <a href="/">Privacy policy</a>
        </li>
        <li className=" hover:text-purple-800">
          <a href="/">Terms of use</a>
        </li>
      </ul>
      <div className="text-center p-2 text-[0.8vw]">
        Copyright © 2023 <a href="/">Oleh Matviieshyn</a>. All rights reserved.
      </div>
    </div>
  )
}

export default Footer
