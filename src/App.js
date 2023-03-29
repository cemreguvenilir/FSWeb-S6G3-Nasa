import React from "react";
import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";

function App() {
  const [apodData, setApodData] = useState();
  const [date, setDate] = useState(
    new Date("2022-05-13").toISOString().slice(0, 10)
  );

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod", {
        params: {
          api_key: "RD0qxFIQQv2d7HMqNg3EtqKmQT7NnnsKFOBuLRKl",
          date: date,
        },
      })
      .then(function (response) {
        console.log(response);
        setApodData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // her koşulda çalıştırılır
      });
  }, [date]);

  return (
    <div className="App">
      <Header data={apodData} dateChange={setDate} currentDate={date} />
    </div>
  );
}

export default App;
