import NavbarBox from "./NavbarBox";

interface NavBarProps {
  homeRef: React.RefObject<HTMLDivElement | null >;
  aboutRef: React.RefObject<HTMLDivElement | null>;
  skillsRef: React.RefObject<HTMLDivElement | null>;
}

export const NavBar: React.FC<NavBarProps> = ({ homeRef, aboutRef, skillsRef }) => {
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="border-[#C6CBA9] border-b-[1px] pb-1 rounded-full flex justify-center">
      <div className="bg-[#282828] pt-1 lg:h-[7vh] lg:w-[80vh] rounded-full flex text-white justify-between items-center pl-[2vh] pr-[2vh]">
        <NavbarBox title="Home" onClick={() => scrollToSection(homeRef)} />
        <NavbarBox title="Skills" onClick={() => scrollToSection(skillsRef)} />
        <NavbarBox title="About" onClick={() => scrollToSection(aboutRef)} />
      </div>
    </div>
  );
};

export default NavBar;
