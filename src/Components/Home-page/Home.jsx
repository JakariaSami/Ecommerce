import Heroimage from "../../assets/Home-page-hero-image.jpg"

function Home() {
  return (
    <>
      <div className="hero-section pb-14">
        <img
          className="rounded-[--box-radius] w-[20.75rem] h-[7.8125] mb-4 m-auto"
          src={Heroimage}
        />
        <h2 className="text-[2rem] font-semibold text-center max-w-[15rem] m-auto pt-2 leading-8">
          Shop The Latest Trends
        </h2>
        <p className="text-center font-medium text-[0.8125rem] max-w-[15rem] m-auto leading-7">
          Browse our Exclusive Collections.
        </p>
        <button className="bg-[--primary-green] text-[0.6875rem] w-[5.3125rem] h-6 text-white rounded-full block mt-3 m-auto">
          Shop Now
        </button>
      </div>

      <div className="bg-[#A1AFB026] py-10">
        <h2 className="text-2xl font-semibold text-center">
          Sports Collection
        </h2>
        <p className="text-xs text-center max-w-[15rem] m-auto">
          Gear up for victory with our extensive sports collection
        </p>
        <button className="bg-[--primary-brown] text-[0.6875rem] w-[5.3125rem] h-6 text-white rounded-full block mt-3 m-auto">
          Explore
        </button>
      </div>
    </>
  )
}

export default Home
