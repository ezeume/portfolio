import React from "react";
import "./style.css";

function Contact() {
  return (
    <>
            <div class="row">
                  <div class="col-12">
                  <a href="..." className="subheader-text"><h2>CONTACT</h2></a>
                  </div>
            </div> 
            
            <div class="row">
                <div class="col-xl-4 col-lg-6 col-md-12 col-sm-12 mb-4">
                    <a href="mailto:nelsonezeume@yahoo.com" class="text-dark text-decoration-none" target="_blank">
                        <button type="button" class="btn btn-primary btn-lg btn-block">Email:
                            nelsonezeume@yahoo.com</button>
                    </a>
                </div>
                
                <div class="col-xl-4 col-lg-6 col-md-12 col-sm-12 mb-4">
                    <a href="https://www.linkedin.com/in/nelson-ezeume-93b750a5/" class="text-dark text-decoration-none"
                        target="_blank">
                        <button type="button" class="btn btn-primary btn-lg btn-block">View my Linkedin
                            profile</button></a>
                </div>
                
                <div class="col-xl-4 col-lg-6 col-md-12 col-sm-12 mb-2">
                    <a href="..." class="text-dark text-decoration-none">
                        <button type="button" class="btn btn-primary btn-lg btn-block">Phone: (814)350-6970</button>
                    </a>
                </div>
                
                <div class="col-xl-4 col-lg-6 col-md-12 col-sm-12 mb-2">
                    <a href="https://github.com/ezeume" class="text-dark text-decoration-none" target="_blank">
                        <button type="button" class="btn btn-primary btn-lg btn-block">View my GitHub profile</button>
                    </a>
                </div>

            </div>
    </>
  )
}

export default Contact;
