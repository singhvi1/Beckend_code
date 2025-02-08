import "./Product.css"
import Price from "./Price";

function Product({ title,features,idx}){
    let oldPrice=["12,495","11990","1,599","599"];
    let newPrice=["8,999","9,199","899","278"];
    let description=[["8000 DPI","5 Programable buttons"], ["designed for iPad Pro ","Intutive touch Surface"],["designed for iPad Pro ","Intutive touch Surface"] ,["wireless","Optical Orientation"]];
    let styles={backgroundColor:"white"}
    return (
        <div className="Product" style={styles}>
            <h4>{title}</h4>
            <p>{features=description[idx][0]}</p>
            <p>{features=description[idx][1]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
        </div>
    )
}
export default Product;
