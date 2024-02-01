import React from 'react'
import { useGetCollectionQuery } from './collectionSlice'
import "../Header/style.scss"

export default function Collection() {
    const {data: collection} = useGetCollectionQuery()
  return (
    <div className="body">
      <div className="container">
        <div className="second_body">
          <div className="second_menu">
            {collection?.map((item, index) => {
              return (
                <div key={index}>
                  <h1 className="trendtext">{item.trend}</h1>
                  <p className="mini_trend">{item.mini_trend}</p>
                </div>
              );
            })}
            <div className='second_flex'>
              {collection?.map((item, index) => {
                return (
                  <div key={index}>
                    <img className="box_img" src={item.img_coll} alt="" />
                    <div className="mini_img">
                      <img
                        className="mini_box_img"
                        src={item.img_coll2}
                        alt=""
                      />
                      <img
                        className="mini_box_img"
                        src={item.img_coll3}
                        alt=""
                      />
                      <p className="number">{item.img_num}</p>
                    </div>
                    <div>
                      <h2 className="text_trend">{item.trend_text}</h2>
                      <div className="fox">
                        <img className="fox_img" src={item.img_coll4} alt="" />
                        <p className="fox_text">{item.trend_text2}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
              {collection?.map((item, index) => {
                return (
                  <div key={index}>
                    <img className="box_img" src={item.img_coll} alt="" />
                    <div className="mini_img">
                      <img
                        className="mini_box_img"
                        src={item.img_coll2}
                        alt=""
                      />
                      <img
                        className="mini_box_img"
                        src={item.img_coll3}
                        alt=""
                      />
                      <p className="number">{item.img_num}</p>
                    </div>
                    <div>
                      <h2 className="text_trend">{item.trend_text}</h2>
                      <div className="fox">
                        <img className="fox_img" src={item.img_coll4} alt="" />
                        <p className="fox_text">{item.trend_text2}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
              {collection?.map((item, index) => {
                return (
                  <div key={index}>
                    <img className="box_img" src={item.img_coll} alt="" />
                    <div className="mini_img">
                      <img
                        className="mini_box_img"
                        src={item.img_coll2}
                        alt=""
                      />
                      <img
                        className="mini_box_img"
                        src={item.img_coll3}
                        alt=""
                      />
                      <p className="number">{item.img_num}</p>
                    </div>
                    <div>
                      <h2 className="text_trend">{item.trend_text}</h2>
                      <div className="fox">
                        <img className="fox_img" src={item.img_coll4} alt="" />
                        <p className="fox_text">{item.trend_text2}</p>
                      </div>
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
