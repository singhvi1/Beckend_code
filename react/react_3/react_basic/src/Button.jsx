// function PrintHello(){
//     console.log("hello!");
// }
// function PrintBye(){
//     console.log("bye");
// }
// export default function Button(){
//     return(
//         <div>
//         <button onClick={PrintHello}>Click!</button>
//         <p onMouseOver={PrintBye}>this is a demo</p>
//         </div>
//     )
// }

function PrintHello(event){
    console.log("hello!");
    console.log(event);
}
function Printbye(){
    console.log("bye!");
}
function Printhover(){
    console.log("you are hovering !");
}
function handleContextMenu(event){
    event.preventDefault();
    console.log("right click is disabled !")
}
export default function Button(){
    // const handleContextMenu = (x) => {
    //     x.preventDefault();
    //     console.log("Right-click is disabled!");
    // };
    return (
        <div onContextMenu={handleContextMenu}>
            <button onClick={PrintHello} >Click_me!</button>
            <p 
            onDoubleClick={Printbye} 
            onMouseOver={Printhover}
            style={{
                userSelect: "none", // Prevent text selection
              }}
            >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, magnam.</p>
        </div>
    );
}