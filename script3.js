// 1. Create a predefined objects in an array (10 objects) and display it on HTML

let products =[

    {

        pname:"<p><b>CARAMEL COFFEE LATTE</b></p>",

        price:"Php 165.00",

        pcode:"Code No:DJC-001",

        description:"Now you can enjoy café-style caramel lattes at home with your Keurig® brewer. Indulge in the creamy bliss of dairy and caramel flavor specially crafted to complement our smooth, balanced Caffè Blend made from 100% arabica coffee. Every cup you make on your Keurig® brewer will taste velvety rich and deliciously familiar.",

        manufacturer:"Pasil-Duljo Brgy. Association",

        stocks:"2000",

        supplier:"Great Taste",

        expdate:"Expires on April 2025",

        url:"https://athome.starbucks.com/product/caramel-caffe-latte/",

        imgurl:"https://athome.starbucks.com/sites/site.prod.athome.starbucks.com/files/styles/featured_product_desktop/public/CaramelCaffeLatte_Description_800x800.jpg?itok=WbEoOBlu"

    },

    {

        pname:"<p><b>COFFEE MOCHA</b></p>",

        price:"Php 195.00",

        pcode:"Code No:DJC-002",

        description:"Experience a match made in mocha heaven. Getting the perfect balance of coffee and cocoa notes is a science and an art that requires time and experience. This unique combination creates a richness you can indulge in every day.",

        manufacturer:"Pasil-Duljo Brgy. Association",

        stocks:"2000",

        supplier:"Great Taste",

        expdate:"Expires on April 2025",

        url:"https://athome.starbucks.com/product/mocha/",

        imgurl:"https://athome.starbucks.com/sites/site.prod.athome.starbucks.com/files/styles/featured_product_desktop/public/MochaCoffee_Description_800x800.jpg?itok=RlVVSkTm"

    },

    {

        pname:"<p><b>JAVA CHIP FRAFFUCCCINO</b></p>",

        price:"Php 185.00",

        pcode:"Code No:DJC-003",

        description:"The Java Chip Frappuccino is the drink for when you feel like you need a stronger caffeine hit but you just can’t have your coffee black. If you'd rather have yours with lots of cream and sugar—and if by ‘cream and sugar,’ you actually mean a mountain of whipped cream and a generous mocha drizzle—then this is the one for you. With this drink making it on this list, you're definitely not alone.",

        manufacturer:"Pasil-Duljo Brgy. Association",

        stocks:"2000",

        supplier:"Great Taste",

        expdate:"Expires on April 2025",

        url:"https://www.spot.ph/eatdrink/the-latest-eat-drink/73212/10-most-ordered-starbucks-drinks-2018-a00198-20180322-lfrm",
        
        imgurl:"https://images.summitmedia-digital.com/spotph/images/2018/03/20/starbuckstop8.jpg",

    },

    {

        pname:"<p><b>CARAMEL MACCHIATO</b></p>",

        price:"Php 180.00",

        pcode:"DJC-004",

        description:"This espresso-based drink is perfect for those who like their coffee fix sweet, with freshly steamed milk blended with vanilla syrup, and topped with caramel drizzle in the signature crisscross pattern.",

        manufacturer:"Pasil-Duljo Brgy. Association",

        stocks:"2000",

        supplier:"Great Taste",

        expdate:"Expires on April 2025",

        url:"https://www.spot.ph/eatdrink/the-latest-eat-drink/73212/10-most-ordered-starbucks-drinks-2018-a00198-20180322-lfrm",
        imgurl:"https://images.summitmedia-digital.com/spotph/images/2018/03/20/starbuckstop3.jpg",

    },

    {

        pname:"<p><b>WHITE CHOCOLATE MOCHA</b></p>",

        price:"Php 185.00",

        pcode:"DJC-005",

        description:"White Chocolate Mocha is a dependable drink, especially for first-timers.  It's no secret that chocolate goes well with coffee, with the latter's dark notes boosting the sweetness of the former—common knowledge that resulted in the mocha, a drink that blends espresso, chocolate, and milk.",

        manufacturer:"Pasil-Duljo Brgy. Association",

        stocks:"2000",

        supplier:"Great Taste",

        expdate:"Expires on April 2025",

        url:"https://www.spot.ph/eatdrink/the-latest-eat-drink/73212/10-most-ordered-starbucks-drinks-2018-a00198-20180322-lfrm",
        
        imgurl:"https://images.summitmedia-digital.com/spotph/images/2018/03/20/starbuckstop11.jpg",

    },

    {

        pname:"<p><b>CAFFE AMERICANO</b></p>",

        price:"Php 120.00",

        pcode:"DJC-006",

        description:"From the name, you can already tell that Americans had something to do with the invention of this now-classic. It's popularly believed that the Americano was born from Americans based in Italy who would pour hot water over their espresso to dilute it.",

        manufacturer:"Pasil-Duljo Brgy. Association",

        stocks:"2000",

        supplier:"Great Taste",

        expdate:"Expires on April 2025",

        url:"https://www.spot.ph/eatdrink/the-latest-eat-drink/73212/10-most-ordered-starbucks-drinks-2018-a00198-20180322-lfrm",

        imgurl:"https://images.summitmedia-digital.com/spotph/images/2018/03/20/starbuckstop1.jpg",


    },

    {

        pname:"<p><b>CAFFE LATTE</b></p>",

        price:"Php 120.00",

        pcode:"DJC-007",

        description:"Most Pinoys like their coffee with cream or milk, so the Caffè Latte is a no-brainer. Literally translating to milk coffee, a latte has espresso, steamed milk, and the thinnest layer of milk foam (preferably a centimeter), and was born simply because Europeans also loved to flavor their coffee with milk.",

        manufacturer:"Pasil-Duljo Brgy. Association",

        stocks:"2000",

        supplier:"Great Taste",

        expdate:"Expires on April 2025",

        url:"https://www.spot.ph/eatdrink/the-latest-eat-drink/73212/10-most-ordered-starbucks-drinks-2018-a00198-20180322-lfrm",

        imgurl:"https://images.summitmedia-digital.com/spotph/images/2018/03/20/starbuckstop9.jpg",
    },

    {

        pname:"<p><b>CAPPUCCINO</b></p>",

        price:"Php 125.00",

        pcode:"DJC-008",

        description:"Not to be confused with the Caffè Latte, the Cappuccino has three distinct layers: Espresso, steamed milk, and frothy foam which is thicker than that of a latte's. It's a popular myth that a Capuchin friar, Marco d'Aviano invented the drink, though there are no official historical accounts to back this. Even so, the cappuccino takes it name from the color of the hooded robes worn by the Capuchin Order, whose color is similar to this classic drink.",

        manufacturer:"Pasil-Duljo Brgy. Association",

        stocks:"2000",

        supplier:"Great Taste",

        expdate:"Expires on April 2025",

        url:"https://www.spot.ph/eatdrink/the-latest-eat-drink/73212/10-most-ordered-starbucks-drinks-2018-a00198-20180322-lfrm",

        imgurl:"https://images.summitmedia-digital.com/spotph/images/2018/03/20/starbuckstop2.jpg",
    },

    {

        pname:"<p><b>MOCHA FRAPPUCCINO</b></p>",

        price:"Php 185.00",

        pcode:"DJC-009",

        description:"In 1992, George Howell, owner of Boston café The Coffee Connection invented the Frappuccino, a cross between a New England frappe (a type of milkshake that's not to be confused with the coffee-based frappe from Greece), and a cappuccino to beat the sweltering heat of summer. Starbucks then bought The Coffee Connection, and trademarked the drink that has now become synonymous to the chain. The Mocha Frappuccino, one of the first Frappuccino flavors launched, is a classic for good reason, with its blend of coffee, milk, ice, and mocha syrup for a cool beverage mocha lovers can’t get enough of.",

        manufacturer:"Pasil-Duljo Brgy. Association",

        stocks:"2000",

        supplier:"Great Taste",

        expdate:"Expires on April 2025",

        url:"https://www.spot.ph/eatdrink/the-latest-eat-drink/73212/10-most-ordered-starbucks-drinks-2018-a00198-20180322-lfrm",

        imgurl:"https://images.summitmedia-digital.com/spotph/images/2018/03/20/starbuckstop10.jpg",

    },

    {

        pname:"<p><b>CHOCOLATE CREAM CHIP FRAPPUCCINO</b></p>",

        price:"Php 185.00",

        pcode:"DJC-010",

        description:"For those who like a sugar rush with their coffee, the Chocolate Cream Chip Frappuccino is the way to go. Starbucks takes their Mocha Frappuccino and adds chocolate chips into the blend, then tops it all off with whipped cream and more drizzles of mocha syrup. With all the chocolatey things happening in this drink, it’s no wonder it's such a hit. The Chocolate Cream Chip Frappuccino is also one of the frappes available only in selected countries, including the Philippines—lucky us!",

        manufacturer:"Pasil-Duljo Brgy. Association",

        stocks:"2000",

        supplier:"Great Taste",

        expdate:"Expires on April 2025",

        url:"https://www.spot.ph/eatdrink/the-latest-eat-drink/73212/10-most-ordered-starbucks-drinks-2018-a00198-20180322-lfrm",

        imgurl:"https://images.summitmedia-digital.com/spotph/images/2018/03/20/starbuckstop5.jpg",

    }

]

let output = "";

products.forEach(function(item){

    if (item.imgurl == undefined)

    {

        item.imgurl = "https://via.placeholder.com/300"

    }

   output += `
   <div class="card" style="width": 18rem;">
   <img src='${item.imgurl}' class="card-img-top">
   <div class="card-body">
     <h5 class="card-title">${item.pname}</h5>
     <p class="card-text">${item.description}</p>
     <a href="${item.url}" class="btn btn-primary">${item.price}</a>
   </div>
 </div>
 </div>


            
        

`
})

document.getElementById('container').innerHTML = output
