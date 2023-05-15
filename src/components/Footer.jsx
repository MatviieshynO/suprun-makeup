//Components

const Footer = () => {
  return (
    <div className="bg-[url('https://img.freepik.com/premium-photo/concrete-wall-background_464463-1305.jpg?w=2000')] bg-norepeat bg-center bg-cover text-purple-1000 border-t-2 border-slate-600">
      <ul className="flex justify-center gap-4 p-2 text-[1.2vw]">
        <li className=" hover:text-pink-700">
          <a href="/">Privacy policy</a>
        </li>
        <li className=" hover:text-pink-700">
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
