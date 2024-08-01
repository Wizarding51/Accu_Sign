import PropTypes from "prop-types";
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April'],
  datasets: [
    {
      label: 'Dataset',
      data: [65, 604, 68, 598, 56, 605, 40],
      fill: false,
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
    hoverRadius: 6,
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

const FrameComponent = ({ className = "", trips, prop, group6 }) => {
  return (
    <div
      className={`flex-1 bg-light-gray flex flex-col items-start justify-start p-4 box-border min-w-[264px] max-w-full text-left text-xl text-black-40 font-medium-24 ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
        <div className="flex flex-col items-start justify-start gap-[9px] min-w-[61px] mq450:flex-1">
          <h3 className="m-0 relative text-inherit leading-[50px] font-semibold font-inherit inline-block min-w-[46px] mq450:text-base mq450:leading-[40px]">
            {trips}
          </h3>
          <div className="relative text-16xl leading-[70px] font-black text-darkslategray inline-block min-w-[61px] mq450:text-2xl mq450:leading-[42px] mq800:text-9xl mq800:leading-[56px]">
            {prop}
          </div>
        </div>
          <div className="h-[100px] w-[150.6px] relative">
          <Line data={config.data} options={config.options} />
          </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  trips: PropTypes.string,
  prop: PropTypes.string,
  group6: PropTypes.string,
};

export default FrameComponent;
