import React, { useState } from "react";
import HeaderDarkHeader from "../components/HeaderDarkHeader";
import SideNavSampleSideNav4 from "../components/SideNavSampleSideNav4";
import UploadedData from "../components/UploadedData";
import TripContractDetails from "../components/TripContractDetails";

const DocumentUploaded = () => {
  const [activeTab, setActiveTab] = useState("uploaded");

  return (
    <div className="w-full relative bg-gray-6 overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal] text-center text-base text-active font-body">
      <HeaderDarkHeader />
      <main className="w-full flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[32px] max-w-full mq850:gap-[16px] mq850:pl-5 mq850:box-border">
        <SideNavSampleSideNav4 />
        <section className="flex-1 flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border max-w-[calc(100%_-_292px)] text-left text-lg text-gray-1 font-medium-24 mq850:max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[18px] max-w-full">
            <div className="self-stretch flex flex-row items-end justify-between gap-[20px] mq450:flex-wrap">
              <div className="flex flex-row gap-[20px]">
                <div className="w-[91px] flex flex-row items-start justify-start py-0 px-0 box-border">
                  <a
                    className="[text-decoration:none] w-full relative leading-[24px] font-bold text-[inherit] inline-block shrink-0 cursor-pointer"
                    onClick={() => setActiveTab("uploaded")}
                  >
                    Uploaded
                  </a>
                </div>
                <div className="self-stretch h-[3px] relative bg-gray-1 z-[2]" />
                
                <div className="w-[191px] flex flex-row items-start justify-start py-0 px-0 box-border">
                  <a
                    className="[text-decoration:none] w-full relative leading-[24px] font-bold text-[inherit] inline-block shrink-0 cursor-pointer"
                    onClick={() => setActiveTab("tripContracts")}
                  >
                    Trip Contracts
                  </a>
                </div>
              </div>
              <button className="cursor-pointer [border:none] py-2 px-4 bg-gray-3 flex flex-row items-start justify-start gap-[8px]">
                <img
                  className="h-6 w-6 relative"
                  alt="Upload"
                  src="/upload-file.svg"
                />
                <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                  <a className="[text-decoration:none] relative text-sm tracking-[0.01em] leading-[16px] uppercase font-medium font-body text-gray-6 text-left inline-block min-w-[58px]">
                    Upload
                  </a>
                </div>
              </button>
            </div>
            <div className="self-stretch rounded bg-white box-border flex flex-col items-start justify-start pt-[31px] px-[23px] pb-[406px] gap-[31px] max-w-full text-center text-sm border-[1px] border-solid border-light mq850:gap-[15px] mq850:pt-5 mq850:pb-[264px] mq850:box-border">
              {activeTab === "uploaded" && <UploadedData />}
              {activeTab === "tripContracts" && <TripContractDetails />}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DocumentUploaded;
