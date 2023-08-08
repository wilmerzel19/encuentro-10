

export const Card = () => {
  return (
    <div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-cover bg-center h-56 p-4" style={{backgroundImage: "url('img/paris.png')"}}></div>
            <div className="p-4">
                <p className="font-semibold text-gray-600 text-xs uppercase">Paris</p>
                <p className="font-bold text-gray-900 text-xl">Paris, France’s capital, is a major European city and a global center for art, fashion, gastronomy and culture.</p>
                 
                <div className="mt-3 flex items-center">
                    <span className="text-sm font-semibold">Paris, France</span>
                    <span className="px-2 py-1 bg-gray-800 text-xs text-gray-100 font-semibold rounded ml-auto">$500</span>



                </div>
                
                </div>
            </div>
    </div>
  )
}