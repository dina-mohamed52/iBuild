
import Logoo from "../assets/images/loggoo.png";

function Logo() {
  return (
    <div className="  absolute top-[-1rem]  w-full z-10 flex justify-end  ">
      <img src={Logoo} alt="logo" className="w-[12rem] h-[12rem] mr-[1rem] " />
    </div>
  );
}

export default Logo;
