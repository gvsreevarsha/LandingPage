import React, { Component } from 'react';

class Footer extends Component {
  render() {

    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
               <li><a href="https://twitter.com/gbplacements"><i className='fa fa-twitter'></i></a></li>
               <li><a href="https://www.facebook.com/gitamblrplacements"><i className='fa fa-facebook'></i></a></li>
               <li><a href="https://instagram.com/gbplacements"><i className='fa fa-instagram'></i></a></li>
               <li><a href="https://www.youtube.com/channel/UCTdcKs5RAOcQ-qm2qOXI2Ng"><i className='fa fa-youtube'></i></a></li>
               <li><a href="https://www.linkedin.com/in/gitamblrplacements/"><i className='fa fa-linkedin'></i></a></li>
           </ul>

           <ul className="copyright">
             
           </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;
