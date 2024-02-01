import React from 'react'
import { useGetCategoriesQuery } from './categoriesSlice'
import IMage from "../../assets/Photo & Icon.png"

export default function Categories() {
    const {data: categories} = useGetCategoriesQuery()
  return (
    <div className="body">
      <div className="container">
        <div className="fourth_body">
          <div className="fourth_menu">
            {categories?.map((item, index) => {
              return (
                <div key={index}>
                  <h1 className="trendtext">{item.text_cat1}</h1>
                </div>
              );
            })}
            <div className="boxes12">
              {categories?.map((item, index) => {
                return (
                  <div className="fourth_big_box" key={index}>
                    <div className="fourth_box">
                      <img src={IMage} alt="" />
                      <h3 className="fourth_text">{item.text_cat2}</h3>
                    </div>
                  </div>
                );
              })}
              {categories?.map((item, index) => {
                return (
                  <div className="fourth_big_box" key={index}>
                    <div className="fourth_box">
                      <img src={IMage} alt="" />
                      <h3 className="fourth_text">{item.text_cat2}</h3>
                    </div>
                  </div>
                );
              })}
              {categories?.map((item, index) => {
                return (
                  <div className="fourth_big_box" key={index}>
                    <div className="fourth_box">
                      <img src={IMage} alt="" />
                      <h3 className="fourth_text">{item.text_cat2}</h3>
                    </div>
                  </div>
                );
              })}
              {categories?.map((item, index) => {
                return (
                  <div className="fourth_big_box" key={index}>
                    <div className="fourth_box">
                      <img src={IMage} alt="" />
                      <h3 className="fourth_text">{item.text_cat2}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="boxes12">
              {categories?.map((item, index) => {
                return (
                  <div className="fourth_big_box" key={index}>
                    <div className="fourth_box">
                      <img src={IMage} alt="" />
                      <h3 className="fourth_text">{item.text_cat2}</h3>
                    </div>
                  </div>
                );
              })}
              {categories?.map((item, index) => {
                return (
                  <div className="fourth_big_box" key={index}>
                    <div className="fourth_box">
                      <img src={IMage} alt="" />
                      <h3 className="fourth_text">{item.text_cat2}</h3>
                    </div>
                  </div>
                );
              })}
              {categories?.map((item, index) => {
                return (
                  <div className="fourth_big_box" key={index}>
                    <div className="fourth_box">
                      <img src={IMage} alt="" />
                      <h3 className="fourth_text">{item.text_cat2}</h3>
                    </div>
                  </div>
                );
              })}
              {categories?.map((item, index) => {
                return (
                  <div className="fourth_big_box" key={index}>
                    <div className="fourth_box">
                      <img src={IMage} alt="" />
                      <h3 className="fourth_text">{item.text_cat2}</h3>
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
