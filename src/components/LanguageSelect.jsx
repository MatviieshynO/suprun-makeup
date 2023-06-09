const LanguageSelect = () => {
  return (
    <div className="p-[2px]">
      <select className="text-[15px] shadow-sm shadow-black p-2 rounded bg-inherit text-black border hover:bg-pink-600 cursor-pointer">
        <option value="1">UA</option>
        <option value="2">RU</option>
        <option value="3">PL</option>
        <option value="4">EN</option>
      </select>
    </div>
  )
}

export default LanguageSelect
