let image=document.getElementById('person-img');
let name=document.getElementById('name');
let job=document.getElementById('job');
let info=document.getElementById('info');
let prevBtn=document.getElementById('prevBtn');
let nextBtn=document.getElementById('nextBtn');
let randomBtn=document.getElementById('randomBtn');

window.addEventListener('DOMContentLoaded',()=>{
  showPerson()
})



let personId=0

function showPerson() {
    let item=person[personId]
console.log(person); 
image.src=item.img  
name.textContent=item.name 
job.textContent=item.job
info.textContent=item.text
}

const person = [
    {
        id: 1,
        name:'Steve Jobs',
        job:'Taxi driver',
        img: "person-01.jpg",
        text: "Lorem Steve Jobs dolor sit amet, consectetur adipisicing elit. Itaque suscipit optio consectetur obcaecati deleniti illum dolor repellendus, magnam, quam vero ipsam provident. Magni hic ab fuga aliquam quas nisi repellat?",
    },
    {
        id: 2,
        name:'Susan Smith',
        job:'Waitress',
        img: "person-2.jpg",
        text: "Lorem Susan Smith dolor sit amet, consectetur adipisicing elit. Itaque suscipit optio consectetur obcaecati deleniti illum dolor repellendus, magnam, quam vero ipsam provident. Magni hic ab fuga aliquam quas ",
    },
    {
        id: 3,
        name:'Tobey Maguire',
        job:'Teacher',
        img: "person-3.jpg",
        text: "Lorem Tobey Maguire dolor sit amet,ing elit. Itaque suscipit optio consectetur obcaecati deleniti illum dolor repellendus, magnam, quam vero ipsam provident. Magni hic ab fuga aliquam quas nisi repellat?",
    },
    {
        id: 4,
        name:'James Franco',
        job:'Police',
        img: "person-4.jpg",
        text: "Lorem James Franco   dolor sit amet, consectetur adipisicing elit. Itaque suscipit optio consectetur obcaecati deleniti illum dolor repellendus, magnam, quam vero ipsam provident. Magni hic ab fuganisi repellat?",
    },
    {
        id: 5,
        name:'Gerry Becker',
        job:'Fireman',
        img: "person-5.jpg",
        text: "Lorem Gerry Becker dolor  consectetur adipisicing elit. Itaque suscipit optio consectetur obcaecati deleniti illum dolor repellendus, magnam, quam vero ipsam provident. Magni hic ab fuga aliquam quas nisi repellat?",
    },
    {
        id: 6,
        name:'Elizabeth Banks',
        job:'Nurse',
        img: "person-6.jpg",
        text: "Lorem Elizabeth Banks dolor sit amet, consectetur adipisicing elit. Itaque suscipit optio consectetur obcaecati deleniti illum dolor repellendus, magnam, quam vero ipsam provident. Magni hic ab fuga aliquam quas ",
    },
]

//next button
nextBtn.addEventListener('click',()=>{
    personId++
    if (personId>person.length-1){
  personId=0
    }
    console.log(personId);
    showPerson()
})
prevBtn.addEventListener('click',()=>{
    personId--
    if (personId<0){
        personId=person.length-1
          }
    console.log(personId);
    showPerson()
})
randomBtn.addEventListener('click',()=>{
personId=Math.floor(Math.random()*person.length);
console.log(personId);
showPerson()
})