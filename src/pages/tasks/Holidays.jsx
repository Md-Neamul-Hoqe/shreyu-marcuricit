// pages
import PageTitle from "../../components/PageTitle";
import HolidayTable from "../../components/Tasks/holidayTable";

const Holidays = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Employees", path: "/employees/all-employees" },
          {
            label: "Holidays",
            path: "/employees/holidays",
            active: true,
          },
        ]}
        title={"Holidays"}
      />

      <HolidayTable />
    </>
  );
};

export default Holidays;
