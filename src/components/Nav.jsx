import { navLinks, navLinks2 } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 z-10 w-full">
      <div className="ml-10 mr-10">
        <nav className="flex justify-between items-center">
        <p className=" ml-[78px] text-[29.65px] font-bold text-[#01303A] ">Website</p>
        <ul className="flex gap-12 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-inter leading-normal text-[16px] text-[#01303A] font-medium"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex gap-12 max-lg:hidden">
          {navLinks2.map((item, index) => (
            <li key={item.label} className={`${index === navLinks2.length - 1 ? 'font-semibold border-2 border-[#01303A] rounded-lg' : 'font-medium'}`}>
              <a
                href={item.href}
                className="font-inter leading-normal text-[16px] text-[#083C2F]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block pr-10">
                <img src="src\sections\hamburger.svg"
                 alt="Hamburger" 
                 width={25}
                 height={25}
                 />
            </div>

      </nav>
      </div>
    </header>
  );
};

export default Nav;
