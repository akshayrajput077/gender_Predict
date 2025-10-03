const loading = () => {
  return (
    <div className='min-h-screen bg-gray-200 flex flex-col items-center justify-center text-white p-4'>
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full relative overflow-hidden">
        <div className='absolute bg-gray-200 top-0 right-0 w-32 h-32
            rounded-full -translate-y-16 translate-x-16 opacity-50'>
        </div>
        <button className='cursor-pointer absolute top-0 left-0 m-4 px-8 py-4 border rounded-full text-sm font-semibold opacity-50 bg-gray-200'>
        </button>
        <div className="relative z-10">
          <div className="text-center mb-4">
            <div className='w-20 h-20 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-3 shadow-lg'>
            </div>
            <div className="font-bold bg-gray-200 text-gray-800 mb-2 rounded-full px-8 py-4"></div>

            <div className='inline-block bg-gray-200 item-center px-8 py-4 rounded-full text-sm font-semibold'>
              <div className="flex items-center">
                <div className='w-2 h-2 bg-gray-200 rounded-full mr-2'
                ></div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium bg-gray-200 flex items-center">
                </span>
                <span className="text-sm font-bold  bg-gray-200">
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className='h-3 rounded-full transition-all duration-500'
                >
                </div>
              </div>
            </div>

            <div className="bg-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium bg-gray-200 flex items-center">
                </span>
                <span className="text-sm font-bold bg-gray-200">
                </span>
              </div>
            </div>

            <div className='rounded-lg bg-gray-200 p-6 border-2'>
              <div className="flex items-center">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
export default loading