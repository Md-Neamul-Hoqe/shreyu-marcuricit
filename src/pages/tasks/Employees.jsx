// pages
import PageTitle from "../../components/PageTitle";
import AllEmployees from "../../components/Tasks/AllEmployee";
import Search from "../../components/Tasks/employee/search";

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

      {/* Search */}
      <Search />

      {/* All employees */}
      <AllEmployees />
    </>
  );
};

export default Employees;
