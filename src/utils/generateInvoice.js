async function generateInvoice(order){


const {default: jsPDF} = await import("jspdf");


const {default: autoTable} = await import(
"jspdf-autotable"
);



const doc = new jsPDF();


// Title

doc.setFontSize(20);

doc.text(
"Nexora Invoice",
20,
20
);



// Order Details

doc.setFontSize(12);

doc.text(
`Order ID: ${order.id}`,
20,
35
);


doc.text(
`Date: ${order.date}`,
20,
45
);



// Table Data

const tableData = order.items.map(item=>[

item.title,

item.quantity,

`₹${item.price}`

]);




autoTable(doc,{

startY:60,

head:[

[
"Product",
"Qty",
"Price"
]

],

body:tableData


});




// Total

doc.text(

`Total: ₹${order.total}`,

20,

150

);




// Download

doc.save(

`Nexora_Order_${order.id}.pdf`

);



}


export default generateInvoice;