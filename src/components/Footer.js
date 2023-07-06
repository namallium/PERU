

const Footer = () => {
   return (
      <>
         <div id="footer">
            <div id="footer-core" class="option3">
               <div id="footer-col1" class="widget-area one_third">
                  <aside class="widget widget_text">
                     <h3 class="footer-widget-title"><span>General Inquiries:</span></h3>
                     <div class="textwidget">
                        <p>University of Pittsburgh, School of Pharmacy
                           <br />
                           Program Evaluation and Research Unit (PERU)
                        </p>
                        <p><a href="http://www.peru.pitt.edu/contact-us/">Contact Us</a>
                           <br />
                           5607 Baum Blvd, Pittsburgh, PA 15206
                           <br />
                           412-383-0217
                        </p>
                     </div>
                  </aside>
               </div>
               <div id="footer-col2" class="widget-area one_third">
                  <aside class="widget widget_text">
                     <div class="textwidget"> </div>
                  </aside>
               </div>
               <div id="footer-col3" class="widget-area last one_third">
                  <aside class="widget widget_media_image"><img width="360" height="77" src="https://www.peru.pitt.edu/wp-content/uploads/2020/01/Logo_SchoolOfPharmacy_2019.png" class="image wp-image-1147  attachment-full size-full" alt="" /></aside>
                  <aside class="widget widget_text">
                     <div class="textwidget" >
                        <div ><a href="https://www.peru.pitt.edu/wp-login.php"><input className="loginButton" type="button" value="Login" /></a>
                           {/* style="text-align:right;" */}
                        </div>
                     </div>
                  </aside>
               </div>
            </div >
         </div >
      </>
   );
}

export default Footer;
