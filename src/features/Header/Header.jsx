import React from "react"
import Logo from "../../assets/Storefront.png"
import "../Header/style.scss"
import { useGetHeadersQuery, useGetImageQuery } from "./HeaderSlice";

export default function Header() {
    const {data: nav_text} = useGetHeadersQuery()
    const {data: image} = useGetImageQuery()
  return (
    <div className="body">
      <div className="container">
        <div className="first">
          <div className="first22">
            <img src={Logo} alt="" />
            <h1 className="text1">Nft Marketplace</h1>
          </div>
          <div className="div1">
            {nav_text?.map((item, index) => {
              return (
                <div className="texts" key={index}>
                  <h3>{item.title1}</h3>
                  <h3>{item.title2}</h3>
                  <h3>{item.title3}</h3>
                  <button className="btn1">{item.title4}</button>
                </div>
              );
            })}
          </div>
        </div>
        <div className="second_part">
          <div className="second_big">
            {nav_text?.map((item, index) => {
              return (
                <div className="big_box" key={index}>
                  <div className="flex11">
                    <h1 className="h1">{item.title}</h1>
                    <h4 className="h4">{item.desc}</h4>
                    {item?.nav_text2?.map((item, index) => {
                      return (
                        <div className="mini_box" key={index}>
                          <button className="button22">{item.button}</button>
                          <div className="numbers">
                            <div>
                              <h2>{item.num1}</h2>
                              <p>{item.num_text}</p>
                            </div>
                            <div>
                              <h2>{item.num2}</h2>
                              <p>{item.num_text2}</p>
                            </div>
                            <div>
                              <h2>{item.num1}</h2>
                              <p>{item.num_text3}</p>
                            </div>
                          </div>
                        </div> //
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            {
            image?.map((item, index) => {
              return <div className="box1111" key={index}>
                  <img className="img11" src={item.img1} alt="" />
                  <h3 className="walk">{item.walk}</h3>
                  <div className="box_mini1">
                    <img className="img22" src={item.img2} alt="" />
                    <p className="anime1">{item.anime}</p>
                  </div>
                </div>
              
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
