import PropTypes from "prop-types";

const GroupComponent = ({ className = "", header4 }) => {
  return (
    <div
      className={`bg-gray-6 flex flex-col items-start justify-start pt-[7px] px-[5px] pb-2.5 gap-[8px] z-[1] text-left text-smi text-gray-1 font-medium-24 ${className}`}
    >
      <div className="w-[219px] h-[236px] relative bg-gray-6 hidden" />
      <div className="self-stretch flex flex-row items-start justify-start relative">
        <img
          className="h-[89px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/rectangle-28@2x.png"
        />
        <img
          className="h-full w-full absolute !m-[0] top-[0px] bottom-[0px] left-[-2px] max-h-full object-cover z-[2]"
          alt=""
          src="/rectangle-32@2x.png"
        />
      </div>
      <div className="relative leading-[24px] font-medium inline-block min-w-[73px] z-[1]">
        {header4}
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-px pb-1">
        <div className="h-px flex-1 relative bg-gray-5 z-[1]" />
      </div>
      <div className="flex flex-row items-start justify-start pt-0 px-0 pb-1 gap-[11.3px] text-2xs text-gray-2">
        <div className="relative leading-[24px] inline-block min-w-[119px] z-[1]">{`Auto attach with all trips `}</div>
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
          <div className="w-[41px] h-5 relative rounded-2xl bg-base z-[1]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-2xl bg-base hidden" />
            <div className="absolute h-4/5 w-[39.02%] top-[10%] right-[56.1%] bottom-[10%] left-[4.88%] rounded-2xs bg-gray-2 z-[1]" />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-px">
        <div className="h-px flex-1 relative bg-gray-5 z-[1]" />
      </div>
      <div className="flex flex-row items-start justify-start gap-[2px] text-center text-3xs text-secondary font-body">
        <button className="cursor-pointer [border:none] py-2 px-[21px] bg-light-gray flex flex-row items-start justify-start z-[1] hover:bg-gray-5">
          <div className="relative text-3xs tracking-[0.01em] uppercase font-body text-secondary text-center inline-block min-w-[60px]">
            download
          </div>
          <img
            className="self-stretch w-16 relative max-h-full overflow-hidden shrink-0 hidden min-h-[12px]"
            alt=""
            src="/placeholder.svg"
          />
        </button>
        <div className="bg-light-gray flex flex-row items-start justify-start py-2 px-[37px] z-[1]">
          <div className="relative tracking-[0.01em] uppercase inline-block min-w-[28px]">
            Open
          </div>
          <img
            className="self-stretch w-16 relative max-h-full overflow-hidden shrink-0 hidden min-h-[12px]"
            alt=""
            src="/placeholder.svg"
          />
        </div>
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
  header4: PropTypes.string,
};

export default GroupComponent;
