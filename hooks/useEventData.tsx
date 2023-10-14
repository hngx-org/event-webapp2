import { EventData } from "@/@types";
import { useEffect, useState } from "react";

export function useEventData() {
  const [eventData, setEventData] = useState<EventData[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const baseURL = process.env.NEXT_PUBLIC_API_URL;

  const fetchData = (endpoint: string) => {
    fetch(`${baseURL}${endpoint}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMwODUyOGM2LTgyNmUtNDQyOS1iZjVhLTgxYTkxYmFkNGU3OCIsImlhdCI6MTY5NzMwMjQ3OSwiZXhwIjoxNjk3Mzg4ODc5fQ.mtnOFBwFQ2HDKocVPLsq07Ia1jjNL83D6QH38Ld76pc'
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((response: EventData[]) => {
        const formattedData = response.map((event) => ({
          ...event,
          event_start: new Date(`${event.event_start}`),
         event_end: new Date(`${event.event_end}`),
        }));
        setEventData(formattedData);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  useEffect(() => {
    setLoading(true);
    fetchData("/events/calendar");
    setLoading(false);
  }, []);

  return { events: eventData, error, loading };
}
