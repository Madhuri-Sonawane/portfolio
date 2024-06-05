class SpecialHeader extends HTMLElement{
    connectedCallback(){
         this.innerHTML=`
         <header>
         <!-- start navigation -->
         <nav class="navbar no-padding-tb navbar-expand-lg navbar-boxed navbar-dark bg-black header-dark fixed-top responsive-sticky">
             <div class="container-fluid nav-header-container">
                 <div class="col-auto d-flex col-sm-6 col-lg-4 mr-auto pl-lg-0">
                    
                     <div class="col-auto justify-content-center text-white padding-1-rem-top text-large"> <p>Madhuri Sonawane</p></div>
                 </div>
                 <div class="col-auto menu-order px-lg-0">
                     <button class="navbar-toggler float-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-label="Toggle navigation">
                         <span class="navbar-toggler-line"></span>
                         <span class="navbar-toggler-line"></span>
                         <span class="navbar-toggler-line"></span>
                         <span class="navbar-toggler-line"></span>
                     </button>
                     <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                         <ul class="navbar-nav alt-font">
                             <li class="nav-item dropdown megamenu">
                                 <a href="index.html" class="nav-link">Home</a>
                                
                             </li>
                             
                             
                             <li class="nav-item dropdown megamenu">
                                 <a href="https://wa.me/7620401097?text=your_message" class="nav-link" target="_blank"> <i class="fab fa-whatsapp icon-small "></i></a>

                                 <li class="nav-item dropdown megamenu">
                                 <a class="nav-link" target="_blank"> <i id="darklight" class="feather icon-feather-moon
                                 icon-small "></i></a>
                               
                               
                             

                                 
                         </ul>

                     </div>
                    
                 </div>
               
                    
                   
                 
             </div>
         </nav>
         <!-- end navigation -->
     </header>
         `
    }
 }
 class SpecialFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`
        <footer class="footer-dark bg-black">
        <div class="footer-top padding-two-tb lg-padding-eight-tb md-padding-50px-tb">
            <div class="container">
                <div class="row">
                    <!-- start footer column -->
                    <div class="col-12 col-lg-4 col-sm-6 md-margin-40px-bottom  xs-margin-25px-bottom">
                        <span class="alt-font font-weight-500 d-block text-white margin-20px-bottom xs-margin-10px-bottom">
                           <a href="mailto:madhurisonawane851@gmail.com" class="text-white"> <i class="feather icon-feather-mail icon-small margin-10px-right text-white"></i>
                            madhurisonawane851@gmail.com</a>
                        </span>
                       
                    </div>
                    <!-- end footer column -->
                    <!-- start footer column -->
                    <div class="col-12 col-lg-4 col-sm-6 md-margin-40px-bottom xs-margin-25px-bottom">
                        <span class="alt-font font-weight-500 d-block text-white margin-20px-bottom xs-margin-10px-bottom">
                          <a href="https://www.linkedin.com/in/madhuri-sonawane-bb1724269" class="text-white"  target="_blank"> 
                             <i class="feather icon-feather-linkedin icon-small margin-10px-right text-white"></i>
                             https://www.linkedin.com/in/madhuri-sonawane-bb1724269</a>
                        </span>
                       
                    </div>
                    <!-- end footer column -->
                     <!-- start footer column -->
                     <div class="col-12 col-lg-4 col-sm-6 md-margin-40px-bottom xs-margin-25px-bottom">
                        <span class="alt-font font-weight-500 d-block text-white margin-20px-bottom xs-margin-10px-bottom">
                            <a href="https://github.com/Madhuri-Sonawane" target="_blank" class="text-white">
                                <i class="feather icon-feather-github icon-small margin-10px-right text-white"></i> 
                                https://github.com/Madhuri-Sonawane
                            </a>
                        </span>
                    </div>
                    <!-- end footer column -->
                    
                    
                </div>
            </div>
        </div>
        
    </footer>
        `
    }
 }

 customElements.define('special-header',SpecialHeader)
 customElements.define('special-footer',SpecialFooter)

 //create toggle button that changes the screen to dark mode when clicked and light -mode when clicked again

