import PropTypes from "prop-types";

const ClientCardsRowOne = ({ className = "", group10910, ayhanSeven }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start gap-[18px] text-left text-base text-gray-2 font-medium-24 mq450:flex-wrap ${className}`}
    >
      <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
        <img
          className="w-16 h-16 relative object-cover"
          loading="lazy"
          alt=""
          src={group10910}
        />
      </div>
      <div className="flex-1 flex flex-col items-start justify-start min-w-[139px]">
        <div className="self-stretch h-[30px] relative leading-[30px] font-medium inline-block overflow-hidden text-ellipsis whitespace-nowrap shrink-0">
          {ayhanSeven}
        </div>
        <div className="self-stretch h-10 relative text-smi leading-[20px] font-medium font-body text-gray-3 whitespace-pre-wrap inline-block shrink-0">
          Pilot • Flight Crew
        </div>
      </div>
    </div>
  );
};

ClientCardsRowOne.propTypes = {
  className: PropTypes.string,
  group10910: PropTypes.string,
  ayhanSeven: PropTypes.string,
};

export default ClientCardsRowOne;
