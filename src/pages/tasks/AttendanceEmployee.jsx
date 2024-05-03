import PageTitle from "../../components/PageTitle";

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
    </>
  );
};

export default AttendanceEmployee;
