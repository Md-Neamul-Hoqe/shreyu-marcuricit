import FeatherIcons from "feather-icons-react";

const AttendanceTic = ({ attendance }: { attendance: boolean }) => {
  return (
    <div>
      {attendance ? (
        <FeatherIcons
          icon="ticcheck"
          className="icon-dual text-white icon-xs me-1"
        />
      ) : (
        <FeatherIcons
          icon="x"
          className="icon-dual text-warning icon-xs me-1"
        />
      )}
    </div>
  );
};

export default AttendanceTic;
