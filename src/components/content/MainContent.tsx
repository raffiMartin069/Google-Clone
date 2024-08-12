import main_img from "../../assets/img/landing_img.png";
import RecentVisit from "./RecentVisit";

const redirect = () => {
  return "https://www.google.com/search?q=breaking+olympics&oi=ddle&ct=348046281&hl=en&source=doodle-ntp&ved=0ahUKEwiIgsvz3eeHAxXehlYBHR_BIBUQPQgB#cobssid=s";
};


function MainContent() {
  return (
    <div className="container mx-auto justify-center">
      <div className="flex justify-center mt-24">
        <a href={redirect()}>
          <img src={main_img} />
        </a>
        <div className="flex">
          <button className="rounded-3xl mt-40 p-3 bg-gray-100 hover:bg-gray-300 hidden md:block">
            <i className="bi bi-share flex justify-center"></i>
          </button>
        </div>
      </div>
      <span className="flex relative mt-10 mx-5 lg:mx-52 xl:mx-80 2xl:mx-96">
        <input type='search' className="w-full focus:outline-none h-10 rounded-full border border-gray-400 p-5 px-11" placeholder="Search Google or type a url"/>
        <i className="bi bi-search absolute flex left-3 items-center text-gray-700 inset-y-0"></i>
      </span>
      <div className="flex justify-center items-center">
        <RecentVisit />
      </div>
    </div>
  );
}

export default MainContent;
