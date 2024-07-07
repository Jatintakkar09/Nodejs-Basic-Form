const table=document.querySelector("#table")
const url="http://localhost:5005/api/v1/all"

fetch(url)
.then((res)=> res.json())
.then((res)=>{
   const data=res.data
   data.forEach(element => {
       const tr=document.createElement("tr") 
       console.log(element);
       const ImageSrc=element.avatar || "avatar.jpeg" 

      
       
       tr.innerHTML=`<td><img src="${ImageSrc}" alt="Image 1"></td>
                    <td>${element.name}</td>
                    <td>${element.email}</td>
                    <td>${element.MobileNumber}</td>`

                    table.appendChild(tr)
   });
 
})
.catch((error)=>{
    console.log(error);
})
