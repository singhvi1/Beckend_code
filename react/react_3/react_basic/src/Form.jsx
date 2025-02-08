// function handelFormSubmit(event){
//     event.preventDefault();
//     console.log("form was submitted")
// }
// export default function Form(){
//     return (
        
//         <form action="">
//             <input type="text"  placeholder="Enter your text"/>
//             <button onClick={handelFormSubmit}>Submit</button>
//         </form>
//     )
// }

function handelFormSubmit(x){
    console.log("form submitted ");
    x.preventDefault();
    console.log(x)// same as event
}
export default function Form(){
    return (
        <form action="/submit-form" onSubmit={handelFormSubmit}>
            <input type="text" placeholder="Enter your text"/>
            <button >Submit</button>
        </form>
    )
}