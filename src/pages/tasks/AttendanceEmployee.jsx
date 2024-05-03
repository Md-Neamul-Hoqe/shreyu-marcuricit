import PageTitle from "../../components/PageTitle";
import Analysis from "../../components/Tasks/attendance/analysis";
import EmployeeTable from "../../components/Tasks/attendance/employeeTable";

const AttendanceEmployee = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Employees", path: "/employees/all-employees" },
          {
            label: "Attendance",
            path: "/employees/attendance-employee",
            active: true,
          },
        ]}
        title={"Attendance"}
      />

      {/* Analysis */}
      <Analysis />

      {/* Attendance */}
      <EmployeeTable />
    </>
  );
};

export default AttendanceEmployee;
