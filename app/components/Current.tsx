/* eslint-disable @next/next/no-img-element */
import { getCurrentDate } from "./currentDate";

function Current({ data }: any) {
  const currentDate = getCurrentDate();
  const weatherIcon = data.current.condition.icon;

  return (
    <div className="p-5 flex flex-col mb-8 md:mb-0 items-start gap-2 w1/2">
      <div className="flex items-center">
        <div className="p-3 text-white">
          <h1 className="text-4xl mb-5 font-bold">Today</h1>
          <p>{currentDate}</p>
          <div className="weatherIcon">{weatherIcon && <img src={weatherIcon} width={100} height={100} alt={data.current.condition.text} />}</div>
          <p className="font-bold text-3xl">
            {data.current.temp_c.toFixed()}
            <span> ْ</span>
          </p>
          <p className="font-bold text-3xl mt-5">
            {data.location.name}, {data.location.region}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Current;
