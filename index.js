
const btn = document.getElementsByClassName('humbarger')[0];
const container = document.getElementsByClassName('container');
const about = document.getElementById('about');
const whyUs = document.getElementById('why-us');
const dropHeader = document.querySelectorAll('.drop-header');
const dropDetails = document.getElementsByClassName('drop-details');
const dropIcon = document.querySelectorAll('.drop');
const bar = document.querySelectorAll('.bar');
const services = document.getElementById('services');
const portfolio = document.getElementById('portfolio');
const team = document.getElementById('team');
const price = document.getElementById('price');
const question = document.getElementById('question');
const contact = document.getElementById('contact');
const card = document.querySelectorAll('#services .card');
const teamcard = document.querySelectorAll('#team .card');
const call = document.getElementById("call");
const navbar = document.querySelectorAll('#header .menubar>li>a');
const arrow = document.getElementById('arrow');



//show Navbar
const showNavbar=()=>{
    const target = document.querySelector('.menubar').classList.toggle('showNav');
}

btn.addEventListener('click',showNavbar);
// Page Scrolling Effect
arrow.addEventListener('click',()=>{
    window.scrollTo(0,0);
})

//client section animation
window.addEventListener('scroll',()=>{
    container[2].classList.add('client');
    console.log(window.scrollY);
    if(window.scrollY>=182){
        about.classList.add('slide');
    }
    if(window.scrollY>=300){
        arrow.style.visibility = "visible";
    }else{
        arrow.style.visibility = 'hidden';
    }
    if(window.scrollY>=600){
        whyUs.classList.add('slide');
    }
    if(window.scrollY>=1660){
        services.classList.add('slide');
    }
    if(window.scrollY>=2560){
        portfolio.classList.add('slide');
    }
    if(window.scrollY>=3660){
        team.classList.add('slide');
    }
    if(window.scrollY>=4321){
        price.classList.add('slide');
    }
    if(window.scrollY>=5182){
        question.classList.add('slide');
    }
    if(window.scrollY>=5940){
        contact.classList.add('slide');
    }
    bar.forEach((item,index)=>{
        if(window.scrollY>=1435){
            item.classList.add('scroll');
        }
    })
    if(window.scrollY>=1700){
        card.forEach((item)=>{
            item.classList.add('cardshow');
    })
    }
    if(window.scrollY>=3912){
        teamcard.forEach((item)=>{
            item.classList.add('cardshow');
    })
    }
    if(window.scrollY>=1128){
        document.querySelector("#skill .box1 img").classList.add('pictranslate');
        document.querySelector("#skill .box2>div").classList.add('pictranslate');
    }
    if(window.scrollY>=2311){
        call.classList.add('callanim');
    }
})

//drop slide(why us)

let i;
dropHeader.forEach((item,index)=>{
    item.addEventListener('click',function(){
        dropIcon[index].classList.toggle('fa-angle-down');
        dropIcon[index].classList.toggle('fa-angle-up');
        dropDetails[index].classList.toggle('drop');
        for(i=0;i<=2;i++){
            if(i !=index){
                dropDetails[i].classList.remove('drop');
                dropIcon[i].classList.add('fa-angle-down');
                dropIcon[i].classList.remove('fa-angle-up');
            }
        }
    })
})

//skill bar

//portfoloi 
const imageUrl = [
    "img/portfolio/portfolio-1.jpg",
    "img/portfolio/portfolio-2.jpg",
    "img/portfolio/portfolio-3.jpg",
    "img/portfolio/portfolio-4.jpg",
    "img/portfolio/portfolio-5.jpg",
    "img/portfolio/portfolio-6.jpg",
    "img/portfolio/portfolio-7.jpg",
    "img/portfolio/portfolio-8.jpg",
    "img/portfolio/portfolio-9.jpg"
]

let txt='';
for(i=1;i<=9;i++){
    txt+=`
                <div>
                    <div class="pic"  id='${i}'>
                        <h2>
                            Portfolio-${i}<br>
                            <i class="fas fa-plus"></i>
                        </h2>
                    </div>
                </div>`
}

const showPortfolio = (galery)=>{
    document.querySelector('.my-work').innerHTML=galery;
}
const showMyWork = ()=>{
    const pic = document.querySelectorAll('#portfolio .my-work .pic');
    let id;
    pic.forEach((item,index)=>{
        id = parseInt(item.getAttribute('id'))-1;
        item.style.backgroundImage = 'url('+imageUrl[id] +')';
        item.querySelector('i').addEventListener("click",()=>{
            document.querySelector('.popup').style.display='block';
            document.querySelector('.popup img').setAttribute('src',imageUrl[parseInt(item.getAttribute('id'))-1]);

        })
    })
    
}
const active = (index)=>{
    for(i=0;i<=3;i++){
        if(i==index){
            document.querySelectorAll('#portfolio .category a')[i].classList.add('active');
        }else{
            document.querySelectorAll('#portfolio .category a')[i].classList.remove('active');
        }
    }
}

showPortfolio(txt);
showMyWork();
active(0);
const portfolioBtn = document.querySelectorAll('#portfolio .category a');
portfolioBtn.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        active(index);
        if(index==1){
            txt='';
           for(i=1;i<=9;i=i+2){
               txt+=`
                    <div>
                        <div class="pic" id='${i}'>
                            <h2>
                                Portfolio-${i}<br>
                                <i class="fas fa-plus"></i>
                            </h2>
                        </div>
                    </div>
               `
           }
        }
        else if(index==2){
            txt='';
           for(i=2;i<=9;i=i+2){
               txt+=`
                    <div>
                        <div class="pic" id='${i}'>
                            <h2>
                                Portfolio-${i}<br>
                                <i class="fas fa-plus"></i>
                            </h2>
                        </div>
                    </div>
               `
           }
        }else if(index==3){
            txt='';
            for(i=3;i<=9;i=i+3){
                txt+=`
                     <div>
                         <div class="pic" id='${i}'>
                             <h2>
                                 Portfolio-${i}<br>
                                 <i class="fas fa-plus"></i>
                             </h2>
                         </div>
                     </div>
                `
            }
        }else{
            txt='';
            for(i=1;i<=9;i++){
                txt+=`
                            <div>
                                <div class="pic" id='${i}'>
                                    <h2>
                                        Portfolio-${i}<br>
                                        <i class="fas fa-plus"></i>
                                    </h2>
                                </div>
                            </div>`
            }
        }
        
        showPortfolio(txt);
        showMyWork();
    })

})


document.querySelector('.popup i').addEventListener("click",()=>{
    document.querySelector('.popup').style.display='none';
})
//end portfolio

