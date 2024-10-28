import AboutUs from "@/Pages/about-us";
import ContactUsPage from "@/Pages/contact-us";
import EventPage from "@/Pages/events";
import GalleryPage from "@/Pages/gallery";
import OurServicesPage from "@/Pages/our-services";
import { lazy } from "react";

const HomePage = lazy(() => import("../Pages/home/index"));

export const routes = [
  {
    path: "/",
    component: <HomePage />,
  },
  {
    path: "/about",
    component: <AboutUs />,
  },
  {
    path: "/services",
    component: <OurServicesPage />,
  },
  {
    path: "/events",
    component: <EventPage />,
  },
  {
    path: "/gallery",
    component: <GalleryPage />,
  },
  {
    path: "/contact-us",
    component: <ContactUsPage />,
  },
];
