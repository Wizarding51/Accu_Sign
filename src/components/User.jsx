import PropTypes from "prop-types";

const User = ({ className = "" }) => {
  return (
    <div
      className={`h-[62px] flex-1 box-border flex flex-row items-start justify-between py-3.5 pr-[18px] pl-4 gap-[20px] text-center text-5xl text-base font-medium-24 border-[1px] border-solid border-gray-6 ${className}`}
    >
      <div className="h-8 w-8 relative">
        <div className="absolute top-[calc(50%_-_12px)] right-[2px] flex items-center justify-center w-6 h-6 whitespace-nowrap">
          
        </div>
        <img
          className="absolute top-[calc(50%_-_16px)] left-[0px] w-full h-full overflow-hidden object-cover z-[1]"
          alt=""
          src="/placeholder--avatar2@2x.png"
        />
      </div>
      <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
        <img
          className="w-6 h-6 relative"
          alt=""
          src="/keyboard-arrow-down.svg"
        />
      </div>
    </div>
  );
};

User.propTypes = {
  className: PropTypes.string,
};

export default User;
