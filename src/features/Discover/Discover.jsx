import React from 'react'
import { useGetDiscoverQuery } from './discoverSlice'

export default function Discover() {
    const {data: discover} = useGetDiscoverQuery()
  return (
    <div className="body">
      <div className="container">
        <div className="fifth_body">
          <div className="fifth_menu">
            {discover?.map((item, index) => {
              return (
                <div key={index}>
                  <h1 className="trendtext">{item.text_dis}</h1>
                  <div className="mini_fifth">
                    <p className="mini_trend">{item.text_dis2}</p>
                    <button className="top_button2">{item.button_dis}</button>
                  </div>
                </div>
              );
            })}
            <div className='flex'>
              {discover?.map((item, index) => {
                return (
                  <div className="box_fifth" key={index}>
                    <img className="dis_img" src={item.img_dis} alt="" />
                    <h3 className="galaxy">{item.galaxy}</h3>
                    <div className="img_box">
                      <img
                        className="mini_img_dis"
                        src={item.galaxy_img}
                        alt=""
                      />
                      <p className="moon">{item.moon}</p>
                    </div>
                    <div className="pricec">
                      <p>{item.price}</p>
                      <p>{item.high}</p>
                    </div>
                    <div className="price_num">
                      <p>{item.price_num}</p>
                      <p>{item.high_num}</p>
                    </div>
                  </div>
                );
              })}
              {discover?.map((item, index) => {
                return (
                  <div className="box_fifth" key={index}>
                    <img className="dis_img" src={item.img_dis} alt="" />
                    <h3 className="galaxy">{item.galaxy}</h3>
                    <div className="img_box">
                      <img
                        className="mini_img_dis"
                        src={item.galaxy_img}
                        alt=""
                      />
                      <p className="moon">{item.moon}</p>
                    </div>
                    <div className="pricec">
                      <p>{item.price}</p>
                      <p>{item.high}</p>
                    </div>
                    <div className="price_num">
                      <p>{item.price_num}</p>
                      <p>{item.high_num}</p>
                    </div>
                  </div>
                );
              })}
              {discover?.map((item, index) => {
                return (
                  <div className="box_fifth" key={index}>
                    <img className="dis_img" src={item.img_dis} alt="" />
                    <h3 className="galaxy">{item.galaxy}</h3>
                    <div className="img_box">
                      <img
                        className="mini_img_dis"
                        src={item.galaxy_img}
                        alt=""
                      />
                      <p className="moon">{item.moon}</p>
                    </div>
                    <div className="pricec">
                      <p>{item.price}</p>
                      <p>{item.high}</p>
                    </div>
                    <div className="price_num">
                      <p>{item.price_num}</p>
                      <p>{item.high_num}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
