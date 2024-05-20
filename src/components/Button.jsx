
const Button = ({label, iconUrl}) => {
  return (
    <button className=" flex justify-center items-center gap-2 font-montserrat text-lg leading-none text-white border-coral-red  bg-coral-red rounded-full px-7 py-4">
        {label} 
        <img src={iconUrl} alt="rightArow icon" className="ml-2 rounded-full w-5 h-5" />
    </button>
  )
}

export default Button