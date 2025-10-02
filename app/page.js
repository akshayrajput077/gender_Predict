
export default async function Home() {
  return (
    <>
      <div className="min-h-screen flex items-center bg-gradient-to-br from-purple-50 via-blue-500 to-indigo-100 justify-center">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="bg-white rounded-2xl shadow-2xl sm:p-8 p-6 max-w-sm sm:w-full w-75 relative overflow-hidden">
            <h1 className="mb-3 sm:text-xl text-md text-center font-semibold">Gender Predict By Name</h1>
            <form action="/gender" method="GET" className="flex">
              <input
                type="text"
                name="name"
                placeholder="Type a name..."
                className="border p-2 rounded-full w-full"
                required
              />
              <button
                type="submit"
                className="ml-2 px-4 py-2 border rounded-full bg-indigo-500 text-white cursor-pointer"
              >
                Submit
              </button>
            </form>
          </div>

          <div className="p-5 text-center">
            <h1 className="font-bold sm:text-5xl text-xl whitespace-nowrap text-white">
              Gender Predict <span className="text-pink-500">By</span>
            </h1>
            <h1 className="font-bold sm:text-5xl text-xl mt-2 text-white">First Name</h1>
            <p className="mt-3 text-xs font-semibold text-white">
              This simple tool predicts the gender of a person based on their first name.
            </p>
          </div>

        </div>
      </div>

    </>
  );
}
