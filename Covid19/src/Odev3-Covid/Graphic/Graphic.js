import React from 'react'
import "./style.css"

import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import { useSelector } from 'react-redux';

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
)

function Graphic() {

  const seciliUlkeVerisi = useSelector((state) => state.covid.seciliUlkeVerisi)
  const globalVeriler = useSelector((state) => state.covid.globalVeriler)
  const seciliUlke = useSelector((state) => state.covid.seciliUlke)

  console.log(globalVeriler)
  console.log(seciliUlke)

  const data = {
    labels: ['Infected','Recovered','Deaths','Active'],
    datasets: [
        {
            label : `Current State in TR`,
            data : seciliUlke === "global" ? 
            [globalVeriler.TotalConfirmed , (globalVeriler.TotalConfirmed - globalVeriler.TotalDeaths) , globalVeriler.TotalDeaths , (globalVeriler.TotalConfirmed * 0.95).toFixed(0)] : 
            [seciliUlkeVerisi.Confirmed , (seciliUlkeVerisi.Active - seciliUlkeVerisi.Deaths) , seciliUlkeVerisi.Deaths , seciliUlkeVerisi.Active],
            backgroundColor: ["rgb(147, 214, 245)", "rgb(215, 248, 173)","rgb(235, 164, 147)","rgb(243, 222, 194)"],
            borderColor : 'black',
            borderWidth : 1,
        }
    ]
  }

  const options = {}

  return (
    <div className='graphic1'>
      <div>
      <Bar
        data={data}
        options={options}
        />
      </div>
    </div>
  )
}

export default Graphic
