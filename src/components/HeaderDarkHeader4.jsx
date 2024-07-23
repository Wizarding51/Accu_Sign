import PropTypes from "prop-types";

const HeaderDarkHeader = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch bg-white overflow-hidden flex flex-row items-start justify-between top-[0] z-[99] sticky gap-[20px] text-left text-7xl text-gray-2 font-sacramento ${className}`}
    >
      <div className="w-[260px] bg-white flex flex-row items-start justify-start gap-[10px]">
        <img
          className="h-[60px] w-16 relative overflow-hidden shrink-0 object-cover"
          loading="lazy"
          alt=""
          src="/burger-menu1@2x.png"
        />
        <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
          <div className="flex flex-row items-start justify-start">
            <div className="flex flex-row items-start justify-start py-0 pr-[23px] pl-0">
              <a className="[text-decoration:none] relative text-[inherit] inline-block [text-shadow:0.2px_0_0_#4f4f4f,_0_0.2px_0_#4f4f4f,_-0.2px_0_0_#4f4f4f,_0_-0.2px_0_#4f4f4f] min-w-[104px] whitespace-nowrap">
                Accu Sign
              </a>
              <div className="flex flex-col items-start justify-start pt-7 px-0 pb-0 ml-[-77px] text-5xs text-gray-3 font-medium-24">
                <a className="[text-decoration:none] relative tracking-[0.5em] uppercase font-medium text-[inherit] inline-block min-w-[54px] z-[1]">
                  portal
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[60px] w-[174px] flex flex-row items-start justify-start text-center text-5xl text-base font-medium-24">
        <div className="flex flex-col items-start justify-start py-4 px-[19px]">
          <img
            className="w-6 h-6 relative"
            loading="lazy"
            alt=""
            src="/notifications.svg"
          />
        </div>
        <div className="h-[62px] flex-1 box-border flex flex-row items-start justify-between py-3.5 pr-[18px] pl-4 gap-[20px] border-[1px] border-solid border-gray-6">
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
      </div>
    </header>
  );
};

HeaderDarkHeader.propTypes = {
  className: PropTypes.string,
};

export default HeaderDarkHeader;
