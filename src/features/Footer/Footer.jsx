import React from 'react'
import { useGetFooterQuery } from './footerSlice'

export default function Footer() {
    const {data: footer} = useGetFooterQuery()
  return (
    <div className="body3">
      <div className="container">
        <div className="footer_body">
          <div className="footer_menu">
            {footer?.map((item, index) => {
              return (
                <div className="nft_box" key={index}>
                  <h4 className="nft">{item.nft}</h4>
                  <p className="nft2">{item.mini_nft}</p>
                  <p className="nft2">{item.join}</p>
                </div>
              );
            })}
            {footer?.map((item, index) => {
              return (
                <div className="nft_box" key={index}>
                  <h4 className="nft">{item.market}</h4>
                  <p className="nft2">{item.rank}</p>
                  <p className="nft2">{item.connect}</p>
                </div>
              );
            })}
            {footer?.map((item, index) => {
              return (
                <div className="nft_box" key={index}>
                  <h4 className="nft">{item.digest}</h4>
                  <p className="nft2">{item.get}</p>
                  <p className="nft2">{item.join}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
