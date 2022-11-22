// DATA
var color = {
    colorSelect : "azulCeleste"
    /* Colores disponibles

    verde 
    azulCeleste 
    amarillo
    rojo 


    */
}

var colors = {
   primary : "#ffc800",
   secondary : "#e0b000",
   success : "#198754",
   info : "#0dcaf0",
   warning : "#ffc800",
   danger : "#dc3545",
   light : "#f8f9fa",
   dark : "#21252" 
}

var colores={ "--bs-primary":`${colors.primary}`,
"--bs-primary-shade":"",
"--bs-primary-tint":"",
"--bs-secondary":`${colors.secondary}`,
"--bs-success":`${colors.success}`,
"--bs-info": `${colors.info}`,
"--bs-warning":`${colors.warning}`,
"--bs-danger":`${colors.danger}`,
"--bs-light":`${colors.light}`,
"--bs-dark":`${colors.dark}`
}
$(':root').css(colores);

var navigation = {  
    "tipoLogoSelect" : 'img',
    "titleLogo" : "Hola",
    "logo" : "assets/img/logo-principal.png",
    "menu" : [
        {
            "nombre" : "inicio"
        },
        {
            "nombre" : "Ofertas"
        },
        {
            "nombre" : "Mis compras"
        },
        {
            "nombre" : "Login"
        }
    ]
};

var header = {
    "subtitle" :"TEXTILES"   ,
    "title" : "El machetazo"   ,
    "textButtom": null,
    "background" : [ 
    {
        "slider" : "assets/img/fondo1.jpg",        
    },
    {
        "slider" : "assets/img/fondo2.jpg",  
    },
    {
        "slider" : "assets/img/fondo3.jpg",       
    }
]

};

var  services = {
    "title" : "Nuestros Servicios",
    "subtitle": "Ofrecemos varios Servicios",
    "content": [
        {
            "icon" : "fa-solid fa-scissors",
            "title" : "Costura",
            "text" : "Arreglamos Caulquier prenda que tengas cortada, dañada, rota y te la dejamos como nueva.",
            "colorIcon" : "#fff",
            "colorCircle" : null
        },
        {
            "icon" : "fas fa-dollar-sign",
            "title" : "Venta de Telas",
            "text" : "Vendemos toda clase de telas por metros, por mayor y al detal.",
            "colorIcon": "#ffc800",
            "colorCircle" : "#830c0c"
        },
        {
            "icon" : "fas fa-smile-wink",
            "title" : "Asesoría",
            "text" : "Somos profesionales diseñadores y asesores de moda para toda clase de encuentros y estilos.",
            "colorIcon": "#fff",
            "colorCircle" : "#830c0c"
        }
    ],
    
    
}; 

var portfolio = {
    "titulosContenido" :  [
        {
        "titulo" : "Productos",
        "subtitle" : "Vendemos variedad de telas, estilos y colores"
        }
    ],
    "content" : [
        {
            "idArticle" : "1", 
            "image" : "./assets/img/productos/algodon.jpg",
            "title" : "Algodon",
            "shDescription" : "Lorem ipsum dolor sit amet consectetur.",
            "lgDescription" : "Tela terciopelo, ideal para pantalones, americanas, abrigos, vetidos y faldas elegantes. COP 60,000 x metro",
            
            "client" : {
                "category" : "Estudiante",
                "name" : "nicolas"              
            }
        
        },
        {
            "idArticle" : "2", 
            "image" : "./assets/img/productos/lino.jpg",
            "title" : "Lino",
            "shDescription" : "Lorem ipsum dolor sit amet consectetur.",
            "lgDescription" : "Lino 100% algodón 1.50 de ancho ideal para pantalon, conjuntos enterizos, etc. COP 25,000 x metro",
            
            "client" : {
                "category" : "Docente",
                "name" : "nicolas"              
            }
        },
        {
            "idArticle" : "3", 
            "image" : "./assets/img/productos/yute.jpg",
            "title" : "Yute",
            "shDescription" : "COP 27,000 x metro",
            "lgDescription" : "Tela yute para tapiceria 1.50 de ancho ideal para tapizado de sillas de oficina. ",
            
            "client" : {
                "category" : "sistemas",
                "name" : "nicolas"              
            }
        },
        {
            "idArticle" : "4", 
            "image" : "./assets/img/productos/seda.jpg",
            "title" : "Seda",
            "shDescription" : "COP 30,000 x metro",
            "lgDescription" : "Seda Marbella 1.50 de ancho ideal para vestidos, blusas, pantalon ancho,etc.",
            
            "client" : {
                "category" : "rector",
                "name" : "nicolas"              
            }
        },
        {
            "idArticle" : "5", 
            "image" : "./assets/img/productos/batista.jpg",
            "title" : "Batista",
            "shDescription" : "COP 25,000 x metro",
            "lgDescription" : "Tela Batista, original 1.50 de ancho Ideal para hacer ropa de bebe y ropa para niño.",
            
            "client" : {
                "category" : "coordinador",
                "name" : "nicolas"              
            }
        },
        {
            "idArticle" : "6", 
            "image" : "./assets/img/productos/pana.jpg",
            "title" : "Pana",
            "shDescription" : "COP 40,000 x metro",
            "lgDescription" : "Tela Pana, sirve para prendas invernales de todo tipo, incluyendo pantalones,camisas y chaquetas.",
            
            "client" : {
                "category" : "deportes",
                "name" : "nicolas"              
            }
        }
    ]
};

var aboutUs = {
    "title" : "about us",
    "subtitle" : "hola mucho gusto",
    "content" : [{
        "date" : "11-11-11",
        "title" : "hola",
        "description" : "jbabbbsbvbsjLorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium ut dolores, distinctio vel minus totam." ,
        "image" : "assets/img/about/1.jpg"

    },

    {
        "date" : "Febrero-12",
        "title" : "Fiesta",
        "description" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis illum eaque nihil labore tenetur deleniti error debitis rem porro ut." ,
        "image" : "assets/img/about/2.jpg"

    },

    {
        "date" : "octubre 30",
        "title" : "reunion tarde",
        "description" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium ut dolores, distinctio vel minus totam." ,
        "image" : "assets/img/about/3.jpg"

    },

    {
        "date" : "enero 15",
        "title" : " cumpleaños",
        "description" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium ut dolores, distinctio vel minus totam." ,
        "image" : "assets/img/about/4.jpg"

    }
    
]
};

var team =  {
    "title" : "holamundo",
    "subtitle" : "XD",
    "contentPeople" : [{
        "image": null,
        "name" : "aristizabal",
        "position" : "Docente",
        "phone" : "3138242506"
    },
    {
        "image": null,
        "name" : "aristizabal",
        "position" : "Docente",
        "phone" : "3138242506"
    },
    {
        "image": null,
        "name" : "aristizabal",
        "position" : "Docente",
        "phone" : "3138242506"
    }
    ],
    "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde."
};

var form = {
    image : null
};

var footer = {
    "marca" : "sistematizar EF",
    "socialIcons" : {
        "facebook" : "" ,
        "instagram" :  "",
        "whatsapp" : ""}
};


// *LEYENDO OBJETOS*
$(document).ready(function () {
    head(navigation);
    banner(header);
    section1(services);
    section2(portfolio);
    section3(aboutUs);
    section4(team);
    section6(footer);
   coloresPagina(color);

 
    
});

// NAVBAR
function head(data){
    
    
    var imgLogo = data.logo != null ? data.logo : "https://via.placeholder.com/150x50"
    var textLogo = data.titleLogo != null ? data.titleLogo : "SIN TITULO"
    var logo = '';
    var tipoLogo = data.tipoLogoSelect;
    
   switch (tipoLogo) {
        case 'img':
            logo = `<img  class="navbar-brand" src="${imgLogo}">`;    
        break;
        case 'text':
            logo = `<a class="navbar-brand" href="#page-top">${textLogo}</a>`;
        break;    
        default:
            logo = `<a class="navbar-brand" href="#page-top">SIN LOGO</a>`;
        break;
    }
   /* if (data.logo != null) {
        var logo = `<a class="navbar-brand  " href="#page-top"><img src="${data.logo}" alt="..." /></a>`;
    }
    */  
    var menuitem = '';
    $.each(data.menu, function (indexInArray, menu) {  
        if (menu.nombre != null){ 
            menuitem += `<li class="nav-item"><a class="nav-link " href="#${menu.nombre}">${menu.nombre}</a></li>`;
        }else{
            menuitem += `<li class="nav-item"><a class="nav-link " href="#${menu.nombre}">vacío</a></li>`;    
        }
    });

    $('#logo').html(logo);
    $('#menu').html(menuitem);
       
};

// BANNER CONTENT
function banner(data) { 

    var carousel = '';
    $.each(data.background, function (indexInArray, value) { 
        let headerElements = {
            title : data.title != null ? data.title : "sin titulo ",
            subtitle : data.subtitle != null ? data.subtitle : " sin subtitlo",
            slider : value.slider != null ? value.slider : "https://via.placeholder.com/1280x720"
        }
        
        if(indexInArray == 0){

            carousel += `<div class="carousel-item active">
            <div class="container">
                <div class="carousel-caption d-none d-md-block">  
                <div class="masthead-subheading" style="color:black">${headerElements.subtitle}</div>
                <div class="masthead-heading text-uppercase ">${headerElements.title}</div>
                </div>
            </div>
            <img src="${headerElements.slider}" class="d-block w-100" alt="...">
        </div>`
        } else {
            carousel += `<div class="carousel-item">
            <div class="container">
                <div class="carousel-caption d-none d-md-block">  
                <div class="masthead-subheading" style="color:black">${headerElements.subtitle}</div>
                <div class="masthead-heading text-uppercase ">${headerElements.title}</div>
                
                </div>
            </div>
            <img src="${headerElements.slider}" class="d-block w-100" alt="...">
        </div>`  
        }
    });

   $('#nicolas').html(carousel);
};

//SECTION 1 service 
function section1(data) { 
    var title =`<h2 class="section-heading text-uppercase ">sin titulo</h2>`;
    if(data.title != null){
        var title = `<h2 class="section-heading text-uppercase ">${data.title}</h2>`;
    }

    var subtitle =`<h3 class="section-subheading  ">sin Subtitulo</h3>`;
    if(data.subtitle != null){
        var subtitle = `<h3 class="section-subheading text-muted">${data.subtitle}</h3>`;
    }

    var content = '';
    $.each(data.content, function (indexInArray, value) { 

        let  service = {
            icon : value.icon != null ?  value.icon : "bi bi-question-square" ,
            title : value.title != null ? value.title : "sin titulo",
            text : value.text != null ? value.text : " sin descripcion",
            colorIcon : value.colorIcon != null ? value.colorIcon : "#fff",
            colorCircle  : value.colorCircle !=null ? value.colorCircle : "#000"
        }

        content += `<div class="col-md-4">
                        <span class="fa-stack fa-4x ">
                            <i id="circle" class="fas fa-circle fa-stack-2x text-dark"></i>
                            <i id="icon" class="${service.icon} fa-stack-1x "></i>
                        </span>
                        <h4 class="my-3">${service.title}</h4>
                        <p >${service.text}</p>
                    </div>`;
      
    
    });
    $('#titleSection').html(title);
    $('#subtitleSection').html(subtitle);
    $('#contentSection').html(content);

 };

 // SECTION 2 portfolio
 function section2(data){
    let titulosPortfolio = '';
    $.each(data.titulosContenido, function(indexInArray, value){
         if (value.titulo != null && value.subtitle != null) {
            titulosPortfolio = `<h2 class="section-heading text-uppercase ">${value.titulo}</h2>
                        <h3 class="section-subheading text-muted">${value.subtitle}</h3>`;
        }else{
            titulosPortfolio = `<h2 class="section-heading text-uppercase ">sin titulo</h2>
                        <h3 class="section-subheading text-muted">sin subtitulo</h3>`;   
        } 
    });

    let contentS2 = '';
    $.each(data.content, function(indexInArray, value){
        
        let product = {
            image : value.image != null ? value.image : "https://via.placeholder.com/600x450",
            title : value.title != null ? value.title : "sin titulo",
            shDescription : value.shDescription != null ? value.shDescription : "sin descripcion"
        }

        contentS2 += `<div class="portfolio-item" data-id="${indexInArray}">
                            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal">
                                <div class="portfolio-hover portfolio-hover-primary">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="${product.image}" alt="..." />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">${product.title}</div>
                                <div class="portfolio-caption-subheading text-muted">${product.shDescription}</div>
                            </div>
                        </div>`;       
    });
    $('#titulo-section2').html(titulosPortfolio);
    $('#item-section2').html(contentS2);
    
    
 };


 // MODAL portfolio
 $('#item-section2').on("click",".portfolio-item" , function (e) {
    var indice = $(this).data("id");
    var article =  portfolio.content[indice];
    console.log(article)

    var serviceImage =  `<img  class="img-fluid d-block mx-auto" src="${article.image}" alt="..." />`

    $('#service-title').html(article.title);
    $('#service-image').html(serviceImage);
    $('#service-lgDescription').html(article.lgDescription);
    $('#service-client-name').html(article.client.name);
    $('#service-category').html(article.client.category);  
 });

// SECTION 3 ABOUT US 
function section3(data){
    
    var about = '';
    $.each(data.content, function (indexInArray, value) { 
        let info = {
            date : value.date != null ? value.date :  "no hay fecha ",
            title : value.title != null ? value.title : "sin titulo" ,
            description : value.description != null ? value.description : "sin desccripcion",
            image : value.image != null ? value.image : "https://via.placeholder.com/156x156"
         }

         if (indexInArray % 2) {
            
             about += `  <li class="timeline-inverted">
                            <div class="timeline-image "><img class="rounded-circle img-fluid" src="${info.image}" alt="..." /></div>
                               <div class="timeline-panel">
                                   <div class="timeline-heading">
                                       <h4>${info.date}</h4>
                                       <h4 class="subheading">${info.title}</h4>
                                   </div>
                                   <div class="timeline-body"><p class="">${info.description}</p></div>
                               </div>
                           </li>`;
         } else { 
            about += `  <li >
                            <div class="timeline-image "><img class="rounded-circle img-fluid" src="${info.image}" alt="..." /></div>
                               <div class="timeline-panel">
                                   <div class="timeline-heading">
                                       <h4>${info.date}</h4>
                                       <h4 class="subheading">${info.title}</h4>
                                   </div>
                                   <div class="timeline-body"><p class="">${info.description}</p></div>
                               </div>
                           </li>`;
         }


    });

    var titulosAbout = ` <h2 id="about-title" class="section-heading text-uppercase  ">${aboutUs.title}</h2>
                    <h3 id="about-subtitle" class="section-subheading ">${aboutUs.subtitle}</h3>`;


    $('#titulos-aboutUs').html(titulosAbout);
    $('#aboutUs-item').html(about);
    
};

// SECTION 4 TEAM

function section4(data){

        var teamItem='';
    $.each(data.contentPeople, function (indexInArray, value) { 

        let people ={
            image : value.image != null ? value.image : "https://via.placeholder.com/225x225",
            name : value.name != null ? value.name  : "Sin nombre", 
            position : value.position != null ? value.position : "sin cargo",
            
        } 

        teamItem +=`<div class="col-lg-4">
                            <div class="team-member">
                                <img class="mx-auto rounded-circle " id="circle-img" src="${people.image}" alt="..." />
                                <h4>${people.name}</h4>
                                <p class="text-muted">${people.position}</p>
                                <a class="btn btn-dark btn-social mx-2" href="" ><i class="fa-regular fa-envelope"></i></a>
                                <a class="btn btn-dark btn-social mx-2" href="https://api.whatsapp.com/send?phone=+57${value.phone}&text=hola%20profesor" ><i class="fa-brands fa-whatsapp"></i></a>
                            </div>
                        </div>`
            
    });

    let titulo = ` <h2 class="section-heading text-uppercase ">${team.title}</h2>
                    <h3 class="section-subheading " ">${team.subtitle}</h3>`

$('#titulos-team').html(titulo);
$('#team-item').html(teamItem);
$('#team-description').html(team.description);
};

// SECTION 5 FORM
var bgImageForm = {"background-image" :  `url("${form.image}")` };
if(form.image !== null ){
    $('#contact').css(bgImageForm);
    }else{
    $('#contact').css("background-image", `url("https://via.placeholder.com/1280x720")`);
}

$('#submitButton').click(function (e) { 
    e.preventDefault();
    var data = new FormData();
    data.append("name" , '#name');
    data.append("email" , '#email');
    data.append("phone" , '#phone');
    data.append("message" , '#message');
});

// FOOTER 

function section6(data) {  

 $.each(data.socialIcons, function (indexInArray, value) { 

    let icon = {
        facebook : value.facebook != null ? value.facebook : "#",
        instagram : value.instagram != null ? value.instagram : "#"
    }
    socialIcons = `<a class="btn btn-dark btn-social mx-2" href="${icon.facebook}" aria-label="Twitter"><i class="fab fa-facebook-f"></i></a>
                    <a class="btn btn-dark btn-social mx-2" href="${icon.instagram}" aria-label="Facebook"><i class="fa-brands fa-instagram"></i></a>`
                    
     $('#social-icons').html(socialIcons);
 });
}
$('#marca').html(footer.marca);

function coloresPagina(data){
    var portfolioHover = ''
    let colorSelect = data.colorSelect
    let color = '';
    let navbar ='';
    let btn = '';

    switch (colorSelect) {
        case 'amarillo':
            color = 'bg-primary'
            textcolor = 'text-light'
            navbar =  'navbar-light'
            portfolioHover = 'portfolio-hover-primary'
            btn = 'btn-primary'

            break;

        case 'verde':
            color = 'bg-success'
            textcolor = 'text-light'
            navbar =  'navbar-dark'
            portfolioHover = 'portfolio-hover-success'
            btn = 'btn-success'
            
            break;

        case 'azulCeleste':
            color = 'bg-info' 
            textcolor = 'text-light'   
            navbar =  'navbar-dark'
            portfolioHover = 'portfolio-hover-info'
            btn = 'btn-info'
        break;
        
        case 'rojo':
            color = 'bg-danger'
            textcolor = 'text-light'
            navbar =  'navbar-dark'
            portfolioHover = 'portfolio-hover-danger'
            btn = 'btn-danger'
            
            break;         
        default:
            color = 'bg-light'
            textcolor = 'text-light'
            navbar =  'navbar-dark'
            portfolioHover = 'portfolio-hover-primary'
            btn = 'btn-primary'

            break;
    }



    document.querySelector('nav').classList.add(color,navbar);
    document.querySelector('nav').classList.replace('navbar-dark', navbar);
    document.getElementById('services').classList.add(color,textcolor)
    document.querySelectorAll('#icon').forEach(e=> e.classList.add(textcolor));
    document.getElementById('about').classList.add(color,textcolor)
    document.getElementById('contact').classList.add(color)
    document.querySelectorAll('.btn').forEach(e =>e.classList.replace('btn-primary', btn)); 
    console.log(document.querySelectorAll('.btn').forEach);



    
    /*
    document.querySelector('aside').classList.replace('bg-gradient-primary-to-secondary',color)
    document.getElementById('section2').classList.replace('bg-light',color);
    document.getElementById('section2').classList.add('text-light');

    document.getElementById('download').classList.replace('bg-gradient-primary-to-secondary',color)
    document.getElementById('submitButton').classList.add(color);
    */

}

