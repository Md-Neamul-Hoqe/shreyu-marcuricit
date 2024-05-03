import PageTitle from "../../components/PageTitle";
import AdminTable from "../../components/Tasks/attendance/adminTable";

const AttendanceAdmin = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Employees", path: "/employees/all-employees" },
          {
            label: "Attendance",
            path: "/employees/attendance-admin",
            active: true,
          },
        ]}
        title={"Attendance"}
      />

      <AdminTable />
    </>
  );
};

export default AttendanceAdmin;
