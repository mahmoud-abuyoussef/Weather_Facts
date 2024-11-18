/* eslint-disable @next/next/no-img-element */
interface DayForecast {
  date: string;
  day: {
    condition: {
      icon: string;
      text: string;
    };
    maxtemp_c: number;
    mintemp_c: number;
  };
}

interface WeekForecastProps {
  data: {
    forecast: {
      forecastday: DayForecast[];
    };
  };
}

function WeatherForcast({ data }: WeekForecastProps) {
  return (
    <div className="p-5 text-white rounded-lg">
      <h2>7-Day Forecast</h2>
      {data.forecast.forecastday.map((day, index) => {
        return (
          <div key={index} className="p-1 flex justify-between border-b mt-5 items-center last:border-none">
            <p>{new Date(day.date).toLocaleString("en-US", { weekday: "short" })}</p>
            <div className="flex text-white items-center">
              <img className="block" src={day.day.condition.icon} alt={day.day.condition.text} />
              <p>{day.day.condition.text.substring(0, 7)}</p>
            </div>
            <div className="flex text-white">
              <p>{day.day.maxtemp_c.toFixed()} /</p>
              <p className="text-slate-400">&nbsp;{day.day.mintemp_c.toFixed()}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default WeatherForcast;
