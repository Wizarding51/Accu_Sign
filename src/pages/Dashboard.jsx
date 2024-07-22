import HeaderDarkHeader from "../components/HeaderDarkHeader";
import SideNavSampleSideNav from "../components/SideNavSampleSideNav";
import FrameComponent from "../components/FrameComponent";
import ClientCardsRowOne from "../components/ClientCardsRowOne";
import PasswordFields from "../components/PasswordFields";

const Dashboard = () => {
  return (
    <div className="w-full relative bg-lightest overflow-hidden flex flex-row items-end justify-start gap-[313px] leading-[normal] tracking-[normal] mq450:gap-[39px] mq800:gap-[78px] mq1350:flex-wrap mq1350:gap-[156px]">
      <main className="w-[1440px] flex flex-col items-start justify-start shrink-0 max-w-full">
        <HeaderDarkHeader />
        <section className="w-[1428px] flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[32px] max-w-full text-left text-lg text-gray-100 font-medium-24 mq800:gap-[16px] mq1125:pl-5 mq1125:box-border">
          <SideNavSampleSideNav />
          <div className="flex-1 flex flex-col items-start justify-start pt-[29px] px-0 pb-0 box-border max-w-[calc(100%_-_292px)] mq1125:max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[18px] max-w-full">
              <div className="w-[78px] flex flex-row items-start justify-start py-0 px-0 box-border">
                <a className="[text-decoration:none] w-[88px] relative leading-[24px] font-bold text-[inherit] inline-block shrink-0">
                  Dashboard
                </a>
              </div>
              <div className="self-stretch rounded bg-white box-border flex flex-col items-start justify-start pt-3.5 pb-[35px] pr-[9px] pl-4 relative gap-[21px] max-w-full text-center text-[36px] text-darkslategray-200 border-[1px] border-solid border-light mq800:pt-5 mq800:pb-[23px] mq800:box-border">
                <div className="w-[1116px] h-[745px] relative rounded bg-white box-border hidden max-w-full z-[0] border-[1px] border-solid border-light" />
                <div className="w-[339.7px] rounded bg-white box-border hidden flex-col items-center justify-start py-[33px] px-5 gap-[28px] opacity-[0] max-w-full z-[1] border-[1px] border-solid border-light">
                  <b className="h-[42px] relative inline-block mq450:text-[22px] mq800:text-10xl">
                    200
                  </b>
                  <div className="h-[29px] relative text-6xl inline-block mq450:text-xl">{`Client `}</div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[12px] max-w-full z-[2] mq1125:flex-wrap">
                  <FrameComponent
                    trips="Clients"
                    prop="600"
                    group6="/group-10900.svg"
                  />
                  <FrameComponent
                    trips="Trips"
                    prop="274"
                    group6="/group-6.svg"
                  />
                  <FrameComponent
                    trips="Crew Member"
                    prop="816"
                    group6="/group-6.svg"
                  />
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[3px] box-border max-w-full text-left text-2xl text-natural-3 font-body">
                  <div className="flex-1 flex flex-row items-start justify-start gap-[14px] max-w-full mq1125:flex-wrap">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[16px] max-w-full mq800:min-w-full">
                      <div className="self-stretch bg-white box-border flex flex-col items-start justify-start pt-[5px] pb-5 pr-[13px] pl-[18px] gap-[13px] max-w-full z-[2] border-[1px] border-solid border-gray-5">
                        <div className="w-[712px] h-[338px] relative bg-white box-border hidden max-w-full border-[1px] border-solid border-gray-5" />
                        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] text-black-2 mq800:flex-wrap">
                          <div className="flex flex-col items-start justify-start pt-[19px] px-0 pb-0">
                            <h3 className="m-0 relative text-inherit font-medium font-inherit inline-block min-w-[76px] z-[3] mq450:text-[17px]">
                              Earning
                            </h3>
                          </div>
                          <div className="w-[360px] flex flex-row items-center justify-start [row-gap:20px] max-w-full z-[4] text-center text-sm text-gray-3 font-poppins-medium mq450:flex-wrap">
                            <div className="flex-1 flex flex-col items-center justify-start pt-4 px-0 pb-0 box-border min-w-[83px] max-w-[90px]">
                              <div className="self-stretch h-[37px] flex flex-col items-center justify-between">
                                <div className="flex flex-row items-start justify-start py-0 px-[27px]">
                                  <div className="relative font-medium inline-block min-w-[35px]">
                                    Daily
                                  </div>
                                </div>
                                <img
                                  className="self-stretch h-1 relative max-w-full overflow-hidden shrink-0"
                                  alt=""
                                  src="/selected.svg"
                                />
                              </div>
                            </div>
                            <div className="flex-1 flex flex-col items-center justify-start pt-4 px-0 pb-0 box-border min-w-[83px] max-w-[90px]">
                              <div className="self-stretch h-[37px] flex flex-col items-center justify-between">
                                <div className="flex flex-row items-start justify-start py-0 px-[19px]">
                                  <div className="relative font-medium inline-block min-w-[51px]">
                                    Weekly
                                  </div>
                                </div>
                                <img
                                  className="self-stretch h-1 relative max-w-full overflow-hidden shrink-0"
                                  loading="lazy"
                                  alt=""
                                  src="/selected-1.svg"
                                />
                              </div>
                            </div>
                            <div className="flex-1 flex flex-col items-center justify-start pt-4 px-0 pb-0 box-border min-w-[83px] max-w-[90px] text-darkslategray-200">
                              <div className="self-stretch h-[37px] flex flex-col items-center justify-between">
                                <div className="flex flex-row items-start justify-start py-0 px-4">
                                  <div className="relative font-medium inline-block min-w-[57px]">
                                    Monthly
                                  </div>
                                </div>
                                <img
                                  className="self-stretch h-1 relative max-w-full overflow-hidden shrink-0"
                                  loading="lazy"
                                  alt=""
                                  src="/selected-2.svg"
                                />
                              </div>
                            </div>
                            <div className="flex-1 flex flex-col items-center justify-start pt-4 px-0 pb-0 box-border min-w-[83px] max-w-[90px]">
                              <div className="self-stretch h-[37px] flex flex-col items-center justify-between">
                                <div className="flex flex-row items-start justify-start py-0 px-[23px]">
                                  <div className="relative font-medium inline-block min-w-[44px]">
                                    Yearly
                                  </div>
                                </div>
                                <img
                                  className="self-stretch h-1 relative max-w-full overflow-hidden shrink-0"
                                  loading="lazy"
                                  alt=""
                                  src="/selected-3.svg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-end justify-start gap-[10px] max-w-full text-sm mq800:flex-wrap">
                          <div className="flex flex-col items-start justify-start gap-[32px]">
                            <div className="flex flex-row items-start justify-start py-0 pr-0.5 pl-px">
                              <div className="relative inline-block min-w-[27px] z-[3]">
                                600
                              </div>
                            </div>
                            <div className="relative inline-block min-w-[27px] z-[3]">
                              400
                            </div>
                            <div className="flex flex-row items-start justify-start py-0 pr-0.5 pl-px">
                              <div className="relative inline-block min-w-[27px] z-[3]">
                                300
                              </div>
                            </div>
                            <div className="flex flex-row items-start justify-start py-0 pr-0 pl-px">
                              <div className="flex flex-col items-start justify-start gap-[28px]">
                                <div className="relative inline-block min-w-[26px] z-[3]">
                                  200
                                </div>
                                <div className="flex flex-row items-start justify-start py-0 pr-0 pl-5">
                                  <div className="relative inline-block min-w-[9px] z-[3]">
                                    0
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-0.5 box-border min-w-[413px] max-w-full text-6xl text-black-2 mq800:min-w-full">
                            <div className="self-stretch h-[213px] flex flex-col items-start justify-start gap-[3px] max-w-full">
                              <div className="self-stretch flex-1 flex flex-col items-end justify-start max-w-full">
                                <div className="w-[463px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                                  <div className="flex flex-row items-start justify-start relative">
                                    <div className="h-[1.5px] w-[636.5px] absolute !m-[0] top-[16px] left-[-331px] box-border z-[3] border-t-[1.5px] border-dashed border-whitesmoke-100" />
                                    <div className="bg-white flex flex-col items-start justify-start py-1.5 px-[7px] z-[6] border-[1px] border-solid border-gray-3">
                                      <b className="relative inline-block min-w-[123px] whitespace-nowrap mq450:text-xl">
                                        $3468.96
                                      </b>
                                      <div className="relative text-xs inline-block min-w-[129px]">
                                        Current month earning
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-0 mt-[-4px]">
                                  <img
                                    className="self-stretch h-[152px] relative max-w-full overflow-hidden shrink-0 z-[4]"
                                    alt=""
                                    src="/chart-pointer.svg"
                                  />
                                  <div className="self-stretch h-[258px] relative mt-[-152px]">
                                    <div className="absolute top-[57px] left-[0px] box-border w-[636.5px] h-[1.5px] z-[3] border-t-[1.5px] border-dashed border-whitesmoke-100" />
                                    <div className="absolute top-[8px] left-[0px] box-border w-[636.5px] h-[1.5px] z-[3] border-t-[1.5px] border-dashed border-whitesmoke-100" />
                                    <img
                                      className="absolute top-[0px] left-[0px] w-[635px] h-[91px] z-[5]"
                                      loading="lazy"
                                      alt=""
                                      src="/vector-1.svg"
                                    />
                                    <div className="absolute top-[5px] left-[322px] rounded-6xs-5 bg-gray-3 w-[13px] h-[13px] z-[6]">
                                      <div className="absolute top-[0px] left-[0px] rounded-6xs-5 bg-gray-3 w-full h-full hidden z-[6]" />
                                      <div className="absolute top-[3px] left-[3px] rounded-6xs-5 bg-white w-[7px] h-[7px] z-[7]" />
                                    </div>
                                  </div>
                                  <div className="self-stretch h-[1.5px] relative box-border z-[3] mt-[-152px] border-t-[1.5px] border-dashed border-whitesmoke-100" />
                                </div>
                              </div>
                              <div className="self-stretch h-px relative box-border z-[3] border-t-[1px] border-solid border-whitesmoke-200" />
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-end py-0 px-[7px] box-border max-w-full text-xs">
                          <div className="w-[632px] flex flex-row items-start justify-between gap-[20px] max-w-full mq800:flex-wrap">
                            <div className="relative inline-block min-w-[21px] z-[3]">
                              Jan
                            </div>
                            <div className="relative inline-block min-w-[21px] z-[3]">
                              Feb
                            </div>
                            <div className="relative inline-block min-w-[22px] z-[3]">
                              Mar
                            </div>
                            <div className="relative inline-block min-w-[20px] z-[3]">
                              Apr
                            </div>
                            <div className="relative inline-block min-w-[24px] z-[3]">
                              May
                            </div>
                            <div className="relative inline-block min-w-[21px] z-[3]">
                              Jun
                            </div>
                            <div className="relative inline-block min-w-[17px] z-[3] mq800:w-full mq800:h-[17px]">
                              Jul
                            </div>
                            <div className="relative inline-block min-w-[23px] z-[3]">
                              Aug
                            </div>
                            <div className="relative inline-block min-w-[22px] z-[3]">
                              Sep
                            </div>
                            <div className="relative inline-block min-w-[21px] z-[3]">
                              Oct
                            </div>
                            <div className="relative inline-block min-w-[23px] z-[3]">
                              Nov
                            </div>
                            <div className="relative inline-block min-w-[23px] z-[3]">
                              Dec
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch box-border flex flex-row items-start justify-start py-[18px] px-[19px] max-w-full z-[2] text-base text-gray-2 font-medium-24 border-[1px] border-solid border-gray-5">
                        <div className="flex-1 bg-white flex flex-col items-start justify-start relative gap-[16px] max-w-full">
                          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-lg text-grey-blue-25 mq450:flex-wrap">
                            <div className="w-[138.1px] relative leading-[30px] font-medium inline-block shrink-0">
                              Aircraft
                            </div>
                            <a className="[text-decoration:none] relative text-sm leading-[30px] text-grey-blue-75 inline-block min-w-[52.5px]">
                              View all
                            </a>
                          </div>
                          <div className="w-[518px] h-[70px] relative max-w-full">
                            <div className="absolute top-[0px] left-[0px] w-[286.1px] flex flex-row items-start justify-start gap-[8px]">
                              <img
                                className="h-16 w-16 relative object-cover"
                                loading="lazy"
                                alt=""
                                src="/group-10915@2x.png"
                              />
                              <div className="flex-1 flex flex-col items-start justify-start">
                                <div className="w-[155px] h-[30px] relative leading-[30px] font-medium inline-block overflow-hidden text-ellipsis whitespace-nowrap shrink-0">
                                  Name
                                </div>
                                <div className="self-stretch h-[39px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border text-smi text-gray-3 font-body">
                                  <div className="mt-[-1px] flex-1 relative leading-[20px] font-medium shrink-0">
                                    <p className="m-0">Type</p>
                                    <p className="m-0">Registration</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="absolute top-[0px] left-[227px] w-[286.1px] flex flex-row items-start justify-start gap-[8px]">
                              <img
                                className="h-16 w-16 relative object-cover"
                                loading="lazy"
                                alt=""
                                src="/group-10910@2x.png"
                              />
                              <div className="flex-1 flex flex-col items-start justify-start">
                                <div className="w-[155px] h-[30px] relative leading-[30px] font-medium inline-block overflow-hidden text-ellipsis whitespace-nowrap shrink-0">
                                  Name
                                </div>
                                <div className="self-stretch relative text-smi leading-[20px] font-medium font-body text-gray-3">
                                  <p className="m-0">Type</p>
                                  <p className="m-0">Registration</p>
                                </div>
                              </div>
                            </div>
                            <img
                              className="absolute top-[0px] left-[454px] w-16 h-16 object-cover"
                              loading="lazy"
                              alt=""
                              src="/group-10919@2x.png"
                            />
                          </div>
                          <div className="w-[214.1px] h-[30px] absolute !m-[0] right-[-72.1px] bottom-[40px] leading-[30px] font-medium inline-block overflow-hidden text-ellipsis whitespace-nowrap">
                            NAme
                          </div>
                          <div className="w-[214.1px] absolute !m-[0] right-[-72.1px] bottom-[0px] text-smi leading-[20px] font-medium font-body text-gray-3 inline-block">
                            <p className="m-0">Type</p>
                            <p className="m-0">Registration</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[360px] box-border flex flex-row items-start justify-start py-[18px] pr-4 pl-5 min-w-[360px] max-w-full z-[1] text-lg text-grey-blue-25 font-medium-24 border-[1px] border-solid border-gray-5 mq450:min-w-full mq1125:flex-1">
                      <div className="flex-1 bg-white flex flex-col items-start justify-start gap-[16px] max-w-full">
                        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                          <a className="[text-decoration:none] w-[138.1px] relative leading-[30px] font-medium text-[inherit] inline-block shrink-0">
                            Clients
                          </a>
                          <a className="[text-decoration:none] relative text-sm leading-[30px] text-grey-blue-75 inline-block min-w-[52.5px]">
                            View all
                          </a>
                        </div>
                        <div className="w-[314.6px] flex flex-row items-start justify-start gap-[13px] text-base text-gray-2">
                          <div className="flex-1 flex flex-col items-start justify-start gap-[16px]">
                            <div className="self-stretch flex flex-row items-start justify-start gap-[18px] mq450:flex-wrap">
                              <img
                                className="h-16 w-16 relative object-cover"
                                loading="lazy"
                                alt=""
                                src="/group-10915-1@2x.png"
                              />
                              <div className="flex-1 flex flex-col items-start justify-start min-w-[139px]">
                                <div className="self-stretch h-[29px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border">
                                  <div className="mb-[-1px] h-[30px] flex-1 relative leading-[30px] font-medium inline-block overflow-hidden text-ellipsis whitespace-nowrap shrink-0">
                                    Sun Dae-Hyun
                                  </div>
                                </div>
                                <div className="self-stretch relative text-smi leading-[20px] font-medium font-body text-gray-3 whitespace-pre-wrap shrink-0">
                                  Pilot • Flight Crew
                                </div>
                              </div>
                            </div>
                            <ClientCardsRowOne
                              group10910="/group-10910-1@2x.png"
                              ayhanSeven="Ayhan Seven"
                            />
                            <ClientCardsRowOne
                              group10910="/group-10914@2x.png"
                              ayhanSeven="Latifah Owusu"
                            />
                            <ClientCardsRowOne
                              group10910="/group-10917@2x.png"
                              ayhanSeven="So Jung-Mo"
                            />
                            <ClientCardsRowOne
                              group10910="/group-10919-1@2x.png"
                              ayhanSeven="Duong Hai"
                            />
                          </div>
                          <div className="h-[408px] w-[5.5px] relative rounded-lg bg-grey-blue-97">
                            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-grey-blue-97 hidden" />
                            <div className="absolute h-[21.54%] w-full top-[30.29%] right-[0%] bottom-[48.16%] left-[0%] rounded-lg bg-grey-blue-90 z-[1]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className="w-[360px] h-px absolute !m-[0] top-[257px] left-[358px] z-[3]"
                  alt=""
                  src="/rectangle-515.svg"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="w-[448px] flex flex-col items-start justify-start pt-0 px-0 pb-[184px] box-border min-h-[384px] max-w-full shrink-0 mq450:pb-[120px] mq450:box-border">
        <PasswordFields />
      </div>
    </div>
  );
};

export default Dashboard;
