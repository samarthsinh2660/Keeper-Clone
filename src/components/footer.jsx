import React from "react";

function Footer(){
   const day = new Date();
   const year = day.getFullYear();

   return <div>
    <footer>
      <p>Copyright c {year}</p>
    </footer>
   </div>

}

export default Footer;