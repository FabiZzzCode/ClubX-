import event1 from "../assets/event1.jpg";
import event2 from "../assets/event2.jpg";
import event3 from "../assets/event3.jpg";

// Sample event data (moved out of Events.jsx). Replace with API data later.
const events = [
  {
    id: "ieee-workshop",
    src: event1,
    title: "IEEE Tech Workshop",
    club: "IEEE Student Branch",
    desc: "Hands-on workshop on IoT and Embedded Systems. Build real-world projects with mentors.",
    day: "28",
    month: "Sep",
    year: "2025",
    place: "CSE Seminar Hall",
    time: "10:00 AM – 1:00 PM",
    seats: [42, 60],
  },
  {
    id: "programming-contest",
    src: event2,
    title: "Inter-Department Programming Contest",
    club: "Computer Club",
    desc: "Algorithmic battle across departments. Team up, solve, and win.",
    day: "30",
    month: "Sep",
    year: "2025",
    place: "Computer Lab, Bldg 2",
    time: "9:00 AM – 12:00 PM",
    seats: [78, 100],
  },
  {
    id: "career-seminar",
    src: event3,
    title: "Career Guidance Seminar",
    club: "IIUCPS",
    desc: "Industry experts talk internships, CV building, and career paths.",
    day: "05",
    month: "Oct",
    year: "2025",
    place: "Main Auditorium",
    time: "2:00 PM – 5:00 PM",
    seats: [130, 200],
  },
];

export default events;
