import PackageCard from "../component/packages/PackageCard";
import SideContent from "../component/packages/SideContent";
import s from "../component/packages/PackageCard.module.css"
import Logo from "../ui/Logo";
function Packages() {
  return (
    <div
      className={`${s.maincontainer}  flex flex-row items-center  relative justify-between`}
    >
      <Logo />
      <PackageCard />
      <SideContent />
    </div>
  );
}

export default Packages
