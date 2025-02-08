export default function Price({oldPrice,newPrice}){
    let oldStyle={
        textDecoration:"line-through"
    }
    let newStyle={
        fontWeight:"bold"
    }
    //for background color of div
    let divStyle={
        backgroundColor:"#e0c367",
        height:"32px",
        borderBottomLeftRadius:"20px",
        borderBottomRightRadius:"20px"
    }
    return (
        <div style={divStyle}>
            <span style={oldStyle}>{oldPrice}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span style={newStyle}>{newPrice}</span>
        </div>
    )
}