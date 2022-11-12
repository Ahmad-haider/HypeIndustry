
import Head from 'next/head';
import Image from 'next/image';

const footer = () => {
return(
      <main className='bg-dark text-white d-inline-flex ' style={{width:'100%' ,}} >

      

     
      <div className="container my-2">
       
        <footer
                className="text-center text-lg-start text-light"
                style={{color: 'white',}}
                >
        
         
         
      
         
          <section className="">
            <div className="container text-center text-md-start mt-5">
             
              <div className="row mt-3">
              
              
              
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  
                  <h6 className="text-uppercase fw-bold">HypeIndustry</h6>
                  <hr
                      className="mb-4 mt-0 d-inline-block mx-auto"
                      style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                      />
                  <p>
                    <a href="#!" style={{textDecoration:'none' ,}} className="text-light">HypeIndustry Concept</a>
                  </p>
                  <p>
                    <a href="#!" className="text-light" style={{textDecoration:'none' ,}}>Buying Guide</a>
                  </p>
                  <p>
                    <a href="#!" className="text-light" style={{textDecoration:'none' ,}}>Selling Guide</a>
                  </p>
                
                </div>
                
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                
                  <h6 className="text-uppercase fw-bold">Hype Offers</h6>
                  <hr
                      className="mb-4 mt-0 d-inline-block mx-auto"
                      style={{width: '60px', backgroundColor: "#7c4dff", height: "2px"}}
                      />
                  <p>
                    <a href="#!" className="text-light" style={{textDecoration:'none' ,}}>Footwear</a>
                  </p>
                  <p>
                    <a href="#!" className="text-light" style={{textDecoration:'none' ,}}>Apparel</a>
                  </p>
                  <p>
                    <a href="#!" className="text-light" style={{textDecoration:'none' ,}}>Accessories</a>
                  </p>
                 
                </div>
                
      
                
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                
                <h6 className="text-uppercase fw-bold">Shipping</h6>
                <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{width: '60px', backgroundColor: "#7c4dff", height: "2px"}}
                    />
                <p>
                  <a href="#!" className="text-light" style={{textDecoration:'none' ,}}>Shipping for buyers</a>
                </p>
                <p>
                  <a href="#!" className="text-light" style={{textDecoration:'none' ,}}>Shipping for sellers</a>
                </p>
              
               
              </div >
      
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4  "  style={{paddingLeft:"15%" ,}}>
                
                <h6 className="text-uppercase fw-bold  ">Contact Us</h6>
                <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{width: "70px", backgroundColor: "#7c4dff", height: "2px", marginLeft:"5",}}
                    />
      
      
      <p>
                  <a href="#!" className="" style={{textDecoration:'none' , color:"#67CBAB",}}>shipping@hypeindustry.com</a>
                </p>
                <p>
                  <a href="#!" className="" style={{textDecoration:'none' , color:"#67CBAB",}}>sales@hypindustry.com</a>
                </p>
               
              
              </div>
      
      
              </div>
              
            </div>
          </section>
          
      
          
         
          
        </footer>
      
        <div
               className="text-center pt-5  border-top border-2  border-secondary"
               style={{  borderColor:"white" , borderTop:"2px" ,}}
               >
          <p className='text-light-50 '> © 2022 HypeIndustry</p>
            
              
          </div>
      </div>
      
        
      
         
      </main>
)
}

export default footer