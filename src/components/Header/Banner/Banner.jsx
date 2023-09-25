const Banner = () => {
  return (
    <div>
      <div
        className="hero h-[70vh] absolute w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(https://i.ibb.co/LYz4dn0/Rectangle-4281.png)",
        }}
      >
        <div className="absolute w-full h-full bg-[#FEFEFE] opacity-90"></div>
        <div className="hero-content text-center text-neutral-content relative z-10">
          <div className="w-full ">
            <h1 className="text-5xl font-semibold text-[#0B0B0B]">
              Grow By Helping People In Need
            </h1>
            <div className="flex justify-center my-6">
              <input
                type="text"
                placeholder="Search here.."
                className="input input-bordered border-[#DEDEDE] hover:outline-none focus:outline-none rounded-r-none input-md w-full max-w-xs"
              ></input>
              <button className="bg-[#FF444A] rounded-r-lg px-7 text-white">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
