// demo images
import { ReactNode } from "react";
import cardImg from "../../assets/images/users/avatar-7.jpg";

// components
import Actions from "../../components/Tasks/actions";
import Permissions from "../../components/Tasks/employee/permissions";
import Status from "../../components/Tasks/leaves/status";
import AttendanceTic from "../../components/Tasks/attendance/attendanceTic";

interface Records {
  id: number;
  age: number;
  name: string;
  company: string;
  phone: string;
}

interface Records1 {
  id: number;
  title: string;
  holidayDate: string;
  day: string;
  action: object;
}

interface leaveAdmin {
  id: number;
  employee: object;
  leave_type: string;
  from: string;
  to: string;
  no_of_days: number;
  reason: string;
  status: object;
  action: object;
}

interface attendance {
  morning: ReactNode;
  afternoon: ReactNode;
}

interface AttendanceAdmin {
  id: number;
  employee: object;
  attendance: attendance[];
}

interface leaveEmployee {
  id: number;
  leave_type: string;
  from: string;
  to: string;
  no_of_days: number;
  reason: string;
  status: object;
  action: object;
}

interface ExpandableRecords {
  id: number;
  age: number;
  name: string;
  company: string;
  phone: string;
  subRows: Records[];
}

const attendanceAdmin: AttendanceAdmin[] = [
  {
    id: 1,
    employee: {
      img: (
        <img
          src={cardImg}
          alt={cardImg}
          width={35}
          className="rounded-circle"
        />
      ),
      name: "John Doe",
    },
    attendance: [
      {
        morning: <AttendanceTic attendance={true} />,
        afternoon: <AttendanceTic attendance={true} />,
      },
      {
        morning: <AttendanceTic attendance={true} />,
        afternoon: <AttendanceTic attendance={true} />,
      },
      {
        morning: <AttendanceTic attendance={true} />,
        afternoon: <AttendanceTic attendance={false} />,
      },
      {
        morning: <AttendanceTic attendance={true} />,
        afternoon: <AttendanceTic attendance={true} />,
      },
      {
        morning: <AttendanceTic attendance={true} />,
        afternoon: <AttendanceTic attendance={true} />,
      },
      {
        morning: <AttendanceTic attendance={true} />,
        afternoon: <AttendanceTic attendance={true} />,
      },
      {
        morning: <AttendanceTic attendance={false} />,
        afternoon: <AttendanceTic attendance={true} />,
      },
      {
        morning: <AttendanceTic attendance={true} />,
        afternoon: <AttendanceTic attendance={true} />,
      },
      {
        morning: <AttendanceTic attendance={true} />,
        afternoon: <AttendanceTic attendance={true} />,
      },
      {
        morning: <AttendanceTic attendance={true} />,
        afternoon: <AttendanceTic attendance={true} />,
      },
      {
        morning: <AttendanceTic attendance={true} />,
        afternoon: <AttendanceTic attendance={true} />,
      },
      {
        morning: <AttendanceTic attendance={true} />,
        afternoon: <AttendanceTic attendance={true} />,
      },
      {
        morning: <AttendanceTic attendance={true} />,
        afternoon: <AttendanceTic attendance={true} />,
      },
      {
        morning: <AttendanceTic attendance={true} />,
        afternoon: <AttendanceTic attendance={true} />,
      },
      {
        morning: <AttendanceTic attendance={true} />,
        afternoon: <AttendanceTic attendance={true} />,
      },
      {
        morning: <AttendanceTic attendance={true} />,
        afternoon: <AttendanceTic attendance={true} />,
      },
      {
        morning: <AttendanceTic attendance={true} />,
        afternoon: <AttendanceTic attendance={true} />,
      },
      {
        morning: <AttendanceTic attendance={true} />,
        afternoon: <AttendanceTic attendance={true} />,
      },
      {
        morning: <AttendanceTic attendance={true} />,
        afternoon: <AttendanceTic attendance={true} />,
      },
      {
        morning: <AttendanceTic attendance={true} />,
        afternoon: <AttendanceTic attendance={true} />,
      },
      {
        morning: <AttendanceTic attendance={true} />,
        afternoon: <AttendanceTic attendance={true} />,
      },
      {
        morning: <AttendanceTic attendance={true} />,
        afternoon: <AttendanceTic attendance={true} />,
      },
      {
        morning: <AttendanceTic attendance={true} />,
        afternoon: <AttendanceTic attendance={true} />,
      },
      {
        morning: <AttendanceTic attendance={true} />,
        afternoon: <AttendanceTic attendance={true} />,
      },
      {
        morning: <AttendanceTic attendance={true} />,
        afternoon: <AttendanceTic attendance={true} />,
      },
      {
        morning: <AttendanceTic attendance={true} />,
        afternoon: <AttendanceTic attendance={true} />,
      },
      {
        morning: <AttendanceTic attendance={true} />,
        afternoon: <AttendanceTic attendance={true} />,
      },
      {
        morning: <AttendanceTic attendance={true} />,
        afternoon: <AttendanceTic attendance={true} />,
      },
      {
        morning: <AttendanceTic attendance={true} />,
        afternoon: <AttendanceTic attendance={true} />,
      },
      {
        morning: <AttendanceTic attendance={true} />,
        afternoon: <AttendanceTic attendance={true} />,
      },
    ],
  },
  {
    id: 2,
    employee: {
      img: (
        <img
          src={cardImg}
          alt={cardImg}
          width={35}
          className="rounded-circle"
        />
      ),
      name: "John Doe",
    },
    attendance: [
      {
        morning: true,
        afternoon: true,
      },
      {
        morning: true,
        afternoon: true,
      },
      {
        morning: false,
        afternoon: true,
      },
      {
        morning: true,
        afternoon: true,
      },
      {
        morning: true,
        afternoon: true,
      },
      {
        morning: true,
        afternoon: true,
      },
      {
        morning: true,
        afternoon: true,
      },
      {
        morning: true,
        afternoon: true,
      },
      {
        morning: true,
        afternoon: true,
      },
      {
        morning: true,
        afternoon: true,
      },
      {
        morning: true,
        afternoon: true,
      },
      {
        morning: true,
        afternoon: true,
      },
      {
        morning: true,
        afternoon: true,
      },
      {
        morning: true,
        afternoon: true,
      },
      {
        morning: true,
        afternoon: true,
      },
      {
        morning: true,
        afternoon: true,
      },
      {
        morning: true,
        afternoon: true,
      },
      {
        morning: true,
        afternoon: true,
      },
      {
        morning: true,
        afternoon: true,
      },
      {
        morning: true,
        afternoon: true,
      },
      {
        morning: true,
        afternoon: true,
      },
      {
        morning: true,
        afternoon: true,
      },
      {
        morning: true,
        afternoon: true,
      },
      {
        morning: true,
        afternoon: true,
      },
      {
        morning: true,
        afternoon: true,
      },
      {
        morning: true,
        afternoon: true,
      },
      {
        morning: true,
        afternoon: true,
      },
      {
        morning: true,
        afternoon: true,
      },
      {
        morning: true,
        afternoon: true,
      },
      {
        morning: true,
        afternoon: true,
      },
    ],
  },
];

/* column for attendanceAdmin table */
const days = attendanceAdmin?.[0].attendance.map((day: any, idx) => ({
  Header: ++idx + "",
  accessor: `attendance?.[${idx - 1}]?.morning`,
  sort: false,
}));

const listOfHolidays: Records1[] = [
  {
    id: 1,
    title: "New Year's Day",
    holidayDate: "2025-01-01",
    day: "Wednesday",
    action: <Actions />,
  },
  {
    id: 2,
    title: "Martin Luther King Jr. Day",
    holidayDate: "2025-01-20",
    day: "Monday",
    action: <Actions />,
  },
  {
    id: 3,
    title: "Valentine's Day",
    holidayDate: "2025-02-14",
    day: "Friday",
    action: <Actions />,
  },
  {
    id: 4,
    title: "Presidents' Day",
    holidayDate: "2025-02-17",
    day: "Monday",
    action: <Actions />,
  },
  {
    id: 5,
    title: "St. Patrick's Day",
    holidayDate: "2025-03-17",
    day: "Monday",
    action: <Actions />,
  },
  {
    id: 6,
    title: "Easter Sunday",
    holidayDate: "2025-04-20",
    day: "Sunday",
    action: <Actions />,
  },
  {
    id: 7,
    title: "Earth Day",
    holidayDate: "2025-04-22",
    day: "Tuesday",
    action: <Actions />,
  },
  {
    id: 8,
    title: "Eid Day",
    holidayDate: "2025-05-05",
    day: "Monday",
    action: <Actions />,
  },
  {
    id: 9,
    title: "Mother's Day",
    holidayDate: "2025-05-11",
    day: "Sunday",
    action: <Actions />,
  },
  {
    id: 10,
    title: "Memorial Day",
    holidayDate: "2025-05-26",
    day: "Monday",
    action: <Actions />,
  },
  {
    id: 11,
    title: "Father's Day",
    holidayDate: "2025-06-15",
    day: "Sunday",
    action: <Actions />,
  },
  {
    id: 12,
    title: "Independence Day",
    holidayDate: "2025-07-04",
    day: "Friday",

    action: <Actions />,
  },
  {
    id: 13,
    title: "Labor Day",
    holidayDate: "2025-09-01",
    day: "Monday",
    action: <Actions />,
  },
  {
    id: 14,
    title: "Columbus Day",
    holidayDate: "2025-10-13",
    day: "Monday",
    action: <Actions />,
  },
  {
    id: 15,
    title: "Halloween",
    holidayDate: "2025-10-31",
    day: "Friday",
    action: <Actions />,
  },
  {
    id: 16,
    title: "Veterans Day",
    holidayDate: "2025-11-11",
    day: "Tuesday",
    action: <Actions />,
  },
  {
    id: 17,
    title: "Thanksgiving Day",
    holidayDate: "2025-11-27",
    day: "Thursday",

    action: <Actions />,
  },
  {
    id: 18,
    title: "Black Friday",
    holidayDate: "2025-11-28",
    day: "Friday",
    action: <Actions />,
  },
  {
    id: 19,
    title: "Christmas Eve",
    holidayDate: "2025-12-24",
    day: "Wednesday",
    action: <Actions />,
  },
  {
    id: 20,
    title: "Christmas Day",
    holidayDate: "2025-12-25",
    day: "Thursday",

    action: <Actions />,
  },
];

interface AddEmployeeInfoProps {
  id: number;
  module_permission: string;
  read: ReactNode;
  write: ReactNode;
  create: ReactNode;
  delete: ReactNode;
  import: ReactNode;
  export: ReactNode;
}

const AddEmployeeInfo: AddEmployeeInfoProps[] = [
  {
    id: 1,
    module_permission: "Holiday",
    read: <Permissions defaultChecked={true} controller={`read_${1}`} />,
    write: <Permissions defaultChecked={false} controller={`write_${1}`} />,
    create: <Permissions defaultChecked={false} controller={`create_${1}`} />,
    delete: <Permissions defaultChecked={false} controller={`delete_${1}`} />,
    import: <Permissions defaultChecked={false} controller={`import_${1}`} />,
    export: <Permissions defaultChecked={false} controller={`export_${1}`} />,
  },
  {
    id: 2,
    module_permission: "Leaves",
    read: <Permissions defaultChecked={true} controller={`read_${2}`} />,
    write: <Permissions defaultChecked={true} controller={`write_${2}`} />,
    create: <Permissions defaultChecked={false} controller={`create_${2}`} />,
    delete: <Permissions defaultChecked={false} controller={`delete_${2}`} />,
    import: <Permissions defaultChecked={false} controller={`import_${2}`} />,
    export: <Permissions defaultChecked={false} controller={`export_${2}`} />,
  },
  {
    id: 3,
    module_permission: "Clients",
    read: <Permissions defaultChecked={true} controller={`read_${3}`} />,
    write: <Permissions defaultChecked={false} controller={`write_${3}`} />,
    create: <Permissions defaultChecked={false} controller={`create_${3}`} />,
    delete: <Permissions defaultChecked={true} controller={`delete_${3}`} />,
    import: <Permissions defaultChecked={false} controller={`import_${3}`} />,
    export: <Permissions defaultChecked={false} controller={`export_${3}`} />,
  },
  {
    id: 4,
    module_permission: "Clients",
    read: <Permissions defaultChecked={true} controller={`read_${4}`} />,
    write: <Permissions defaultChecked={false} controller={`write_${4}`} />,
    create: <Permissions defaultChecked={false} controller={`create_${4}`} />,
    delete: <Permissions defaultChecked={true} controller={`delete_${4}`} />,
    import: <Permissions defaultChecked={false} controller={`import_${4}`} />,
    export: <Permissions defaultChecked={false} controller={`export_${4}`} />,
  },
  {
    id: 5,
    module_permission: "Clients",
    read: <Permissions defaultChecked={true} controller={`read_${5}`} />,
    write: <Permissions defaultChecked={false} controller={`write_${5}`} />,
    create: <Permissions defaultChecked={false} controller={`create_${5}`} />,
    delete: <Permissions defaultChecked={true} controller={`delete_${5}`} />,
    import: <Permissions defaultChecked={false} controller={`import_${5}`} />,
    export: <Permissions defaultChecked={false} controller={`export_${5}`} />,
  },
  {
    id: 6,
    module_permission: "Clients",
    read: <Permissions defaultChecked={true} controller={`read_${6}`} />,
    write: <Permissions defaultChecked={true} controller={`write_${6}`} />,
    create: <Permissions defaultChecked={true} controller={`create_${6}`} />,
    delete: <Permissions defaultChecked={true} controller={`delete_${6}`} />,
    import: <Permissions defaultChecked={false} controller={`import_${6}`} />,
    export: <Permissions defaultChecked={false} controller={`export_${6}`} />,
  },
  {
    id: 7,
    module_permission: "Clients",
    read: <Permissions defaultChecked={true} controller={`read_${7}`} />,
    write: <Permissions defaultChecked={false} controller={`write_${7}`} />,
    create: <Permissions defaultChecked={true} controller={`create_${7}`} />,
    delete: <Permissions defaultChecked={true} controller={`delete_${7}`} />,
    import: <Permissions defaultChecked={false} controller={`import_${7}`} />,
    export: <Permissions defaultChecked={false} controller={`export_${7}`} />,
  },
  {
    id: 8,
    module_permission: "Clients",
    read: <Permissions defaultChecked={true} controller={`read_${8}`} />,
    write: <Permissions defaultChecked={true} controller={`write_${8}`} />,
    create: <Permissions defaultChecked={false} controller={`create_${8}`} />,
    delete: <Permissions defaultChecked={true} controller={`delete_${8}`} />,
    import: <Permissions defaultChecked={false} controller={`import_${8}`} />,
    export: <Permissions defaultChecked={false} controller={`export_${8}`} />,
  },
];

const leavesOfAdmin: leaveAdmin[] = [
  {
    id: 1,
    employee: {
      img: (
        <img
          src={cardImg}
          alt={cardImg}
          width={35}
          className="rounded-circle"
        />
      ),
      name: "John Doe",
    },
    leave_type: "sick leave",
    from: "2024-05-10",
    to: "2024-05-12",
    no_of_days: 3,
    reason: "Flu",
    status: <Status selected={"approved"} />,
    action: <Actions />,
  },
  {
    id: 2,
    employee: {
      img: (
        <img
          src={cardImg}
          alt={cardImg}
          width={35}
          className="rounded-circle"
        />
      ),
      name: "Jane Smith",
    },
    leave_type: "annual leave",
    from: "2024-06-20",
    to: "2024-06-25",
    no_of_days: 6,
    reason: "Vacation",
    status: <Status selected={"pending"} />,
    action: <Actions />,
  },
  {
    id: 3,
    employee: {
      img: (
        <img
          src={cardImg}
          alt={cardImg}
          width={35}
          className="rounded-circle"
        />
      ),
      name: "Michael Johnson",
    },
    leave_type: "maternity leave",
    from: "2024-07-15",
    to: "2024-09-15",
    no_of_days: 63,
    reason: "Expecting a baby",
    status: <Status selected={"new"} />,
    action: <Actions />,
  },
  {
    id: 4,
    employee: {
      img: (
        <img
          src={cardImg}
          alt={cardImg}
          width={35}
          className="rounded-circle"
        />
      ),
      name: "Emily Brown",
    },
    leave_type: "bereavement leave",
    from: "2024-08-05",
    to: "2024-08-08",
    no_of_days: 4,
    reason: "Attending funeral",
    status: <Status selected={"approved"} />,
    action: <Actions />,
  },
  {
    id: 5,
    employee: {
      img: (
        <img
          src={cardImg}
          alt={cardImg}
          width={35}
          className="rounded-circle"
        />
      ),
      name: "David Wilson",
    },
    leave_type: "unpaid leave",
    from: "2024-09-01",
    to: "2024-09-07",
    no_of_days: 7,
    reason: "Personal reasons",
    status: <Status selected={"declined"} />,
    action: <Actions />,
  },
];

const leavesOfEmployee: leaveEmployee[] = [
  {
    id: 1,
    leave_type: "sick leave",
    from: "2024-05-10",
    to: "2024-05-12",
    no_of_days: 3,
    reason: "Flu",
    status: <Status selected={"approved"} />,
    action: <Actions />,
  },
  {
    id: 2,
    leave_type: "annual leave",
    from: "2024-06-20",
    to: "2024-06-25",
    no_of_days: 6,
    reason: "Vacation",
    status: <Status selected={"pending"} />,
    action: <Actions />,
  },
  {
    id: 3,
    leave_type: "maternity leave",
    from: "2024-07-15",
    to: "2024-09-15",
    no_of_days: 63,
    reason: "Expecting a baby",
    status: <Status selected={"new"} />,
    action: <Actions />,
  },
  {
    id: 4,
    leave_type: "bereavement leave",
    from: "2024-08-05",
    to: "2024-08-08",
    no_of_days: 4,
    reason: "Attending funeral",
    status: <Status selected={"approved"} />,
    action: <Actions />,
  },
  {
    id: 5,
    leave_type: "unpaid leave",
    from: "2024-09-01",
    to: "2024-09-07",
    no_of_days: 7,
    reason: "Personal reasons",
    status: <Status selected={"declined"} />,
    action: <Actions />,
  },
];

const records: Records[] = [
  {
    id: 1,
    age: 32,
    name: "Burt",
    company: "Kaggle",
    phone: "+1 (823) 532-2427",
  },
  {
    id: 2,
    age: 23,
    name: "Bruno",
    company: "Magmina",
    phone: "+1 (813) 583-2089",
  },
  {
    id: 3,
    age: 31,
    name: "Alvarado",
    company: "Translink",
    phone: "+1 (975) 468-3875",
  },
  {
    id: 4,
    age: 24,
    name: "Lilia",
    company: "Digitalus",
    phone: "+1 (891) 537-3461",
  },
  {
    id: 5,
    age: 25,
    name: "Amanda",
    company: "Bunga",
    phone: "+1 (916) 522-3747",
  },
  {
    id: 6,
    age: 20,
    name: "Alexandra",
    company: "Conjurica",
    phone: "+1 (876) 492-3181",
  },
  {
    id: 7,
    age: 27,
    name: "Diana",
    company: "Extragen",
    phone: "+1 (977) 417-3038",
  },
  {
    id: 8,
    age: 26,
    name: "Goodman",
    company: "Aquamate",
    phone: "+1 (930) 545-2289",
  },
  {
    id: 9,
    age: 26,
    name: "Edith",
    company: "Pyrami",
    phone: "+1 (854) 506-3468",
  },
  {
    id: 10,
    age: 29,
    name: "Juana",
    company: "Singavera",
    phone: "+1 (872) 560-2324",
  },
  {
    id: 11,
    age: 21,
    name: "Fitzgerald",
    company: "Dancerity",
    phone: "+1 (813) 573-2507",
  },
  {
    id: 12,
    age: 38,
    name: "Madden",
    company: "Corpulse",
    phone: "+1 (935) 534-3876",
  },
  {
    id: 13,
    age: 40,
    name: "Jewell",
    company: "Frenex",
    phone: "+1 (886) 516-3262",
  },
  {
    id: 14,
    age: 32,
    name: "Kerr",
    company: "Artiq",
    phone: "+1 (807) 561-3077",
  },
  {
    id: 15,
    age: 20,
    name: "Washington",
    company: "Organica",
    phone: "+1 (948) 458-3517",
  },
  {
    id: 16,
    age: 20,
    name: "Audrey",
    company: "Softmicro",
    phone: "+1 (900) 592-3841",
  },
  {
    id: 17,
    age: 39,
    name: "Allison",
    company: "Playce",
    phone: "+1 (998) 478-3810",
  },
  {
    id: 18,
    age: 25,
    name: "Holder",
    company: "Paragonia",
    phone: "+1 (850) 536-2708",
  },
  {
    id: 19,
    age: 26,
    name: "Atkinson",
    company: "Scentric",
    phone: "+1 (850) 467-2761",
  },
  {
    id: 20,
    age: 35,
    name: "Delaney",
    company: "Telpod",
    phone: "+1 (934) 468-2218",
  },
  {
    id: 21,
    age: 20,
    name: "Myrna",
    company: "Zanity",
    phone: "+1 (953) 565-3836",
  },
  {
    id: 22,
    age: 30,
    name: "Erna",
    company: "Techade",
    phone: "+1 (872) 574-3879",
  },
  {
    id: 23,
    age: 36,
    name: "Fannie",
    company: "Cubix",
    phone: "+1 (843) 576-2904",
  },
  {
    id: 24,
    age: 38,
    name: "Melody",
    company: "Talae",
    phone: "+1 (817) 424-3500",
  },
  {
    id: 25,
    age: 27,
    name: "Letitia",
    company: "Enjola",
    phone: "+1 (857) 441-2917",
  },
  {
    id: 26,
    age: 33,
    name: "Nina",
    company: "Eventex",
    phone: "+1 (917) 599-2793",
  },
  {
    id: 27,
    age: 40,
    name: "Byrd",
    company: "Obones",
    phone: "+1 (846) 422-2064",
  },
  {
    id: 28,
    age: 34,
    name: "Chen",
    company: "Dadabase",
    phone: "+1 (956) 474-3409",
  },
  {
    id: 29,
    age: 25,
    name: "Alexandria",
    company: "Turnabout",
    phone: "+1 (964) 415-2278",
  },
  {
    id: 30,
    age: 37,
    name: "Page",
    company: "Metroz",
    phone: "+1 (897) 541-2460",
  },
  {
    id: 31,
    age: 24,
    name: "Clare",
    company: "Zilch",
    phone: "+1 (832) 591-3814",
  },
  {
    id: 32,
    age: 38,
    name: "Lindsey",
    company: "Roughies",
    phone: "+1 (942) 579-2920",
  },
  {
    id: 33,
    age: 32,
    name: "Oconnor",
    company: "Kinetica",
    phone: "+1 (899) 599-3206",
  },
  {
    id: 34,
    age: 35,
    name: "Maldonado",
    company: "Zentime",
    phone: "+1 (955) 419-2815",
  },
  {
    id: 35,
    age: 25,
    name: "Day",
    company: "Eargo",
    phone: "+1 (895) 555-2916",
  },
  {
    id: 36,
    age: 20,
    name: "Collier",
    company: "Phuel",
    phone: "+1 (998) 468-2079",
  },
  {
    id: 37,
    age: 40,
    name: "Jeannette",
    company: "Entogrok",
    phone: "+1 (904) 567-2078",
  },
  {
    id: 38,
    age: 33,
    name: "Wallace",
    company: "Nurali",
    phone: "+1 (877) 566-3957",
  },
  {
    id: 39,
    age: 39,
    name: "Mcfadden",
    company: "Cincyr",
    phone: "+1 (949) 405-3992",
  },
  {
    id: 40,
    age: 21,
    name: "Chrystal",
    company: "Futurize",
    phone: "+1 (988) 458-3032",
  },
  {
    id: 41,
    age: 31,
    name: "Leila",
    company: "Zensure",
    phone: "+1 (902) 447-2419",
  },
  {
    id: 42,
    age: 24,
    name: "Madelyn",
    company: "Egypto",
    phone: "+1 (881) 538-3081",
  },
  {
    id: 43,
    age: 39,
    name: "Peck",
    company: "Tellifly",
    phone: "+1 (803) 452-3922",
  },
  {
    id: 44,
    age: 32,
    name: "Garrett",
    company: "Aquasure",
    phone: "+1 (876) 475-2185",
  },
  {
    id: 45,
    age: 21,
    name: "Kramer",
    company: "Terrago",
    phone: "+1 (912) 404-2597",
  },
  {
    id: 46,
    age: 35,
    name: "Lane",
    company: "Anivet",
    phone: "+1 (911) 495-3587",
  },
  {
    id: 47,
    age: 21,
    name: "Merritt",
    company: "Inear",
    phone: "+1 (856) 519-3838",
  },
  {
    id: 48,
    age: 25,
    name: "Margarita",
    company: "Unq",
    phone: "+1 (931) 558-3156",
  },
  {
    id: 49,
    age: 28,
    name: "Leigh",
    company: "Marqet",
    phone: "+1 (918) 526-2007",
  },
  {
    id: 50,
    age: 31,
    name: "Coleman",
    company: "Insuresys",
    phone: "+1 (827) 449-3786",
  },
  {
    id: 51,
    age: 31,
    name: "Alexander",
    company: "Portico",
    phone: "+1 (854) 576-2455",
  },
  {
    id: 52,
    age: 38,
    name: "Tanisha",
    company: "Earthwax",
    phone: "+1 (994) 494-3496",
  },
  {
    id: 53,
    age: 23,
    name: "Crane",
    company: "Pushcart",
    phone: "+1 (924) 497-3347",
  },
  {
    id: 54,
    age: 26,
    name: "Carmella",
    company: "Acusage",
    phone: "+1 (898) 575-2585",
  },
  {
    id: 55,
    age: 27,
    name: "Rosalind",
    company: "Isologica",
    phone: "+1 (838) 572-2994",
  },
  {
    id: 56,
    age: 37,
    name: "Duran",
    company: "Gazak",
    phone: "+1 (991) 446-3820",
  },
  {
    id: 57,
    age: 27,
    name: "Bernard",
    company: "Zoinage",
    phone: "+1 (824) 585-2197",
  },
  {
    id: 58,
    age: 29,
    name: "Tate",
    company: "Endipine",
    phone: "+1 (896) 448-2084",
  },
  {
    id: 59,
    age: 39,
    name: "Pearlie",
    company: "Progenex",
    phone: "+1 (805) 545-2585",
  },
  {
    id: 60,
    age: 20,
    name: "Manning",
    company: "Handshake",
    phone: "+1 (917) 405-3406",
  },
];

const expandableRecords: ExpandableRecords[] = [
  {
    id: 1,
    age: 32,
    name: "Burt",
    company: "Kaggle",
    phone: "+1 (823) 532-2427",
    subRows: [
      {
        id: 51,
        age: 23,
        name: "Bruno",
        company: "Magmina",
        phone: "+1 (813) 583-2089",
      },
    ],
  },
  {
    id: 2,
    age: 23,
    name: "Long",
    company: "Magmina",
    phone: "+1 (813) 583-2089",
    subRows: [
      {
        id: 51,
        age: 23,
        name: "Bruno",
        company: "Magmina",
        phone: "+1 (813) 583-2089",
      },
    ],
  },
  {
    id: 3,
    age: 31,
    name: "Alvarado",
    company: "Translink",
    phone: "+1 (975) 468-3875",
    subRows: [
      {
        id: 51,
        age: 23,
        name: "Bruno",
        company: "Magmina",
        phone: "+1 (813) 583-2089",
      },
    ],
  },
  {
    id: 4,
    age: 24,
    name: "Lilia",
    company: "Digitalus",
    phone: "+1 (891) 537-3461",
    subRows: [
      {
        id: 51,
        age: 23,
        name: "Bruno",
        company: "Magmina",
        phone: "+1 (813) 583-2089",
      },
    ],
  },
  {
    id: 5,
    age: 25,
    name: "Amanda",
    company: "Bunga",
    phone: "+1 (916) 522-3747",
    subRows: [
      {
        id: 51,
        age: 23,
        name: "Bruno",
        company: "Magmina",
        phone: "+1 (813) 583-2089",
      },
    ],
  },
  {
    id: 6,
    age: 20,
    name: "Alexandra",
    company: "Conjurica",
    phone: "+1 (876) 492-3181",
    subRows: [
      {
        id: 51,
        age: 23,
        name: "Bruno",
        company: "Magmina",
        phone: "+1 (813) 583-2089",
      },
    ],
  },
  {
    id: 7,
    age: 27,
    name: "Diana",
    company: "Extragen",
    phone: "+1 (977) 417-3038",
    subRows: [
      {
        id: 51,
        age: 23,
        name: "Bruno",
        company: "Magmina",
        phone: "+1 (813) 583-2089",
      },
    ],
  },
  {
    id: 8,
    age: 26,
    name: "Goodman",
    company: "Aquamate",
    phone: "+1 (930) 545-2289",
    subRows: [
      {
        id: 51,
        age: 23,
        name: "Bruno",
        company: "Magmina",
        phone: "+1 (813) 583-2089",
      },
    ],
  },
  {
    id: 9,
    age: 26,
    name: "Edith",
    company: "Pyrami",
    phone: "+1 (854) 506-3468",
    subRows: [
      {
        id: 51,
        age: 23,
        name: "Bruno",
        company: "Magmina",
        phone: "+1 (813) 583-2089",
      },
    ],
  },
  {
    id: 10,
    age: 29,
    name: "Juana",
    company: "Singavera",
    phone: "+1 (872) 560-2324",
    subRows: [
      {
        id: 51,
        age: 23,
        name: "Bruno",
        company: "Magmina",
        phone: "+1 (813) 583-2089",
      },
    ],
  },
  {
    id: 11,
    age: 21,
    name: "Fitzgerald",
    company: "Dancerity",
    phone: "+1 (813) 573-2507",
    subRows: [
      {
        id: 51,
        age: 23,
        name: "Bruno",
        company: "Magmina",
        phone: "+1 (813) 583-2089",
      },
    ],
  },
  {
    id: 12,
    age: 38,
    name: "Madden",
    company: "Corpulse",
    phone: "+1 (935) 534-3876",
    subRows: [
      {
        id: 51,
        age: 23,
        name: "Bruno",
        company: "Magmina",
        phone: "+1 (813) 583-2089",
      },
    ],
  },
  {
    id: 13,
    age: 40,
    name: "Jewell",
    company: "Frenex",
    phone: "+1 (886) 516-3262",
    subRows: [
      {
        id: 51,
        age: 23,
        name: "Bruno",
        company: "Magmina",
        phone: "+1 (813) 583-2089",
      },
    ],
  },
  {
    id: 14,
    age: 32,
    name: "Kerr",
    company: "Artiq",
    phone: "+1 (807) 561-3077",
    subRows: [
      {
        id: 51,
        age: 23,
        name: "Bruno",
        company: "Magmina",
        phone: "+1 (813) 583-2089",
      },
    ],
  },
  {
    id: 15,
    age: 20,
    name: "Washington",
    company: "Organica",
    phone: "+1 (948) 458-3517",
    subRows: [
      {
        id: 51,
        age: 23,
        name: "Bruno",
        company: "Magmina",
        phone: "+1 (813) 583-2089",
      },
    ],
  },
  {
    id: 16,
    age: 20,
    name: "Audrey",
    company: "Softmicro",
    phone: "+1 (900) 592-3841",
    subRows: [
      {
        id: 51,
        age: 23,
        name: "Bruno",
        company: "Magmina",
        phone: "+1 (813) 583-2089",
      },
    ],
  },
  {
    id: 17,
    age: 39,
    name: "Allison",
    company: "Playce",
    phone: "+1 (998) 478-3810",
    subRows: [
      {
        id: 51,
        age: 23,
        name: "Bruno",
        company: "Magmina",
        phone: "+1 (813) 583-2089",
      },
    ],
  },
  {
    id: 18,
    age: 25,
    name: "Holder",
    company: "Paragonia",
    phone: "+1 (850) 536-2708",
    subRows: [
      {
        id: 51,
        age: 23,
        name: "Bruno",
        company: "Magmina",
        phone: "+1 (813) 583-2089",
      },
    ],
  },
  {
    id: 19,
    age: 26,
    name: "Atkinson",
    company: "Scentric",
    phone: "+1 (850) 467-2761",
    subRows: [
      {
        id: 51,
        age: 23,
        name: "Bruno",
        company: "Magmina",
        phone: "+1 (813) 583-2089",
      },
    ],
  },
  {
    id: 20,
    age: 35,
    name: "Delaney",
    company: "Telpod",
    phone: "+1 (934) 468-2218",
    subRows: [
      {
        id: 51,
        age: 23,
        name: "Bruno",
        company: "Magmina",
        phone: "+1 (813) 583-2089",
      },
    ],
  },
  {
    id: 21,
    age: 20,
    name: "Myrna",
    company: "Zanity",
    phone: "+1 (953) 565-3836",
    subRows: [
      {
        id: 51,
        age: 23,
        name: "Bruno",
        company: "Magmina",
        phone: "+1 (813) 583-2089",
      },
    ],
  },
  {
    id: 22,
    age: 30,
    name: "Erna",
    company: "Techade",
    phone: "+1 (872) 574-3879",
    subRows: [
      {
        id: 51,
        age: 23,
        name: "Bruno",
        company: "Magmina",
        phone: "+1 (813) 583-2089",
      },
    ],
  },
  {
    id: 23,
    age: 36,
    name: "Fannie",
    company: "Cubix",
    phone: "+1 (843) 576-2904",
    subRows: [
      {
        id: 51,
        age: 23,
        name: "Bruno",
        company: "Magmina",
        phone: "+1 (813) 583-2089",
      },
    ],
  },
  {
    id: 24,
    age: 38,
    name: "Melody",
    company: "Talae",
    phone: "+1 (817) 424-3500",
    subRows: [
      {
        id: 51,
        age: 23,
        name: "Bruno",
        company: "Magmina",
        phone: "+1 (813) 583-2089",
      },
    ],
  },
  {
    id: 25,
    age: 27,
    name: "Letitia",
    company: "Enjola",
    phone: "+1 (857) 441-2917",
    subRows: [
      {
        id: 51,
        age: 23,
        name: "Bruno",
        company: "Magmina",
        phone: "+1 (813) 583-2089",
      },
    ],
  },
  {
    id: 26,
    age: 33,
    name: "Nina",
    company: "Eventex",
    phone: "+1 (917) 599-2793",
    subRows: [
      {
        id: 51,
        age: 23,
        name: "Bruno",
        company: "Magmina",
        phone: "+1 (813) 583-2089",
      },
    ],
  },
  {
    id: 27,
    age: 40,
    name: "Byrd",
    company: "Obones",
    phone: "+1 (846) 422-2064",
    subRows: [
      {
        id: 51,
        age: 23,
        name: "Bruno",
        company: "Magmina",
        phone: "+1 (813) 583-2089",
      },
    ],
  },
  {
    id: 28,
    age: 34,
    name: "Chen",
    company: "Dadabase",
    phone: "+1 (956) 474-3409",
    subRows: [
      {
        id: 51,
        age: 23,
        name: "Bruno",
        company: "Magmina",
        phone: "+1 (813) 583-2089",
      },
    ],
  },
  {
    id: 29,
    age: 25,
    name: "Alexandria",
    company: "Turnabout",
    phone: "+1 (964) 415-2278",
    subRows: [
      {
        id: 51,
        age: 23,
        name: "Bruno",
        company: "Magmina",
        phone: "+1 (813) 583-2089",
      },
    ],
  },
  {
    id: 30,
    age: 37,
    name: "Page",
    company: "Metroz",
    phone: "+1 (897) 541-2460",
    subRows: [
      {
        id: 51,
        age: 23,
        name: "Bruno",
        company: "Magmina",
        phone: "+1 (813) 583-2089",
      },
    ],
  },
  {
    id: 31,
    age: 24,
    name: "Clare",
    company: "Zilch",
    phone: "+1 (832) 591-3814",
    subRows: [
      {
        id: 51,
        age: 23,
        name: "Bruno",
        company: "Magmina",
        phone: "+1 (813) 583-2089",
      },
    ],
  },
  {
    id: 32,
    age: 38,
    name: "Lindsey",
    company: "Roughies",
    phone: "+1 (942) 579-2920",
    subRows: [
      {
        id: 51,
        age: 23,
        name: "Bruno",
        company: "Magmina",
        phone: "+1 (813) 583-2089",
      },
    ],
  },
  {
    id: 33,
    age: 32,
    name: "Oconnor",
    company: "Kinetica",
    phone: "+1 (899) 599-3206",
    subRows: [
      {
        id: 51,
        age: 23,
        name: "Bruno",
        company: "Magmina",
        phone: "+1 (813) 583-2089",
      },
    ],
  },
  {
    id: 34,
    age: 35,
    name: "Maldonado",
    company: "Zentime",
    phone: "+1 (955) 419-2815",
    subRows: [
      {
        id: 51,
        age: 23,
        name: "Bruno",
        company: "Magmina",
        phone: "+1 (813) 583-2089",
      },
    ],
  },
  {
    id: 35,
    age: 25,
    name: "Day",
    company: "Eargo",
    phone: "+1 (895) 555-2916",
    subRows: [
      {
        id: 51,
        age: 23,
        name: "Bruno",
        company: "Magmina",
        phone: "+1 (813) 583-2089",
      },
    ],
  },
  {
    id: 36,
    age: 20,
    name: "Collier",
    company: "Phuel",
    phone: "+1 (998) 468-2079",
    subRows: [
      {
        id: 51,
        age: 23,
        name: "Bruno",
        company: "Magmina",
        phone: "+1 (813) 583-2089",
      },
    ],
  },
  {
    id: 37,
    age: 40,
    name: "Jeannette",
    company: "Entogrok",
    phone: "+1 (904) 567-2078",
    subRows: [
      {
        id: 51,
        age: 23,
        name: "Bruno",
        company: "Magmina",
        phone: "+1 (813) 583-2089",
      },
    ],
  },
  {
    id: 38,
    age: 33,
    name: "Wallace",
    company: "Nurali",
    phone: "+1 (877) 566-3957",
    subRows: [
      {
        id: 51,
        age: 23,
        name: "Bruno",
        company: "Magmina",
        phone: "+1 (813) 583-2089",
      },
    ],
  },
  {
    id: 39,
    age: 39,
    name: "Mcfadden",
    company: "Cincyr",
    phone: "+1 (949) 405-3992",
    subRows: [
      {
        id: 51,
        age: 23,
        name: "Bruno",
        company: "Magmina",
        phone: "+1 (813) 583-2089",
      },
    ],
  },
  {
    id: 40,
    age: 21,
    name: "Chrystal",
    company: "Futurize",
    phone: "+1 (988) 458-3032",
    subRows: [
      {
        id: 51,
        age: 23,
        name: "Bruno",
        company: "Magmina",
        phone: "+1 (813) 583-2089",
      },
    ],
  },
];

export {
  records,
  expandableRecords,
  listOfHolidays,
  leavesOfEmployee,
  leavesOfAdmin,
  attendanceAdmin,
  days,
  AddEmployeeInfo,
};
