import PropTypes from "prop-types";

const CreateClientAccount = ({ className = "" }) => {
  return (
    <div
      className={`w-full shadow-[0px_24px_38px_rgba(0,_0,_0,_0.03),_0px_11px_15px_rgba(0,_0,_0,_0.03)] rounded bg-light-gray box-border flex flex-col items-end justify-start pt-[23px] px-0 pb-[7px] gap-[80.5px] leading-[normal] tracking-[normal] text-center text-base text-active font-button-label border-[1px] border-solid border-gray-5 ${className}`}
    >
      <div className="self-stretch h-[493px] relative shadow-[0px_24px_38px_rgba(0,_0,_0,_0.03),_0px_11px_15px_rgba(0,_0,_0,_0.03)] rounded bg-light-gray box-border hidden border-[1px] border-solid border-gray-5" />
      <section className="self-stretch flex flex-row items-start justify-end py-0 pr-[25px] pl-[26px] box-border max-w-full text-left text-[22px] text-gray font-roboto">
        <div className="flex-1 flex flex-col items-start justify-start gap-[21.5px] max-w-full">
          <div className="flex flex-row items-start justify-start py-0 pr-2.5 pl-0 z-[1]">
            <a className="[text-decoration:none] relative leading-[29px] font-bold text-[inherit]">
              Create client account
            </a>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[14px] max-w-full text-sm text-active font-button-label">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[15px]">
              <InputField placeholder="First name*" />
              <InputField placeholder="Last name*" />
            </div>
            <PhoneNumberField />
            <InputField placeholder="Email*" />
            <InputField placeholder="Company name*" />
            <InputField placeholder="Company registration number" />
          </div>
        </div>
      </section>
      <div className="w-[285px] h-0 relative leading-[24px] hidden">
        Alert dialog prompt
      </div>
      <div className="self-stretch bg-silver-100 overflow-hidden flex flex-col items-end justify-start pt-[18px] px-[22px] pb-4 box-border max-w-full z-[1] text-sm text-secondary">
        <div className="w-[436px] h-[72px] relative bg-silver-100 hidden opacity-[0] max-w-full z-[1]" />
        <div className="w-[87px] bg-lighter box-border flex flex-row items-start justify-start py-2 px-[15px] z-[1] border-[1px] border-solid border-light">
          <div className="relative tracking-[0.01em] uppercase font-medium inline-block min-w-[55px]">
            Create
          </div>
          <img
            className="h-3 w-16 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/placeholder.svg"
          />
        </div>
        <div className="flex flex-row items-start justify-end py-0 px-[79px] mt-[-37px]">
          <div className="flex flex-row items-start justify-start py-[11px] px-4 z-[2]">
            <div className="relative tracking-[0.01em] uppercase font-medium inline-block min-w-[58px]">
              Cancel
            </div>
            <img
              className="h-3 w-[108px] relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/placeholder.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const InputField = ({ placeholder }) => (
  <div className="flex-1 flex flex-row items-start justify-start py-2.5 px-4 box-border relative min-w-[120px] z-[1]">
    <img
      className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-sm max-w-full overflow-hidden max-h-full"
      alt=""
      src="/rectangle.svg"
    />
    <input
      className="w-full [border:none] [outline:none] font-button-label text-sm bg-[transparent] h-5 flex-1 relative leading-[20px] text-secondary text-left inline-block min-w-[92px] p-0 z-[1]"
      placeholder={placeholder}
      type="text"
    />
  </div>
);

const PhoneNumberField = () => (
  <div className="self-stretch rounded-sm bg-white box-border flex flex-row items-start justify-start pt-2 px-4 pb-1.5 max-w-full [row-gap:20px] z-[1] border-[1px] border-solid border-base-200 mq303:flex-wrap">
    <div className="w-20 flex flex-row items-start justify-start py-0 pr-[13px] pl-0 box-border shrink-0 text-gray-1">
      <div className="flex-1 relative leading-[20px] inline-block max-w-[527%] shrink-0 z-[1]">
        + 971
      </div>
      <div className="h-[22px] w-[26px] relative ml-[-312px]">
        <div className="absolute top-[0px] left-[25px] bg-gainsboro w-px h-[22px] z-[1]" />
        <img
          className="absolute top-[0px] left-[0px] w-5 h-5 z-[1]"
          loading="lazy"
          alt=""
          src="/expand-more.svg"
        />
      </div>
    </div>
    <div className="w-[153px] relative leading-[20px] text-secondary inline-block shrink-0 z-[1]">
      Phone number*
    </div>
  </div>
);

CreateClientAccount.propTypes = {
  className: PropTypes.string,
};

export default CreateClientAccount;
