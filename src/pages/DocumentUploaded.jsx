import { useCallback } from "react";
import HeaderDarkHeader from "../components/HeaderDarkHeader";
import SideNavSampleSideNav4 from "../components/SideNavSampleSideNav4";
import GroupComponent from "../components/GroupComponent";

const DocumentUploaded = () => {
  const onBasicDetialContainerClick = useCallback(() => {
    // Please sync "Document Trip" to the project
  }, []);

  return (
    <div className="w-full relative bg-gray-6 overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal] text-center text-base text-active font-body">
      <div className="w-[285px] h-0 relative leading-[24px] hidden">
        Alert dialog prompt
      </div>
      <HeaderDarkHeader />
      <main className="w-[1428px] flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[32px] max-w-full mq850:gap-[16px] mq850:pl-5 mq850:box-border">
        <SideNavSampleSideNav4 />
        <section className="flex-1 flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border max-w-[calc(100%_-_292px)] text-left text-lg text-gray-1 font-medium-24 mq850:max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[18px] max-w-full">
            <div className="self-stretch flex flex-row items-end justify-between gap-[20px] mq450:flex-wrap">
              <div className="w-[78px] flex flex-row items-start justify-start py-0 px-0 box-border">
                <a className="[text-decoration:none] w-[91px] relative leading-[24px] font-bold text-[inherit] inline-block shrink-0">
                  Bank detail
                </a>
              </div>
              <button className="cursor-pointer [border:none] py-2 px-4 bg-gray-3 flex flex-row items-start justify-start gap-[8px]">
                <img
                  className="h-4 w-[90px] relative hidden"
                  alt=""
                  src="/body-placeholder3.svg"
                />
                <img
                  className="h-6 w-6 relative"
                  alt=""
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
              <div className="w-[1116px] h-[745px] relative rounded bg-white box-border hidden max-w-full border-[1px] border-solid border-light" />
              <div className="w-[590px] flex flex-row flex-wrap items-start justify-start max-w-full [row-gap:20px]">
                <div className="flex-1 flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border min-w-[192px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                    <div className="self-stretch relative leading-[12px] font-medium z-[2]">
                      Uploaded
                    </div>
                    <div className="self-stretch h-[3px] relative bg-gray-1 z-[2]" />
                  </div>
                </div>
                <div
                  className="flex-1 flex flex-col items-start justify-start py-2 px-0 box-border gap-[6px] min-w-[192px] cursor-pointer z-[2] text-base"
                  onClick={onBasicDetialContainerClick}
                >
                  <div className="self-stretch relative leading-[12px] font-medium">
                    Trip contracts
                  </div>
                  <div className="self-stretch h-[3px] relative bg-base" />
                </div>
              </div>
              <div className="w-[693px] grid flex-row items-start justify-start gap-[15px] max-w-full grid-cols-[repeat(3,_minmax(169px,_1fr))] text-left text-smi mq450:grid-cols-[minmax(169px,_1fr)] mq675:justify-center mq675:grid-cols-[repeat(2,_minmax(169px,_292px))]">
                <div className="h-[236px] flex flex-col items-start justify-start py-0 pr-1.5 pl-0 box-border">
                  <div className="self-stretch flex-1 bg-gray-6 flex flex-col items-start justify-start pt-[7px] px-[5px] pb-2.5 gap-[8px] z-[1]">
                    <div className="w-[219px] h-[236px] relative bg-gray-6 hidden" />
                    <img
                      className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
                      loading="lazy"
                      alt=""
                      src="/rectangle-28@2x.png"
                    />
                    <div className="relative leading-[24px] font-medium z-[1]">
                      Service Agreement LOI
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start pt-0 px-px pb-1">
                      <div className="h-px flex-1 relative bg-gray-5 z-[1]" />
                    </div>
                    <div className="flex flex-row items-start justify-start pt-0 px-0 pb-1 gap-[11.3px] text-2xs text-gray-2">
                      <div className="relative leading-[24px] inline-block min-w-[119px] z-[1]">{`Auto attach with all trips `}</div>
                      <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                        <div className="w-[41px] h-5 relative rounded-2xl bg-base z-[1]">
                          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-2xl bg-base hidden" />
                          <div className="absolute h-4/5 w-[39.02%] top-[10%] right-[56.1%] bottom-[10%] left-[4.88%] rounded-2xs bg-gray-2 z-[1]" />
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 px-px">
                      <div className="h-px flex-1 relative bg-gray-5 z-[1]" />
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[2px] text-center text-3xs text-secondary font-body">
                      <button className="cursor-pointer [border:none] py-2 px-[21px] bg-light-gray flex flex-row items-start justify-start z-[1] hover:bg-gray-5">
                        <div className="relative text-3xs tracking-[0.01em] uppercase font-body text-secondary text-center inline-block min-w-[60px]">
                          download
                        </div>
                        <img
                          className="self-stretch w-16 relative max-h-full overflow-hidden shrink-0 hidden min-h-[12px]"
                          alt=""
                          src="/placeholder.svg"
                        />
                      </button>
                      <div className="bg-light-gray flex flex-row items-start justify-start py-2 px-[37px] z-[1]">
                        <div className="relative tracking-[0.01em] uppercase inline-block min-w-[28px]">
                          Open
                        </div>
                        <img
                          className="self-stretch w-16 relative max-h-full overflow-hidden shrink-0 hidden min-h-[12px]"
                          alt=""
                          src="/placeholder.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <GroupComponent header4="APPENDIX 1" />
                <GroupComponent header4="3 Year contract" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DocumentUploaded;
