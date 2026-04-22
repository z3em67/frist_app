import "./Home.css";
import shoes from "./shoes.png";
import { Link } from "react-router-dom";



function Content (){
    return(
        <div className="content">
            <div>
    <h2>YOUR FEET DESERVE THE BEST IN THE WORLD</h2>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Repudiandae maiores vel corporis,
      ipsam obcaecati minus porro expedita ex ullam a?
      orem ipsum dolor sit amet consectetur adipisicing elit.
     Repudiandae maiores vel corporis,
      ipsam obcaecati minus porro expedita ex ullam a?
      orem ipsum dolor sit amet consectetur adipisicing elit.
     Repudiandae maiores vel corporis,
      ipsam obcaecati minus porro expedita ex ullam a?orem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      <Link to="/products"><button>shop now</button></Link>
      </div>
      
 <div className="p"> 
                <img src={shoes} alt="shoes" />

            </div> 
      </div>
    );
}
   
function Under (){
    return(
       <div className="under">
       <ul>
        <li><a href="https://www.facebook.com/" target="blank">fasbook</a></li>
        <li><a href="https://www.linkedin.com/feed/" target="blank">linkedin</a></li>
        <li><a href="https://mail.google.com/mail/u/0/?hl=ar#inbox" target="blank"> gmail</a></li>
        <li><a href="https://github.com/" target="blank"> github</a></li>

       </ul>
      </div>
    );
}

function Home(){
return(
    <div className="container">
    
    <Content/>
    <Under/>
    </div>
);
}

export default Home;

