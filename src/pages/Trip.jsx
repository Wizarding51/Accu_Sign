import { useCallback } from "react";
import HeaderDarkHeader from "../components/HeaderDarkHeader";
import SideNavSampleSideNav2 from "../components/SideNavSampleSideNav2";

const Trip = () => {
  const onButtonClick = useCallback(() => {
    // Please sync "Create new trip ver-03 Basic detail" to the project
  }, []);

  return (
    <div className="w-full relative bg-gray-6 overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <HeaderDarkHeader />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <main className="self-stretch flex flex-row items-start justify-start py-0 pr-7 pl-0 box-border gap-[32px] max-w-full mq750:gap-[16px] mq1025:pl-7 mq1025:box-border">
        <SideNavSampleSideNav2 />
        <section className="flex-1 flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border max-w-[calc(100%_-_292px)] text-left text-lg text-gray-1 font-medium-24 mq1025:max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[7px] max-w-full">
            <div className="self-stretch flex flex-row items-end justify-between gap-[20px] mq450:flex-wrap">
              <div className="flex flex-row items-start justify-start py-0 pr-[11px] pl-0">
                <a className="[text-decoration:none] relative leading-[24px] font-bold text-[inherit] inline-block min-w-[67px]">
                  Trip List
                </a>
              </div>
              <button
                className="cursor-pointer [border:none] py-3 px-4 bg-gray-3 flex flex-row items-start justify-start gap-[8px]"
                onClick={onButtonClick}
              >
                <img
                  className="self-stretch w-[88px] relative max-h-full hidden min-h-[16px]"
                  alt=""
                  src="/body-placeholder1.svg"
                />
                <div className="flex flex-row items-start justify-start gap-[8px]">
                  <a className="[text-decoration:none] w-4 relative text-base font-font-awesome-icon-solid-16 text-gray-6 text-center flex items-center justify-center shrink-0">
                <i class="fa-solid fa-plus"></i>               
                  </a>
                  <div className="relative text-sm tracking-[0.01em] leading-[16px] uppercase font-medium font-body text-gray-6 text-left inline-block min-w-[127px]">
                    Create new Trip
                  </div>
                </div>
              </button>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-1 box-border max-w-full text-sm text-active font-body">
              <div className="flex-1 rounded bg-white box-border flex flex-col items-start justify-start pt-4 px-[34px] pb-[99px] gap-[0.2px] min-h-[745px] max-w-full border-[1px] border-solid border-light mq1025:pt-5 mq1025:pb-16 mq1025:box-border">
                <div className="w-[1116px] h-[745px] relative rounded bg-white box-border hidden max-w-full border-[1px] border-solid border-light" />
                <div className="self-stretch shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-white flex flex-row items-start justify-start py-[15px] px-4 box-border gap-[110px] max-w-full z-[2] text-xs text-gray-1 mq750:gap-[27px] mq1025:flex-wrap mq1025:gap-[55px]">
                  <div className="h-5 w-5 relative rounded-sm bg-white box-border hidden opacity-[0] border-[2px] border-solid border-secondary" />
                  <div className="hidden flex-row items-center justify-center gap-[32px] max-w-full mq1100:flex-wrap">
                    <img
                      className="self-stretch w-[194px] relative max-h-full overflow-hidden shrink-0 min-h-[12px]"
                      alt=""
                      src="/text1.svg"
                    />
                    <img
                      className="self-stretch w-[194px] relative max-h-full overflow-hidden shrink-0 min-h-[12px]"
                      alt=""
                      src="/text-1.svg"
                    />
                    <img
                      className="self-stretch w-[194px] relative max-h-full overflow-hidden shrink-0 min-h-[12px]"
                      alt=""
                      src="/text1.svg"
                    />
                    <img
                      className="self-stretch w-[194px] relative max-h-full overflow-hidden shrink-0 min-h-[12px]"
                      alt=""
                      src="/text-1.svg"
                    />
                    <img
                      className="self-stretch w-28 relative max-h-full overflow-hidden shrink-0 min-h-[12px]"
                      alt=""
                      src="/text-41.svg"
                    />
                  </div>
                  <a className="[text-decoration:none] relative leading-[18px] font-semibold text-[inherit] inline-block min-w-[34px]">
                    Name
                  </a>
                  <a className="[text-decoration:none] relative leading-[18px] font-semibold text-[inherit] inline-block min-w-[35px]">
                    Client
                  </a>
                  <a className="[text-decoration:none] relative leading-[18px] font-semibold text-[inherit] inline-block min-w-[51px]">
                    Location
                  </a>
                  <a className="[text-decoration:none] relative leading-[18px] font-semibold text-[inherit] inline-block min-w-[112px]">
                    Total crew member
                  </a>
                  <a className="[text-decoration:none] relative leading-[18px] font-semibold text-[inherit] inline-block min-w-[31px]">
                    Stats
                  </a>
                  <a className="[text-decoration:none] w-28 relative leading-[18px] font-semibold text-[inherit] text-right inline-block shrink-0 -translate-x-16">
                    Actions
                  </a>
                </div>
                <div className="self-stretch shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-white flex flex-row flex-wrap items-start justify-start py-2 px-4 box-border gap-[57px] max-w-full z-[1] mq750:gap-[28px]">
                  <div className="h-12 w-[1094px] relative shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-core-gray-lightest hidden max-w-full" />
                  <div className="flex-1 overflow-hidden hidden flex-row items-center justify-start gap-[32px] max-w-full mq1025:flex-wrap">
                    <div className="h-5 w-[178px] relative leading-[20px] inline-block shrink-0">
                      Cell 1
                    </div>
                    <div className="h-5 flex-1 relative leading-[20px] inline-block min-w-[167px]">
                      Cell 2
                    </div>
                    <div className="h-5 w-[110px] relative leading-[20px] inline-block shrink-0">
                      Cell 3
                    </div>
                    <div className="h-5 w-[227px] relative leading-[20px] inline-block shrink-0">
                      Cell 4...
                    </div>
                    <div className="h-5 w-[118px] relative leading-[20px] inline-block shrink-0">
                      Cell 5...
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border min-w-[549px] max-w-full text-xs mq750:min-w-full">
                    <div className="self-stretch flex flex-row items-center justify-between py-0 pr-[26px] pl-0 gap-[20px] mq750:flex-wrap">
                      <a className="[text-decoration:none] relative leading-[18px] font-semibold text-[inherit] inline-block min-w-[51px]">
                        ACC 124
                      </a>
                      <a className="[text-decoration:none] relative leading-[18px] font-semibold text-[inherit] inline-block min-w-[29px]">
                        John
                      </a>
                      <a className="[text-decoration:none] relative leading-[18px] font-semibold text-[inherit] inline-block min-w-[60px]">
                        UK to USA
                      </a>
                      <a className="[text-decoration:none] w-[54px] relative leading-[18px] font-semibold text-[inherit] inline-block shrink-0">
                        5
                      </a>
                      <div className="flex flex-row items-center justify-start gap-[29px]">
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <a className="[text-decoration:none] relative leading-[18px] font-semibold text-[inherit] inline-block min-w-[37px]">
                            Active
                          </a>
                          <img
                            className="h-4 w-4 relative"
                            alt=""
                            src="/expand-more.svg"
                          />
                        </div>
                        <div className="flex flex-row items-center justify-start">
                          <div className="relative leading-[18px] font-semibold whitespace-pre-wrap inline-block min-w-[99px]">
                            Pending • Date
                          </div>
                        </div>
                      </div>
                      <img
                        className="h-3 w-[67px] relative overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/text.svg"
                      />
                      <img
                        className="h-3 w-[118px] relative overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/text3.svg"
                      />
                    </div>
                  </div>
                  <div className="h-[18px] w-[99px] hidden z-[4]" />
                  <div className="w-28 flex flex-row items-start justify-start gap-[8px] text-center text-base text-secondary font-font-awesome-icon-solid-16">
                    <div className="h-8 flex-1 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                      <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] hidden items-center justify-center w-4 h-4">
                        sync
                      </div>
                    </div>
                    <div className="h-8 flex-1 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                      <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] flex items-center justify-center w-4 h-[19px] z-[1]">
                      <i class="fa-solid fa-trash"></i>
                      </div>
                    </div>
                    <div className="h-8 flex-1 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                      <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] leading-[19px] flex items-center justify-center w-4 h-4 whitespace-nowrap z-[1]">
                      <i class="fa-solid fa-ellipsis-vertical"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-white flex flex-row flex-wrap items-start justify-start py-2 px-4 box-border gap-[57px] max-w-full z-[1] mq750:gap-[28px]">
                  <div className="h-12 w-[1094px] relative shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-core-gray-lightest hidden max-w-full" />
                  <div className="flex-1 overflow-hidden hidden flex-row items-center justify-start gap-[32px] max-w-full mq1025:flex-wrap">
                    <div className="h-5 w-[178px] relative leading-[20px] inline-block shrink-0">
                      Cell 1
                    </div>
                    <div className="h-5 flex-1 relative leading-[20px] inline-block min-w-[167px]">
                      Cell 2
                    </div>
                    <div className="h-5 w-[110px] relative leading-[20px] inline-block shrink-0">
                      Cell 3
                    </div>
                    <div className="h-5 w-[227px] relative leading-[20px] inline-block shrink-0">
                      Cell 4...
                    </div>
                    <div className="h-5 w-[118px] relative leading-[20px] inline-block shrink-0">
                      Cell 5...
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border min-w-[549px] max-w-full text-xs mq750:min-w-full">
                    <div className="self-stretch flex flex-row items-center justify-between py-0 pr-[9px] pl-0 gap-[20px] mq750:flex-wrap">
                      <a className="[text-decoration:none] relative leading-[18px] font-semibold text-[inherit] inline-block min-w-[51px]">
                        ACC 124
                      </a>
                      <a className="[text-decoration:none] relative leading-[18px] font-semibold text-[inherit] inline-block min-w-[29px]">
                        John
                      </a>
                      <a className="[text-decoration:none] relative leading-[18px] font-semibold text-[inherit] inline-block min-w-[60px]">
                        UK to USA
                      </a>
                      <a className="[text-decoration:none] w-[54px] relative leading-[18px] font-semibold text-[inherit] inline-block shrink-0">
                        5
                      </a>
                      <div className="flex flex-row items-center justify-start gap-[29px]">
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <a className="[text-decoration:none] relative leading-[18px] font-semibold text-[inherit] inline-block min-w-[37px]">
                            Active
                          </a>
                          <img
                            className="h-4 w-4 relative"
                            alt=""
                            src="/expand-more.svg"
                          />
                        </div>
                        <div className="flex flex-row items-center justify-start">
                          <div className="relative leading-[18px] font-semibold whitespace-pre-wrap inline-block min-w-[116px]">
                            Pending • Aircraft
                          </div>
                        </div>
                      </div>
                      <img
                        className="h-3 w-[67px] relative overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/text.svg"
                      />
                      <img
                        className="h-3 w-[118px] relative overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/text3.svg"
                      />
                    </div>
                  </div>
                  <div className="h-[18px] w-[106px] hidden z-[4]" />
                  <div className="w-28 flex flex-row items-start justify-start gap-[8px] text-center text-base text-secondary font-font-awesome-icon-solid-16">
                    <div className="h-8 flex-1 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                      <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] hidden items-center justify-center w-4">
                        sync
                      </div>
                    </div>
                    <div className="h-8 flex-1 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                      <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] flex items-center justify-center w-4 h-[19px] z-[1]">
                      <i class="fa-solid fa-trash"></i>
                      </div>
                    </div>
                    <div className="h-8 flex-1 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                      <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] leading-[19px] flex items-center justify-center w-4 h-4 whitespace-nowrap z-[1]">
                      <i class="fa-solid fa-ellipsis-vertical"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-white flex flex-row flex-wrap items-start justify-start py-2 px-4 box-border gap-[57px] max-w-full z-[1] mq750:gap-[28px]">
                  <div className="h-12 w-[1094px] relative shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-core-gray-lightest hidden max-w-full" />
                  <div className="flex-1 overflow-hidden hidden flex-row items-center justify-start gap-[32px] max-w-full mq1025:flex-wrap">
                    <div className="h-5 w-[178px] relative leading-[20px] inline-block shrink-0">
                      Cell 1
                    </div>
                    <div className="h-5 flex-1 relative leading-[20px] inline-block min-w-[167px]">
                      Cell 2
                    </div>
                    <div className="h-5 w-[110px] relative leading-[20px] inline-block shrink-0">
                      Cell 3
                    </div>
                    <div className="h-5 w-[227px] relative leading-[20px] inline-block shrink-0">
                      Cell 4...
                    </div>
                    <div className="h-5 w-[118px] relative leading-[20px] inline-block shrink-0">
                      Cell 5...
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border min-w-[549px] max-w-full text-xs mq750:min-w-full">
                    <div className="self-stretch flex flex-row items-center justify-between py-0 pr-[55px] pl-0 gap-[20px] mq750:flex-wrap mq1025:pr-[27px] mq1025:box-border">
                      <a className="[text-decoration:none] relative leading-[18px] font-semibold text-[inherit] inline-block min-w-[51px]">
                        ACC 124
                      </a>
                      <a className="[text-decoration:none] relative leading-[18px] font-semibold text-[inherit] inline-block min-w-[29px]">
                        John
                      </a>
                      <a className="[text-decoration:none] relative leading-[18px] font-semibold text-[inherit] inline-block min-w-[60px]">
                        UK to USA
                      </a>
                      <a className="[text-decoration:none] w-[54px] relative leading-[18px] font-semibold text-[inherit] inline-block shrink-0">
                        5
                      </a>
                      <div className="flex flex-row items-center justify-start gap-[29px]">
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <a className="[text-decoration:none] relative leading-[18px] font-semibold text-[inherit] inline-block min-w-[37px]">
                            Active
                          </a>
                          <img
                            className="h-4 w-4 relative"
                            alt=""
                            src="/expand-more.svg"
                          />
                        </div>
                        <div className="flex flex-row items-center justify-start">
                          <div className="relative leading-[18px] font-semibold whitespace-pre-wrap inline-block min-w-[70px]">
                            Done • All
                          </div>
                        </div>
                      </div>
                      <img
                        className="h-3 w-[67px] relative overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/text.svg"
                      />
                      <img
                        className="h-3 w-[118px] relative overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/text3.svg"
                      />
                    </div>
                  </div>
                  <div className="w-28 flex flex-row items-start justify-start gap-[8px] text-center text-base text-secondary font-font-awesome-icon-solid-16">
                    <div className="h-8 flex-1 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                      <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] hidden items-center justify-center w-4">
                        sync
                      </div>
                    </div>
                    <div className="h-8 flex-1 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                      <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] flex items-center justify-center w-4 h-[19px] z-[1]">
                      <i class="fa-solid fa-trash"></i>
                      </div>
                    </div>
                    <div className="h-8 flex-1 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                      <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] leading-[19px] flex items-center justify-center w-4 h-4 whitespace-nowrap z-[1]">
                      <i class="fa-solid fa-ellipsis-vertical"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-white flex flex-row flex-wrap items-start justify-start py-2 px-4 box-border gap-[57px] max-w-full z-[1] mq750:gap-[28px]">
                  <div className="h-12 w-[1094px] relative shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-core-gray-lightest hidden max-w-full" />
                  <div className="flex-1 overflow-hidden hidden flex-row items-center justify-start gap-[32px] max-w-full mq1025:flex-wrap">
                    <div className="h-5 w-[178px] relative leading-[20px] inline-block shrink-0">
                      Cell 1
                    </div>
                    <div className="h-5 flex-1 relative leading-[20px] inline-block min-w-[167px]">
                      Cell 2
                    </div>
                    <div className="h-5 w-[110px] relative leading-[20px] inline-block shrink-0">
                      Cell 3
                    </div>
                    <div className="h-5 w-[227px] relative leading-[20px] inline-block shrink-0">
                      Cell 4...
                    </div>
                    <div className="h-5 w-[118px] relative leading-[20px] inline-block shrink-0">
                      Cell 5...
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border min-w-[549px] max-w-full text-xs mq750:min-w-full">
                    <div className="self-stretch flex flex-row items-center justify-between py-0 px-0 gap-[20px] mq750:flex-wrap">
                      <a className="[text-decoration:none] relative leading-[18px] font-semibold text-[inherit] inline-block min-w-[51px]">
                        ACC 124
                      </a>
                      <a className="[text-decoration:none] relative leading-[18px] font-semibold text-[inherit] inline-block min-w-[29px]">
                        John
                      </a>
                      <a className="[text-decoration:none] relative leading-[18px] font-semibold text-[inherit] inline-block min-w-[60px]">
                        UK to USA
                      </a>
                      <a className="[text-decoration:none] w-[54px] relative leading-[18px] font-semibold text-[inherit] inline-block shrink-0">
                        5
                      </a>
                      <div className="flex flex-row items-center justify-start gap-[28px]">
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <a className="[text-decoration:none] relative leading-[18px] font-semibold text-[inherit] inline-block min-w-[37px]">
                            Active
                          </a>
                          <img
                            className="h-4 w-4 relative"
                            alt=""
                            src="/expand-more.svg"
                          />
                        </div>
                        <div className="flex flex-row items-center justify-start">
                          <div className="relative leading-[18px] font-semibold whitespace-pre-wrap">
                            Pending • Crew member
                          </div>
                        </div>
                      </div>
                      <img
                        className="h-3 w-[67px] relative overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/text.svg"
                      />
                      <img
                        className="h-3 w-[118px] relative overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/text3.svg"
                      />
                    </div>
                  </div>
                  <div className="w-28 flex flex-row items-start justify-start gap-[8px] text-center text-base text-secondary font-font-awesome-icon-solid-16">
                    <div className="h-8 flex-1 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                      <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] hidden items-center justify-center w-4">
                        sync
                      </div>
                    </div>
                    <div className="h-8 flex-1 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                      <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] flex items-center justify-center w-4 h-[19px] z-[1]">
                      <i class="fa-solid fa-trash"></i>
                      </div>
                    </div>
                    <div className="h-8 flex-1 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                      <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] leading-[19px] flex items-center justify-center w-4 h-4 whitespace-nowrap z-[1]">
                      <i class="fa-solid fa-ellipsis-vertical"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-white flex flex-row flex-wrap items-start justify-start py-2 px-4 box-border gap-[57px] max-w-full z-[1] mq750:gap-[28px]">
                  <div className="h-12 w-[1094px] relative shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-core-gray-lightest hidden max-w-full" />
                  <div className="flex-1 overflow-hidden hidden flex-row items-center justify-start gap-[32px] max-w-full mq1025:flex-wrap">
                    <div className="h-5 w-[178px] relative leading-[20px] inline-block shrink-0">
                      Cell 1
                    </div>
                    <div className="h-5 flex-1 relative leading-[20px] inline-block min-w-[167px]">
                      Cell 2
                    </div>
                    <div className="h-5 w-[110px] relative leading-[20px] inline-block shrink-0">
                      Cell 3
                    </div>
                    <div className="h-5 w-[227px] relative leading-[20px] inline-block shrink-0">
                      Cell 4...
                    </div>
                    <div className="h-5 w-[118px] relative leading-[20px] inline-block shrink-0">
                      Cell 5...
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border min-w-[549px] max-w-full text-xs mq750:min-w-full">
                    <div className="self-stretch flex flex-row items-center justify-between py-0 pr-[19px] pl-0 gap-[20px] mq750:flex-wrap">
                      <a className="[text-decoration:none] relative leading-[18px] font-semibold text-[inherit] inline-block min-w-[51px]">
                        ACC 124
                      </a>
                      <div className="relative leading-[18px] font-semibold inline-block min-w-[29px]">
                        John
                      </div>
                      <a className="[text-decoration:none] relative leading-[18px] font-semibold text-[inherit] inline-block min-w-[60px]">
                        UK to USA
                      </a>
                      <a className="[text-decoration:none] w-[54px] relative leading-[18px] font-semibold text-[inherit] inline-block shrink-0">
                        5
                      </a>
                      <div className="flex flex-row items-center justify-start gap-[29px]">
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative leading-[18px] font-semibold inline-block min-w-[37px]">
                            Active
                          </div>
                          <img
                            className="h-4 w-4 relative"
                            alt=""
                            src="/expand-more.svg"
                          />
                        </div>
                        <div className="flex flex-row items-center justify-start">
                          <div className="relative leading-[18px] font-semibold whitespace-pre-wrap inline-block min-w-[106px]">
                            Pending • Route
                          </div>
                        </div>
                      </div>
                      <img
                        className="h-3 w-[67px] relative overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/text.svg"
                      />
                      <img
                        className="h-3 w-[118px] relative overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/text3.svg"
                      />
                    </div>
                  </div>
                  <div className="w-28 flex flex-row items-start justify-start gap-[8px] text-center text-base text-secondary font-font-awesome-icon-solid-16">
                    <div className="h-8 flex-1 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                      <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] hidden items-center justify-center w-4">
                        sync
                      </div>
                    </div>
                    <div className="h-8 flex-1 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                      <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] flex items-center justify-center w-4 h-[19px] z-[1]">
                      <i class="fa-solid fa-trash"></i>
                      </div>
                    </div>
                    <div className="h-8 flex-1 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                      <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] leading-[19px] flex items-center justify-center w-4 h-4 whitespace-nowrap z-[1]">
                      <i class="fa-solid fa-ellipsis-vertical"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-white flex flex-row flex-wrap items-start justify-start py-2 px-4 box-border gap-[57px] max-w-full z-[2] mq750:gap-[28px]">
                  <div className="h-12 w-[1094px] relative shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-core-gray-lightest hidden max-w-full" />
                  <div className="flex-1 overflow-hidden hidden flex-row items-center justify-start gap-[32px] max-w-full mq1025:flex-wrap">
                    <div className="h-5 w-[178px] relative leading-[20px] inline-block shrink-0">
                      Cell 1
                    </div>
                    <div className="h-5 flex-1 relative leading-[20px] inline-block min-w-[167px]">
                      Cell 2
                    </div>
                    <div className="h-5 w-[110px] relative leading-[20px] inline-block shrink-0">
                      Cell 3
                    </div>
                    <div className="h-5 w-[227px] relative leading-[20px] inline-block shrink-0">
                      Cell 4...
                    </div>
                    <div className="h-5 w-[118px] relative leading-[20px] inline-block shrink-0">
                      Cell 5...
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border min-w-[549px] max-w-full text-xs mq750:min-w-full">
                    <div className="self-stretch flex flex-row items-center justify-between py-0 px-0 gap-[20px] mq750:flex-wrap">
                      <div className="relative leading-[18px] font-semibold inline-block min-w-[51px]">
                        ACC 124
                      </div>
                      <div className="relative leading-[18px] font-semibold inline-block min-w-[29px]">
                        John
                      </div>
                      <a className="[text-decoration:none] relative leading-[18px] font-semibold text-[inherit] inline-block min-w-[60px]">
                        UK to USA
                      </a>
                      <div className="w-[54px] relative leading-[18px] font-semibold inline-block shrink-0">
                        5
                      </div>
                      <div className="flex flex-row items-center justify-start gap-[29px]">
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative leading-[18px] font-semibold inline-block min-w-[37px]">
                            Active
                          </div>
                          <img
                            className="h-4 w-4 relative"
                            alt=""
                            src="/expand-more.svg"
                          />
                        </div>
                        <div className="flex flex-row items-center justify-start">
                          <div className="relative leading-[18px] font-semibold whitespace-pre-wrap">
                            Pending • Contract LOI
                          </div>
                        </div>
                      </div>
                      <img
                        className="h-3 w-[67px] relative overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/text.svg"
                      />
                      <img
                        className="h-3 w-[118px] relative overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/text3.svg"
                      />
                    </div>
                  </div>
                  <div className="w-28 flex flex-row items-start justify-start gap-[8px] text-center text-base text-secondary font-font-awesome-icon-solid-16">
                    <div className="h-8 flex-1 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                      <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] hidden items-center justify-center w-4">
                        sync
                      </div>
                    </div>
                    <div className="h-8 flex-1 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                      <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] flex items-center justify-center w-4 h-[19px] z-[1]">
                      <i class="fa-solid fa-trash"></i>
                      </div>
                    </div>
                    <div className="h-8 flex-1 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                      <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] leading-[19px] flex items-center justify-center w-4 h-4 whitespace-nowrap z-[1]">
                      <i class="fa-solid fa-ellipsis-vertical"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-white flex flex-row flex-wrap items-start justify-start py-2 px-4 box-border gap-[57px] max-w-full z-[1] mq750:gap-[28px]">
                  <div className="h-12 w-[1094px] relative shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-core-gray-lightest hidden max-w-full" />
                  <div className="flex-1 overflow-hidden hidden flex-row items-center justify-start gap-[32px] max-w-full mq1025:flex-wrap">
                    <div className="h-5 w-[178px] relative leading-[20px] inline-block shrink-0">
                      Cell 1
                    </div>
                    <div className="h-5 flex-1 relative leading-[20px] inline-block min-w-[167px]">
                      Cell 2
                    </div>
                    <div className="h-5 w-[110px] relative leading-[20px] inline-block shrink-0">
                      Cell 3
                    </div>
                    <div className="h-5 w-[227px] relative leading-[20px] inline-block shrink-0">
                      Cell 4...
                    </div>
                    <div className="h-5 w-[118px] relative leading-[20px] inline-block shrink-0">
                      Cell 5...
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border min-w-[549px] max-w-full text-xs mq750:min-w-full">
                    <div className="self-stretch flex flex-row items-center justify-between py-0 pr-[26px] pl-0 gap-[20px] mq750:flex-wrap">
                      <div className="relative leading-[18px] font-semibold inline-block min-w-[51px]">
                        ACC 124
                      </div>
                      <div className="relative leading-[18px] font-semibold inline-block min-w-[29px]">
                        John
                      </div>
                      <div className="relative leading-[18px] font-semibold inline-block min-w-[60px]">
                        UK to USA
                      </div>
                      <div className="w-[54px] relative leading-[18px] font-semibold inline-block shrink-0">
                        5
                      </div>
                      <div className="flex flex-row items-center justify-start gap-[29px]">
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative leading-[18px] font-semibold inline-block min-w-[37px]">
                            Active
                          </div>
                          <img
                            className="h-4 w-4 relative"
                            alt=""
                            src="/expand-more.svg"
                          />
                        </div>
                        <div className="flex flex-row items-center justify-start">
                          <div className="relative leading-[18px] font-semibold whitespace-pre-wrap inline-block min-w-[99px]">
                            Pending • Date
                          </div>
                        </div>
                      </div>
                      <img
                        className="h-3 w-[67px] relative overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/text.svg"
                      />
                      <img
                        className="h-3 w-[118px] relative overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/text3.svg"
                      />
                    </div>
                  </div>
                  <div className="w-28 flex flex-row items-start justify-start gap-[8px] text-center text-base text-secondary font-font-awesome-icon-solid-16">
                    <div className="h-8 flex-1 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                      <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] hidden items-center justify-center w-4 h-4">
                        sync
                      </div>
                    </div>
                    <div className="h-8 flex-1 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                      <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] flex items-center justify-center w-4 h-[19px] z-[1]">
                      <i class="fa-solid fa-trash"></i>
                      </div>
                    </div>
                    <div className="h-8 flex-1 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                      <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] leading-[19px] flex items-center justify-center w-4 h-4 whitespace-nowrap z-[1]">
                      <i class="fa-solid fa-ellipsis-vertical"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-white flex flex-row flex-wrap items-start justify-start py-2 px-4 box-border gap-[57px] max-w-full z-[1] mq750:gap-[28px]">
                  <div className="h-12 w-[1094px] relative shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-core-gray-lightest hidden max-w-full" />
                  <div className="flex-1 overflow-hidden hidden flex-row items-center justify-start gap-[32px] max-w-full mq1025:flex-wrap">
                    <div className="h-5 w-[178px] relative leading-[20px] inline-block shrink-0">
                      Cell 1
                    </div>
                    <div className="h-5 flex-1 relative leading-[20px] inline-block min-w-[167px]">
                      Cell 2
                    </div>
                    <div className="h-5 w-[110px] relative leading-[20px] inline-block shrink-0">
                      Cell 3
                    </div>
                    <div className="h-5 w-[227px] relative leading-[20px] inline-block shrink-0">
                      Cell 4...
                    </div>
                    <div className="h-5 w-[118px] relative leading-[20px] inline-block shrink-0">
                      Cell 5...
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border min-w-[549px] max-w-full text-xs mq750:min-w-full">
                    <div className="self-stretch flex flex-row items-center justify-between py-0 pr-[9px] pl-0 gap-[20px] mq750:flex-wrap">
                      <div className="relative leading-[18px] font-semibold inline-block min-w-[51px]">
                        ACC 124
                      </div>
                      <div className="relative leading-[18px] font-semibold inline-block min-w-[29px]">
                        John
                      </div>
                      <div className="relative leading-[18px] font-semibold inline-block min-w-[60px]">
                        UK to USA
                      </div>
                      <div className="w-[54px] relative leading-[18px] font-semibold inline-block shrink-0">
                        5
                      </div>
                      <div className="flex flex-row items-center justify-start gap-[29px]">
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative leading-[18px] font-semibold inline-block min-w-[37px]">
                            Active
                          </div>
                          <img
                            className="h-4 w-4 relative"
                            alt=""
                            src="/expand-more.svg"
                          />
                        </div>
                        <div className="flex flex-row items-center justify-start">
                          <div className="relative leading-[18px] font-semibold whitespace-pre-wrap inline-block min-w-[116px]">
                            Pending • Aircraft
                          </div>
                        </div>
                      </div>
                      <img
                        className="h-3 w-[67px] relative overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/text.svg"
                      />
                      <img
                        className="h-3 w-[118px] relative overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/text3.svg"
                      />
                    </div>
                  </div>
                  <div className="w-28 flex flex-row items-start justify-start gap-[8px] text-center text-base text-secondary font-font-awesome-icon-solid-16">
                    <div className="h-8 flex-1 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                      <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] hidden items-center justify-center w-4">
                        sync
                      </div>
                    </div>
                    <div className="h-8 flex-1 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                      <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] flex items-center justify-center w-4 h-[19px] z-[1]">
                      <i class="fa-solid fa-trash"></i>
                      </div>
                    </div>
                    <div className="h-8 flex-1 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                      <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] leading-[19px] flex items-center justify-center w-4 h-4 whitespace-nowrap z-[1]">
                      <i class="fa-solid fa-ellipsis-vertical"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-white flex flex-row flex-wrap items-start justify-start py-2 px-4 box-border gap-[57px] max-w-full z-[1] mq750:gap-[28px]">
                  <div className="h-12 w-[1094px] relative shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-core-gray-lightest hidden max-w-full" />
                  <div className="flex-1 overflow-hidden hidden flex-row items-center justify-start gap-[32px] max-w-full mq1025:flex-wrap">
                    <div className="h-5 w-[178px] relative leading-[20px] inline-block shrink-0">
                      Cell 1
                    </div>
                    <div className="h-5 flex-1 relative leading-[20px] inline-block min-w-[167px]">
                      Cell 2
                    </div>
                    <div className="h-5 w-[110px] relative leading-[20px] inline-block shrink-0">
                      Cell 3
                    </div>
                    <div className="h-5 w-[227px] relative leading-[20px] inline-block shrink-0">
                      Cell 4...
                    </div>
                    <div className="h-5 w-[118px] relative leading-[20px] inline-block shrink-0">
                      Cell 5...
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border min-w-[549px] max-w-full text-xs mq750:min-w-full">
                    <div className="self-stretch flex flex-row items-center justify-between py-0 pr-[55px] pl-0 gap-[20px] mq750:flex-wrap mq1025:pr-[27px] mq1025:box-border">
                      <div className="relative leading-[18px] font-semibold inline-block min-w-[51px]">
                        ACC 124
                      </div>
                      <div className="relative leading-[18px] font-semibold inline-block min-w-[29px]">
                        John
                      </div>
                      <div className="relative leading-[18px] font-semibold inline-block min-w-[60px]">
                        UK to USA
                      </div>
                      <div className="w-[54px] relative leading-[18px] font-semibold inline-block shrink-0">
                        5
                      </div>
                      <div className="flex flex-row items-center justify-start gap-[29px]">
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative leading-[18px] font-semibold inline-block min-w-[37px]">
                            Active
                          </div>
                          <img
                            className="h-4 w-4 relative"
                            alt=""
                            src="/expand-more.svg"
                          />
                        </div>
                        <div className="flex flex-row items-center justify-start">
                          <div className="relative leading-[18px] font-semibold whitespace-pre-wrap inline-block min-w-[70px]">
                            Done • All
                          </div>
                        </div>
                      </div>
                      <img
                        className="h-3 w-[67px] relative overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/text.svg"
                      />
                      <img
                        className="h-3 w-[118px] relative overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/text3.svg"
                      />
                    </div>
                  </div>
                  <div className="w-28 flex flex-row items-start justify-start gap-[8px] text-center text-base text-secondary font-font-awesome-icon-solid-16">
                    <div className="h-8 flex-1 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                      <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] hidden items-center justify-center w-4">
                        sync
                      </div>
                    </div>
                    <div className="h-8 flex-1 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                      <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] flex items-center justify-center w-4 h-[19px] z-[1]">
                      <i class="fa-solid fa-trash"></i>
                      </div>
                    </div>
                    <div className="h-8 flex-1 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                      <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] leading-[19px] flex items-center justify-center w-4 h-4 whitespace-nowrap z-[1]">
                      <i class="fa-solid fa-ellipsis-vertical"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-white flex flex-row flex-wrap items-start justify-start py-2 px-4 box-border gap-[57px] max-w-full z-[1] mq750:gap-[28px]">
                  <div className="h-12 w-[1094px] relative shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-core-gray-lightest hidden max-w-full" />
                  <div className="flex-1 overflow-hidden hidden flex-row items-center justify-start gap-[32px] max-w-full mq1025:flex-wrap">
                    <div className="h-5 w-[178px] relative leading-[20px] inline-block shrink-0">
                      Cell 1
                    </div>
                    <div className="h-5 flex-1 relative leading-[20px] inline-block min-w-[167px]">
                      Cell 2
                    </div>
                    <div className="h-5 w-[110px] relative leading-[20px] inline-block shrink-0">
                      Cell 3
                    </div>
                    <div className="h-5 w-[227px] relative leading-[20px] inline-block shrink-0">
                      Cell 4...
                    </div>
                    <div className="h-5 w-[118px] relative leading-[20px] inline-block shrink-0">
                      Cell 5...
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border min-w-[549px] max-w-full text-xs mq750:min-w-full">
                    <div className="self-stretch flex flex-row items-center justify-between py-0 px-0 gap-[20px] mq750:flex-wrap">
                      <div className="relative leading-[18px] font-semibold inline-block min-w-[51px]">
                        ACC 124
                      </div>
                      <div className="relative leading-[18px] font-semibold inline-block min-w-[29px]">
                        John
                      </div>
                      <div className="relative leading-[18px] font-semibold inline-block min-w-[60px]">
                        UK to USA
                      </div>
                      <div className="w-[54px] relative leading-[18px] font-semibold inline-block shrink-0">
                        5
                      </div>
                      <div className="flex flex-row items-center justify-start gap-[28px]">
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative leading-[18px] font-semibold inline-block min-w-[37px]">
                            Active
                          </div>
                          <img
                            className="h-4 w-4 relative"
                            alt=""
                            src="/expand-more.svg"
                          />
                        </div>
                        <div className="flex flex-row items-center justify-start">
                          <div className="relative leading-[18px] font-semibold whitespace-pre-wrap">
                            Pending • Crew member
                          </div>
                        </div>
                      </div>
                      <img
                        className="h-3 w-[67px] relative overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/text.svg"
                      />
                      <img
                        className="h-3 w-[118px] relative overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/text3.svg"
                      />
                    </div>
                  </div>
                  <div className="w-28 flex flex-row items-start justify-start gap-[8px] text-center text-base text-secondary font-font-awesome-icon-solid-16">
                    <div className="h-8 flex-1 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                      <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] hidden items-center justify-center w-4">
                        sync
                      </div>
                    </div>
                    <div className="h-8 flex-1 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                      <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] flex items-center justify-center w-4 h-[19px] z-[1]">
                      <i class="fa-solid fa-trash"></i>
                      </div>
                    </div>
                    <div className="h-8 flex-1 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                      <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] leading-[19px] flex items-center justify-center w-4 h-4 whitespace-nowrap z-[1]">
                      <i class="fa-solid fa-ellipsis-vertical"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-white flex flex-row flex-wrap items-start justify-start py-2 px-4 box-border gap-[57px] max-w-full z-[1] mq750:gap-[28px]">
                  <div className="h-12 w-[1094px] relative shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-core-gray-lightest hidden max-w-full" />
                  <div className="flex-1 overflow-hidden hidden flex-row items-center justify-start gap-[32px] max-w-full mq1025:flex-wrap">
                    <div className="h-5 w-[178px] relative leading-[20px] inline-block shrink-0">
                      Cell 1
                    </div>
                    <div className="h-5 flex-1 relative leading-[20px] inline-block min-w-[167px]">
                      Cell 2
                    </div>
                    <div className="h-5 w-[110px] relative leading-[20px] inline-block shrink-0">
                      Cell 3
                    </div>
                    <div className="h-5 w-[227px] relative leading-[20px] inline-block shrink-0">
                      Cell 4...
                    </div>
                    <div className="h-5 w-[118px] relative leading-[20px] inline-block shrink-0">
                      Cell 5...
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border min-w-[549px] max-w-full text-xs mq750:min-w-full">
                    <div className="self-stretch flex flex-row items-center justify-between py-0 pr-[19px] pl-0 gap-[20px] mq750:flex-wrap">
                      <div className="relative leading-[18px] font-semibold inline-block min-w-[51px]">
                        ACC 124
                      </div>
                      <div className="relative leading-[18px] font-semibold inline-block min-w-[29px]">
                        John
                      </div>
                      <div className="relative leading-[18px] font-semibold inline-block min-w-[60px]">
                        UK to USA
                      </div>
                      <div className="w-[54px] relative leading-[18px] font-semibold inline-block shrink-0">
                        5
                      </div>
                      <div className="flex flex-row items-center justify-start gap-[29px]">
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative leading-[18px] font-semibold inline-block min-w-[37px]">
                            Active
                          </div>
                          <img
                            className="h-4 w-4 relative"
                            alt=""
                            src="/expand-more.svg"
                          />
                        </div>
                        <div className="flex flex-row items-center justify-start">
                          <div className="relative leading-[18px] font-semibold whitespace-pre-wrap inline-block min-w-[106px]">
                            Pending • Route
                          </div>
                        </div>
                      </div>
                      <img
                        className="h-3 w-[67px] relative overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/text.svg"
                      />
                      <img
                        className="h-3 w-[118px] relative overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/text3.svg"
                      />
                    </div>
                  </div>
                  <div className="w-28 flex flex-row items-start justify-start gap-[8px] text-center text-base text-secondary font-font-awesome-icon-solid-16">
                    <div className="h-8 flex-1 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                      <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] hidden items-center justify-center w-4">
                        sync
                      </div>
                    </div>
                    <div className="h-8 flex-1 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                      <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] flex items-center justify-center w-4 h-[19px] z-[1]">
                      <i class="fa-solid fa-trash"></i>
                      </div>
                    </div>
                    <div className="h-8 flex-1 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                      <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] leading-[19px] flex items-center justify-center w-4 h-4 whitespace-nowrap z-[1]">
                      <i class="fa-solid fa-ellipsis-vertical"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-white flex flex-row flex-wrap items-start justify-start py-2 px-4 box-border gap-[57px] max-w-full z-[2] mq750:gap-[28px]">
                  <div className="h-12 w-[1094px] relative shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-core-gray-lightest hidden max-w-full" />
                  <div className="flex-1 overflow-hidden hidden flex-row items-center justify-start gap-[32px] max-w-full mq1025:flex-wrap">
                    <div className="h-5 w-[178px] relative leading-[20px] inline-block shrink-0">
                      Cell 1
                    </div>
                    <div className="h-5 flex-1 relative leading-[20px] inline-block min-w-[167px]">
                      Cell 2
                    </div>
                    <div className="h-5 w-[110px] relative leading-[20px] inline-block shrink-0">
                      Cell 3
                    </div>
                    <div className="h-5 w-[227px] relative leading-[20px] inline-block shrink-0">
                      Cell 4...
                    </div>
                    <div className="h-5 w-[118px] relative leading-[20px] inline-block shrink-0">
                      Cell 5...
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border min-w-[549px] max-w-full text-xs mq750:min-w-full">
                    <div className="self-stretch flex flex-row items-center justify-between py-0 px-0 gap-[20px] mq750:flex-wrap">
                      <div className="relative leading-[18px] font-semibold inline-block min-w-[51px]">
                        ACC 124
                      </div>
                      <div className="relative leading-[18px] font-semibold inline-block min-w-[29px]">
                        John
                      </div>
                      <div className="relative leading-[18px] font-semibold inline-block min-w-[60px]">
                        UK to USA
                      </div>
                      <div className="w-[54px] relative leading-[18px] font-semibold inline-block shrink-0">
                        5
                      </div>
                      <div className="flex flex-row items-center justify-start gap-[28px]">
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative leading-[18px] font-semibold inline-block min-w-[37px]">
                            Active
                          </div>
                          <img
                            className="h-4 w-4 relative"
                            alt=""
                            src="/expand-more.svg"
                          />
                        </div>
                        <div className="flex flex-row items-center justify-start">
                          <div className="relative leading-[18px] font-semibold whitespace-pre-wrap">
                            Pending • Contract sign
                          </div>
                        </div>
                      </div>
                      <img
                        className="h-3 w-[67px] relative overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/text.svg"
                      />
                      <img
                        className="h-3 w-[118px] relative overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/text3.svg"
                      />
                    </div>
                  </div>
                  <div className="w-28 flex flex-row items-start justify-start gap-[8px] text-center text-base text-secondary font-font-awesome-icon-solid-16">
                    <div className="h-8 flex-1 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                      <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] hidden items-center justify-center w-4">
                        sync
                      </div>
                    </div>
                    <div className="h-8 flex-1 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                      <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] flex items-center justify-center w-4 h-[19px] z-[1]">
                      <i class="fa-solid fa-trash"></i>
                      </div>
                    </div>
                    <div className="h-8 flex-1 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                      <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] leading-[19px] flex items-center justify-center w-4 h-4 whitespace-nowrap z-[1]">
                      <i class="fa-solid fa-ellipsis-vertical"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Trip;
