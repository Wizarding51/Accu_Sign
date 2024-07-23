import HeaderDarkHeader from "../components/HeaderDarkHeader";
import SideNavSampleSideNav5 from "../components/SideNavSampleSideNav5";

const Aircraft = () => {
  return (
    <div className="w-full relative bg-gray-6 overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <HeaderDarkHeader />
      <main className="self-stretch flex flex-row items-start justify-start py-0 pr-7 pl-0 box-border gap-[32px] max-w-full mq725:gap-[16px] mq1000:pl-7 mq1000:box-border">
        <SideNavSampleSideNav5 />
        <section className="flex-1 flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border max-w-[calc(100%_-_292px)] text-left text-lg text-gray-1 font-medium-24 mq1000:max-w-full">
          <div className="self-stretch flex flex-col items-end justify-start gap-[7px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-end py-0 pr-px pl-0 box-border max-w-full">
              <div className="flex-1 flex flex-row items-end justify-between max-w-full gap-[20px] mq450:flex-wrap">
                <div className="w-[78px] flex flex-row items-start justify-start py-0 px-0 box-border">
                  <a className="[text-decoration:none] w-[91px] relative leading-[24px] font-bold text-[inherit] inline-block shrink-0">
                    Aircraft list
                  </a>
                </div>
                <div className="bg-gray-3 flex flex-row items-start justify-start py-3 px-4 gap-[8px] text-center text-base text-gray-6 font-font-awesome-icon-solid-16">
                  <img
                    className="self-stretch w-[88px] relative max-h-full hidden min-h-[16px]"
                    alt=""
                    src="/body-placeholder4.svg"
                  />
                  <div className="flex flex-row items-start justify-start gap-[8px]">
                    <a className="[text-decoration:none] w-4 relative text-[inherit] flex items-center justify-center shrink-0">
                      plus
                    </a>
                    <div className="relative text-sm tracking-[0.01em] leading-[16px] uppercase font-medium font-body text-white text-left inline-block min-w-[105px]">
                      Add Aircraft
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer className="self-stretch rounded bg-white box-border flex flex-col items-start justify-start pt-4 px-2.5 pb-[37px] max-w-full text-left text-sm text-active font-body border-[1px] border-solid border-light mq1000:pt-5 mq1000:pb-6 mq1000:box-border">
              <div className="self-stretch h-[745px] relative rounded bg-white box-border hidden z-[1] border-[1px] border-solid border-light" />
              <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[3px] box-border max-w-full text-xs text-gray-1">
                <div className="flex-1 shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-white flex flex-row flex-wrap items-start justify-start py-[15px] px-5 box-border gap-[34px] shrink-0 max-w-full z-[2] mq725:gap-[17px]">
                  <div className="h-12 w-[1094px] relative shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-white hidden max-w-full" />
                  <div className="hidden flex-row items-center justify-center gap-[32px] max-w-full mq1050:flex-wrap">
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
                      src="/text-42.svg"
                    />
                  </div>
                  <a className="[text-decoration:none] w-[55px] relative leading-[18px] font-semibold text-[inherit] inline-block shrink-0 z-[1]">
                    Photo
                  </a>
                  <a className="[text-decoration:none] w-[97px] relative leading-[18px] font-semibold text-[inherit] inline-block shrink-0 z-[1]">
                    Client
                  </a>
                  <a className="[text-decoration:none] w-[141px] relative leading-[18px] font-semibold text-[inherit] inline-block shrink-0 z-[1]">
                    Owner
                  </a>
                  <a className="[text-decoration:none] flex-1 relative leading-[18px] font-semibold text-[inherit] inline-block min-w-[99px] z-[1]">
                    Operator
                  </a>
                  <a className="[text-decoration:none] flex-1 relative leading-[18px] font-semibold text-[inherit] inline-block min-w-[97px] z-[1]">
                    Type
                  </a>
                  <a className="[text-decoration:none] relative leading-[18px] font-semibold text-[inherit] inline-block min-w-[125px] z-[1]">
                    Registration number
                  </a>
                  <a className="[text-decoration:none] w-[125px] relative leading-[18px] font-semibold text-[inherit] inline-block shrink-0 z-[1]">
                    Actions
                  </a>
                </div>
              </div>
              <div className="self-stretch shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-white flex flex-row flex-wrap items-start justify-start py-2 px-4 box-border gap-[57px] shrink-0 max-w-full z-[1] mt-[-7px] mq725:gap-[28px]">
                <div className="h-12 w-[1094px] relative shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-core-gray-lightest hidden max-w-full" />
                <div className="flex-1 overflow-hidden hidden flex-row items-center justify-start gap-[32px] max-w-full mq1000:flex-wrap">
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
                <div className="flex-1 flex flex-row items-center justify-start py-0 px-0 box-border gap-[34px] max-w-full text-xs mq725:min-w-full mq1000:flex-wrap mq450:gap-[17px]">
                  <div className="flex flex-col items-start justify-start py-0 pr-[15px] pl-0">
                    <img
                      className="w-10 h-10 relative object-cover"
                      loading="lazy"
                      alt=""
                      src="/rectangle-2319@2x.png"
                    />
                  </div>
                  <a className="[text-decoration:none] w-[116px] relative leading-[18px] font-semibold text-[inherit] inline-block shrink-0">
                    Devon Lane
                  </a>
                  <div className="w-[135px] relative leading-[18px] font-semibold inline-block shrink-0">
                    Annette Black
                  </div>
                  <a className="[text-decoration:none] w-[150px] relative leading-[18px] font-semibold text-[inherit] inline-block shrink-0">
                    Kathryn Murphy
                  </a>
                  <div className="w-[150px] relative text-sm leading-[20px] text-gray-2 inline-block shrink-0">
                    Airbus A220-300
                  </div>
                  <div className="h-[18px] w-[150px] flex flex-row items-center justify-start shrink-0">
                    <div className="self-stretch flex-1 flex flex-row items-center justify-start">
                      <div className="self-stretch flex-1 relative leading-[18px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                        63bea1f782d4431ce8d838b1
                      </div>
                    </div>
                  </div>
                  <img
                    className="h-3 w-px relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/text.svg"
                  />
                  <img
                    className="h-3 w-px relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/text3.svg"
                  />
                </div>
                <div className="h-[18px] w-[99px] hidden z-[4]" />
                <div className="w-[72px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border text-center text-base text-secondary font-font-awesome-icon-solid-16">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
                    <div className="h-8 flex-1 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                      <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] flex items-center justify-center w-4 h-[19px] z-[1]">
                        trash
                      </div>
                    </div>
                    <div className="h-8 flex-1 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                      <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] leading-[19px] flex items-center justify-center w-4 h-4 whitespace-nowrap z-[1]">
                        ellipsis-v
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-white flex flex-row flex-wrap items-start justify-start py-2 px-4 box-border gap-[57px] shrink-0 max-w-full z-[2] mt-[-7px] mq725:gap-[28px]">
                <div className="h-12 w-[1094px] relative shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-core-gray-lightest hidden max-w-full" />
                <div className="flex-1 overflow-hidden hidden flex-row items-center justify-start gap-[32px] max-w-full mq1000:flex-wrap">
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
                <div className="flex-1 flex flex-row items-center justify-start py-0 px-0 box-border gap-[34px] max-w-full text-xs mq725:min-w-full mq1000:flex-wrap mq450:gap-[17px]">
                  <div className="flex flex-col items-start justify-start py-0 pr-[15px] pl-0">
                    <img
                      className="w-10 h-10 relative object-cover"
                      loading="lazy"
                      alt=""
                      src="/rectangle-2319-1@2x.png"
                    />
                  </div>
                  <div className="relative leading-[18px] font-semibold inline-block min-w-[116px]">
                    Brooklyn Simmons
                  </div>
                  <div className="w-[135px] relative leading-[18px] font-semibold inline-block shrink-0">
                    Darlene Robertson
                  </div>
                  <div className="w-[150px] relative leading-[18px] font-semibold inline-block shrink-0">
                    Theresa Webb
                  </div>
                  <div className="w-[150px] relative text-sm leading-[20px] text-gray-2 inline-block shrink-0">
                    Airbus A220-300
                  </div>
                  <div className="h-[18px] w-[150px] flex flex-row items-center justify-start shrink-0">
                    <div className="self-stretch flex-1 flex flex-row items-center justify-start">
                      <div className="self-stretch flex-1 relative leading-[18px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                        63bea1f782d4431ce8d838bf
                      </div>
                    </div>
                  </div>
                  <img
                    className="h-3 w-px relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/text.svg"
                  />
                  <img
                    className="h-3 w-px relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/text3.svg"
                  />
                </div>
                <div className="h-[18px] w-[106px] hidden z-[4]" />
                <div className="w-[72px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border text-center text-base text-secondary font-font-awesome-icon-solid-16">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
                    <div className="h-8 flex-1 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                      <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] flex items-center justify-center w-4 h-[19px] z-[1]">
                        trash
                      </div>
                    </div>
                    <div className="h-8 flex-1 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                      <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] leading-[19px] flex items-center justify-center w-4 h-4 whitespace-nowrap z-[1]">
                        ellipsis-v
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-white flex flex-row flex-wrap items-start justify-start py-2 px-4 box-border gap-[57px] shrink-0 max-w-full z-[3] mt-[-7px] mq725:gap-[28px]">
                <div className="h-12 w-[1094px] relative shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-core-gray-lightest hidden max-w-full" />
                <div className="flex-1 overflow-hidden hidden flex-row items-center justify-start gap-[32px] max-w-full mq1000:flex-wrap">
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
                <div className="flex-1 flex flex-row items-center justify-start py-0 px-0 box-border gap-[34px] max-w-full text-xs mq725:min-w-full mq1000:flex-wrap mq450:gap-[17px]">
                  <div className="flex flex-col items-start justify-start py-0 pr-[15px] pl-0">
                    <img
                      className="w-10 h-10 relative object-cover"
                      loading="lazy"
                      alt=""
                      src="/rectangle-2319-2@2x.png"
                    />
                  </div>
                  <div className="relative leading-[18px] font-semibold">
                    Ralph Edwards
                  </div>
                  <div className="w-[135px] relative leading-[18px] font-semibold inline-block shrink-0">
                    Albert Flores
                  </div>
                  <div className="w-[150px] relative leading-[18px] font-semibold inline-block shrink-0">
                    Robert Fox
                  </div>
                  <div className="w-[150px] relative text-sm leading-[20px] text-gray-2 inline-block shrink-0">
                    Airbus A220-300
                  </div>
                  <div className="h-[18px] w-[150px] flex flex-row items-center justify-start shrink-0">
                    <div className="self-stretch flex-1 flex flex-row items-center justify-start">
                      <div className="self-stretch flex-1 relative leading-[18px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                        63bea1f782d4431ce8d838c5
                      </div>
                    </div>
                  </div>
                  <img
                    className="h-3 w-px relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/text.svg"
                  />
                  <img
                    className="h-3 w-px relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/text3.svg"
                  />
                </div>
                <div className="w-[72px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border text-center text-base text-secondary font-font-awesome-icon-solid-16">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
                    <div className="h-8 flex-1 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                      <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] flex items-center justify-center w-4 h-[19px] z-[1]">
                        trash
                      </div>
                    </div>
                    <div className="h-8 flex-1 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                      <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] leading-[19px] flex items-center justify-center w-4 h-4 whitespace-nowrap z-[1]">
                        ellipsis-v
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-white flex flex-row flex-wrap items-start justify-start py-2 px-4 box-border gap-[57px] shrink-0 max-w-full z-[4] mt-[-7px] mq725:gap-[28px]">
                <div className="h-12 w-[1094px] relative shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-core-gray-lightest hidden max-w-full" />
                <div className="flex-1 overflow-hidden hidden flex-row items-center justify-start gap-[32px] max-w-full mq1000:flex-wrap">
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
                <div className="flex-1 flex flex-row items-center justify-start py-0 px-0 box-border gap-[34px] max-w-full text-xs mq725:min-w-full mq1000:flex-wrap mq450:gap-[17px]">
                  <div className="flex flex-col items-start justify-start py-0 pr-[15px] pl-0">
                    <img
                      className="w-10 h-10 relative object-cover"
                      loading="lazy"
                      alt=""
                      src="/rectangle-2319-3@2x.png"
                    />
                  </div>
                  <div className="relative leading-[18px] font-semibold">
                    Robert Fox
                  </div>
                  <div className="w-[135px] relative leading-[18px] font-semibold inline-block shrink-0">
                    Jacob Jones
                  </div>
                  <div className="w-[150px] relative leading-[18px] font-semibold inline-block shrink-0">
                    Jacob Jones
                  </div>
                  <a className="[text-decoration:none] w-[150px] relative text-sm leading-[20px] text-gray-2 inline-block shrink-0">
                    Boeing 727-100
                  </a>
                  <div className="h-[18px] w-[150px] flex flex-row items-center justify-start shrink-0">
                    <div className="self-stretch flex-1 flex flex-row items-center justify-start">
                      <div className="self-stretch flex-1 relative leading-[18px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                        63bea1f782d4431ce8d838d3
                      </div>
                    </div>
                  </div>
                  <img
                    className="h-3 w-px relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/text.svg"
                  />
                  <img
                    className="h-3 w-px relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/text3.svg"
                  />
                </div>
                <div className="w-[72px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border text-center text-base text-secondary font-font-awesome-icon-solid-16">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
                    <div className="h-8 flex-1 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                      <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] flex items-center justify-center w-4 h-[19px] z-[1]">
                        trash
                      </div>
                    </div>
                    <div className="h-8 flex-1 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                      <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] leading-[19px] flex items-center justify-center w-4 h-4 whitespace-nowrap z-[1]">
                        ellipsis-v
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-white flex flex-row flex-wrap items-start justify-start py-2 px-4 box-border gap-[57px] shrink-0 max-w-full z-[5] mt-[-7px] mq725:gap-[28px]">
                <div className="h-12 w-[1094px] relative shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-core-gray-lightest hidden max-w-full" />
                <div className="flex-1 overflow-hidden hidden flex-row items-center justify-start gap-[32px] max-w-full mq1000:flex-wrap">
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
                <div className="flex-1 flex flex-row items-center justify-start py-0 px-0 box-border gap-[34px] max-w-full text-xs mq725:min-w-full mq1000:flex-wrap mq450:gap-[17px]">
                  <div className="flex flex-col items-start justify-start py-0 pr-[15px] pl-0">
                    <img
                      className="w-10 h-10 relative object-cover"
                      loading="lazy"
                      alt=""
                      src="/rectangle-2319-4@2x.png"
                    />
                  </div>
                  <div className="relative leading-[18px] font-semibold">
                    Eleanor Pena
                  </div>
                  <div className="w-[135px] relative leading-[18px] font-semibold inline-block shrink-0">
                    Savannah Nguyen
                  </div>
                  <div className="w-[150px] relative leading-[18px] font-semibold inline-block shrink-0">
                    Cameron Williamson
                  </div>
                  <a className="[text-decoration:none] w-[150px] relative text-sm leading-[20px] text-gray-2 inline-block shrink-0">
                    Boeing 727-100
                  </a>
                  <div className="h-[18px] w-[150px] flex flex-row items-center justify-start shrink-0">
                    <div className="self-stretch flex-1 flex flex-row items-center justify-start">
                      <div className="self-stretch flex-1 relative leading-[18px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                        63bea1f782d4431ce8d838d4
                      </div>
                    </div>
                  </div>
                  <img
                    className="h-3 w-px relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/text.svg"
                  />
                  <img
                    className="h-3 w-px relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/text3.svg"
                  />
                </div>
                <div className="w-[72px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border text-center text-base text-secondary font-font-awesome-icon-solid-16">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
                    <div className="h-8 flex-1 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                      <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] flex items-center justify-center w-4 h-[19px] z-[1]">
                        trash
                      </div>
                    </div>
                    <div className="h-8 flex-1 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                      <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] leading-[19px] flex items-center justify-center w-4 h-4 whitespace-nowrap z-[1]">
                        ellipsis-v
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-white flex flex-row flex-wrap items-start justify-start py-2 px-4 box-border gap-[57px] shrink-0 max-w-full z-[6] mt-[-7px] mq725:gap-[28px]">
                <div className="h-12 w-[1094px] relative shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-core-gray-lightest hidden max-w-full" />
                <div className="flex-1 overflow-hidden hidden flex-row items-center justify-start gap-[32px] max-w-full mq1000:flex-wrap">
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
                <div className="flex-1 flex flex-row items-center justify-start py-0 px-0 box-border gap-[34px] max-w-full text-xs mq725:min-w-full mq1000:flex-wrap mq450:gap-[17px]">
                  <div className="flex flex-col items-start justify-start py-0 pr-[15px] pl-0">
                    <img
                      className="w-10 h-10 relative object-cover"
                      loading="lazy"
                      alt=""
                      src="/rectangle-2319-5@2x.png"
                    />
                  </div>
                  <div className="relative leading-[18px] font-semibold">
                    Guy Hawkins
                  </div>
                  <div className="w-[135px] relative leading-[18px] font-semibold inline-block shrink-0">
                    Jerome Bell
                  </div>
                  <div className="w-[150px] relative leading-[18px] font-semibold inline-block shrink-0">
                    Leslie Alexander
                  </div>
                  <div className="w-[150px] relative text-sm leading-[20px] text-gray-2 inline-block shrink-0">
                    Boeing 727-100
                  </div>
                  <div className="h-[18px] w-[150px] flex flex-row items-center justify-start shrink-0">
                    <div className="self-stretch flex-1 flex flex-row items-center justify-start">
                      <div className="self-stretch flex-1 relative leading-[18px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                        63bea1f782d4431ce8d838da
                      </div>
                    </div>
                  </div>
                  <img
                    className="h-3 w-px relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/text.svg"
                  />
                  <img
                    className="h-3 w-px relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/text3.svg"
                  />
                </div>
                <div className="w-[72px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border text-center text-base text-secondary font-font-awesome-icon-solid-16">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
                    <div className="h-8 flex-1 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                      <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] flex items-center justify-center w-4 h-[19px] z-[1]">
                        trash
                      </div>
                    </div>
                    <div className="h-8 flex-1 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                      <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] leading-[19px] flex items-center justify-center w-4 h-4 whitespace-nowrap z-[1]">
                        ellipsis-v
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-white flex flex-row flex-wrap items-start justify-start py-2 px-4 box-border gap-[57px] shrink-0 max-w-full z-[7] mt-[-7px] mq725:gap-[28px]">
                <div className="h-12 w-[1094px] relative shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-core-gray-lightest hidden max-w-full" />
                <div className="flex-1 overflow-hidden hidden flex-row items-center justify-start gap-[32px] max-w-full mq1000:flex-wrap">
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
                <div className="flex-1 flex flex-row items-center justify-start py-0 px-0 box-border gap-[34px] max-w-full text-xs mq725:min-w-full mq1000:flex-wrap mq450:gap-[17px]">
                  <div className="flex flex-col items-start justify-start py-0 pr-[15px] pl-0">
                    <img
                      className="w-10 h-10 relative object-cover"
                      loading="lazy"
                      alt=""
                      src="/rectangle-2319-6@2x.png"
                    />
                  </div>
                  <div className="relative leading-[18px] font-semibold">
                    Esther Howard
                  </div>
                  <div className="w-[135px] relative leading-[18px] font-semibold inline-block shrink-0">
                    Brooklyn Simmons
                  </div>
                  <div className="w-[150px] relative leading-[18px] font-semibold inline-block shrink-0">
                    Eleanor Pena
                  </div>
                  <div className="w-[150px] relative text-sm leading-[20px] text-gray-2 inline-block shrink-0">
                    Boeing 747-300M
                  </div>
                  <div className="h-[18px] w-[150px] flex flex-row items-center justify-start shrink-0">
                    <div className="self-stretch flex-1 flex flex-row items-center justify-start">
                      <div className="self-stretch flex-1 relative leading-[18px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                        63bea1f782d4431ce8d838dd
                      </div>
                    </div>
                  </div>
                  <img
                    className="h-3 w-px relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/text.svg"
                  />
                  <img
                    className="h-3 w-px relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/text3.svg"
                  />
                </div>
                <div className="w-[72px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border text-center text-base text-secondary font-font-awesome-icon-solid-16">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
                    <div className="h-8 flex-1 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                      <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] flex items-center justify-center w-4 h-[19px] z-[1]">
                        trash
                      </div>
                    </div>
                    <div className="h-8 flex-1 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                      <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] leading-[19px] flex items-center justify-center w-4 h-4 whitespace-nowrap z-[1]">
                        ellipsis-v
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-white flex flex-row flex-wrap items-start justify-start py-2 px-4 box-border gap-[57px] shrink-0 max-w-full z-[8] mt-[-7px] mq725:gap-[28px]">
                <div className="h-12 w-[1094px] relative shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-core-gray-lightest hidden max-w-full" />
                <div className="flex-1 overflow-hidden hidden flex-row items-center justify-start gap-[32px] max-w-full mq1000:flex-wrap">
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
                <div className="flex-1 flex flex-row items-center justify-start py-0 px-0 box-border gap-[34px] max-w-full text-xs mq725:min-w-full mq1000:flex-wrap mq450:gap-[17px]">
                  <div className="flex flex-col items-start justify-start py-0 pr-[15px] pl-0">
                    <img
                      className="w-10 h-10 relative object-cover"
                      loading="lazy"
                      alt=""
                      src="/rectangle-2319-7@2x.png"
                    />
                  </div>
                  <div className="relative leading-[18px] font-semibold">
                    Floyd Miles
                  </div>
                  <div className="w-[135px] relative leading-[18px] font-semibold inline-block shrink-0">
                    Eleanor Pena
                  </div>
                  <div className="w-[150px] relative leading-[18px] font-semibold inline-block shrink-0">
                    Darlene Robertson
                  </div>
                  <div className="w-[150px] relative text-sm leading-[20px] text-gray-2 inline-block shrink-0">
                    Boeing 747-300M
                  </div>
                  <div className="h-[18px] w-[150px] flex flex-row items-center justify-start shrink-0">
                    <div className="self-stretch flex-1 flex flex-row items-center justify-start">
                      <div className="self-stretch flex-1 relative leading-[18px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                        63bea1f782d4431ce8d838e5
                      </div>
                    </div>
                  </div>
                  <img
                    className="h-3 w-px relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/text.svg"
                  />
                  <img
                    className="h-3 w-px relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/text3.svg"
                  />
                </div>
                <div className="w-[72px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border text-center text-base text-secondary font-font-awesome-icon-solid-16">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
                    <div className="h-8 flex-1 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                      <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] flex items-center justify-center w-4 h-[19px] z-[1]">
                        trash
                      </div>
                    </div>
                    <div className="h-8 flex-1 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                      <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] leading-[19px] flex items-center justify-center w-4 h-4 whitespace-nowrap z-[1]">
                        ellipsis-v
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-white flex flex-row flex-wrap items-start justify-start py-2 px-4 box-border gap-[57px] shrink-0 max-w-full z-[9] mt-[-7px] mq725:gap-[28px]">
                <div className="h-12 w-[1094px] relative shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-core-gray-lightest hidden max-w-full" />
                <div className="flex-1 overflow-hidden hidden flex-row items-center justify-start gap-[32px] max-w-full mq1000:flex-wrap">
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
                <div className="flex-1 flex flex-row items-center justify-start py-0 px-0 box-border gap-[34px] max-w-full text-xs mq725:min-w-full mq1000:flex-wrap mq450:gap-[17px]">
                  <div className="flex flex-col items-start justify-start py-0 pr-[15px] pl-0">
                    <img
                      className="w-10 h-10 relative object-cover"
                      loading="lazy"
                      alt=""
                      src="/rectangle-2319-8@2x.png"
                    />
                  </div>
                  <div className="relative leading-[18px] font-semibold">
                    Darrell Steward
                  </div>
                  <a className="[text-decoration:none] w-[135px] relative leading-[18px] font-semibold text-[inherit] inline-block shrink-0">
                    Jane Cooper
                  </a>
                  <div className="w-[150px] relative leading-[18px] font-semibold inline-block shrink-0">
                    Devon Lane
                  </div>
                  <div className="w-[150px] relative text-sm leading-[20px] text-gray-2 inline-block shrink-0">
                    Boeing 747-300M
                  </div>
                  <div className="h-[18px] w-[150px] flex flex-row items-center justify-start shrink-0">
                    <div className="self-stretch flex-1 flex flex-row items-center justify-start">
                      <div className="self-stretch flex-1 relative leading-[18px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                        63bea1f782d4431ce8d838ea
                      </div>
                    </div>
                  </div>
                  <img
                    className="h-3 w-px relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/text.svg"
                  />
                  <img
                    className="h-3 w-px relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/text3.svg"
                  />
                </div>
                <div className="w-[72px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border text-center text-base text-secondary font-font-awesome-icon-solid-16">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
                    <div className="h-8 flex-1 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                      <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] flex items-center justify-center w-4 h-[19px] z-[1]">
                        trash
                      </div>
                    </div>
                    <div className="h-8 flex-1 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                      <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] leading-[19px] flex items-center justify-center w-4 h-4 whitespace-nowrap z-[1]">
                        ellipsis-v
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-white flex flex-row flex-wrap items-start justify-start py-2 px-4 box-border gap-[57px] shrink-0 max-w-full z-[10] mt-[-7px] mq725:gap-[28px]">
                <div className="h-12 w-[1094px] relative shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-core-gray-lightest hidden max-w-full" />
                <div className="flex-1 overflow-hidden hidden flex-row items-center justify-start gap-[32px] max-w-full mq1000:flex-wrap">
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
                <div className="flex-1 flex flex-row items-center justify-start py-0 px-0 box-border gap-[34px] max-w-full text-xs mq725:min-w-full mq1000:flex-wrap mq450:gap-[17px]">
                  <div className="flex flex-col items-start justify-start py-0 pr-[15px] pl-0">
                    <img
                      className="w-10 h-10 relative object-cover"
                      loading="lazy"
                      alt=""
                      src="/rectangle-2319-9@2x.png"
                    />
                  </div>
                  <div className="h-9 relative tracking-[-0.18px] leading-[18px] font-semibold inline-block">
                    Cameron Williamson
                  </div>
                  <div className="w-[135px] relative leading-[18px] font-semibold inline-block shrink-0">
                    Dianne Russell
                  </div>
                  <div className="w-[150px] relative leading-[18px] font-semibold inline-block shrink-0">
                    Jenny Wilson
                  </div>
                  <div className="w-[150px] relative text-sm leading-[20px] text-gray-2 inline-block shrink-0">
                    Boeing 727-200
                  </div>
                  <div className="h-[18px] w-[150px] flex flex-row items-center justify-start shrink-0">
                    <div className="self-stretch flex-1 flex flex-row items-center justify-start">
                      <div className="self-stretch flex-1 relative leading-[18px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                        63bea1f782d4431ce8d838f1
                      </div>
                    </div>
                  </div>
                  <img
                    className="h-3 w-px relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/text.svg"
                  />
                  <img
                    className="h-3 w-px relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/text3.svg"
                  />
                </div>
                <div className="w-[72px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border text-center text-base text-secondary font-font-awesome-icon-solid-16">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
                    <div className="h-8 flex-1 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                      <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] flex items-center justify-center w-4 h-[19px] z-[1]">
                        trash
                      </div>
                    </div>
                    <div className="h-8 flex-1 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                      <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] leading-[19px] flex items-center justify-center w-4 h-4 whitespace-nowrap z-[1]">
                        ellipsis-v
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-white flex flex-row flex-wrap items-start justify-start py-2 px-4 box-border gap-[57px] shrink-0 max-w-full z-[11] mt-[-7px] mq725:gap-[28px]">
                <div className="h-12 w-[1094px] relative shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-core-gray-lightest hidden max-w-full" />
                <div className="flex-1 overflow-hidden hidden flex-row items-center justify-start gap-[32px] max-w-full mq1000:flex-wrap">
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
                <div className="flex-1 flex flex-row items-center justify-start py-0 px-0 box-border gap-[34px] max-w-full text-xs mq725:min-w-full mq1000:flex-wrap mq450:gap-[17px]">
                  <div className="flex flex-col items-start justify-start py-0 pr-[15px] pl-0">
                    <img
                      className="w-10 h-10 relative object-cover"
                      loading="lazy"
                      alt=""
                      src="/rectangle-2319-10@2x.png"
                    />
                  </div>
                  <div className="relative leading-[18px] font-semibold inline-block min-w-[116px]">
                    Darlene Robertson
                  </div>
                  <div className="w-[135px] relative leading-[18px] font-semibold inline-block shrink-0">
                    Guy Hawkins
                  </div>
                  <div className="w-[150px] relative leading-[18px] font-semibold inline-block shrink-0">
                    Dianne Russell
                  </div>
                  <div className="w-[150px] relative text-sm leading-[20px] text-gray-2 inline-block shrink-0">
                    Boeing 727-200
                  </div>
                  <div className="h-[18px] w-[150px] flex flex-row items-center justify-start shrink-0">
                    <div className="self-stretch flex-1 flex flex-row items-center justify-start">
                      <div className="self-stretch flex-1 relative leading-[18px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                        63bea1f782d4431ce8d838f3
                      </div>
                    </div>
                  </div>
                  <img
                    className="h-3 w-px relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/text.svg"
                  />
                  <img
                    className="h-3 w-px relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/text3.svg"
                  />
                </div>
                <div className="w-[72px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border text-center text-base text-secondary font-font-awesome-icon-solid-16">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
                    <div className="h-8 flex-1 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                      <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] flex items-center justify-center w-4 h-[19px] z-[1]">
                        trash
                      </div>
                    </div>
                    <div className="h-8 flex-1 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                      <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] leading-[19px] flex items-center justify-center w-4 h-4 whitespace-nowrap z-[1]">
                        ellipsis-v
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-white flex flex-row flex-wrap items-start justify-start py-2 px-4 box-border gap-[57px] shrink-0 max-w-full z-[12] mt-[-7px] mq725:gap-[28px]">
                <div className="h-12 w-[1094px] relative shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-core-gray-lightest hidden max-w-full" />
                <div className="flex-1 overflow-hidden hidden flex-row items-center justify-start gap-[32px] max-w-full mq1000:flex-wrap">
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
                <div className="flex-1 flex flex-row items-center justify-start py-0 px-0 box-border gap-[34px] max-w-full text-xs mq725:min-w-full mq1000:flex-wrap mq450:gap-[17px]">
                  <div className="flex flex-col items-start justify-start py-0 pr-[15px] pl-0">
                    <img
                      className="w-10 h-10 relative object-cover"
                      loading="lazy"
                      alt=""
                      src="/rectangle-2319-11@2x.png"
                    />
                  </div>
                  <div className="relative leading-[18px] font-semibold">
                    Kristin Watson
                  </div>
                  <div className="w-[135px] relative leading-[18px] font-semibold inline-block shrink-0">
                    Ralph Edwards
                  </div>
                  <div className="w-[150px] relative leading-[18px] font-semibold inline-block shrink-0">
                    Brooklyn Simmons
                  </div>
                  <div className="w-[150px] relative text-sm leading-[20px] text-gray-2 inline-block shrink-0">
                    Boeing 727-200
                  </div>
                  <div className="h-[18px] w-[150px] flex flex-row items-center justify-start shrink-0">
                    <div className="self-stretch flex-1 flex flex-row items-center justify-start">
                      <div className="self-stretch flex-1 relative leading-[18px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                        63bea1f782d4431ce8d838f7
                      </div>
                    </div>
                  </div>
                  <img
                    className="h-3 w-px relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/text.svg"
                  />
                  <img
                    className="h-3 w-px relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/text3.svg"
                  />
                </div>
                <div className="w-[72px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border text-center text-base text-secondary font-font-awesome-icon-solid-16">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
                    <div className="h-8 flex-1 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                      <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] flex items-center justify-center w-4 h-[19px] z-[1]">
                        trash
                      </div>
                    </div>
                    <div className="h-8 flex-1 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                      <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] leading-[19px] flex items-center justify-center w-4 h-4 whitespace-nowrap z-[1]">
                        ellipsis-v
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-white flex flex-row flex-wrap items-start justify-start py-2 px-4 box-border gap-[57px] shrink-0 max-w-full z-[13] mt-[-7px] mq725:gap-[28px]">
                <div className="h-12 w-[1094px] relative shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-core-gray-lightest hidden max-w-full" />
                <div className="flex-1 overflow-hidden hidden flex-row items-center justify-start gap-[32px] max-w-full mq1000:flex-wrap">
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
                <div className="flex-1 flex flex-row items-center justify-start py-0 px-0 box-border gap-[34px] max-w-full text-xs mq725:min-w-full mq1000:flex-wrap mq450:gap-[17px]">
                  <div className="flex flex-col items-start justify-start py-0 pr-[15px] pl-0">
                    <img
                      className="w-10 h-10 relative object-cover"
                      loading="lazy"
                      alt=""
                      src="/rectangle-2319-12@2x.png"
                    />
                  </div>
                  <div className="relative leading-[18px] font-semibold">
                    Marvin McKinney
                  </div>
                  <div className="w-[135px] relative leading-[18px] font-semibold inline-block shrink-0">
                    Kathryn Murphy
                  </div>
                  <div className="w-[150px] relative leading-[18px] font-semibold inline-block shrink-0">
                    Annette Black
                  </div>
                  <div className="w-[150px] relative text-sm leading-[20px] text-gray-2 inline-block overflow-hidden text-ellipsis whitespace-nowrap shrink-0">
                    Beechcraft Baron / 58 Baron
                  </div>
                  <div className="h-[18px] w-[150px] flex flex-row items-center justify-start shrink-0">
                    <div className="self-stretch flex-1 flex flex-row items-center justify-start">
                      <div className="self-stretch flex-1 relative leading-[18px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                        63bea1f782d4431ce8d838fc
                      </div>
                    </div>
                  </div>
                  <img
                    className="h-3 w-px relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/text.svg"
                  />
                  <img
                    className="h-3 w-px relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/text3.svg"
                  />
                </div>
                <div className="w-[72px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border text-center text-base text-secondary font-font-awesome-icon-solid-16">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
                    <div className="h-8 flex-1 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                      <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] flex items-center justify-center w-4 h-[19px] z-[1]">
                        trash
                      </div>
                    </div>
                    <div className="h-8 flex-1 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                      <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] leading-[19px] flex items-center justify-center w-4 h-4 whitespace-nowrap z-[1]">
                        ellipsis-v
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Aircraft;
