import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed top-2 z-50 w-screen px-4">
      <div className="container flex items-center justify-between rounded-lg bg-black py-3">
        <div className="flex flex-shrink-0 items-center justify-center">
          <Image
            className="mr-2"
            src="/logo.png"
            width={60}
            height={30}
            alt="Logo"
          />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
