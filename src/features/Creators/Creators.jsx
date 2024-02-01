import React from 'react'
import { useGetCreatorsQuery } from './creatorsSlice'

export default function Creators() {
    const {data: creators} = useGetCreatorsQuery()
  return (
    <div className="body">
      <div className="container">
        <div className="third_body">
          <div className="third_menu">
            {creators?.map((item, index) => {
              return (
                <div className="third_top" key={index}>
                  <div>
                    <h1 className="trendtext">{item.top}</h1>
                    <p className="mini_trend">{item.mini_top}</p>
                  </div>
                  <div>
                    <button className="top_button">{item.top_button}</button>
                  </div>
                </div>
              );
            })}
            <div className="third_box">
              {creators?.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="top_box">
                      <img src={item.top_img} alt="" />
                      <h3 className="keep">{item.top_name}</h3>
                      <div className="top_sales">
                        <p className="sale">{item.total_sale}</p>
                        <h5 className="sale_num">{item.sale_num}</h5>
                      </div>
                    </div>
                  </div>
                );
              })}
              {creators?.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="top_box">
                      <img src={item.top_img} alt="" />
                      <h3 className="keep">{item.top_name}</h3>
                      <div className="top_sales">
                        <p className="sale">{item.total_sale}</p>
                        <h5 className="sale_num">{item.sale_num}</h5>
                      </div>
                    </div>
                  </div>
                );
              })}
              {creators?.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="top_box">
                      <img src={item.top_img} alt="" />
                      <h3 className="keep">{item.top_name}</h3>
                      <div className="top_sales">
                        <p className="sale">{item.total_sale}</p>
                        <h5 className="sale_num">{item.sale_num}</h5>
                      </div>
                    </div>
                  </div>
                );
              })}
              {creators?.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="top_box">
                      <img src={item.top_img} alt="" />
                      <h3 className="keep">{item.top_name}</h3>
                      <div className="top_sales">
                        <p className="sale">{item.total_sale}</p>
                        <h5 className="sale_num">{item.sale_num}</h5>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="third_box">
              {creators?.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="top_box">
                      <img src={item.top_img} alt="" />
                      <h3 className="keep">{item.top_name}</h3>
                      <div className="top_sales">
                        <p className="sale">{item.total_sale}</p>
                        <h5 className="sale_num">{item.sale_num}</h5>
                      </div>
                    </div>
                  </div>
                );
              })}
              {creators?.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="top_box">
                      <img src={item.top_img} alt="" />
                      <h3 className="keep">{item.top_name}</h3>
                      <div className="top_sales">
                        <p className="sale">{item.total_sale}</p>
                        <h5 className="sale_num">{item.sale_num}</h5>
                      </div>
                    </div>
                  </div>
                );
              })}
              {creators?.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="top_box">
                      <img src={item.top_img} alt="" />
                      <h3 className="keep">{item.top_name}</h3>
                      <div className="top_sales">
                        <p className="sale">{item.total_sale}</p>
                        <h5 className="sale_num">{item.sale_num}</h5>
                      </div>
                    </div>
                  </div>
                );
              })}
              {creators?.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="top_box">
                      <img src={item.top_img} alt="" />
                      <h3 className="keep">{item.top_name}</h3>
                      <div className="top_sales">
                        <p className="sale">{item.total_sale}</p>
                        <h5 className="sale_num">{item.sale_num}</h5>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="third_box">
              {creators?.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="top_box">
                      <img src={item.top_img} alt="" />
                      <h3 className="keep">{item.top_name}</h3>
                      <div className="top_sales">
                        <p className="sale">{item.total_sale}</p>
                        <h5 className="sale_num">{item.sale_num}</h5>
                      </div>
                    </div>
                  </div>
                );
              })}
              {creators?.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="top_box">
                      <img src={item.top_img} alt="" />
                      <h3 className="keep">{item.top_name}</h3>
                      <div className="top_sales">
                        <p className="sale">{item.total_sale}</p>
                        <h5 className="sale_num">{item.sale_num}</h5>
                      </div>
                    </div>
                  </div>
                );
              })}
              {creators?.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="top_box">
                      <img src={item.top_img} alt="" />
                      <h3 className="keep">{item.top_name}</h3>
                      <div className="top_sales">
                        <p className="sale">{item.total_sale}</p>
                        <h5 className="sale_num">{item.sale_num}</h5>
                      </div>
                    </div>
                  </div>
                );
              })}
              {creators?.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="top_box">
                      <img src={item.top_img} alt="" />
                      <h3 className="keep">{item.top_name}</h3>
                      <div className="top_sales">
                        <p className="sale">{item.total_sale}</p>
                        <h5 className="sale_num">{item.sale_num}</h5>
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
