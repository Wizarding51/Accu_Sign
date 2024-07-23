import HeaderDarkHeader from "../components/HeaderDarkHeader";
import SideNavSampleSideNav6 from "../components/SideNavSampleSideNav6";

const BankDetail = () => {
  return (
    <div className="w-full relative bg-gray-6 overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal] text-center text-base text-active font-body">
      <div className="w-[285px] h-0 relative leading-[24px] hidden">
        Alert dialog prompt
      </div>
      <HeaderDarkHeader />
      <main className="w-[1428px] flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[32px] max-w-full mq725:gap-[16px] mq1000:pl-5 mq1000:box-border">
        <SideNavSampleSideNav6 />
        <section className="flex-1 flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border max-w-[calc(100%_-_292px)] text-left text-lg text-gray-1 font-medium-24 mq1000:max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[18px] max-w-full">
            <div className="self-stretch flex flex-row items-end justify-between gap-[20px] mq450:flex-wrap">
              <div className="w-[78px] flex flex-row items-start justify-start py-0 px-0 box-border">
                <a className="[text-decoration:none] w-[91px] relative leading-[24px] font-bold text-[inherit] inline-block shrink-0">
                  Bank detail
                </a>
              </div>
              <div className="bg-gray-3 flex flex-row items-start justify-start py-3 px-4 gap-[8px] text-center text-base text-gray-6 font-font-awesome-icon-solid-16">
                <img
                  className="self-stretch w-[88px] relative max-h-full hidden min-h-[16px]"
                  alt=""
                  src="/body-placeholder5.svg"
                />
                <div className="flex flex-row items-start justify-start gap-[8px]">
                  <a className="[text-decoration:none] w-4 relative text-[inherit] flex items-center justify-center shrink-0">
                    plus
                  </a>
                  <div className="relative text-sm tracking-[0.01em] leading-[16px] uppercase font-medium font-body text-left">
                    Add new bank detial
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch rounded bg-white box-border flex flex-row flex-wrap items-start justify-start pt-4 pb-14 pr-[19px] pl-[23px] gap-[47px] max-w-full text-xs font-body border-[1px] border-solid border-light mq725:gap-[23px] mq1000:pt-5 mq1000:pb-9 mq1000:box-border">
              <div className="h-[745px] w-[1116px] relative rounded bg-white box-border hidden max-w-full border-[1px] border-solid border-light" />
              <div className="w-[230px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border">
                <div className="self-stretch bg-white flex flex-col items-end justify-start pt-2 px-0 pb-[11px] gap-[71px] z-[1] border-[1px] border-solid border-base">
                  <div className="self-stretch h-[220px] relative bg-white box-border hidden border-[1px] border-solid border-base" />
                  <div className="flex flex-row items-start justify-end py-0 px-2">
                    <img
                      className="h-6 w-6 relative z-[1]"
                      loading="lazy"
                      alt=""
                      src="/more-vert.svg"
                    />
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[14.5px]">
                    <div className="flex flex-row items-start justify-start py-0 px-2">
                      <div className="flex flex-row items-start justify-start gap-[8px]">
                        <div className="h-[51px] w-[51px] relative bg-light-gray z-[1]">
                          <div className="absolute top-[0px] left-[0px] bg-light-gray w-full h-full hidden" />
                          <img
                            className="absolute top-[1px] left-[9px] w-[34px] h-[49px] object-cover z-[2]"
                            loading="lazy"
                            alt=""
                            src="/image-25@2x.png"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start">
                          <div className="relative text-sm leading-[18px] font-semibold z-[1]">
                            Bank transfer detail
                          </div>
                          <div className="relative leading-[18px] text-gray-2 inline-block min-w-[113px] z-[1]">
                            Standard Chartered
                          </div>
                          <div className="relative leading-[18px] text-gray-3 z-[1]">
                            Last update 5days ago
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch h-px relative bg-gainsboro z-[3]" />
                    <div className="self-stretch flex flex-row items-start justify-start py-0 px-2.5 text-gray-3">
                      <div className="flex-1 flex flex-row items-start justify-start">
                        <a className="[text-decoration:none] flex-1 relative leading-[18px] text-[inherit] shrink-0 z-[1]">
                          Active
                        </a>
                        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0 ml-[-22.5px]">
                          <div className="w-[39px] h-[17px] relative rounded-4xs-5 bg-gainsboro shrink-0 z-[3]">
                            <div className="absolute top-[0px] left-[0px] rounded-4xs-5 bg-gainsboro w-full h-full hidden z-[3]" />
                            <div className="absolute top-[0px] left-[0px] rounded-4xs-5 bg-gray-2 w-[17px] h-[17px] z-[4]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-end justify-start gap-[14px] min-w-[517px] max-w-full text-sm text-active mq725:min-w-full">
                <div className="self-stretch flex flex-row items-start justify-end pt-0 pb-[5px] pr-0.5 pl-0 box-border max-w-full text-lg text-gray-2 font-medium-24">
                  <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
                    <div className="flex flex-row items-start justify-start py-0 px-0 z-[5]">
                      <h3 className="m-0 w-[145px] relative text-inherit leading-[24px] font-bold font-inherit inline-block shrink-0">
                        Transition History
                      </h3>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[5px]">
                      <a className="[text-decoration:none] relative leading-[24px] font-bold text-[inherit] inline-block min-w-[114px] z-[5]">
                        Total Amount:
                      </a>
                      <a className="[text-decoration:none] relative leading-[24px] font-bold text-[inherit] inline-block min-w-[117px] z-[5]">
                        10000.00 USD
                      </a>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[7px] max-w-full text-xs text-gray-1">
                  <div className="self-stretch shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-white flex flex-row items-start justify-start py-[15px] px-4 box-border gap-[110px] max-w-full z-[5] mq725:flex-wrap mq725:gap-[55px] mq450:gap-[27px]">
                    <div className="h-5 w-5 relative rounded-sm bg-white box-border hidden opacity-[0] border-[2px] border-solid border-secondary" />
                    <div className="hidden flex-row items-center justify-center gap-[32px] max-w-full mq1000:flex-wrap">
                      <img
                        className="self-stretch w-[109px] relative max-h-full overflow-hidden shrink-0 min-h-[12px]"
                        alt=""
                        src="/text4.svg"
                      />
                      <img
                        className="self-stretch w-[109px] relative max-h-full overflow-hidden shrink-0 min-h-[12px]"
                        alt=""
                        src="/text4.svg"
                      />
                      <img
                        className="self-stretch w-[109px] relative max-h-full overflow-hidden shrink-0 min-h-[12px]"
                        alt=""
                        src="/text4.svg"
                      />
                      <img
                        className="self-stretch w-[109px] relative max-h-full overflow-hidden shrink-0 min-h-[12px]"
                        alt=""
                        src="/text4.svg"
                      />
                      <img
                        className="self-stretch w-28 relative max-h-full overflow-hidden shrink-0 min-h-[12px]"
                        alt=""
                        src="/text-43.svg"
                      />
                    </div>
                    <a className="[text-decoration:none] relative leading-[18px] font-semibold text-[inherit] inline-block min-w-[58px]">
                      Trip name
                    </a>
                    <a className="[text-decoration:none] relative leading-[18px] font-semibold text-[inherit] inline-block min-w-[46px]">
                      Amount
                    </a>
                    <div className="self-stretch w-[51px] relative leading-[18px] font-semibold hidden">
                      Location
                    </div>
                    <div className="self-stretch w-28 relative leading-[18px] font-semibold hidden">
                      Total crew member
                    </div>
                    <div className="relative leading-[18px] font-semibold inline-block min-w-[28px]">
                      Date
                    </div>
                    <a className="[text-decoration:none] h-[18px] w-28 relative leading-[18px] font-semibold text-[inherit] text-center inline-block shrink-0 opacity-[0]">
                      Actions
                    </a>
                  </div>
                  <div className="self-stretch shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-white flex flex-row items-center justify-start py-2 pr-2.5 pl-4 box-border gap-[20px] max-w-full z-[5] text-sm text-active">
                    <div className="h-12 w-[1094px] relative shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-core-gray-lightest hidden max-w-full" />
                    <div className="flex-1 flex flex-row items-center justify-start gap-[57px] max-w-full mq450:gap-[28px]">
                      <div className="w-[1018px] overflow-hidden hidden flex-row items-center justify-start gap-[32px] max-w-full mq1000:flex-wrap">
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
                      <div className="flex-1 flex flex-row items-center justify-between py-0 pr-[292px] pl-0 box-border max-w-full gap-[20px] text-xs mq725:flex-wrap mq1000:pr-[146px] mq1000:box-border mq450:pr-5 mq450:box-border">
                        <a className="[text-decoration:none] relative leading-[18px] font-semibold text-[inherit] inline-block min-w-[51px]">
                          ACC 124
                        </a>
                        <div className="w-[75px] relative leading-[18px] font-semibold inline-block shrink-0 whitespace-nowrap">
                          $900.00
                        </div>
                        <div className="relative leading-[18px] font-semibold inline-block min-w-[126px] whitespace-nowrap">
                          15 May 2020 9:00 am
                        </div>
                        <img
                          className="h-3 w-[67px] relative overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/text.svg"
                        />
                        <img
                          className="h-3 w-[118px] relative overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/text5.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-white flex flex-row items-center justify-start py-2 pr-[9px] pl-4 box-border gap-[20px] max-w-full z-[5]">
                  <div className="h-12 w-[1094px] relative shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-core-gray-lightest hidden max-w-full" />
                  <div className="flex-1 flex flex-row items-center justify-start gap-[57px] max-w-full mq450:gap-[28px]">
                    <div className="w-[1018px] overflow-hidden hidden flex-row items-center justify-start gap-[32px] max-w-full mq1000:flex-wrap">
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
                    <div className="flex-1 flex flex-row items-center justify-between py-0 pr-[293px] pl-0 box-border max-w-full gap-[20px] text-xs mq725:flex-wrap mq1000:pr-[146px] mq1000:box-border mq450:pr-5 mq450:box-border">
                      <a className="[text-decoration:none] relative leading-[18px] font-semibold text-[inherit] inline-block min-w-[51px]">
                        ACC 124
                      </a>
                      <div className="w-[75px] relative leading-[18px] font-semibold inline-block shrink-0 whitespace-nowrap">
                        $10.00
                      </div>
                      <div className="relative leading-[18px] font-semibold inline-block min-w-[126px] whitespace-nowrap">
                        15 May 2020 8:30 am
                      </div>
                      <img
                        className="h-3 w-[67px] relative overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/text.svg"
                      />
                      <img
                        className="h-3 w-[118px] relative overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/text6.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-white flex flex-row items-center justify-start py-2 pr-2.5 pl-4 box-border gap-[20px] max-w-full z-[5]">
                  <div className="h-12 w-[1094px] relative shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-core-gray-lightest hidden max-w-full" />
                  <div className="flex-1 flex flex-row items-center justify-start gap-[57px] max-w-full mq450:gap-[28px]">
                    <div className="w-[1018px] overflow-hidden hidden flex-row items-center justify-start gap-[32px] max-w-full mq1000:flex-wrap">
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
                    <div className="flex-1 flex flex-row items-center justify-between py-0 pr-[292px] pl-0 box-border max-w-full gap-[20px] text-xs mq725:flex-wrap mq1000:pr-[146px] mq1000:box-border mq450:pr-5 mq450:box-border">
                      <a className="[text-decoration:none] relative leading-[18px] font-semibold text-[inherit] inline-block min-w-[51px]">
                        ACC 124
                      </a>
                      <div className="w-[75px] relative leading-[18px] font-semibold inline-block shrink-0 whitespace-nowrap">
                        $900.00
                      </div>
                      <div className="relative leading-[18px] font-semibold inline-block min-w-[126px] whitespace-nowrap">
                        15 May 2020 9:30 am
                      </div>
                      <img
                        className="h-3 w-[67px] relative overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/text.svg"
                      />
                      <img
                        className="h-3 w-[118px] relative overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/text5.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-white flex flex-row items-center justify-start py-2 pr-[7px] pl-4 box-border gap-[20px] max-w-full z-[5]">
                  <div className="h-12 w-[1094px] relative shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-core-gray-lightest hidden max-w-full" />
                  <div className="flex-1 flex flex-row items-center justify-start gap-[57px] max-w-full mq450:gap-[28px]">
                    <div className="w-[1018px] overflow-hidden hidden flex-row items-center justify-start gap-[32px] max-w-full mq1000:flex-wrap">
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
                    <div className="flex-1 flex flex-row items-center justify-between py-0 pr-[295px] pl-0 box-border max-w-full gap-[20px] text-xs mq725:flex-wrap mq1000:pr-[147px] mq1000:box-border mq450:pr-5 mq450:box-border">
                      <a className="[text-decoration:none] relative leading-[18px] font-semibold text-[inherit] inline-block min-w-[51px]">
                        ACC 124
                      </a>
                      <div className="w-[75px] relative leading-[18px] font-semibold inline-block shrink-0 whitespace-nowrap">
                        $10.00
                      </div>
                      <div className="relative leading-[18px] font-semibold inline-block min-w-[126px] whitespace-nowrap">
                        15 May 2020 8:00 am
                      </div>
                      <img
                        className="h-3 w-[67px] relative overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/text.svg"
                      />
                      <img
                        className="h-3 w-[118px] relative overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/text7.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-white flex flex-row items-center justify-start py-2 pr-0 pl-4 box-border gap-[20px] max-w-full z-[5]">
                  <div className="h-12 w-[1094px] relative shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-core-gray-lightest hidden max-w-full" />
                  <div className="flex-1 flex flex-row items-center justify-start gap-[57px] max-w-full mq450:gap-[28px]">
                    <div className="w-[1018px] overflow-hidden hidden flex-row items-center justify-start gap-[32px] max-w-full mq1000:flex-wrap">
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
                    <div className="flex-1 flex flex-row items-center justify-between py-0 pr-[302px] pl-0 box-border max-w-full gap-[20px] text-xs mq725:flex-wrap mq1000:pr-[151px] mq1000:box-border mq450:pr-5 mq450:box-border">
                      <div className="relative leading-[18px] font-semibold inline-block min-w-[51px]">
                        ACC 124
                      </div>
                      <div className="w-[75px] relative leading-[18px] font-semibold inline-block shrink-0 whitespace-nowrap">
                        $75.00
                      </div>
                      <div className="relative leading-[18px] font-semibold inline-block min-w-[126px] whitespace-nowrap">
                        15 May 2020 8:00 am
                      </div>
                      <img
                        className="h-3 w-[67px] relative overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/text.svg"
                      />
                      <img
                        className="h-3 w-[118px] relative overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/text8.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[7.7px] max-w-full">
                  <div className="self-stretch shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-white flex flex-row items-center justify-start py-2 pr-2.5 pl-4 box-border gap-[20px] max-w-full z-[5]">
                    <div className="h-12 w-[1094px] relative shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-core-gray-lightest hidden max-w-full" />
                    <div className="flex-1 flex flex-row items-center justify-start gap-[57px] max-w-full mq450:gap-[28px]">
                      <div className="w-[1018px] overflow-hidden hidden flex-row items-center justify-start gap-[32px] max-w-full mq1000:flex-wrap">
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
                      <div className="flex-1 flex flex-row items-center justify-between py-0 pr-[292px] pl-0 box-border max-w-full gap-[20px] text-xs mq725:flex-wrap mq1000:pr-[146px] mq1000:box-border mq450:pr-5 mq450:box-border">
                        <div className="relative leading-[18px] font-semibold inline-block min-w-[51px]">
                          ACC 124
                        </div>
                        <div className="w-[75px] relative leading-[18px] font-semibold inline-block shrink-0 whitespace-nowrap">
                          $200.00
                        </div>
                        <div className="relative leading-[18px] font-semibold inline-block min-w-[126px] whitespace-nowrap">
                          15 May 2020 8:30 am
                        </div>
                        <img
                          className="h-3 w-[67px] relative overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/text.svg"
                        />
                        <img
                          className="h-3 w-[118px] relative overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/text5.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                    <div className="self-stretch shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-white flex flex-row items-start justify-start py-2 px-4 box-border gap-[430px] max-w-full z-[5] mq725:gap-[107px] mq450:gap-[54px] mq1050:flex-wrap mq1050:gap-[215px]">
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
                      <div className="w-[472px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border max-w-full shrink-0 text-xs">
                        <div className="self-stretch flex flex-row items-start justify-between shrink-0 gap-[20px] mq450:flex-wrap">
                          <div className="relative leading-[18px] font-semibold inline-block min-w-[51px]">
                            ACC 124
                          </div>
                          <div className="w-[75px] relative leading-[18px] font-semibold inline-block shrink-0 whitespace-nowrap">
                            $15.00
                          </div>
                          <div className="relative leading-[18px] font-semibold inline-block min-w-[126px] whitespace-nowrap">
                            15 May 2020 9:00 am
                          </div>
                        </div>
                      </div>
                      <img
                        className="h-3 flex-1 relative max-w-full overflow-hidden hidden"
                        alt=""
                        src="/text.svg"
                      />
                      <img
                        className="h-3 flex-1 relative max-w-full overflow-hidden hidden"
                        alt=""
                        src="/text9.svg"
                      />
                      <div className="h-8 w-28 flex flex-row items-start justify-start relative gap-[8px] shrink-0 text-center text-base text-secondary font-font-awesome-icon-solid-16">
                        <div className="w-8 !m-[0] absolute h-full top-[0px] bottom-[0px] left-[0px] flex flex-row items-start justify-start pt-2 px-2 pb-[5px] box-border">
                          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[50%] bg-silver opacity-[0]" />
                          <div className="flex-1 relative z-[1]">sync</div>
                        </div>
                        <div className="w-8 !m-[0] absolute h-full top-[0px] bottom-[0px] left-[calc(50%_-_16px)] flex flex-row items-start justify-start pt-2 px-2 pb-[5px] box-border">
                          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[50%] bg-silver opacity-[0]" />
                          <a className="[text-decoration:none] flex-1 relative text-[inherit] z-[1]">
                            trash
                          </a>
                        </div>
                        <div className="w-8 !m-[0] absolute h-full top-[0px] right-[0px] bottom-[0px] flex flex-row items-start justify-start p-2 box-border">
                          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[50%] bg-silver opacity-[0]" />
                          <div className="h-4 flex-1 relative flex items-center justify-center z-[1]">
                            ellipsis-v
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-white flex flex-row items-start justify-start py-2 px-4 box-border gap-[430px] max-w-full z-[5] mq725:gap-[107px] mq450:gap-[54px] mq1050:flex-wrap mq1050:gap-[215px]">
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
                      <div className="w-[472px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border max-w-full shrink-0 text-xs">
                        <div className="self-stretch flex flex-row items-start justify-between shrink-0 gap-[20px] mq450:flex-wrap">
                          <div className="relative leading-[18px] font-semibold inline-block min-w-[51px]">
                            ACC 124
                          </div>
                          <div className="w-[75px] relative leading-[18px] font-semibold inline-block shrink-0 whitespace-nowrap">
                            $5.00
                          </div>
                          <div className="relative leading-[18px] font-semibold inline-block min-w-[126px] whitespace-nowrap">
                            15 May 2020 8:00 am
                          </div>
                        </div>
                      </div>
                      <img
                        className="h-3 flex-1 relative max-w-full overflow-hidden hidden"
                        alt=""
                        src="/text.svg"
                      />
                      <img
                        className="h-3 flex-1 relative max-w-full overflow-hidden hidden"
                        alt=""
                        src="/text9.svg"
                      />
                      <div className="h-8 w-28 flex flex-row items-start justify-start relative gap-[8px] shrink-0 text-center text-base text-secondary font-font-awesome-icon-solid-16">
                        <div className="w-8 !m-[0] absolute h-full top-[0px] bottom-[0px] left-[0px] flex flex-row items-start justify-start pt-2 px-2 pb-[5px] box-border">
                          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[50%] bg-silver opacity-[0]" />
                          <div className="flex-1 relative z-[1]">sync</div>
                        </div>
                        <div className="w-8 !m-[0] absolute h-full top-[0px] bottom-[0px] left-[calc(50%_-_16px)] flex flex-row items-start justify-start pt-2 px-2 pb-[5px] box-border">
                          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[50%] bg-silver opacity-[0]" />
                          <a className="[text-decoration:none] flex-1 relative text-[inherit] z-[1]">
                            trash
                          </a>
                        </div>
                        <div className="w-8 !m-[0] absolute h-full top-[0px] right-[0px] bottom-[0px] flex flex-row items-start justify-start p-2 box-border">
                          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[50%] bg-silver opacity-[0]" />
                          <div className="h-4 flex-1 relative flex items-center justify-center z-[1]">
                            ellipsis-v
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-white flex flex-row items-start justify-start py-2 px-4 box-border gap-[430px] max-w-full z-[5] mq725:gap-[107px] mq450:gap-[54px] mq1050:flex-wrap mq1050:gap-[215px]">
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
                      <div className="w-[472px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border max-w-full shrink-0 text-xs">
                        <div className="self-stretch flex flex-row items-start justify-between shrink-0 gap-[20px] mq450:flex-wrap">
                          <div className="relative leading-[18px] font-semibold inline-block min-w-[51px]">
                            ACC 124
                          </div>
                          <div className="w-[75px] relative leading-[18px] font-semibold inline-block shrink-0 whitespace-nowrap">
                            $55.00
                          </div>
                          <div className="relative leading-[18px] font-semibold inline-block min-w-[126px] whitespace-nowrap">
                            15 May 2020 9:30 am
                          </div>
                        </div>
                      </div>
                      <img
                        className="h-3 flex-1 relative max-w-full overflow-hidden hidden"
                        alt=""
                        src="/text.svg"
                      />
                      <img
                        className="h-3 flex-1 relative max-w-full overflow-hidden hidden"
                        alt=""
                        src="/text9.svg"
                      />
                      <div className="h-8 w-28 flex flex-row items-start justify-start relative gap-[8px] shrink-0 text-center text-base text-secondary font-font-awesome-icon-solid-16">
                        <div className="w-8 !m-[0] absolute h-full top-[0px] bottom-[0px] left-[0px] flex flex-row items-start justify-start pt-2 px-2 pb-[5px] box-border">
                          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[50%] bg-silver opacity-[0]" />
                          <div className="flex-1 relative z-[1]">sync</div>
                        </div>
                        <div className="w-8 !m-[0] absolute h-full top-[0px] bottom-[0px] left-[calc(50%_-_16px)] flex flex-row items-start justify-start pt-2 px-2 pb-[5px] box-border">
                          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[50%] bg-silver opacity-[0]" />
                          <a className="[text-decoration:none] flex-1 relative text-[inherit] z-[1]">
                            trash
                          </a>
                        </div>
                        <div className="w-8 !m-[0] absolute h-full top-[0px] right-[0px] bottom-[0px] flex flex-row items-start justify-start p-2 box-border">
                          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[50%] bg-silver opacity-[0]" />
                          <div className="h-4 flex-1 relative flex items-center justify-center z-[1]">
                            ellipsis-v
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-white flex flex-row items-start justify-start py-2 px-4 box-border gap-[430px] max-w-full z-[6] mq725:gap-[107px] mq450:gap-[54px] mq1050:flex-wrap mq1050:gap-[215px]">
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
                      <div className="w-[472px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border max-w-full shrink-0 text-xs">
                        <div className="self-stretch flex flex-row items-start justify-between shrink-0 gap-[20px] mq450:flex-wrap">
                          <div className="relative leading-[18px] font-semibold inline-block min-w-[51px]">
                            ACC 124
                          </div>
                          <div className="w-[75px] relative leading-[18px] font-semibold inline-block shrink-0 whitespace-nowrap">
                            $100.00
                          </div>
                          <div className="relative leading-[18px] font-semibold inline-block min-w-[126px] whitespace-nowrap">
                            15 May 2020 9:00 am
                          </div>
                        </div>
                      </div>
                      <img
                        className="h-3 flex-1 relative max-w-full overflow-hidden hidden"
                        alt=""
                        src="/text.svg"
                      />
                      <img
                        className="h-3 flex-1 relative max-w-full overflow-hidden hidden"
                        alt=""
                        src="/text9.svg"
                      />
                      <div className="h-8 w-28 flex flex-row items-start justify-start relative gap-[8px] shrink-0 text-center text-base text-secondary font-font-awesome-icon-solid-16">
                        <div className="w-8 !m-[0] absolute h-full top-[0px] bottom-[0px] left-[0px] flex flex-row items-start justify-start pt-2 px-2 pb-[5px] box-border">
                          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[50%] bg-silver opacity-[0]" />
                          <div className="flex-1 relative z-[1]">sync</div>
                        </div>
                        <div className="w-8 !m-[0] absolute h-full top-[0px] bottom-[0px] left-[calc(50%_-_16px)] flex flex-row items-start justify-start pt-2 px-2 pb-[5px] box-border">
                          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[50%] bg-silver opacity-[0]" />
                          <a className="[text-decoration:none] flex-1 relative text-[inherit] z-[1]">
                            trash
                          </a>
                        </div>
                        <div className="w-8 !m-[0] absolute h-full top-[0px] right-[0px] bottom-[0px] flex flex-row items-start justify-start p-2 box-border">
                          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[50%] bg-silver opacity-[0]" />
                          <div className="h-4 flex-1 relative flex items-center justify-center z-[1]">
                            ellipsis-v
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-white flex flex-row items-center justify-start py-2 pr-3 pl-4 box-border gap-[20px] max-w-full z-[5]">
                    <div className="h-12 w-[1094px] relative shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-core-gray-lightest hidden max-w-full" />
                    <div className="flex-1 flex flex-row items-center justify-start gap-[57px] max-w-full mq450:gap-[28px]">
                      <div className="w-[1018px] overflow-hidden hidden flex-row items-center justify-start gap-[32px] max-w-full mq1000:flex-wrap">
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
                      <div className="flex-1 flex flex-row items-center justify-between py-0 pr-[290px] pl-0 box-border max-w-full gap-[20px] text-xs mq725:flex-wrap mq1000:pr-[145px] mq1000:box-border mq450:pr-5 mq450:box-border">
                        <div className="relative leading-[18px] font-semibold inline-block min-w-[51px]">
                          ACC 124
                        </div>
                        <div className="w-[75px] relative leading-[18px] font-semibold inline-block shrink-0 whitespace-nowrap">
                          $25.00
                        </div>
                        <div className="relative leading-[18px] font-semibold inline-block min-w-[126px] whitespace-nowrap">
                          15 May 2020 8:30 am
                        </div>
                        <img
                          className="h-3 w-[67px] relative overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/text.svg"
                        />
                        <img
                          className="h-3 w-[118px] relative overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/text10.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-white flex flex-row items-start justify-start py-2 px-4 box-border gap-[430px] max-w-full z-[5] mq725:gap-[107px] mq450:gap-[54px] mq1050:flex-wrap mq1050:gap-[215px]">
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
                    <div className="w-[472px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border max-w-full shrink-0 text-xs">
                      <div className="self-stretch flex flex-row items-start justify-between shrink-0 gap-[20px] mq450:flex-wrap">
                        <div className="relative leading-[18px] font-semibold inline-block min-w-[51px]">
                          ACC 124
                        </div>
                        <div className="w-[75px] relative leading-[18px] font-semibold inline-block shrink-0 whitespace-nowrap">
                          $45.00
                        </div>
                        <div className="relative leading-[18px] font-semibold inline-block min-w-[126px] whitespace-nowrap">
                          15 May 2020 9:00 am
                        </div>
                      </div>
                    </div>
                    <img
                      className="h-3 flex-1 relative max-w-full overflow-hidden hidden"
                      alt=""
                      src="/text.svg"
                    />
                    <img
                      className="h-3 flex-1 relative max-w-full overflow-hidden hidden"
                      alt=""
                      src="/text9.svg"
                    />
                    <div className="h-8 w-28 flex flex-row items-start justify-start relative gap-[8px] shrink-0 text-center text-base text-secondary font-font-awesome-icon-solid-16">
                      <div className="w-8 !m-[0] absolute h-full top-[0px] bottom-[0px] left-[0px] flex flex-row items-start justify-start pt-2 px-2 pb-[5px] box-border">
                        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[50%] bg-silver opacity-[0]" />
                        <div className="flex-1 relative z-[1]">sync</div>
                      </div>
                      <div className="w-8 !m-[0] absolute h-full top-[0px] bottom-[0px] left-[calc(50%_-_16px)] flex flex-row items-start justify-start pt-2 px-2 pb-[5px] box-border">
                        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[50%] bg-silver opacity-[0]" />
                        <a className="[text-decoration:none] flex-1 relative text-[inherit] z-[1]">
                          trash
                        </a>
                      </div>
                      <div className="w-8 !m-[0] absolute h-full top-[0px] right-[0px] bottom-[0px] flex flex-row items-start justify-start p-2 box-border">
                        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[50%] bg-silver opacity-[0]" />
                        <div className="h-4 flex-1 relative flex items-center justify-center z-[1]">
                          ellipsis-v
                        </div>
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

export default BankDetail;
