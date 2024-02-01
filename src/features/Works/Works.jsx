import React from 'react'
import { useGetWorksQuery } from './worksSlice'

export default function Works() {
    const {data: works} = useGetWorksQuery()
  return (
    <div className="body">
      <div className="container">
        <div className="seventh">
          <div className="seventh_menu">
            {works?.map((item, index) => {
              return (
                <div className="work_box" key={index}>
                  <h1 className="trendtext">{item.work}</h1>
                  <h5 className="mini_trend">{item.mini_work1}</h5>
                </div>
              );
            })}
            <div className='work1_box'>
              {works?.map((item, index) => {
                return (
                  <div className="work_mini_box" key={index}>
                    <img className="work_img" src={item.work_img} alt="" />
                    <h4 className="work_text">{item.work_text}</h4>
                    <p className="work_text3">{item.work_text3}</p>
                  </div>
                );
              })}
              {works?.map((item, index) => {
                return (
                  <div className="work_mini_box" key={index}>
                    <img className="work_img" src={item.work_img} alt="" />
                    <h4 className="work_text">{item.work_text}</h4>
                    <p className="work_text3">{item.work_text3}</p>
                  </div>
                );
              })}
              {works?.map((item, index) => {
                return (
                  <div className="work_mini_box" key={index}>
                    <img className="work_img" src={item.work_img} alt="" />
                    <h4 className="work_text">{item.work_text}</h4>
                    <p className="work_text3">{item.work_text3}</p>
                  </div>
                );
              })}
            </div>

            <div>
                {
                    works?.map((item, index)=>{
                        return (
                          <div className="weekly" key={index}>
                            <div>
                              <img
                                className="weekly_img"
                                src={item.work_img}
                                alt=""
                              />
                            </div>
                            <div>
                              <h1 className="trendtext">
                                {item.work_img_text}
                              </h1>
                              <p className="mini_trend2">
                                {item.work_img_text2}
                              </p>
                              <div>
                                <span className="span">{item.email}</span>
                                <button className='week_btn'>{item.button_work2}</button>
                              </div>
                            </div>
                          </div>
                        );
                    })
                }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
