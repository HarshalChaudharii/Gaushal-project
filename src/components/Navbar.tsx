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

const Navbar = () => {
  return (
    <div className="hidden lg:flex fixed top-8 z-10 w-[85%] p-3 bg-gray-100  items-center justify-between rounded-b-xl">
      <div className="flex justify-between items-center w-full ">
        {" "}
        {/* Fixed position */}
        <h1 className="flex w-full ml-3 text-3xl font-bold text-[#F8B864]">
          Shree Rajlaxmi Gaushala
        </h1>
        <div className="flex gap-3 mr-3">
          <p>
            <Link to="/">Home</Link>
          </p>
          <div className="border-l border-gray-300 h-6"></div> {/* Divider */}
          <p>
            <Link to="/about">About</Link>
          </p>
          <div className="border-l border-gray-300 h-6"></div> {/* Divider */}
          <p>
            <Link to="/services">Services</Link>
          </p>
          <div className="border-l border-gray-300 h-6"></div> {/* Divider */}
          <p>
            <Link to="/events">Events</Link>
          </p>
          <div className="border-l border-gray-300 h-6"></div> {/* Divider */}
          <p>
            <Link to="/gallery">Gallery</Link>
          </p>
          <div className="border-l border-gray-300 h-6"></div> {/* Divider */}
          <p>
            <Link to="/contact-us">Contact</Link>
          </p>
        </div>
        <div>
          <Sheet>
            <SheetTrigger className="w-full">
              <div className="w-full flex justify-end px-2 py-2 lg:hidden">
                <Menu className="bg-white" />
              </div>
            </SheetTrigger>
            <SheetContent className=" block lg:hidden">
              <SheetHeader>
                <SheetTitle className="text-white font-semibold w-full ">
                  {" "}
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
                        {" "}
                        <SheetClose>About</SheetClose>
                      </Link>
                    </p>
                    <p>
                      <Link to="/services">
                        {" "}
                        <SheetClose>Services</SheetClose>
                      </Link>
                    </p>
                    {/* <p>
                  <Link to="/blog">Blog</Link>
                </p> */}
                    <p>
                      <Link to="/">
                        {" "}
                        <SheetClose>Events</SheetClose>
                      </Link>
                    </p>
                    <p>
                      <Link to="/">Gallery</Link>
                    </p>
                    {/* <p>
                  <Link to="/members">Members</Link>
                </p> */}
                    <p>
                      <Link to="/contact-us">
                        {" "}
                        <SheetClose>Contact</SheetClose>
                      </Link>
                    </p>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
