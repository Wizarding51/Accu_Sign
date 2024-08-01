import React, { useState, useEffect } from "react";
import HeaderDarkHeader from "../components/HeaderDarkHeader";
import SideNavSampleSideNav1 from "../components/SideNavSampleSideNav1";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";
import CreateClientAccount from "../components/CreateClientAccount";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import PhoneNumber from "../components/PhoneNumber";
// import { initFlowbite } from "flowbite";

const Client = () => {
  const [showCreateClientForm, setShowCreateClientForm] = useState(false);

  useEffect(() => {
    initFlowbite();
    const input = document.querySelector("#phone");
window.intlTelInput(input, {
  initialCountry: "auto",
  geoIpLookup: callback => {
    fetch("https://ipapi.co/json")
      .then(res => res.json())
      .then(data => callback(data.country_code))
      .catch(() => callback("us"));
  },
  utilsScript: "/intl-tel-input/js/utils.js?1722010922246" // just for formatting/placeholders etc
});
  }, []);

  const handleAddClientClick = () => {
    setShowCreateClientForm(!showCreateClientForm);
  };

//   const PhoneInputComponent = () => {
//     useEffect(() => {
//       // Initialize intl-tel-input when component mounts
//       const input = document.querySelector("#phone");
// window.intlTelInput(input, {
//   initialCountry: "us",
//   strictMode: true,
//   utilsScript: "/intl-tel-input/js/utils.js?1722010922246" 
//     });
//     }, []);
//     };

  return (
    <>
    <div className="w-full relative bg-gray-6 overflow-hidden flex flex-col items-start justify-start leading-normal tracking-normal text-center text-base text-active font-body">
      <div className="w-[285px] h-0 relative leading-6 hidden">
        Alert dialog prompt
      </div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <link rel="stylesheet" href="https://cdn.tutorialjinni.com/intl-tel-input/17.0.19/css/intlTelInput.css"/>
      <script src="https://cdn.tutorialjinni.com/intl-tel-input/17.0.19/js/intlTelInput.min.js"></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.3/flowbite.min.js"
        integrity="sha512-oKjB4POM9I7T1Yq3lIsvA3vL55ONK1Ekqf9+ZV1D9XZzh4u2hdhHLof7ROX7FpTeTj7g5s6HgOh15yH9xwBRaQ=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      ></script>
      <HeaderDarkHeader />
      <main className="w-[1428px] flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[32px] max-w-full mq1000:pl-5 mq1000:box-border mq750:gap-[16px]">
        <SideNavSampleSideNav1 />
        <section className="flex-1 flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border max-w-[calc(100%_-_292px)] text-left text-lg text-gray-1 font-medium-24 mq1000:max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[18px] max-w-full">
            <div className="self-stretch flex flex-row items-end justify-between gap-[20px] mq450:flex-wrap">
              <div className="flex flex-row items-start justify-start">
                <a className="[text-decoration:none] relative leading-[24px] font-bold text-[inherit] inline-block min-w-[77px]">
                  Client list
                </a>
              </div>
              <div className="bg-gray-3 flex flex-row items-start justify-start py-3 px-4 gap-[8px] text-center text-base text-gray-6 font-font-awesome-icon-solid-16">
                <img
                  className="self-stretch w-[88px] relative max-h-full hidden min-h-[16px]"
                  alt=""
                  src="/body-placeholder.svg"
                />

                {/* Modal toggle button */}
                <button
  data-modal-target="crud-modal"
  data-modal-toggle="crud-modal"
  className=""
  type="button"
>
<div className="flex flex-row items-start justify-start gap-[8px]">
                <i class="fa-solid fa-plus"></i>               
                  <div className="relative text-sm tracking-[0.01em] leading-[16px] uppercase font-medium font-body text-left inline-block min-w-[101px]">
                    Create Client
                  </div>
                </div>
</button>

{/* Main modal */}
<div
  id="crud-modal"
  tabIndex="-1"
  aria-hidden="true"
  className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
>
  <div className="relative p-4 w-full max-w-md max-h-[80%]">
    {/* Modal content */}
    <div className="relative bg-[#fbfbfb] rounded-lg shadow dark:bg-gray-700">
      {/* Modal header */}
      <div className="flex items-center justify-between md:p-5  rounded-t">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Create Client Account
        </h3>
        {/* <button
          type="button"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          data-modal-toggle="crud-modal"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close modal</span>
        </button> */}
      </div>
      {/* Modal body */}
      <div className="p-4 md:p-5">
        <div className="w-full shadow-[0px_24px_38px_rgba(0,_0,_0,_0.03),_0px_11px_15px_rgba(0,_0,_0,_0.03)] rounded bg-[#fbfbfb] box-border flex flex-col items-end justify-start pt-[23px] px-0 pb-[7px] gap-[80.5px] leading-[normal] tracking-[normal] text-center text-base text-active font-button-label border-[1px] border-solid border-gray-5">
          <div className="self-stretch h-[493px] relative shadow-[0px_24px_38px_rgba(0,_0,_0,_0.03),_0px_11px_15px_rgba(0,_0,_0,_0.03)] rounded bg-light-gray box-border hidden border-[1px] border-solid border-gray-5" />
          <section className="self-stretch flex flex-row items-start justify-end py-0 pr-[25px] pl-[26px] box-border max-w-full text-left text-[22px] text-gray font-roboto">
            <div className="flex-1 flex flex-col items-start justify-start gap-[21.5px] max-w-full">
              {/* <div className="flex flex-row items-start justify-start py-0 pr-2.5 pl-0 z-[1]">
                <a className="[text-decoration:none] relative leading-[29px] font-bold text-[inherit]">
                  Create client account
                </a>
              </div> */}
              <div className="self-stretch flex flex-col items-start justify-start gap-[14px] max-w-full text-sm text-active font-button-label">
                <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[15px]">
                  <div className="flex-1 flex flex-row items-start justify-start py-2.5 px-4 box-border relative min-w-[120px] z-[1]">
                  <div className="h-full w-full absolute bg-white border-[1.5px] border-[#C5C5C5] !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-sm max-w-full overflow-hidden max-h-full">
                  </div>
                    <input
                      className="w-full [border:none] [outline:none] font-button-label text-sm bg-[transparent] h-5 flex-1 relative leading-[20px] text-secondary text-left inline-block min-w-[150px] -translate-x-[13px] p-0 z-[1]"
                      placeholder="First name*"
                      type="text"
                    />
                  </div>
                  <div className="flex-1 flex flex-row items-start justify-start py-2.5 px-4 box-border relative min-w-[120px] z-[1]">
                  <div className="h-full w-full absolute bg-white border-[1.5px] border-[#C5C5C5] !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-sm max-w-full overflow-hidden max-h-full">
                  </div>
                    <input
                      className="w-full [border:none] [outline:none] ring-0 font-button-label text-sm bg-[transparent] h-5 flex-1 relative leading-[20px] text-secondary text-left inline-block min-w-[150px] -translate-x-[13px] p-0 z-[1]"
                      placeholder="Last name*"
                      type="text"
                    />
                  </div>
                </div>
                {/* <div className="self-stretch rounded-sm bg-white box-border flex flex-row items-start justify-start pt-2 px-4 pb-1.5 max-w-full [row-gap:20px] z-[1] border-[1px] border-solid border-base-200 mq303:flex-wrap">
                  <div className="w-20 flex flex-row items-start justify-start py-0 pr-[13px] pl-0 box-border shrink-0 text-gray-1">
                    <div className="flex-1 relative leading-[20px] inline-block max-w-[527%] shrink-0 z-[1]"  >
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
                  <input className="w-[230px] -translate-x-2 relative h-[22px] border-none outline-none text-secondary inline-block shrink-0 z-[1]" placeholder="Phone number*" id="phone" type="tel" name="phone" />
                </div> */}
                <div className="self-stretch rounded-sm bg-white outline-none  border-[1.5px] border-[#C5C5C5] box-border flex flex-row items-start justify-start pt-2 px-4 pb-1.5 max-w-full [row-gap:20px] z-[10] border-solid border-base-200 mq303:flex-wrap">
                <div className="w-20 flex flex-row items-start justify-start outline-none py-0 pr-[13px] pl-0 box-border shrink-0 text-gray-1">
                <input  className="w-[320px] -translate-x-3 relative h-[28px] border-none outline-  text-secondary inline-block shrink-0 z-[10]" placeholder="  Phone number*" id="phone" type="tel"/>
                </div>
                </div>
                <div className="self-stretch rounded-sm bg-white border-[1.5px] border-[#C5C5C5] box-border flex flex-row items-start justify-start pt-2 px-4 pb-1.5 max-w-full [row-gap:20px] z-[1]  border-solid border-base-200 mq303:flex-wrap">
                <input
                    className="w-full [border:none] [outline:none] font-button-label text-sm bg-[transparent] h-5 flex-1 relative leading-[20px] text-secondary text-left inline-block min-w-[150px] -translate-x-[6px] p-0 z-[1]"
                    placeholder="Email*"
                    type="email"
                  />
                  </div>
                  <div className="self-stretch rounded-sm bg-white border-[1.5px] border-[#C5C5C5] box-border flex flex-row items-start justify-start pt-2 px-4 pb-1.5 max-w-full [row-gap:20px] z-[1]  border-solid border-base-200 mq303:flex-wrap">
                <input
                    className="w-full [border:none] [outline:none] font-button-label text-sm bg-[transparent] h-5 flex-1 relative leading-[20px] text-secondary text-left inline-block min-w-[150px] -translate-x-[6px] p-0 z-[1]"
                    placeholder="Company Name*"
                    type="text"
                  />
                  </div>
                  <div className="self-stretch rounded-sm bg-white border-[1.5px] border-[#C5C5C5] box-border flex flex-row items-start justify-start pt-2 px-4 pb-1.5 max-w-full [row-gap:20px] z-[1]  border-solid border-base-200 mq303:flex-wrap">
                <input
                    className="w-full [border:none] [outline:none] font-button-label text-sm bg-[transparent] h-5 flex-1 relative leading-[20px] text-secondary text-left inline-block min-w-[150px] -translate-x-[6px] p-0 z-[1]"
                    placeholder="Comapny Registration Number"
                    type="text"
                  />
                  </div>
                {/* <div className="flex-1 flex flex-row items-start justify-start py-2.5 px-4 relative min-w-[120px] z-[1]">
                  <div className="h-full w-full absolute bg-white border-[1.5px] border-[#C5C5C5] !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-sm max-w-full overflow-hidden max-h-full">
                    </div>
                  <input
                    className="w-full [border:none] [outline:none] font-button-label text-sm bg-[transparent] h-5 flex-1 relative leading-[20px] text-secondary text-left inline-block min-w-[150px] -translate-x-[6px] p-0 z-[1]"
                    placeholder="Email*"
                    type="text"
                  />
                </div> */}
                {/* <div className="flex-1 flex flex-row items-start justify-start py-2.5 px-4 box-border relative min-w-[120px] z-[1]">
                <div className="h-full w-full absolute bg-white border-[1.5px] border-[#C5C5C5] !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-sm max-w-full overflow-hidden max-h-full">
                </div>
                  <input
                    className="w-full [border:none] [outline:none] font-button-label text-sm bg-[transparent] h-5 flex-1 relative leading-[20px] text-secondary text-left inline-block min-w-[150px] -translate-x-[6px] p-0 z-[1]"
                    placeholder="Company name*"
                    type="text"
                  />
                </div> */}
                {/* <div className="flex-1 flex flex-row items-start justify-start py-2.5 px-4 box-border relative min-w-[120px] z-[1]">
                <div className="h-full w-full absolute bg-white border-[1.5px] border-[#C5C5C5] !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-sm max-w-full overflow-hidden max-h-full">
                </div>
                  <input
                    className="w-full [border:none] [outline:none] font-button-label text-sm bg-[transparent] h-5 flex-1 relative leading-[20px] text-secondary text-left inline-block min-w-[150px] -translate-x-[6px] p-0 z-[1]"
                    placeholder="Address*"
                    type="text"
                  />
                </div>
                <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[15px] text-xs text-gray-1 font-roboto z-[1]">
                  <div className="flex-1 flex flex-row items-start justify-start py-2.5 px-4 box-border relative min-w-[120px]">
                  <div className="h-full w-full absolute bg-white border-[1.5px] border-[#C5C5C5] !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-sm max-w-full overflow-hidden max-h-full">
                  </div>
                    <input
                      className="w-full [border:none] [outline:none] font-button-label text-sm bg-[transparent] h-5 flex-1 relative leading-[20px] text-secondary text-left inline-block min-w-[150px] -translate-x-[13px] p-0 z-[1]"
                      placeholder="City*"
                      type="text"
                    />
                  </div>
                  <div className="flex-1 flex flex-row items-start justify-start py-2.5 px-4 box-border relative min-w-[120px]">
                  <div className="h-full w-full absolute bg-white border-[1.5px] border-[#C5C5C5] !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-sm max-w-full overflow-hidden max-h-full">
                  </div>
                    <input
                      className="w-full [border:none] [outline:none] font-button-label text-sm bg-[transparent] h-5 flex-1 relative leading-[20px] text-secondary text-left inline-block min-w-[150px] -translate-x-[13px] p-0 z-[1]"
                      placeholder="Country*"
                      type="text"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[15px] text-xs text-gray-1 font-roboto z-[1]">
                  <div className="flex-1 flex flex-row items-start justify-start py-2.5 px-4 box-border relative min-w-[120px]">
                  <div className="h-full w-full absolute bg-white border-[1.5px] border-[#C5C5C5] !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-sm max-w-full overflow-hidden max-h-full">
                  </div>
                    <input
                      className="w-full [border:none] [outline:none] font-button-label text-sm bg-[transparent] h-5 flex-1 relative leading-[20px] text-secondary text-left inline-block min-w-[150px] -translate-x-[13px] p-0 z-[1]"
                      placeholder="Postal code*"
                      type="text"
                    />
                  </div>
                  <div className="flex-1 flex flex-row items-start justify-start py-2.5 px-4 box-border relative min-w-[120px]">
                  <div className="h-full w-full absolute bg-white border-[1.5px] border-[#C5C5C5] !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-sm max-w-full overflow-hidden max-h-full">
                  </div>
                    <input
                      className="w-full [border:none] [outline:none] font-button-label text-sm bg-[transparent] h-5 flex-1 relative leading-[20px] text-secondary text-left inline-block min-w-[150px] -translate-x-[13px] p-0 z-[1]"
                      placeholder="TRN*"
                      type="text"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[15px] text-xs text-gray-1 font-roboto z-[1]">
                  <div className="flex-1 flex flex-row items-start justify-start py-2.5 px-4 box-border relative min-w-[120px]">
                  <div className="h-full w-full absolute bg-white border-[1.5px] border-[#C5C5C5] !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-sm max-w-full overflow-hidden max-h-full">
                  </div>
                    <input
                      className="w-full [border:none] [outline:none] font-button-label text-sm bg-[transparent] h-5 flex-1 relative leading-[20px] text-secondary text-left inline-block min-w-[150px] -translate-x-[13px] p-0 z-[1]"
                      placeholder="Password*"
                      type="password"
                    />
                  </div>
                  <div className="flex-1 flex flex-row items-start justify-start py-2.5 px-4 box-border relative min-w-[120px]">
                  <div className="h-full w-full absolute bg-white border-[1.5px] border-[#C5C5C5] !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-sm max-w-full overflow-hidden max-h-full">
                  </div>
                    <input
                      className="w-full [border:none] [outline:none] font-button-label text-sm bg-[transparent] h-5 flex-1 relative leading-[20px] text-secondary text-left inline-block min-w-[150px] -translate-x-[13px] p-0 z-[1]"
                      placeholder="Confirm password*"
                      type="password"
                    />
                  </div>
                </div> */}
              </div>
            </div>
          </section>
          <button
            className=" [border:none] p-0 bg-primary-50 self-stretch h-[37px] relative -mt-1 mb-2 overflow-hidden shrink-0 flex flex-col items-start justify-center"
            type="button"
          ><div className="flex w-full justify-end flex-row">
            <div className="self-stretch flex flex-row items-start justify-end gap-[10px] ">
            <div className="relative cursor-pointer leading-[20px] font-medium p-3 text-black text-center" aria-hidden="true" type="button" data-modal-toggle="crud-modal">
            Cancel
          </div>
        </div>
            <div className="self-stretch flex flex-row items-start justify-end mr-6 gap-[10px] ">
              <div className="relative cursor-pointer leading-[20px] font-medium border-box bg-[#EBEBEB] p-3 text-black text-center">
                Create
              </div>
            </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

                {/* <div className="w-[40px] h-[40px] relative shrink-0 flex flex-col items-center justify-start text-lg text-active"> */}
                  {/* <div className="absolute w-[38px] h-[38px] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[50%] bg-blue-violet" />
                  <FontAwesomeIcon
                    icon={faEllipsisVertical}
                    className="relative inline-block"
                  />
                </div>
                <div className="w-[40px] h-[40px] relative shrink-0 flex flex-col items-center justify-start text-lg text-red">
                  <div className="absolute w-[38px] h-[38px] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[50%] bg-red" />
                  <FontAwesomeIcon icon={faTrash} className="relative inline-block" />
                </div> */}
                
              </div>
            </div>
            <div className="self-stretch rounded bg-white box-border flex flex-col items-start justify-start pt-4 px-[34px] pb-[629px] min-h-[745px] max-w-full text-xs font-body border-[1px] border-solid border-light mq1000:pt-5 mq1000:pb-[409px] mq1000:box-border">
              <div className="w-[1116px] h-[745px] relative rounded bg-white box-border hidden max-w-full border-[1px] border-solid border-light" />
              <div className="self-stretch shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-white flex flex-row flex-wrap items-start justify-start py-[15px] px-4 box-border max-w-full [row-gap:20px] z-[1]">
                <div className="h-5 w-5 relative rounded-sm bg-white box-border hidden opacity-[0] border-[2px] border-solid border-secondary" />
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
                    src="/text-4.svg"
                  />
                </div>
                <a className="[text-decoration:none] w-[150px] relative leading-[18px] font-semibold text-[inherit] inline-block shrink-0">
                  Name
                </a>
                <a className="[text-decoration:none] w-[150px] relative leading-[18px] font-semibold text-[inherit] inline-block shrink-0">
                  Company
                </a>
                <a className="[text-decoration:none] w-[150px] relative leading-[18px] font-semibold text-[inherit] inline-block shrink-0">
                  Company Registration
                </a>
                <a className="[text-decoration:none] w-[150px] relative leading-[18px] font-semibold text-[inherit] inline-block shrink-0">
                  Phone number
                </a>
                <a className="[text-decoration:none] w-[150px] relative leading-[18px] font-semibold text-[inherit] inline-block shrink-0">
                  Email
                </a>
                <div className="self-stretch flex-1 relative leading-[18px] font-semibold hidden">
                  Stats
                </div>
                <div className="flex-1 relative leading-[18px] font-semibold text-center inline-block min-w-[35px]">
                  Actions
                </div>
              </div>
              <div className="self-stretch shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-white flex flex-row flex-wrap items-start justify-start py-2 px-4 box-border max-w-full [row-gap:20px] z-[1] text-active">
                <div className="h-12 w-[1094px] relative shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.12)_inset] bg-core-gray-lightest hidden max-w-full" />
                <div className="h-5 w-5 relative rounded-sm bg-white box-border hidden border-[2px] border-solid border-secondary" />
                <div className="flex-1 overflow-hidden hidden flex-row items-center justify-start gap-[32px] max-w-full text-sm mq1000:flex-wrap">
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
                <div className="w-[150px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border">
                  <a className="[text-decoration:none] self-stretch relative leading-[18px] font-semibold text-[inherit]">
                    Name
                  </a>
                </div>
                <div className="w-[150px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border">
                  <a className="[text-decoration:none] self-stretch relative leading-[18px] font-semibold text-[inherit]">
                    John
                  </a>
                </div>
                <div className="w-[150px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border">
                  <div className="self-stretch relative leading-[18px] font-semibold">
                    92384032fsdf
                  </div>
                </div>
                <div className="w-[150px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border">
                  <div className="self-stretch relative leading-[18px] font-semibold">
                    92384032fsdf
                  </div>
                </div>
                <div className="w-[150px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border">
                  <div className="self-stretch relative leading-[18px] font-semibold whitespace-nowrap">
                    name@company.com
                  </div>
                </div>
                <div className="h-[18px] hidden flex-row items-center justify-start gap-[4px]">
                  <div className="self-stretch flex-1 relative leading-[18px] font-semibold">
                    Active
                  </div>
                  <img
                    className="h-4 w-4 relative"
                    alt=""
                    src="/expand-more.svg"
                  />
                </div>
                <img
                  className="h-3 flex-1 relative max-w-full overflow-hidden hidden"
                  alt=""
                  src="/text2.svg"
                />
                <div className="h-8 w-8 relative hidden text-center text-base text-secondary font-font-awesome-icon-solid-16">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                  <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] flex items-center justify-center w-4 h-[19px]">
                    sync
                  </div>
                </div>
                <div className="flex-1 flex flex-row items-start justify-start gap-[8px] min-w-[172px] text-center text-base text-secondary font-font-awesome-icon-solid-16 mq450:flex-wrap">
                  <div className="flex-1 flex flex-row items-start justify-start min-w-[146px]">
                    <div className="flex-1 flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                      <img
                        className="self-stretch h-3 relative max-w-full overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/text-5.svg"
                      />
                    </div>
                    <div className="h-8 w-8 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                      <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] flex items-center justify-center w-4 h-[19px] z-[1]">
                        trash
                      </div>
                    </div>
                  </div>
                  <div className="h-8 w-8 relative">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-silver opacity-[0]" />
                    <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] leading-[19px] flex items-center justify-center w-4 h-4 whitespace-nowrap z-[1]">
                      ellipsis-v
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
    </>
  );
};

export default Client;
