import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const ContactUsForm = () => {
  return (
    <div className="w-full px-3">
      <div className="mt-20 max-w-6xl grid grid-cols-1  md:flex justify-between  mx-auto bg-[#F5DFC2] pb-10 mb-20">
        <div className="w-full flex flex-col ">
          <div className="mt-6 ml-6 mb-8">
            <h1 className=" text-3 text-xl font-semibold ">Get In Touch</h1>
            <p className="text-[#757575]">
              For questions concers, or feeback please reach out to us.
            </p>
          </div>

          <form className="w-full px-6 flex flex-col gap-4">
            <div className="flex w-full gap-2">
              <input
                type="text"
                placeholder="Name"
                className="p-2 border-2 flex w-full  border-gray-300"
              />
              <input
                type="email"
                placeholder="Email"
                className="p-2 border-2 flex w-full  border-gray-300"
              />
            </div>
            <input
              type="phone"
              placeholder="Phone"
              className="p-2 border-2 flex w-full  border-gray-300"
            />
            <input
              type="subject"
              placeholder="Subject"
              className="p-2 border-2 flex w-full  border-gray-300"
            />
            <input
              type="message"
              placeholder="Message"
              className="px-2 pb-6 border-2 flex w-full  border-gray-300"
            />
            <Button className="bg-[#F8B864] text-black p-2">Submit</Button>
          </form>
        </div>
        <div className="w-full flex flex-col items-center justify-center  px-3">
          <Card className="bg-white mt-6  px-4 py-3 flex flex-col gap-2 w-full   ">
            <div className="flex gap-2 items-center">
              <MapPin size={20} className="text-primary" />{" "}
              <h1 className="text-xl font-semibold">Address</h1>
            </div>

            <p className="text-gray2">
              Rajlakshmi Gaushala Sanstha, Tapovan Link Rd, Vaishavi Park,
              Nashik, Maharashtra-422013
            </p>
          </Card>
          <div className=" mt-2 md:mt-6  mb-6 flex flex-col md:flex-row w-full  justify-between  gap-2 ">
            <Card className=" bg-white px-2 py-3  flex flex-col w-full">
              <div className="flex gap-2 items-center">
                <Mail size={20} className="text-primary" />{" "}
                <h1 className="text-xl font-semibold">Mail Us</h1>
              </div>
              <p className="text-gray2">
                info@srgfoundations.com Shrirajlaxmifoundation9@gmail.com
              </p>
            </Card>

            <Card className="bg-white px-2 py-3 flex flex-col w-full">
              <div className="flex gap-2 items-center">
                <Phone size={20} className="text-primary" />{" "}
                <h1 className="text-xl font-semibold">Mobile</h1>
              </div>

              <p className="text-gray2 ">+91 8007777486 </p>
              <p className="text-gray2 ">+91 +91 9359291816 </p>
            </Card>
          </div>
          <div className="w-full px-2 mr-3">
            <div className="relative w-full h-0 pb-[56.25%]">
              {" "}
              {/* 16:9 Aspect Ratio */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6950.7507284205085!2d73.81709330121424!3d20.004885490469245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddebcfa2eeeeb9%3A0xb358222a1a3c39d7!2sShrirajlaxmi%20Goshala!5e0!3m2!1sen!2sin!4v1715505693057!5m2!1sen!2sin"
                className="absolute top-0 left-0 w-full h-full border-0"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
