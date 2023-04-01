import React from "react";
import { useMonth } from "../context/MonthContext";

function HesaplamaDetayi({aylikTutar}){

    const {month} = useMonth();   
    let element = [];
    let sayi = 0;

    for (let index = 0; index < month ; index++) {
        sayi += 1
        element.push(sayi)    
    }


    return(
        <div className="tablolar">

            <div>
            {
                <table className="tablo1">
                    <tr>
                        <td>Dönem</td>
                        <td>Taksit Tutarı</td>
                        <td>Toplam Ödenen</td>
                        <td>Kalan Ödeme</td>
                    </tr>
                    
                    <tr>
                        <td>Toplam</td>
                        <td>{aylikTutar.toFixed(2)}</td>    
                        <td>-</td>
                        <td>{aylikTutar.toFixed(2)}</td>
                    </tr>
                </table>
            }
            </div>

            <div>
            {element.map((data , key) => (
                
                <table className="tablo2" key={key}>
                    <tr>
                        <td>
                            {data}
                        </td>
                        <td>
                            {(aylikTutar / month).toFixed(2)}
                        </td>
                        <td>
                            {(aylikTutar / month * data).toFixed(2)}
                        </td>
                        <td>
                            {(aylikTutar - (aylikTutar / month * data)).toFixed(2)}
                        </td>
                    </tr>                                       
                </table>
            ))}
            </div>
            <div>
                <br />
                <br />
            </div>
        </div>
    )
}
export default HesaplamaDetayi;
