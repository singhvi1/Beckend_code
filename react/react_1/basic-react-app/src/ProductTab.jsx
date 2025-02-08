import Product from "./Product.jsx";
function ProductTab(){
    let opt=["hi-tech ","durable ","fast "];
    let opt2={a: "hi-tech", b: "durable",c: "fast"};
    // let opt3=[<li>"hi-tech"</li>,<li>"durable"</li>,<li>"fast"</li>];
    return (
    <>
    {/* <Product 
    title="Phone" 
    Price={30000} 
    features={["hi-tech ","durable ","fast "]} 
    features2={{a:"hi-tech"}}/>
    <Product 
    title="Phone" 
    Price=" 30k" 
    features={opt} 
    features2={opt2.c}/>
    <Product 
    title="Phone" 
    Price=" 30k" 
    features={opt} 
    features2={opt2.a}/> */}


    {/* 03_rendring array  */}
    {/* <Product 
    title="Phone" 
    Price={30000} 
    // features={opt3}
    features={opt}/>    */}


    {/* 04.conditinals */}
    <Product 
    title="Phone" 
    Price={30000} 
    features={["hi-tech ","durable ","fast "]} 
    features2={{a:"hi-tech"}}/>
    <Product 
    title="Phone" 
    Price={15000} 
    features={opt} 
    features2={opt2.c}/>
    <Product 
    title="pen" 
    Price={100} 
    features={opt} 
    features2={opt2.a}/>






    {
    /* use "" for strings  or {} for multiple (functions variables expressions etc) */}   
    
    </>
    )
}
export default ProductTab; 