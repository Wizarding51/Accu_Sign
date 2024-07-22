import PropTypes from "prop-types";

const PasswordFields = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch rounded-2xl bg-white flex flex-row items-end justify-between py-[31.3px] px-[33px] box-border shrink-0 max-w-full gap-[20px] text-left text-11xl text-black-40 font-medium-24 mq450:flex-wrap ${className}`}
    >
      <div className="h-[200px] w-[448px] relative rounded-2xl bg-white hidden max-w-full" />
      <div className="h-[137.4px] w-[84px] flex flex-col items-start justify-end pt-0 px-0 pb-[8.1px] box-border">
        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[9.3px]">
          <h1 className="m-0 w-[72px] h-[50px] relative text-inherit leading-[50px] font-normal font-inherit inline-block z-[1] mq450:text-lg mq450:leading-[30px] mq800:text-5xl mq800:leading-[40px]">
            Hired
          </h1>
          <div className="self-stretch flex-1 relative text-29xl leading-[70px] font-black text-darkslategray-100 z-[1] mq450:text-10xl mq450:leading-[42px] mq800:text-19xl mq800:leading-[56px]">
            960
          </div>
        </div>
      </div>
      <div className="h-[119px] w-[123.7px] flex flex-row items-start justify-start py-[44.5px] px-[39px] box-border relative text-center text-5xl text-gray-200">
        <img
          className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/group-5@2x.png"
        />
        <div className="self-stretch flex-1 relative leading-[30px] font-medium z-[2] mq450:text-lgi mq450:leading-[24px]">
          75%
        </div>
      </div>
    </div>
  );
};

PasswordFields.propTypes = {
  className: PropTypes.string,
};

export default PasswordFields;
