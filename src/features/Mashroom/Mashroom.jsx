import React from 'react'
import { useGetMashroomQuery } from './mashroomSlice'

export default function Mashroom() {
    const {data: mashroom} = useGetMashroomQuery()
    return (
    <div className='body2'>
            <div className="six_body">
                <div className="six_menu">
                {
                    mashroom?.map((item, index)=>{
                        return <div className='shroomie' key={index}>
                            <img className='img_mash' src={item.img_mash2} alt="" />
                            <p className='title_mash'>{item.title_mash}</p>
                        </div>
                    })
                    
                }
                {
                    mashroom?.map((item, index)=>{
                        return (
                          <div className="mash_box" key={index}>
                            <div>
                              <h1 className="trendtext">{item.title_big}</h1>
                              <button className="mash_button">
                                {item.button_mash}
                              </button>
                            </div>
                            <div className='time_box'>
                              <p className="auction">{item.auction}</p>
                              <p className='time_num'>{item.hours}</p>
                              <div className='time'>
                                <p>{item.hours1}</p>
                                <p>{item.minutes}</p>
                                <p>{item.seconds1}</p>
                              </div>
                            </div>
                          </div>
                        );
                    })
                }
                </div>
            </div>
        </div>
    )
}
