import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useEventData } from "@/hooks/useEventData";

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const { events: eventsData, error } = useEventData();
  if (error) {
    return <div className="p-[20px]">{error}</div>;
  }
  return (
    <div className="p-[20px]">
      <Calendar
        defaultDate={moment().toDate()}
        localizer={localizer}
        events={eventsData}
        startAccessor="start_date"
        endAccessor="end_date"
        titleAccessor="title"
        style={{ height: "80vh" }}
        tooltipAccessor="description"
        views={["month"]}
      />
    </div>
  );
};

export default MyCalendar;
