import HeaderDarkHeader from "../components/HeaderDarkHeader";
import SideNavSampleSideNav from "../components/SideNavSampleSideNav";
import FrameComponent from "../components/FrameComponent";
import ClientCardsRowOne from "../components/ClientCardsRowOne";
import PasswordFields from "../components/PasswordFields";
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { _updateBezierControlPoints } from "chart.js/helpers";

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: true,
      // backgroundColor: Utils.CHART_COLORS.grey,
      borderColor: 'rgb(150, 150, 150)',
      tension: 0.1
    }
  ]
};

const config = {
  type: 'line',
  data: data,
  options: {
    animations: {
      radius: {
        duration: 400,
        easing: 'linear',
        loop: (context) => context.active
      }
    },
    hoverRadius: 12,
    hoverBackgroundColor: 'black',
    interaction: {
      mode: 'nearest',
      intersect: false,
      axis: 'x'
    },
    plugins: {
      tooltip: {
        enabled: false
      }
    }
  }
};

const Dashboard = () => {
  return (
    <div className="w-full relative bg-lightest overflow-hidden flex flex-row items-end justify-start gap-[313px] leading-[normal] tracking-[normal] mq450:gap-[39px] mq800:gap-[78px] mq1350:flex-wrap mq1350:gap-[156px]">
      <main className="w-auto flex flex-col items-start justify-start shrink-0 max-w-full">
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
              <div className="self-stretch rounded bg-white box-border flex flex-col items-start justify-start pt-3.5 pb-[35px] pr-[9px] pl-4 relative gap-[21px] max-w-full text-center text-[36px] text-gray-1 border-[1px] border-solid border-light mq800:pt-5 mq800:pb-[23px] mq800:box-border">
                <div className="w-[1116px] h-[745px] relative rounded bg-white box-border hidden max-w-full z-[0] border-[1px] border-solid border-light" />
                <div className="w-[339.7px] rounded bg-white box-border hidden flex-col items-center justify-start py-[33px] px-5 gap-[28px] opacity-[0] max-w-full z-[1] border-[1px] border-solid border-light">
                  <b className="h-[42px] relative inline-block mq450:text-[22px] mq800:text-10xl">
                    200
                  </b>
                  <div className="h-[29px] relative text-6xl inline-block mq450:text-xl">{`Client `}</div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[12px] max-w-full max-h-[161px] z-[2] mq1125:flex-wrap">
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
                  <FrameComponent className="max-h-[161px]"
                    trips="Crew"
                    prop="816"
                    group6="/group-6.svg"
                  />
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[3px] box-border max-w-full text-left text-2xl text-natural-3 font-body">
                  <div className="flex-1 flex flex-row items-start justify-start gap-[14px] max-w-full mq1125:flex-wrap">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[16px]  max-w-full mq800:min-w-full">
                      <div className="flex flex-row w-full gap-5">
                      <div className="self-stretch bg-white box-border flex flex-col items-start justify-start pt-[5px] pb-5 pr-[13px] pl-[18px] gap-[13px] h-fit w-[65%] z-[2] border-[1px] border-solid border-gray-5">
                        <Line data={config.data} options={config.options} />
                      </div>
                      <div className="h-[120%]">
                      <div className="flex-1 flex flex-col items-start justify-start min-w-[139px]">
                                <div className="self-stretch h-[29px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border">
                                  <div className="mb-[-1px] h-[30px] flex-1 relative leading-[30px] font-medium inline-block overflow-hidden text-ellipsis whitespace-nowrap shrink-0">
                                    Sun Dae-Hyun
                                  </div>
                                </div>
                                <div className="self-stretch relative text-smi leading-[20px] font-medium font-body text-gray-3 whitespace-pre-wrap shrink-0">
                                  Pilot • Flight Crew
                                </div>
                              {/* </div> */}
                            {/* </div> */}
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
                          </div>
                          </div>
                      <div className="self-stretch box-border flex flex-row items-start justify-start py-[18px] px-[19px] w-[65%]  z-[2] text-base text-gray-2 font-medium-24 border-[1px] border-solid border-gray-5">
                        <div className="flex-1 bg-white flex flex-col items-start justify-start relative gap-[16px] max-w-full">
                          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] w-[400px] max-h-[161px] text-lg text-grey-blue-25 mq450:flex-wrap">
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
                            <div className="absolute top-[0px] left-[454px] w-[286.1px] flex flex-row items-start justify-start gap-[8px]">
                              <img
                                className="h-16 w-16 relative object-cover"
                                loading="lazy"
                                alt=""
                                src="/group-10914@2x.png"
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
                          </div>
                        </div>
                      </div>
                      {/* <ClientCardsRowOne /> */}
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

export default Dashboard;
