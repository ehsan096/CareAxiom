const express = require("express");
const app = express();

app.get("/I/want/title/", function (req, res) {
  if (req.query.address) {
    let addressQuery = req.query.address;
    console.log("First", addressQuery);
    let check = true;
    let list = '';
    if (typeof addressQuery === "object") {
      addressQuery.forEach((address) => {
        if (address.match(/(.com)/)) {
          console.log(address);
          list+=`<li> ${address} - ${address}</li>`;
        } else {
          list+=`<li> ${address} - NO RESPONSE </li>`;
          check = false;
        }
      });
    } else {
      if (addressQuery.match(/(.com)/)) {
        console.log(addressQuery);
        list=`<li> ${address} - ${address}</li>`;
      } else {
        check = false;
        list=`<li> ${address} - NO RESPONSE </li>`;
      }
    }
    if (check) {
      console.log("Check > ", check);
      res.send(`<html>
      <head></head>
      <body>
       <h1> Following are the titles of given websites: </h1>
       <ul>
       <li>Ehsan</li>
        ${list} 
       
       </ul>
  </body>
  </html>
       `);
    } else {
      console.log("Check > ", check);
      res.status(404).send(`<html>
    <head></head>
    <body>
     <h1> Following are the titles of given websites: </h1>
     <ul>
     <li>Ehsan</li>
     ${list} 
     
     </ul>
</body>
</html>
     `);
    }

  } else {
    res.status(401).send(`<html>
    <head></head>
    <body>
     <h1> Following are the titles of given websites: </h1>
     <ul>
     <li> NO URL found</li>
     </ul>
</body>
</html>
     `);
  }
});
app.listen(3000);
