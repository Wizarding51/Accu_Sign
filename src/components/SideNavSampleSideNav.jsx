import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const SideNavSampleSideNav = ({ className = "" }) => {
  const navigate = useNavigate();

  const onSideNavItemsClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSideNavItemsClick1 = useCallback(() => {
    navigate("/trip");
  }, [navigate]);

  const onSideNavItemsClick2 = useCallback(() => {
    navigate("/client");
  }, [navigate]);

  const onSideNavItemsClick3 = useCallback(() => {
    navigate("/client1");
  }, [navigate]);

  const onSideNavItemsClick4 = useCallback(() => {
    navigate("/document-uploaded");
  }, [navigate]);

  const onSideNavItemsClick5 = useCallback(() => {
    navigate("/aircraft");
  }, [navigate]);

  const onSideNavItemsClick6 = useCallback(() => {
    navigate("/client2");
  }, [navigate]);

  return (
    <div
      className={`h-[840px] w-[260px] flex flex-col items-start justify-start relative text-left text-sm text-active font-body mq1000:hidden ${className}`}
    >
      <div className="self-stretch flex-1 flex flex-row items-end justify-start relative text-center text-5xl text-secondary font-medium-24">
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-white" />
        <div className="flex-1 overflow-hidden flex flex-row items-start justify-start pt-[50px] px-0 pb-0 z-[1]">
          <div className="flex-1 overflow-hidden flex flex-col items-start justify-start pt-px px-0 pb-[15px] gap-[12px]">
            <img
              className="self-stretch h-[49px] relative max-w-full overflow-hidden shrink-0 hidden"
              alt=""
              src="/hover.svg"
            />
            <div className="w-[5px] h-12 relative bg-brand-cyber hidden" />
            <img
              className="self-stretch h-px relative max-w-full overflow-hidden shrink-0 hidden"
              alt=""
              src="/side-nav-items--divider.svg"
            />
            <div className="w-0 h-0 relative hidden">
              <i className="absolute top-[0px] left-[0px] hidden font-thin items-center justify-center w-6 h-6 mq450:text-lgi">
                cog
              </i>
            </div>
            <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-lighter" />
            <div className="self-stretch flex flex-row items-start justify-end py-0 px-6 text-left text-sm text-active font-body">
              <div className="w-44 relative leading-[20px] flex items-center shrink-0">
                Settings
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="w-5 h-5 absolute !m-[0] bottom-[15px] left-[18px] z-[2]"
        loading="lazy"
        alt=""
        src="/settings.svg"
      />
      <div
        className="w-full h-[49px] !m-[0] absolute top-[0px] right-[0px] left-[0px] flex flex-col items-start justify-start pt-3 px-0 pb-[13px] box-border gap-[13px] cursor-pointer z-[2] text-gray-3"
        onClick={onSideNavItemsClick}
      >
        <img
          className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/rectangle-1.svg"
        />
        <img
          className="w-44 h-3 relative overflow-hidden shrink-0 hidden z-[1]"
          alt=""
          src="/text.svg"
        />
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-6 pl-[18px]">
          <div className="flex-1 flex flex-row items-start justify-start gap-[18px]">
            <img
              className="h-6 w-6 relative min-h-[24px] z-[1]"
              alt=""
              src="/dashboard.svg"
            />
            <img
          className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/rectangle.svg"
        />
            <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <a className="[text-decoration:none] self-stretch relative leading-[20px] text-white z-[1]">
                Dashboard
              </a>
            </div>
          </div>
        </div>
        <div className="w-[5px] h-12 relative bg-active hidden z-[3]" />
        <div className="self-stretch h-px relative box-border shrink-0 border-t-[1px] border-solid border-light" />
      </div>
      <div
        className="w-full h-[49px] !m-[0] absolute top-[147px] right-[0px] left-[0px] flex flex-col items-start justify-start pt-3 px-0 pb-[13px] box-border gap-[13px] cursor-pointer z-[2]"
        onClick={onSideNavItemsClick1}
      >
        <img
          className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/rectangle-1.svg"
        />
        <img
          className="w-44 h-3 relative overflow-hidden shrink-0 hidden z-[1]"
          alt=""
          src="/text.svg"
        />
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-6 pl-[18px]">
          <div className="flex-1 flex flex-row items-start justify-start gap-[18px]">
            <img
              className="h-6 w-6 relative min-h-[24px] z-[1]"
              alt=""
              src="/airplane-ticket.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <a className="[text-decoration:none] self-stretch relative leading-[20px] text-[inherit] z-[1]">
                Trip
              </a>
            </div>
          </div>
        </div>
        <div className="w-[5px] h-12 relative bg-active hidden z-[3]" />
        <div className="self-stretch h-px relative box-border shrink-0 border-t-[1px] border-solid border-light" />
      </div>
      <div
        className="w-full h-[49px] !m-[0] absolute top-[49px] right-[0px] left-[0px] flex flex-col items-start justify-start pt-3 px-0 pb-[13px] box-border gap-[13px] cursor-pointer z-[2] text-white"
        onClick={onSideNavItemsClick2}
      >
        
        <img
          className="w-44 h-3 relative overflow-hidden shrink-0 hidden z-[1]"
          alt=""
          src="/text.svg"
        />
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-6 pl-[18px]">
          <div className="flex-1 flex flex-row items-start justify-start gap-[18px]">
            <img
              className="h-6 w-6 relative min-h-[24px] z-[1]"
              alt=""
              src="/person-3.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <a className="[text-decoration:none] self-stretch relative leading-[20px] text-[#828282] z-[1]">
                Client
              </a>
            </div>
          </div>
        </div>
        <div className="w-[5px] h-12 relative bg-active hidden z-[3]" />
        <div className="self-stretch h-px relative box-border shrink-0 border-t-[1px] border-solid border-light" />
        <div className="w-[100px] h-[100px] absolute !m-[0] bottom-[-31px] left-[19px] overflow-hidden shrink-0 z-[2]" />
      </div>
      <div
        className="w-full h-[49px] !m-[0] absolute top-[98px] right-[0px] left-[0px] flex flex-col items-start justify-start pt-3 px-0 pb-[13px] box-border gap-[13px] cursor-pointer z-[2]"
        onClick={onSideNavItemsClick3}
      >
        <img
          className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/rectangle-1.svg"
        />
        <img
          className="w-44 h-3 relative overflow-hidden shrink-0 hidden z-[1]"
          alt=""
          src="/text.svg"
        />
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-6 pl-[18px]">
          <div className="flex-1 flex flex-row items-start justify-start gap-[18px]">
            <img
              className="h-6 w-6 relative min-h-[24px] z-[1]"
              alt=""
              src="/groups-2.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <div className="self-stretch relative leading-[20px] z-[1]">
                Crew
              </div>
            </div>
          </div>
        </div>
        <div className="w-[5px] h-12 relative bg-active hidden z-[3]" />
        <div className="self-stretch h-px relative box-border shrink-0 border-t-[1px] border-solid border-light" />
      </div>
      <div className="w-full h-[49px] !m-[0] absolute top-[196px] right-[0px] left-[0px] flex flex-col items-start justify-start pt-3 px-0 pb-[13px] box-border gap-[13px] z-[2]">
        <img
          className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/rectangle-1.svg"
        />
        <img
          className="w-44 h-3 relative overflow-hidden shrink-0 hidden z-[1]"
          alt=""
          src="/text.svg"
        />
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-6 pl-[18px]">
          <div className="flex-1 flex flex-row items-start justify-start gap-[18px]">
            <img
              className="h-6 w-6 relative min-h-[24px] z-[1]"
              alt=""
              src="/gavel.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <a className="[text-decoration:none] self-stretch relative leading-[20px] text-[inherit] z-[1]">
                Contract
              </a>
            </div>
          </div>
        </div>
        <div className="w-[5px] h-12 relative bg-active hidden z-[3]" />
        <div className="self-stretch h-px relative box-border shrink-0 border-t-[1px] border-solid border-light" />
      </div>
      <div
        className="w-full h-[49px] !m-[0] absolute top-[245px] right-[0px] left-[0px] flex flex-col items-start justify-start pt-3 px-0 pb-[13px] box-border gap-[13px] cursor-pointer z-[2]"
        onClick={onSideNavItemsClick4}
      >
        <img
          className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/rectangle-1.svg"
        />
        <img
          className="w-44 h-3 relative overflow-hidden shrink-0 hidden z-[1]"
          alt=""
          src="/text.svg"
        />
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-6 pl-[18px]">
          <div className="flex-1 flex flex-row items-start justify-start gap-[18px]">
            <img
              className="h-6 w-6 relative min-h-[24px] z-[1]"
              alt=""
              src="/description.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <a className="[text-decoration:none] self-stretch relative leading-[20px] text-[inherit] z-[1]">
                Document
              </a>
            </div>
          </div>
        </div>
        <div className="w-[5px] h-12 relative bg-active hidden z-[3]" />
        <div className="self-stretch h-px relative box-border shrink-0 border-t-[1px] border-solid border-light" />
      </div>
      <div
        className="w-full h-[49px] !m-[0] absolute top-[294px] right-[0px] left-[0px] flex flex-col items-start justify-start pt-3 px-0 pb-[13px] box-border gap-[13px] cursor-pointer z-[2]"
        onClick={onSideNavItemsClick5}
      >
        <img
          className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/rectangle-1.svg"
        />
        <img
          className="w-44 h-3 relative overflow-hidden shrink-0 hidden z-[1]"
          alt=""
          src="/text.svg"
        />
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-6 pl-[18px]">
          <div className="flex-1 flex flex-row items-start justify-start gap-[18px]">
            <img
              className="h-6 w-6 relative min-h-[24px] z-[1]"
              alt=""
              src="/connecting-airports.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <div className="self-stretch relative leading-[20px] z-[1]">
                Aircraft
              </div>
            </div>
          </div>
        </div>
        <div className="w-[5px] h-12 relative bg-active hidden z-[3]" />
        <div className="self-stretch h-px relative box-border shrink-0 border-t-[1px] border-solid border-light" />
      </div>
      <div
        className="w-full h-[49px] !m-[0] absolute top-[343px] right-[0px] left-[0px] flex flex-col items-start justify-start pt-3 px-0 pb-[13px] box-border gap-[13px] cursor-pointer z-[2]"
        onClick={onSideNavItemsClick6}
      >
        <img
          className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/rectangle-1.svg"
        />
        <img
          className="w-44 h-3 relative overflow-hidden shrink-0 hidden z-[1]"
          alt=""
          src="/text.svg"
        />
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-6 pl-[18px]">
          <div className="flex-1 flex flex-row items-start justify-start gap-[18px]">
            <img
              className="h-6 w-6 relative min-h-[24px] z-[1]"
              alt=""
              src="/credit-score.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <div className="self-stretch relative leading-[20px] z-[1]">
                Bank detail
              </div>
            </div>
          </div>
        </div>
        <div className="w-[5px] h-12 relative bg-active hidden z-[3]" />
        <div className="self-stretch h-px relative box-border shrink-0 border-t-[1px] border-solid border-light" />
      </div>
    </div>
  );
};

SideNavSampleSideNav.propTypes = {
  className: PropTypes.string,
};

export default SideNavSampleSideNav;
