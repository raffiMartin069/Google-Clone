import main_img from "../../assets/img/landing_img.png";

const redirect = () => {
  return "https://www.google.com/search?q=breaking+olympics&oi=ddle&ct=348046281&hl=en&source=doodle-ntp&ved=0ahUKEwiIgsvz3eeHAxXehlYBHR_BIBUQPQgB#cobssid=s";
};

function MainContent() {
  return (
    <div className="flex justify-center">
      <a href={redirect()}>
        <img src={main_img} />  
      </a>
      <div className="flex">
        <button className="rounded-3xl mt-40 p-3 bg-gray-100 hover:bg-gray-300">
          <i className="bi bi-share flex justify-center"></i>
        </button>
      </div>
    </div>
  );
}

export default MainContent;
