
import Link from "next/link";
import { User, Star, TrendingUp } from 'lucide-react';
export default async function About(props) {
  const searchname = await props.searchParams;
  const name = searchname.name;

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 2000);
  })

  const res = await fetch(`https://api.genderize.io?name=${name}`);
  const data = await res.json();

  const isMale = data.gender === 'male'
  const confidence = data.probability * 100

  return (
    <div className={`min-h-screen ${isMale ? 'bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100' : 'bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-100'} flex flex-col items-center justify-center text-white p-4`}>
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full relative overflow-hidden">
        <div className={`absolute top-0 right-0 w-32 h-32
           ${isMale ? 'bg-blue-100' : 'bg-pink-100'} rounded-full -translate-y-16 translate-x-16 opacity-50`}>
        </div>
        <Link href='/'>
          <button className={`cursor-pointer absolute top-0 left-0 m-4 px-4 py-2 border rounded-full text-sm font-semibold
           ${isMale ? 'bg-blue-100 text-blue-800 border border-blue-200' : 'bg-pink-100 text-pink-800 border border-pink-200'}  opacity-50`}>
            Back
          </button>
        </Link>
        <div className="relative z-10">
          <div className="text-center mb-4">
            <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-3
               ${isMale ? 'bg-gradient-to-br from-blue-400 to-blue-400' : 'bg-gradient-to-br from-pink-400 to-pink-400'} shadow-lg`}>
              <User className='w-10 h-10 text-white' strokeWidth={1.5} />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-2 capitalize">{data.name}</h3>

            <div className={`inline-block item-center px-4 py-2 rounded-full text-sm font-semibold
              ${isMale ? 'bg-blue-100 text-blue-800 border border-blue-200'
                : 'bg-pink-100 text-pink-800 border border-pink-200'}
            `}>
              <div className="flex items-center">
                <div className={`w-2 h-2 rounded-full mr-2
                 ${isMale ? 'bg-blue-800' : 'bg-pink-800'}`}
                ></div>
                {data.gender.charAt(0).toUpperCase() +
                  data.gender.slice(1)}
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-gray-600 flex items-center">
                  <Star className='w-4 h-4 mr-1' />
                  Confidence
                </span>
                <span className="text-sm font-bold text-gray-800">
                  {confidence}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className={`h-3 rounded-full transition-all duration-500
                 ${isMale ? 'bg-gradient-to-r from-blue-400 to-blue-400'
                    : 'bg-gradient-to-r from-pink-400 to-pink-400'
                  }`}
                  style={{ width: `${confidence}%` }}
                >
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-600 flex items-center">
                  <TrendingUp className='w-4 h-4 mr-1' />
                  Data Sample Size
                </span>
                <span className="text-sm font-bold text-gray-600">
                  {data.count.toLocaleString()}
                </span>
              </div>
            </div>

            <div className={`rounded-lg p-4 border-2 ${confidence > 90
              ? 'bg-green-50 border-green-200 text-green-800'
              : confidence > 70 ? 'bg-yellow-50 border-yellow-200 text-yellow-800'
                : "bg-red-50 border-red-200 text-red-800"
              }`}>
              <div className="flex items-center">
                <User className='w-4 h-4 mr-2' />
                <span className="text-sm font-medium">
                  {confidence > 90
                    ? "High Accuracy"
                    : confidence > 70
                      ? "moderate Accuracy"
                      : "low Accuracy"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
