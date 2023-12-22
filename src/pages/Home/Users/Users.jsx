
const Users = () => {
    return (
        <div className="mt-10">
            <h2 className="text-center font-bold text-4xl text-green-800">Our Users</h2>
            <hr className="w-1/3 mx-auto pt-2 border-green-600" />
                    {/* card 2 */}
        <>
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 px-3 my-10">
            {/* card 1 */}
            <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
              <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-green-500 transition-all duration-300 group-hover:scale-[10]" />
              <div className="relative">
                <span className="grid h-20 w-20 place-items-center rounded-full bg-green-600 transition-all duration-300 group-hover:bg-green-900">
                  <img
                    className="rounded-full"
                    src="https://iili.io/JAfoLwg.jpg"
                    alt=""
                  />
                </span>
                <div className=" pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                  <p>
                    <span className="text-xl font-semibold">Daniel Chen</span>
                  </p>
                  <p>
                    <span className="font-extralight">
                    DevOps Engineer
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold">Benefits: </span>Access to tools and a collaborative platform for continuous integration and deployment.
                  </p>
                  <p>
                    <span className="font-semibold">Key Insights: </span>Explore
                    the latest discussions on AI development and its impact
                    across industries.
                  </p>
                </div>
                <div className="pt-5 text-base font-semibold leading-7">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-red-500"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-red-500"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-red-500"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-red-500"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-red-500"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* card 2 */}
            <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
              <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-green-500 transition-all duration-300 group-hover:scale-[10]" />
              <div className="relative">
                <span className="grid h-20 w-20 place-items-center rounded-full bg-green-600 transition-all duration-300 group-hover:bg-green-900">
                  <img
                    className="rounded-full"
                    src="https://iili.io/JAfoLwg.jpg"
                    alt=""
                  />
                </span>
                <div className=" pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                  <p>
                    <span className="text-xl font-semibold">Michael Johnson</span>
                  </p>
                  <p>
                    <span className="font-extralight">
                    UI/UX Designer
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold">Benefits: </span>Access to design tools, creative inspiration, and a vibrant community for feedback and collaboration.
                  </p>
                  <p>
                    <span className="font-semibold">Key Insights: </span>Explore
                    the latest discussions on AI development and its impact
                    across industries.
                  </p>
                </div>
                <div className="pt-5 text-base font-semibold leading-7">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-red-500"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-red-500"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-red-500"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-red-500"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-red-500"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* card 3 */}
            <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
              <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-green-500 transition-all duration-300 group-hover:scale-[10]" />
              <div className="relative">
                <span className="grid h-20 w-20 place-items-center rounded-full bg-green-600 transition-all duration-300 group-hover:bg-green-900">
                  <img
                    className="rounded-full"
                    src="https://iili.io/JAfoLwg.jpg"
                    alt=""
                  />
                </span>
                <div className=" pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                  <p>
                    <span className="text-xl font-semibold">Sara Rodriguez </span>
                  </p>
                  <p>
                    <span className="font-extralight">
                    Data Scientist
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold">Benefits: </span>Access to data analysis tools, statistical insights, and a collaborative research environment.
                  </p>
                  <p>
                    <span className="font-semibold">Key Insights: </span>Explore
                    the latest discussions on AI development and its impact
                    across industries.
                  </p>
                </div>
                <div className="pt-5 text-base font-semibold leading-7">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-red-500"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-red-500"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-red-500"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-red-500"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-red-500"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* card 4 */}
            <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
              <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-green-500 transition-all duration-300 group-hover:scale-[10]" />
              <div className="relative">
                <span className="grid h-20 w-20 place-items-center rounded-full bg-green-600 transition-all duration-300 group-hover:bg-green-900">
                  <img
                    className="rounded-full"
                    src="https://iili.io/JAfoLwg.jpg"
                    alt=""
                  />
                </span>
                <div className=" pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                  <p>
                    <span className="text-xl font-semibold">Jhon Dae </span>
                  </p>
                  <p>
                    <span className="font-extralight">
                      Full-stack Developer
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold">Benefits: </span>Access to
                    coding resources, programming tips, and a supportive
                    community.
                  </p>
                  <p>
                    <span className="font-semibold">Key Insights: </span>Explore
                    the latest discussions on AI development and its impact
                    across industries.
                  </p>
                </div>
                <div className="pt-5 text-base font-semibold leading-7">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-red-500"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-red-500"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-red-500"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-red-500"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-red-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
        </div>
    );
};

export default Users;