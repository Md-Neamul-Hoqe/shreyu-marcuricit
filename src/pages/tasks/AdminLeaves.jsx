// pages
import PageTitle from "../../components/PageTitle";
import Stats from "../../components/Tasks/leaves/stats";
import LeaveAdmin from "../../components/Tasks/leaves/leaveAdmin";
import Search from "../../components/Tasks/leaves/search";

// Dummy data
const AdminStat = [
  {
    title: "Total Presents",
    stats: "12 / 60",
    isLeaves: false,
  },
  {
    title: "Planned Leaves",
    stats: "8",
    isLeaves: true,
  },
  {
    title: "Unplanned Leaves",
    stats: "0",
    isLeaves: true,
  },
  {
    title: "Pending Requests",
    stats: "12",
    isLeaves: false,
  },
];

const AdminLeaves = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Employees", path: "/employees/all-employees" },
          {
            label: "Leaves",
            path: "/employees/leaves-admin",
            active: true,
          },
        ]}
        title={"Leaves"}
      />

      <Stats stats={AdminStat} />

      <Search />

      <LeaveAdmin />
    </>
  );
};

export default AdminLeaves;
