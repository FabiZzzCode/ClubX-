// Club data keyed by URL slug. Add a new club here to get a /clubs/<slug> page.
// NOTE: members, announcements and achievements are sample data until the backend exists.
const clubs = {
  ieee: {
    name: "IEEE IIUC Student Branch",
    short: "IEEE",
    tagline: "Advancing technology for humanity",
    description:
      "The official student branch of the Institute of Electrical and Electronics Engineers at International Islamic University Chittagong, running technical, professional and community programs.",
    info: [
      { label: "University", value: "International Islamic University Chittagong (IIUC)" },
      { label: "Type", value: "Technical & Professional" },
      { label: "Societies", value: "ComSoc, CS, PES, RAS, WIE" },
      { label: "Website", value: "ieeesb.iiuc.ac.bd", href: "https://ieeesb.iiuc.ac.bd/" },
    ],
    stats: [
      { value: "5", label: "Societies" },
      { value: "4+", label: "Annual Flagship Events" },
      { value: "2022–25", label: "Committees on Record" },
    ],
    announcements: [
      {
        title: "Techfest 2025 Registration Open",
        date: "2025-09-10",
        desc: "Register your team for the annual Techfest featuring contests, project showcases and workshops.",
        more: "Teams of up to three members can register. Registration closes one week before the event; shortlisted teams are notified by email.",
      },
      {
        title: "RoverX Robotics Competition",
        date: "2025-08-22",
        desc: "Build and race your rover in the RoverX robotics competition organised with the RAS chapter.",
        more: "Rule book and arena specifications are shared with registered teams. Workshops on rover basics run every weekend before the contest.",
      },
      {
        title: "IEEE Day Celebration",
        date: "2025-10-01",
        desc: "Join us in celebrating IEEE Day with talks, games and a members' meet-up.",
        more: "Open to all IIUC students. IEEE members receive priority seating at the keynote session.",
      },
    ],
    members: [
      { name: "Chairperson", role: "Chair", dept: "CSE" },
      { name: "Vice Chairperson", role: "Vice Chair", dept: "EEE" },
      { name: "General Secretary", role: "Secretary", dept: "CSE" },
      { name: "Treasurer", role: "Treasurer", dept: "EEE" },
      { name: "ComSoc Chair", role: "Society Chair", dept: "ETE" },
      { name: "WIE Chair", role: "Society Chair", dept: "CSE" },
    ],
    requirements: {
      who: [
        "Currently enrolled IIUC students",
        "Students from engineering and technology departments (all departments welcome to events)",
      ],
      eligibility: [
        "Active IIUC student ID",
        "Genuine interest in technology and volunteering",
        "Commitment to attend regular meetings",
      ],
      joining: [
        "Create an IEEE account and join the IIUC Student Branch",
        "Pay the annual IEEE membership fee",
        "Fill in the branch registration form",
        "Attend the orientation session",
      ],
      conditions: [
        "Follow the IEEE Code of Ethics",
        "Membership must be renewed every year",
      ],
    },
    achievements: [
      { title: "International Student Led Conference", year: "2025", desc: "Hosted a student-led international conference with participants from multiple institutions." },
      { title: "Techfest", year: "2025", desc: "Organised the annual technology festival with contests and project showcases." },
      { title: "RoverX Robotics Competition", year: "2025", desc: "Launched an inter-university rover competition." },
      { title: "ICISET Conference", year: "2022", desc: "Supported the International Conference on Innovative Science, Engineering and Technology." },
    ],
    about: {
      history:
        "The IEEE IIUC Student Branch was formed to give IIUC students a platform to connect with the global IEEE community. Over the years it has grown into multiple societies and a yearly executive committee that runs conferences, contests and industrial visits.",
      mission:
        "To foster technological innovation and excellence for the benefit of students, the university and society.",
      vision:
        "To be the leading student branch in the region, producing skilled and ethical technology professionals.",
      activities: [
        "Conferences and seminars",
        "Robotics and programming contests",
        "Industrial visits and site tours",
        "IEEE Day celebrations",
        "Workshops and skill-development sessions",
      ],
      contact: [
        { label: "Website", value: "ieeesb.iiuc.ac.bd", href: "https://ieeesb.iiuc.ac.bd/" },
      ],
    },
  },
};

export default clubs;
