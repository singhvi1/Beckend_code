//01.random facts or jokes ;

// let url = "https://icanhazdadjoke.com"

// let btn=document.querySelector('button');
// let para=document.createElement('p');
// btn.addEventListener('click',async()=>{
//     let facts= await getfacts();
//     console.log(facts);
//     para.innerText=facts;
//     document.body.appendChild(para);
// })

// async function getfacts() {
//     try{
//         let res=await axios.get(url, {
//             headers:{Accept:'application/json'}
//         });
//         // console.log(res.data.joke);
//         return res.data.joke;
//     } catch(e){
//         console.log("error - ",e);
//         return "no facts found";
//     }
// }

//02.dog pictures ;
// let url="https://dog.ceo/api/breeds/image/random";

// let btn=document.querySelector('button');
// btn.addEventListener('click',async()=>{
//     let link=await getImg();
//     // console.log(link);
//     let img=document.querySelector('#result');
//     img.setAttribute('src',link);
// })

// async function getImg(){
//     try{
//         let img=await axios.get(url);
//         console.log(img.data.message);
//         return img.data.message;

//     }catch(e){
//         console.log("error",e);
//         return "not found";
//     }
// }

//03.sending geaders with api  requests;
let url="https://icanhazdadjoke.com";

async function getJokes() {
    // let res=await axios.get(url);//here it is in html so we need to pass header 
    try{
        const config={headers:{Accept:"application/json"}}
        let res=await axios.get(url,config);
        // let res=await axios.get(url,{headers:{Accept:'application/json'}});
        console.log(res.data.joke)
    }catch(e){
        console.log("error",e);
    }
}

//04.activity using querystring;
let url1 = "http://universities.hipolabs.com/search?name=";


async function getColleges(country){
    try{
        let res= await axios.get(url1 + country);
        return res.data;
    }catch(e){
        console.log("error",e);
        return [];
    }
}
let btn =document.querySelector('button');
btn.addEventListener('click',async()=>{
    let country=document.querySelector('input').value;
    console.log("colleges for your ",country);
    let colArr=await getColleges(country);
    // console.log(colArr);
    show(colArr);
})

function show(colArr){
    let para=document.querySelector('#result');
    para.innerText="";
    for(col of colArr){
        let li=document.createElement('li');
        console.log(col.name);
        li.innerText=col.name;
        para.appendChild(li);
    }
}

//states wise api 

