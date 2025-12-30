"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Input from "./components/Input";
import Current from "./components/Current";
import IconApp from "./assets/images/weather_app.png";
import WeatherDeatils from "./components/WeatherDeatils";
import WeatherForcast from "./components/WeatherForcast";

function Home() {
  const secretKey = process.env.NEXT_PUBLIC_SECRET_API_KEY;
  const weatherAPIKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

  const [error, setError] = useState("");
  const [data, setData] = useState<any>({});
  const [location, setLocation] = useState("");
  async function handelSearch(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      try {
        const response = await fetch(`${weatherAPIKey}?key=${secretKey}&q=${location}&days=7&aqi=yes&alerts=yes`);
        if (!response.ok) {
          throw new Error();
        }
        const data = await response.json();
        setData(data);
        setLocation(location);
        setError("");
      } catch (error) {
        setError("Sorry City Not Found Please Try Again");
        setData({});
      }
    }
  }

  let content;
  if (Object.keys(data).length === 0 && error === "") {
    content = (
      <div className="text-white text-center h-screen mt-5rem flex flex-col items-center ">
        <h1 className="text-white font-bold text-center md:mt-20 md:text-4xl">Welcome To Weather Facts</h1>
        <p className="mt-5 text-white font-bold md:text-2xl">Enter a City Name</p>
        <Image className="mt-10 md:mt-20" src={IconApp} width={150} height={150} alt="weather_app Icon" />
      </div>
    );
  } else if (error !== "") {
    content = (
      <div className="h-screen text-white text-3xl">
        <p className="text-center text-7xl md:text-9xl">Oops!</p>
        <p className="text-center mt-10">404 City Not Found</p>
        <p className="text-center mt-10">Enter a Valid City</p>
      </div>
    );
  } else {
    content = (
      <div className="p-5 lg:flex justify-between">
        <div className="lg:flex md:flex-col justify-between">
          <Current data={data} />
          <div className="weather_details rounded-lg lg:mr-4">
            <WeatherDeatils data={data} />
          </div>
        </div>
        <div className="lg:w-5/12">
          <div className="weather_forecast rounded-lg">
            <WeatherForcast data={data} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen">
      <div className="w-full flex flex-col h-full">
        <div className="flex flex-col justify-between items-center p-12 md:flex-row">
          <Link href="/">
            <span className="text-white font-bold">Weather Facts</span>
          </Link>
          <Input handelSearch={handelSearch} setLocation={setLocation} />
        </div>
        {content}
      </div>
    </div>
  );
}

export default Home;
