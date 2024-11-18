import { FiWind } from "react-icons/fi";
import { MdVisibility } from "react-icons/md";
import { WiSunrise } from "react-icons/wi";
import { TbSunset2 } from "react-icons/tb";
import { LiaTemperatureLowSolid } from "react-icons/lia";
import { GiMultiDirections } from "react-icons/gi";
import { IoWaterSharp } from "react-icons/io5";

interface WeatherDeatilsProps {
  data: {
    current: {
      wind_mph: number;
      humidity: number;
      wind_dir: string;
      pressure_mb: number;
      feelslike_c: number;
      vis_km: number;
    };
    forecast: {
      forecastday: {
        astro: {
          sunrise: string;
          sunset: string;
        };
      }[];
    };
  };
}

function WeatherDeatils({ data }: WeatherDeatilsProps) {
  return (
    <div className="p-5 mb-5">
      <h2 className="mb-4 text-white">Weather Details</h2>
      <div className="text-white sm:flex sm:flex-wrap">
        <div className="p-4">
          <div>
            <div className="flex">
              <div className="mr-1 mt-1">
                <FiWind />
              </div>
              <h3>Wind Speed</h3>
            </div>
            <p className="ml-5 pt-1">{data.current.wind_mph} mph</p>
          </div>
        </div>
        <div className="p-4">
          <div>
            <div className="flex">
              <div className="mr-1 mt-1">
                <IoWaterSharp />
              </div>
              <h3>Humidity</h3>
            </div>
            <p className="ml-5 pt-1">{data.current.humidity} %</p>
          </div>
        </div>
        <div className="p-4">
          <div>
            <div className="flex">
              <div className="mr-1 mt-1">
                <GiMultiDirections />
              </div>
              <h3>Wind Direction</h3>
            </div>
            <p className="ml-5 pt-1">{data.current.wind_dir}</p>
          </div>
        </div>
        <div className="p-4">
          <div>
            <div className="flex">
              <div className="mr-1 mt-1">
                <WiSunrise />
              </div>
              <h3>Sunrise</h3>
            </div>
            <p className="ml-5 pt-1">{data.forecast.forecastday[0].astro.sunrise}</p>
          </div>
        </div>
        <div className="p-4">
          <div>
            <div className="flex">
              <div className="mr-1 mt-1">
                <TbSunset2 />
              </div>
              <h3>Sunset</h3>
            </div>
            <p className="ml-5 pt-1">{data.forecast.forecastday[0].astro.sunset}</p>
          </div>
        </div>
        <div className="p-4">
          <div>
            <div className="flex">
              <div className="mr-1 mt-1">
                <LiaTemperatureLowSolid />
              </div>
              <h3>Feel like</h3>
            </div>
            <p className="ml-5 pt-1">{data.current.feelslike_c}</p>
          </div>
        </div>
        <div className="p-4">
          <div>
            <div className="flex">
              <div className="mr-1 mt-1">
                <FiWind />
              </div>
              <h3>Air Pressuer</h3>
            </div>
            <p className="ml-5 pt-1">{data.current.pressure_mb} hpa</p>
          </div>
        </div>
        <div className="p-4">
          <div>
            <div className="flex">
              <div className="mr-1 mt-1">
                <MdVisibility />
              </div>
              <h3>Visibilty</h3>
            </div>
            <p className="ml-5 pt-1">{data.current.vis_km} Km</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherDeatils;
