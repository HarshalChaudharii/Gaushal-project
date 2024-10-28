import { UpcomingEvents } from "@/components/UpcomingEvents";
import EventHero from "@/features/event/EventHero";

const EventPage = () => {
  return (
    <div>
      <EventHero />
      <UpcomingEvents />
    </div>
  );
};

export default EventPage;
