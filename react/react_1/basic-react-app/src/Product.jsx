import "./product.css"


// function Product(props){
//     console.log(props.title);
//     return (
//         <div className="Product">
//             <h3>{props.title} </h3>
//             <h5>{props.Price}</h5>
//         </div>
//     );
// function Product({ title, Price }) {
//     return (
//         <div className="Product">
//             <h3>product {title}</h3>
//             <h5>product Price :{Price}</h5>
//         </div>
//     );
// }
// 02.2passing an array to props 
// function Product({ title, Price , features ,features2}) {
//     // console.log(features);
//     // console.log(features2);
//     return (
//         <div className="Product">
//             <h3>product {title}</h3>
//             <h5>product Price :{Price}</h5>
//             <p>{features}</p>
//             <p>{features2.a}</p>.
//         </div>
//     );
// }

//03.rendring array 
// function Product({ title, Price , features}) {
//     const list =features.map((feature)=><li>{feature}</li>)
//     return (
//         <div className="Product">
//             <h3>product {title}</h3>
//             <h5>product Price :{Price}</h5>
//             <p>{list}</p>
//         </div>
//     );
// }

//04.conditionals M-1
// function Product({ title, Price }) {
//     if (Price > 20000) {
//         return (
//             <div className="Product">
//                 <h3>product {title}</h3>
//                 <h5>product Price :{Price}</h5>
//                 <p>Discount 5%</p>
//             </div>
//         );

//     } else {
//         return (
//             <div className="Product">
//                 <h3>product {title}</h3>
//                 <h5>product Price :{Price}</h5>
//             </div>
//         );
//     }
// }

//M-02: ternary operator or conditional operator 
// function Product({ title, Price}) {
//     // let isDiscount=Price>15000 ? "Discount : 5%":""
//     return (
//         <div className="Product">
//             <h3>product {title}</h3>
//             <h5>product Price :{Price}</h5>
//             {/* <p>{Price>15000 ? "Discount : 5%":""}</p> */}
//             <p>{Price>15000 ? "Discount : 5%":null}</p>
//             {/* {Price>15000 ? <p>"Discount : 5%"</p>:null} */}
//         </div>
//     );
// }

//05.Dynamic Programmig 

function Product({ title, Price}) {
    let isDiscount=Price>15000
    let styles = { backgroundColor:isDiscount?"yellow":null};
    return (
        <div className="Product" style={styles}>
            <h3>product {title}</h3>
            <h5>product Price :{Price}</h5>
            <p>{isDiscount ? "Discount : 5%":null}</p>
        </div>
    );
}

export default Product;

