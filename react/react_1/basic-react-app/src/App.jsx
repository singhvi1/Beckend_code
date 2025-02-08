// import "./App.css"
// import Title from "./Title";
// import Product from "./Product.jsx";
import ProductTab from "./ProductTab.jsx";
import Activity from "./Activity.jsx";

// function App() {
//   return <button>Hello world</button>
  
// }

// Our first component
//creating my first program 

// function Description(){
//   return <h3>i am a description</h3>;
// }

  //rendring tittle component 
function Render(){
  return (
    // <div className="mainBox">
    //   <h1>This is my multiple componenet</h1>
    //   <Title></Title>
    //   <Description></Description>
    //   <Title></Title>
    //   <Description></Description>
    // </div>
    // <>
    // <Title></Title>
    // <Description></Description>
    // <Title></Title>
    // <Description></Description>
    // </>

    // 11structuring components
    // <>
    // <Product/>
    // <Product/>
    // <Product/>
    // </>
    // <ProductTab/>
    <>
    <Activity userName={"vikash"} textColor={"yellow"}/>
    <ProductTab/>
    </>
  );
};
export default Render;