// pages
import PageTitle from "../../components/PageTitle";
import AllEmployees from "../../components/Tasks/AllEmployee";

const Employees = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Employees", path: "/employees/all-employees" },
          {
            label: "All Employees",
            path: "/employees/all-employees",
            active: true,
          },
        ]}
        title={"Employees"}
      />

      {/* TODO: Search */}

      {/* All employees */}
      <AllEmployees />
    </>
  );
};

export default Employees;
