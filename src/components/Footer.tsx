import { ChevronRight, Facebook, Instagram, Youtube } from "lucide-react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const services = [
  {
    id: 1,
    data: "Protetion of Cows",
  },
  {
    id: 2,
    data: "Shelter",
  },

  {
    id: 3,
    data: "Dry-Fodder Storage",
  },
  {
    id: 4,
    data: "Medical Facility",
  },
  {
    id: 5,
    data: "Spiritual and Cultural Activities",
  },
];

const members = [
  {
    id: 1,
    data: "Tushar Shah",
  },
  {
    id: 2,
    data: "Rakesh shinde",
  },

  {
    id: 3,
    data: "Prajwal Mandlik",
  },
  {
    id: 4,
    data: "Sachin Patil",
  },
  {
    id: 5,
    data: "Rahul Patil",
  },
];

const Footer = () => {
  return (
    <div className="mx-auto  bg-customGray">
      <div className="max-w-5xl md:p-6  pt-10 grid grid-cols-1 ml-3 md:flex md:flex-row justify-between md:mx-auto pb-20 ">
        <div className="mb-6 md:mb-0">
          <h1 className="text-white font-semibold text-xl ">Newsletter</h1>
          <p className="font-semibold text-sm text-[#757575]">
            Sign up to hear and get our daily new update via email
          </p>
          <div className=" space-y-2 text-white">
            <Label htmlFor="input-22">Signup</Label>
            <div className="flex flex-col md:flex-row gap-2">
              <Input
                id="input-22"
                className="flex-1 w-[50%] md:w-full"
                placeholder="@Email"
                type="email"
              />
              <button className="w-20 justify-center md:w-[20%] inline-flex items-center rounded-lg border border-input bg-background px-3 text-sm font-medium text-foreground ring-offset-background transition-shadow hover:bg-accent hover:text-foreground focus:z-10 focus-visible:border-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50">
                Send
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-6">
          <h1 className="text-white font-semibold mb-3 text-xl">
            Our Services
          </h1>
          {services.map((item) => (
            <span className="flex items-center  -ml-1 ">
              <ChevronRight size={15} className="text-[#757575] " />
              <p key={item.id} className="text-sm text-[#757575] font-semibold">
                {item.data}
              </p>
            </span>
          ))}
        </div>
        <div className="flex flex-col gap-2 mb-6">
          <h1 className="text-white font-semibold text-xl mb-3">Members</h1>
          {members.map((item) => (
            <span className="flex items-center -ml-1">
              <ChevronRight size={15} className=" text-[#757575] " />
              <p key={item.id} className="text-sm text-[#757575] font-semibold">
                {item.data}
              </p>
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-2 mb-6">
          <h1 className="text-white font-semibold text-xl mb-3">Contact Us</h1>
          <span className="flex items-center -ml-1">
            <ChevronRight size={15} className=" text-[#757575] " />
            <p className="text-sm text-[#757575] font-semibold">Support</p>
          </span>
          <span className="flex items-center -ml-1">
            <ChevronRight size={15} className=" text-[#757575] " />
            <p className="text-sm text-[#757575] font-semibold">Feedback</p>
          </span>
        </div>
      </div>
      <div className="bg-[#757575] h-[1px] w-full" />
      <div className="max-w-5xl flex flex-col md:flex-row justify-center items-center gap-3 md:gap-0 md:justify-between mx-auto text-center text-[#757575] text-sm py-6 pb-16 md:pb-6">
        <div>
          Copyright © 2024 - Shree Rajlaxmi Gausala. All Rights Reseerved
        </div>
        <div className=" flex justify-center items-center gap-4">
          <Facebook size={20} className="text-white" />
          <Youtube size={20} className="text-white" />
          <Instagram size={20} className="text-white" />
        </div>
        <div className="flex">
          {" "}
          <p className="text-[#757575]">Designed by </p>{" "}
          <p className="text-primary ml-1 underline"> Wind Hans Technologies</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
