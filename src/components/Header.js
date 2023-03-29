import React from "react";

export default function Header(props) {
  const { data, dateChange, currentDate } = props;
  function dateChangeHandler(e) {
    console.log(e.target.value);
    dateChange(e.target.value);
  }

  if (!data) return <h3>Yükleniyor...</h3>;
  return (
    <div>
      <p>{data.date}</p>
      <label htmlFor="apodDate">apodDate:</label>
      <input
        onChange={(e) => dateChangeHandler(e)}
        type="date"
        value={currentDate}
        name="apodDate"
      ></input>
      <p>{data.explanation}</p>

      {data.media_type === "image" && (
        <img src={data.hdurl} alt={data.title} width="500px" height="500px" />
      )}
      {data.media_type === "video" && (
        <iframe width="420" height="315" src={data.url}></iframe>
      )}

      <p>{data.service_version}</p>
      <p>{data.title}</p>
    </div>
  );
}
