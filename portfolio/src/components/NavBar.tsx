
import NavbarBox from "./NavbarBox"

export const NavBar: any = () => {
  return (
    <div className="border-[#C6CBA9] border-b-[1px] pb-1 rounded-full flex justify-center">
  <div className="bg-[#282828] pt-1 lg:h-[7vh] lg:w-[60vh] rounded-full flex text-white justify-between items-center pl-[2vh] pr-[2vh]">
    <NavbarBox title="Home" />
    <NavbarBox title="Skills" />
    <NavbarBox title="About" />
  </div>
</div>
  )
}

