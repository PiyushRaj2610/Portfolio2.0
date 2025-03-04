
interface Title {
  title: string
}

const NavbarBox = ({title}: Title) => {
  return (
    <div className="bg-transparent cursor-pointer flex h-[5vh] w-[12vh] justify-center items-center text-xl rounded-full pb-1 text-[#C6CBA9] hover:bg-[#1B1B1B] transition-transform duration-500">
      {title}
    </div >
  )
}

export default NavbarBox