import { MdLocationOn } from "react-icons/md"


export const Imagen = () => {
  return (
    <div className="relative">
    <img src="img/paris.png" alt="paris" className="w-full max-h-80 row-span-2" />
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-2">
      <MdLocationOn size={24} />
      Paris
    </button>
  </div>
  )
}