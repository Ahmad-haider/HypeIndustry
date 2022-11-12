import Head from 'next/head';
import Image from 'next/image';
import Styles from '../public/Home.module.css';
import Card from 'react-bootstrap/Card';
import Header from '../Components/head';
import Hide from '../Components/hide';
import Footer from '../Components/footer';
import Vector from '../public/vector_.ico';
import silo_1 from '../public/agricultural-silo 1.ico';
import One from '../public/one.ico';
import Two from '../public/two.ico';
import Three from '../public/three.ico';
import Four from '../public/four.ico';
import Five from '../public/five.ico';
import Six from '../public/six.ico';
import Wallet from '../public/wallet.ico';
import Package from '../public/Package.ico';
import Bg from '../public/bg_logo.ico';
import silo_2 from '../public/factory-workshop-interior-machines-glass-production-background 2.ico';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import CardGroup from 'react-bootstrap/CardGroup';


const body = () => {

  return (







    <div>
      <main className='bg-light  '>

        <Header />


        <style>







        </style>










        <div className=' bg-light d-inline-flex' style={{ backgroundColor: "#F9FAFD", width: "100%", }}>




          <Card className="  border-light bg-light   "  >


            <Card.ImgOverlay className='  bg-light border-light position-static   ' style={{ width: "100%", }}
            >


              <Card.Title className='fs-1  text-blue fw-bolder bg-light pt-5 mb-5  ' style={{ fontSize: 4, color: "#0F1F48", width: "100%", paddingLeft: "14%", }}>New marketplace that <br></br> allows to buy in bulk

                <Card.Text className='text  bg-light fw-light pt-5 fs-sm-3  ' style={{ width: "50%", fontSize: "2vh", color: "#0F1F48", }}>
                  Hypeindustry is a one-of-a-kind Platform+Marketplace offering Bulk/Wholesale goods from Stores, Boutiques,Wholesalers & Resellers for the Footwear,Apparel & Accessory industry.


                </Card.Text>


                <div className=" pt-5 bg-light " style={{ marginLeft: "" }}>

                  <button type="button" className="btn text-light  " style={{ backgroundColor: "#67CBAB", borderRadius: "50px", padding: "0.8% 2%", marginBottom: "10%", fontWeight: "middle", }}>Read more</button>

                </div>
              </Card.Title>




            </Card.ImgOverlay>
            <Image width={1260} src={Vector} className="float-end img-fluid opacity-60 position-absolute  " style={{ mixBlendMode: 'darken', left: "32vw", }} id='vector' alt="Card image" />
          </Card>








        </div>
      </main>






      <main>


        <div className='  ' style={{ paddingLeft: "13vw", paddingTop: "10vh", }} >




          <div className="card mb-3 border-light" style={{ maxWidth: "1240px", }}>
            <div className="row g-0 " >
              <div className="col-md-6 " style={{ paddingRight: "5vw", }}>
                <Image src={silo_1} width={2000} className="img-fluid rounded-start rounded-2" alt="..." />
              </div>
              <div className="col-md-6   border-start border-4 border-secondary " style={{ borderLeft: "5px ", paddingLeft: "5vw", }}>
                <div className="card-body">
                  <h3 className="card-title fw-bold fs-larger pb-4">Why HypeIndustry and what is it</h3>
                  <p className="card-text">Hypeindustry is a one-of-a-kind Platform + Marketplace offering Bulk/Wholesale goods from Stores, Boutiques, Wholesalers & Resellers for the Footwear, Apparel & Accessory industry! Basically a new marketplace that allows you to buy in bulk (only) footwear, apparel etc...</p>

                </div>
              </div>
            </div>
          </div>

        </div>


        <div className='  ' style={{ paddingLeft: "13vw", paddingTop: "10vh", }} >




          <div className="card mb-3 border-light" style={{ maxWidth: "1240px", }}>
            <div className="row g-0 " >

              <div className="col-md-6   border-start border-4 border-secondary " style={{ borderLeft: "5px ", paddingLeft: "5vw", }}>
                <div className="card-body">

                  <p className="card-text pt-5"> Buy cheaper because of the bulk volume discount and resell worldwide to make a small margin and keep the volume and recurrence active! The key to make your money fast .</p>


                  <div>
                    <button type="button" className="btn   " style={{ color: "#67CBAB", borderRadius: "50px", padding: "0.8% 2%", marginBottom: "10%", fontWeight: "middle", }}>Read more &#707;</button>

                  </div>
                </div>
              </div>

              <div className="col-md-6 rounded-2 " style={{ paddingRight: "5vw", }}>
                <Image src={silo_2} width={2000} className="img-fluid rounded-start" alt="..." />
              </div>


            </div>
          </div>

        </div>


      </main>


      <main style={{ backgroundColor: "#F9FAFD", }}>


        <h2 className='d-flex justify-content-center pt-5 pb-5'>Selling on HypeIndustry</h2>

        <div className='d-flex justify-content-center'>


          <ul className='nav bg-white d-inline-flex rounded-2' style={{ width: "50%", }} >
            <li className="nav-item " style={{ padding: "2% 5%", backgroundColor: "#67CBAB", }}>
              <a className="nav  text-white " id='' style={{ textDecoration: "none", }} aria-current="page" href="#"><h6>BECOME A SELLER</h6></a>
            </li>
            <li className="nav-item" id='li_1' style={{ padding: "2% 5%", }}>
              <a className="nav text-dark" style={{ textDecoration: "none", }} href="#"><h6>CREATE A LISTING</h6></a>
            </li>
            <li className="nav-item" style={{ padding: "2% 5%", }}>
              <a className="nav text-dark" style={{ textDecoration: "none", }} href="#"><h6>SELLER FEES</h6></a>
            </li>

            <li className="nav-item" style={{ padding: "2% 5%", }}>
              <a className="nav text-dark" style={{ textDecoration: "none", }} href="#"><h6>CONDITION OF ITEMS</h6></a>
            </li>
          </ul>




        </div>



        <div className='pb-5 pt-5' style={{ paddingLeft: "25%", backgroundColor: "#F9FAFD", }}>

          <h5 className=' pt-4 pb-3' style={{ borderBottom: " 1px dashed #677088", width: "67%", }}>How do I sell on HypeIndustry?   < Hide /> </h5>
          <h5 className=' pt-5 pb-3' style={{ borderBottom: " 1px dashed #677088", width: "67%" }}>I requested to become a SELLER, how long will it take to get approved?   < Hide /> </h5>
          <h5 className=' pt-5 pb-3' style={{ borderBottom: " 1px dashed #677088", width: "67%" }}>How do I delete my Account?  < Hide /> </h5>
          <h5 className=' pt-5 pb-3' style={{ borderBottom: " 1px dashed #677088", width: "67%" }}>Can I share my seller privileges with others?  < Hide /> </h5>
          <h5 className=' pt-5 pb-3' style={{ borderBottom: " 1px dashed #677088", width: "67%" }}>Can I create several Seller Accounts?   < Hide /> </h5>
          <h5 className=' pt-5 pb-3 ' style={{ borderBottom: " 1px dashed #677088", width: "67%" }}>How do I become a seller if I have a store outside the USA?   < Hide /> </h5>

        </div>
      </main>



      <main >


        <h2 className=' d-flex justify-content-center pt-5 pb-5'>Buying on Hypeindustry is simple!</h2>

        <Image src={Bg} alt=" " className='position-absolute 'style={{marginLeft:"40%" ,}} ></Image>


        <div className='d-inline-flex' style={{ paddingLeft: "10%", paddingRight: "10%", }}>


          <div className='' style={{ marginRight: "30%", }}>

            <div className="card mb-5 border-white " style={{ maxWidth: "1000px;" }}>
              <div className="row g-0">
                <div className="col-md-2">
                  <Image src={One} className="img-fluid rounded-start " alt="..." style={{}} />
                </div>
                <div className="col-md-10">
                  <div className="card-body">

                    <p className="card-text">Create a buyer account / profile, with all required fields: Full name, Company name or Store Name, Address, Credit Card info etc...</p>

                  </div>
                </div>
              </div>
            </div>






            <div className="card mb-5 pt-5 border-white" style={{ maxWidth: "1000px;" }}>
              <div className="row g-0">
                <div className="col-md-2">
                  <Image src={Three} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-10">
                  <div className="card-body">

                    <p className="card-text">The offer can either be: an “open stock inventory”, meaning you can select any sizes you want from the seller stock with of course a minimum quantity imposed by the seller (if he wants to), or a “buy all /take all offer”, which means that the seller wants you to buy all the quantities in that specific model. Usually “buy all deals” have a higher discounted purchase price. Keep in mind, once you place an order on an open stock model, the stock is live and updated right away for the next buyer, which will reflect less quantities in the inventory...until it reaches a: “sold out” status.</p>

                  </div>
                </div>
              </div>
            </div>


            <div className="card mb-5 pt-5 border-white"   style={{ maxWidth: "1000px;" }}>
            <div className="row g-0">
              <div className="col-md-2">
                <Image src={Five} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-10">
                <div className="card-body">

                  <p className="card-text">Once the seller approves the order, (this might take 10 min or up to to 3 days) your credit card will be charged, and you will receive an email with a tracking number. NO charges will be done unless orders are APPROVED ! We created a dashboard for buyers so you can see all the information you need: invoice number, tracking number, carrier /shipper, pdf downloadable invoices etc...Now, you have your own excel accounting sheet with you all the time.</p>

                </div>
              </div>
            </div>
          </div>
        




          </div>








          <div>


            <div className="card mb-5 border-white " style={{ maxWidth: "1000px;" }}>
              <div className="row g-0">
                <div className="col-md-2">
                  <Image src={Two} className="img-fluid rounded-start " alt="..." style={{}} />
                </div>
                <div className="col-md-10">
                  <div className="card-body">

                    <p className="card-text">You will then receive email alerts whenever any seller posts an offer on the platform. Then it is up to you to click on the link to view the offer or not. Of course, each email alert contains the offer details and models, so you know what has been posted, and if it is in any of your interest to purchase or not.</p>

                  </div>
                </div>
              </div>
            </div>


            <div className="card mb-5 border-white " style={{ maxWidth: "1000px;" }}>
              <div className="row g-0">
                <div className="col-md-2">
                  <Image src={Four} className="img-fluid rounded-start " alt="..." style={{}} />
                </div>
                <div className="col-md-10">
                  <div className="card-body">

                    <p className="card-text">Once logged in, simply view the offer and click on any of the models you wish to order by clicking on the “open stock / or buy all” buttons.</p>

                  </div>
                </div>
              </div>
            </div>



            <div className="card mb-5 border-white " style={{ maxWidth: "1000px;", marginTop: "50%" , }}>
              <div className="row g-0">
                <div className="col-md-2">
                  <Image src={Six} className="img-fluid rounded-start " alt="..." style={{}} />
                </div>
                <div className="col-md-10">
                  <div className="card-body">

                    <p className="card-text">Please keep in mind: there are no refunds, no returns, no order cancellations, all sales are finals unless the wrong items were shipped! This is a B2B Platform.</p>

                  </div>
                </div>
              </div>
            </div>


            

          </div>


         


        </div>


        <button type="button" className="btn text-light   d-flex justify-content-center   " style={{ backgroundColor: "#67CBAB", borderRadius: "50px",  padding: "0.8% 2%", marginBottom: "10%", fontWeight: "middle", marginLeft:"45%" , }}>Learn more</button>
      </main>



<main style={{ backgroundColor: "#F9FAFD",}}>

<div className='d-flex justify-content-center col-xs-2' style={{paddingTop:"10%",}}>




  
    <CardGroup>
      <Card style={{ backgroundColor: "#F9FAFD", paddingLeft:"7%" }} className='border-light  '>
        <Image src={Wallet} alt="" />
        <Card.Body>
          <Card.Title className='fw-bold fs-3 '>Shipping for buyers</Card.Title>
          <Card.Text style={{width:"70%"}} >
          All of our items are being shipped from several warehouses/stores in the USA and worldwide, and usually ships within 24 H to 5 business days depending on the seller’s shipping time.
          </Card.Text>
          <button type="button" className="btn   " style={{ color: "#67CBAB", borderRadius: "50px", padding: "0.8% 2%", marginBottom: "10%", fontWeight: "middle", }}>Read more &#707;</button>

        </Card.Body>
       
      </Card>
      <Card style={{ backgroundColor: "#F9FAFD", paddingRight:"7%"}} className='border-light'>
        <Image  src={Package} alt="" />
        <Card.Body>
          <Card.Title className='fw-bold fs-3 '>Shipping for sellers</Card.Title>
          <Card.Text>
          Once you have approved the purchase, you can request for your labels by email at: shipping@hypeindustry.com! Make sure to include: 
<br />1.Buyer’s details...
          </Card.Text>
          <button type="button" className="btn   " style={{ color: "#67CBAB", borderRadius: "50px", padding: "0.8% 2%", marginBottom: "10%", fontWeight: "middle", }}>Read more &#707;</button>

        </Card.Body>
        
      </Card>
     
    </CardGroup>
  





</div>

</main>



      <main>

        <Footer />

      </main>



    </div >








  )

}





export default body