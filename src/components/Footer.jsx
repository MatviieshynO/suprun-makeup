//Components

const Footer = () => {
  return (
    <div className="bg-[#4e4e4e] text-white">
      <ul className="flex justify-center gap-4  uppercase p-4 m-2 text-[1.2vw]">
        <li className="hover:border-b-[#a09d9d] hover:text-[#a09d9d]">
          <a href="/">Privacy Policy</a>
        </li>
        <li className="hover:border-b-[#a09d9d] hover:text-[#a09d9d]">
          <a href="/">Terms of use</a>
        </li>
      </ul>
      <div className="text-center p-4 text-[0.8vw]">
        Copyright © 2023 <a href="/">Oleh Matviieshyn</a>. All rights reserved.
      </div>
    </div>
  )
}

export default Footer
