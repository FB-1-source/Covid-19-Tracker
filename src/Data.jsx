import React, { useState } from "react";
import moment from "moment";

function Data() {
  let [date, setdate] = useState();
  let [newconf, setnewconf] = useState();
  let [newtotal, setnewtotal] = useState();
  let [newdea, setnewdea] = useState();
  let [totaldea, settotaldea] = useState();
  let finaldate = moment(date).format("MMMM Do YYYY, h:mm:ss a");

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const url = "https://api.covid19api.com/summary";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      setdate(data.Date);
      setnewconf(numberWithCommas(data.Global.NewConfirmed));
      setnewtotal(numberWithCommas(data.Global.TotalConfirmed));
      setnewdea(numberWithCommas(data.Global.NewDeaths));
      settotaldea(numberWithCommas(data.Global.TotalDeaths));
    });

  return (
    <div>
      <div className="date">
        <h1>{"As of: " + finaldate}</h1>
      </div>
      <div className="cases1">
        <div className="cases">
          <h1>Global Cases</h1>
          <h3>New: {newconf}</h3>
          <h3>Total: {newtotal}</h3>
        </div>
      </div>
      <div className="ds">
        <h1>Global Deaths</h1>
        <h3>New: {newdea}</h3>
        <h3>Total: {totaldea}</h3>
      </div>
    </div>
  );
}

export default Data;
