import { TbArrowBack } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import Logo from "../ui/Logo";

function NotFound ()
{
     const navigate = useNavigate();

     const handleNavigate = () => {
       navigate("/home");
     };
    return (
        <>
            <Logo/>
    <div className="bg-black h-screen  text-[#c0a879] text-2xl font-bold p-8 text-center">
      <h1 className="mt-[15rem]">The path you entered is not found.</h1>
      <div className="mt-8 flex items-center justify-center">
        <button
          className="text-xl text-black p-[1.5rem] font-medium ml-2"
          onClick={handleNavigate}
        >
          Back to Home Page
        </button>
        <TbArrowBack className="ml-2" size={70} />
      </div>
    </div>
      </>
  );
}

export default NotFound;
