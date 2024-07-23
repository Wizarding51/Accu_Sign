import HeaderDarkHeader from "../components/HeaderDarkHeader";
import SideNavSampleSideNav3 from "../components/SideNavSampleSideNav3";

const Client1 = () => {
  return (
    <div className="w-full relative bg-gray-6 overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal] text-center text-base text-active font-body">
      <div className="w-[285px] h-0 relative leading-[24px] hidden">
        Alert dialog prompt
      </div>
      <HeaderDarkHeader />
      <main className="w-[1428px] flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[32px] max-w-full mq725:gap-[16px] mq1000:pl-5 mq1000:box-border">
        <SideNavSampleSideNav3 />
        <section className="flex-1 flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border max-w-[calc(100%_-_292px)] text-left text-lg text-gray-1 font-medium-24 mq1000:max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[18px] max-w-full">
            <div className="self-stretch flex flex-row items-end justify-between gap-[20px] mq450:flex-wrap">
              <div className="flex flex-row items-start justify-start py-0 pr-[7px] pl-0">
                <a className="[text-decoration:none] relative leading-[24px] font-bold text-[inherit] inline-block min-w-[71px]">
                  Crew list
                </a>
              </div>
              <div className="bg-gray-3 flex flex-row items-start justify-start py-3 px-4 gap-[8px] text-center text-base text-gray-6 font-font-awesome-icon-solid-16">
                <img
                  className="self-stretch w-[88px] relative max-h-full hidden min-h-[16px]"
                  alt=""
                  src="/body-placeholder2.svg"
                />
                <div className="flex flex-row items-start justify-start gap-[8px]">
                  <a className="[text-decoration:none] w-4 relative text-[inherit] flex items-center justify-center shrink-0">
                    plus
                  </a>
                  <div className="relative text-sm tracking-[0.01em] leading-[16px] uppercase font-medium font-body text-left inline-block min-w-[101px]">
                    Create Crew
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch rounded bg-white box-border flex flex-row items-start justify-start pt-[17px] px-2.5 pb-[629px] max-w-full text-sm text-active font-body border-[1px] border-solid border-light mq1000:pt-5 mq1000:pb-[409px] mq1000:box-border">
              <div className="h-[745px] w-[1116px] relative rounded bg-white box-border hidden max-w-full z-[1] border-[1px] border-solid border-light" />
              <div className="flex-1 flex flex-col items-start justify-start pt-[47.5px] px-0 pb-0 box-border max-w-full">
                <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-2 pr-4 pl-6 box-border relative gap-[20px] max-w-full z-[1]">
                  <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-white" />
                  <div className="h-12 w-[1094px] relative shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-core-gray-lightest hidden max-w-full z-[1]" />
                  <input className="m-0 h-[26px] w-5" type="checkbox" />
                  <div className="flex-1 flex flex-row items-start justify-start gap-[32px] min-w-[659px] max-w-full z-[1] mq725:gap-[16px] mq1000:flex-wrap mq1000:min-w-full">
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
                    <div className="flex-1 flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border max-w-full text-xs mq725:min-w-full">
                      <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq1000:flex-wrap">
                        <a className="[text-decoration:none] w-[159px] relative leading-[18px] font-semibold text-[inherit] inline-block shrink-0">
                          Name
                        </a>
                        <div className="w-[159px] relative leading-[18px] font-semibold inline-block shrink-0">
                          Flight crew
                        </div>
                        <div className="w-[159px] relative leading-[18px] font-semibold inline-block shrink-0">
                          92384032fsdf
                        </div>
                        <div className="w-[159px] relative leading-[18px] font-semibold inline-block shrink-0 whitespace-nowrap">
                          name@company.com
                        </div>
                        <div className="self-stretch hidden flex-row items-center justify-start gap-[4px]">
                          <div className="self-stretch relative leading-[18px] font-semibold">
                            Active
                          </div>
                          <img
                            className="h-4 w-4 relative"
                            alt=""
                            src="/expand-more.svg"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                          <img
                            className="w-[26px] h-3 relative overflow-hidden shrink-0"
                            loading="lazy"
                            alt=""
                            src="/text1.svg"
                          />
                        </div>
                        <img
                          className="h-3 w-[118px] relative overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/text3.svg"
                        />
                      </div>
                    </div>
                    <div className="w-[72px] flex flex-row items-start justify-start gap-[8px] text-center text-base text-secondary font-font-awesome-icon-solid-16">
                      <div className="h-8 w-8 relative hidden">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                        <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] flex items-center justify-center w-4 h-[19px]">
                          sync
                        </div>
                      </div>
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
              </div>
              <div className="flex-[0.9634] flex flex-row flex-wrap items-start justify-start py-3.5 pr-4 pl-6 box-border relative gap-[20px] max-w-full z-[2] ml-[-1094px] text-xs text-gray-1">
                <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-white" />
                <div className="h-5 w-5 relative rounded-sm bg-white box-border opacity-[0] z-[1] border-[2px] border-solid border-secondary" />
                <div className="hidden flex-row items-center justify-center gap-[32px] max-w-full z-[2] mq1050:flex-wrap">
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
                    src="/text-51.svg"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border min-w-[659px] max-w-full mq1000:min-w-full">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[32px] z-[1] mq725:gap-[16px] mq1000:flex-wrap">
                    <a className="[text-decoration:none] flex-1 relative leading-[18px] font-semibold text-[inherit] inline-block min-w-[67px]">
                      Name
                    </a>
                    <a className="[text-decoration:none] flex-1 relative leading-[18px] font-semibold text-[inherit] inline-block min-w-[67px]">
                      Type
                    </a>
                    <a className="[text-decoration:none] flex-1 relative leading-[18px] font-semibold text-[inherit] inline-block min-w-[67px]">
                      Phone number
                    </a>
                    <a className="[text-decoration:none] flex-1 relative leading-[18px] font-semibold text-[inherit] inline-block min-w-[67px]">
                      Email
                    </a>
                    <div className="self-stretch w-[148.4px] relative leading-[18px] font-semibold hidden">
                      Stats
                    </div>
                    <a className="[text-decoration:none] w-28 relative leading-[18px] font-semibold text-[inherit] text-center inline-block shrink-0">
                      Actions
                    </a>
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

export default Client1;
