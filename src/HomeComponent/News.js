import React, { useEffect, useState } from "react";

export default function News() {
  const [api, setApi] = useState(null);
  const [img, setImg] = useState();
  const [headlines, setHeadline] = useState();
  const [description, setdescription] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  let number;
  const zeroPad = (num, places) => String(num).padStart(places, "0");
  useEffect(() => {
    let url = "/news";
    let req = new Request(url);
    let getApi = async () => {
      const res = await fetch(req);
      const data = await res.json().then((response) => response);

      const randomGenerator = () => {
        number = Math.floor(Math.random() * 10);
      };
      randomGenerator();
      let randomApi = data.articles[number];
      const dateTime = new Date(randomApi.publishedAt);

      const day = dateTime.getDate();
      const year = dateTime.getFullYear();
      const month = dateTime.getMonth() + 1;
      const newDate = `${zeroPad(day, 2)}-${zeroPad(month, 2)}-${year}`;

      const hours = dateTime.getHours();
      const minutes = dateTime.getMinutes();
      const amOrPm = hours >= 12 ? "PM" : "AM";
      const formattedHours = hours % 12 || 12;
      const newTime = `${formattedHours}:${minutes} ${amOrPm}`;

      setApi(randomApi);
      setImg(randomApi.urlToImage);
      setHeadline(randomApi.title);
      setdescription(randomApi.description);
      setDate(newDate);
      setTime(newTime);
      return data;
    };
    getApi();
  }, []);

  return (
    <div>
      {api && (
        <div className="NewSection">
          <div className="imgAndHeadline">
            <img className="imgNews" src={img} alt="News Image" />
            <div className="belowImage">
              <h2 className="headLine">{headlines}</h2>
              <p className="dateAndTime">
                {date} ||{""} {time}
              </p>
            </div>
          </div>
          <div className="descriptionContainer">
            <p className="description">{description}...</p>
          </div>
        </div>
      )}
    </div>
  );
}
