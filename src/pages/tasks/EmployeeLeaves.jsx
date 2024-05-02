// pages
import PageTitle from "../../components/PageTitle";
import Stats from "../../components/Tasks/leaves/stats";
import LeaveEmployee from "../../components/Tasks/leaves/leaveEmployee";

// Dummy data
const EmployeeStat = [
  {
    title: "Annual Leave",
    stats: "12",
    isLeaves: false,
  },
  {
    title: "Medical Leave",
    stats: "8",
    isLeaves: false,
  },
  {
    title: "Other Leave",
    stats: "3",
    isLeaves: false,
  },
  {
    title: "Remaining Leave",
    stats: "1",
    isLeaves: false,
  },
];

const EmployeeLeaves = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Employees", path: "/employees/all-employees" },
          {
            label: "Leaves",
            path: "/employees/leaves-employee",
            active: true,
          },
        ]}
        title={"Leaves"}
      />

      <Stats stats={EmployeeStat} />

      <LeaveEmployee />
    </>
  );
};

export default EmployeeLeaves;
