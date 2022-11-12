
import Header from '../Components/head';
import Hide from '../Components/hide';
import Footer from '../Components/footer';

import 'bootstrap/dist/css/bootstrap.min.css';



const Selling = () => {

  return (






<div>


    <Header/>
      <main style={{ backgroundColor: "#F9FAFD", }}>


        <h2 className='d-flex justify-content-center pt-5 pb-5'>Selling on HypeIndustry</h2>

        <div className='d-flex justify-content-center'>


       <ul className='nav bg-white d-inline-flex rounded-2' style={{ width: "50%" ,  }} >
  <li className="nav-item " style={{ padding: "2% 5%",  backgroundColor: "#67CBAB", }}>
    <a className="nav  text-white " id='' style={{textDecoration:"none" , }} aria-current="page" href="#"><h6>BECOME A SELLER</h6></a>
  </li>
  <li className="nav-item"id='li_1' style={{ padding: "2% 5%",  }}>
    <a className="nav text-dark" style={{textDecoration:"none" ,}}   href="#"><h6>CREATE A LISTING</h6></a>
  </li>
  <li className="nav-item" style={{ padding: "2% 5%",  }}>
    <a className="nav text-dark" style={{textDecoration:"none" ,}} href="#"><h6>SELLER FEES</h6></a>
  </li>

  <li className="nav-item" style={{ padding: "2% 5%",  }}>
    <a className="nav text-dark" style={{textDecoration:"none" ,}} href="#"><h6>CONDITION OF ITEMS</h6></a>
  </li>
  </ul>
  
  

        
        </div>



        <div className='pb-5 pt-5' style={{ paddingLeft: "25%" ,  backgroundColor: "#F9FAFD",}}>

        <h5 className=' pt-4 pb-3' style={{borderBottom:" 1px dashed #677088", width: "67%",}}>How do I sell on HypeIndustry?   < Hide /> </h5>
        <h5 className=' pt-5 pb-3' style={{borderBottom:" 1px dashed #677088", width: "67%"}}>I requested to become a SELLER, how long will it take to get approved?   < Hide /> </h5>
        <h5 className=' pt-5 pb-3' style={{borderBottom:" 1px dashed #677088", width: "67%"}}>How do I delete my Account?  < Hide /> </h5>
        <h5 className=' pt-5 pb-3' style={{borderBottom:" 1px dashed #677088", width: "67%"}}>Can I share my seller privileges with others?  < Hide /> </h5>
        <h5 className=' pt-5 pb-3' style={{borderBottom:" 1px dashed #677088", width: "67%"}}>Can I create several Seller Accounts?   < Hide /> </h5>
        <h5 className=' pt-5 pb-3 ' style={{borderBottom:" 1px dashed #677088", width: "67%"}}>How do I become a seller if I have a store outside the USA?   < Hide /> </h5>

        </div>
      </main>




<main>

<Footer/>

</main>



    </div >








  )

}





export default Selling