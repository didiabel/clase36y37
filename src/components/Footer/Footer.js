import React from 'react';
import * as shareButton from "react-simple-share";

const Footer = () => {
    return ( 
        <div className="d-grid container mt-5">
            <div className="row bg-secondary rounded-pill">
            <div className="col-2">
                </div>
                <div className="col-8">
                 <h1>Compartinos en tus redes:</h1>
                </div>
                <div className="col-2">
                   <shareButton.FacebookShareButton />
                   <shareButton.TwitterShareButton />
                   <shareButton.LinkedInShareButton />
                </div>
            </div>
            <div className="row m-5">
              <div className='d-flex'>
                  <div className='col-4'>
        
              <div className="mb-3">
                  <h1 className='mb-4'>Contacto</h1>
                   <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                   <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
              </div>
              <div className="mb-3">
                   <label htmlFor="exampleFormControlInput1" className="form-label">Nombre</label>
                   <textarea className="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
              </div>
              <div className="mb-3">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">Mensaje</label>
                  <textarea className="form-control" id="exampleFormControlTextarea2" rows="3"></textarea>
              </div>
              </div>
              <div className='d-flex justify-content-end'>
              <div className='col-8'>
                  
              <h1 className='mb-4'>Video Promocional:</h1>
              <iframe 
                 width="250%"
                 height="75%"
                 src={`https://www.youtube.com/embed/-L6LXZ7JtDU`}
                 frameBorder="0"
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                 allowFullScreen
                 title="Embedded youtube"
              />
              </div>
              </div>
              </div>
            </div>
            <div className="row bg-secondary rounded-pill">
                <div className="col-8">
                </div>
                <div className="col-4">
                    <h3>@Hecho por didi</h3>
                </div>
            </div>

        </div>
     );
}
 
export default Footer;