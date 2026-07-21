function recommendProducts(products, currentProduct) {

if (!currentProduct) return [];

return products

.filter(item => item.id !== currentProduct.id)

.map(item => {

let score = 0;
const reasons = [];

// Same Category
if(item.category === currentProduct.category){
score += 5;
reasons.push("Same Category");
}

// Similar Price
if(
Math.abs(item.price-currentProduct.price)
<
currentProduct.price*0.25
){
score += 3;
reasons.push("Similar Price");
}

// High Rating
if((item.rating?.rate || 0)>=4){
score += 2;
reasons.push("Top Rated");
}

return{

...item,

score,

match:score*10,

reasons

};

})

.sort((a,b)=>b.score-a.score)

.slice(0,4);

}

export default recommendProducts;