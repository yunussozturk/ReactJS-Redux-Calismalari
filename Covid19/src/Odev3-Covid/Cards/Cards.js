import React, { useEffect } from 'react'
import "./style.css"

import { seciliUlkeVerisiApi , globalVerilerApi } from '../../redux3-Covid/CovidSlice';
import { useSelector , useDispatch } from 'react-redux'

import moment from "moment"

function Cards() {

  const dispatch = useDispatch()
  const seciliUlke = useSelector((state) => state.covid.seciliUlke)

  useEffect(() =>{
    seciliUlke === "global" ? dispatch(globalVerilerApi()) : dispatch(seciliUlkeVerisiApi(seciliUlke))
  },[seciliUlke])

  const seciliUlkeVerisi = useSelector((state) => state.covid.seciliUlkeVerisi)
  const seciliUlkeVerisiApiisLoading = useSelector((state) => state.covid.seciliUlkeVerisiApiisLoading)

  let date = seciliUlkeVerisi.Date
  let day = moment(date).utc().format("MMM Do YY")
  let time = moment(date).utc().format('h:mm:ss a')

  const globalVeriler = useSelector((state) => state.covid.globalVeriler)

  const today = new Date();
  const today2 = moment(today).utc().format("MMM Do YY")

  
  return (
    <div className='data1'>
      <div className='container data2'>
        <div className='row data3'>
            <div className='col-sm-3 data4'>
                <div className='data8'>
                    <div className='data9'>Infected</div>
                    {
                        seciliUlkeVerisiApiisLoading ? 
                        (
                            <>
                                <div className='data10'>Loading...</div>
                                <div className='data11'>Last Update at :</div>
                                <div className='data12'>Loading...<br /> Loading... </div>
                                <div className='data13'>Number of active <br /> cases of COVID-19</div>
                                <div className='data14'>Loading...</div>
                            </>
                        ) :
                        (
                            <>
                                <div className='data10'>{
                                    seciliUlke === "global" ? `${globalVeriler.TotalConfirmed}` : `${seciliUlkeVerisi.Confirmed}`
                                }</div>
                                <div className='data11'>Last Update at :</div>
                                <div className='data12'>{seciliUlke === "global" ? `${today2}` : `${day}`}<br /> {seciliUlke === "global" ? "12:00:00 am" : `${time}`} </div>
                                <div className='data13'>Number of active  <br /> cases of COVID-19</div>
                                <div className='data14'>{seciliUlke === "global" ? "WORLD" : `${seciliUlkeVerisi.CountryCode}`}</div>
                            </>
                        )
                    }
                </div>
            </div>
            <div className='col-sm-3 data5'>
                <div className='data8'>
                    <div className='data9'>Recovered</div>
                    {
                        seciliUlkeVerisiApiisLoading ?
                        (
                            <>
                            <div className='data10'>Loading...</div>
                            <div className='data11'>Last Update at :</div>
                            <div className='data12'>Loading...<br /> Loading... </div>
                            <div className='data13'>Number of recoveries <br /> from COVID-19</div>
                            <div className='data14'>Loading...</div>
                            </>
                        ) :
                        (
                            <>
                            <div className='data10'>{
                                seciliUlke === "global" ? `${globalVeriler.TotalConfirmed - globalVeriler.TotalDeaths}` : `${seciliUlkeVerisi.Active - seciliUlkeVerisi.Deaths}`
                            }</div>
                            <div className='data11'>Last Update at :</div>
                            <div className='data12'>{seciliUlke === "global" ? `${today2}` : `${day}`}<br /> {seciliUlke === "global" ? "12:00:00 am" : `${time}`} </div>
                            <div className='data13'>Number of active  <br /> cases of COVID-19</div>
                            <div className='data14'>{seciliUlke === "global" ? "WORLD" : `${seciliUlkeVerisi.CountryCode}`}</div>
                            </>
                        )
                    }
                </div>
            </div>
            <div className='col-sm-3 data6'>
                <div className='data8'>
                    <div className='data9'>Deaths</div>
                    {
                        seciliUlkeVerisiApiisLoading ? 
                        (
                            <>
                            <div className='data10'>Loading...</div>
                            <div className='data11'>Last Update at :</div>
                            <div className='data12'>Loading...<br /> Loading... </div>
                            <div className='data13'>Number of deaths <br /> caused by COVID-19</div>
                            <div className='data14'>Loading...</div>
                            </>
                        ) :
                        (
                            <>
                            <div className='data10'>{
                                seciliUlke === "global" ? `${globalVeriler.TotalDeaths}` : `${seciliUlkeVerisi.Deaths}`
                            }</div>
                            <div className='data11'>Last Update at :</div>
                            <div className='data12'>{seciliUlke === "global" ? `${today2}` : `${day}`}<br /> {seciliUlke === "global" ? "12:00:00 am" : `${time}`} </div>
                            <div className='data13'>Number of active  <br /> cases of COVID-19</div>
                            <div className='data14'>{seciliUlke === "global" ? "WORLD" : `${seciliUlkeVerisi.CountryCode}`}</div>
                            </>
                        )
                    }
                </div>
            </div>
            <div className='col-sm-3 data7'>
                <div className='data8'>
                    <div className='data9'>Active</div>
                    {
                        seciliUlkeVerisiApiisLoading ? 
                        (
                            <>
                            <div className='data10'>Loading...</div>
                            <div className='data11'>Last Update at :</div>
                            <div className='data12'>Loading...<br /> Loading... </div>
                            <div className='data13'>Number of active <br /> cases of COVID-19</div>
                            <div className='data14'>Loading...</div>
                            </>
                        ) :
                        (
                            <>
                            <div className='data10'>{
                                seciliUlke === "global" ? `${(globalVeriler.TotalConfirmed * 0.95).toFixed(0)}` : `${seciliUlkeVerisi.Active}`
                            }</div>
                            <div className='data11'>Last Update at :</div>
                            <div className='data12'>{seciliUlke === "global" ? `${today2}` : `${day}`}<br /> {seciliUlke === "global" ? "12:00:00 am" : `${time}`} </div>
                            <div className='data13'>Number of active  <br /> cases of COVID-19</div>
                            <div className='data14'>{seciliUlke === "global" ? "WORLD" : `${seciliUlkeVerisi.CountryCode}`}</div>

                            </>
                        )
                    }
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
