import { Link } from "react-router-dom";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import SRGLogo from "@/assets/images/SRGLogo.jpg";

const MobileNav = () => {
  return (
    <div className="fixed w-full lg:hidden top-0 left-0 mt-8 p-3 flex items-center justify-between bg-white z-50">
      <div className="w-10 lg:hidden">
        <img src={SRGLogo} alt="srg" className="w-full h-full object-cover" />
      </div>
      <Sheet>
        <SheetTrigger>
          <div className="px-2 py-2 lg:hidden">
            <Menu className="bg-white" />
          </div>
        </SheetTrigger>
        <SheetContent className="block lg:hidden">
          <SheetHeader>
            <SheetTitle className="text-white font-semibold w-full">
              Shree Rajlaxmi Gaushala
            </SheetTitle>
            <SheetDescription>
              <div className="flex flex-col justify-start items-start font-semibold gap-3 mr-3">
                <p>
                  <Link to="/">
                    <SheetClose>Home</SheetClose>
                  </Link>
                </p>
                <p>
                  <Link to="/about">
                    <SheetClose>About</SheetClose>
                  </Link>
                </p>
                <p>
                  <Link to="/services">
                    <SheetClose>Services</SheetClose>
                  </Link>
                </p>
                <p>
                  <Link to="/">
                    <SheetClose>Events</SheetClose>
                  </Link>
                </p>
                <p>
                  <Link to="/contact-us">
                    <SheetClose>Contact</SheetClose>
                  </Link>
                </p>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
