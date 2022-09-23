
const WikipediaDataModal = ({wikipediaApiData, visible, onClose}) => {

    // if(!visible) return null;

    return(
        <div className={`z-20 fixed inset-0 px-4 py-12 lg:px-0 lg:py-0 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center ${visible ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-50 pointer-events-none'} transition-all duration-500`}>
            {
                wikipediaApiData.map((wikipediaContent, i) => {
                    if (wikipediaContent.title !== 'Undefined') {
                        return( 
                            <div key={i} className="w-full h-full lg:w-2xl lg:max-w-6xl lg:h-auto px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 overflow-auto">
                                <div className="flex items-center justify-end">
                                    <button onClick={onClose} className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-400">X</button>
                                </div>
    
                                <div className="mt-2">
                                    <h3 className="text-2xl font-bold text-sub-title">{wikipediaContent.title}</h3>
    
                                    <p className="mt-2 text-gray-600 dark:text-gray-300 leading-relaxed overflow-auto">
                                        {wikipediaContent.extract}
                                    </p>
                                </div>
    
                                <div className="flex items-center justify-end mt-4">
                                    <div className="flex items-center">
                                        <img src='https://www.wikipedia.org/static/favicon/wikipedia.ico' alt="Wikipedia Favicon" className="p-1 h-10 mx-2" /> 
    
                                        <a href={`https://en.wikipedia.org/wiki/${wikipediaContent.title}`} className="font-bold text-gray-700 cursor-pointer dark:text-gray-200" target='_blank' rel="noreferrer">Wikipedia ⟶</a>
                                    </div>
                                </div>
                            </div>
                        )
         
                    }else {
                        return(
                            <div key={i} className="max-w-xl text-center px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
                                <div className="flex items-center justify-end">
                                    <button onClick={onClose} className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">X</button>
                                </div>
    
                                <div className="mt-2">
                                    <h3 className="text-2xl font-bold text-sub-title">
                                        I'm Sorry, Wikipedia Can't Found It, You Can Looking for it From Google...
                                    </h3>
                                </div>
    
                                <div className="flex items-center justify-center mt-4">
                                    <div className="flex items-center">
                                        <img src="https://wikipedia.org/static/favicon/wikipedia.ico" alt="Wikipedia Favicon" className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" /> 
    
                                        <a href={`https://en.wikipedia.org/wiki/`} className="font-bold text-gray-700 cursor-pointer dark:text-gray-200" target='_blank' rel="noreferrer">Wikipedia ⟶</a>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })
            }
        </div>
    )

}

export default WikipediaDataModal