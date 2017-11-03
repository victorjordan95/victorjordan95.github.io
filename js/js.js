// $("#owl-clients").owlCarousel({
//     autoplay: true,
//     autoplayHoverPause: true,
//     loop: true,
//     margin: 20,
//     responsiveClass: true,
//     nav: true,
//     loop: true,
//     navText: ["<svg class='icone icon-arrow-left'><use xlink:href='#icon-arrow-left'></use></svg>", "<svg class='icone icon-arrow-right'><use xlink:href='#icon-arrow-right'></use></svg>"],
//     responsive: {
//         0: {
//             items: 1
//         },
//         568: {
//             items: 2
//         },
//         600: {
//             items: 3
//         },
//         1000: {
//             items: 4
//         }
//     }
// });


// function openMenu(){

//     var menuClass = document.getElementById("js-open-menu").classList;
//     var menu = document.getElementById("js-open-menu");

//     if(!menuClass.contains("closed") && !menuClass.contains("active")){
//         menuClass.add('active');
//     } else {
//         if(menuClass.contains("active")){
//             menuClass.remove("active");
//             menuClass.add("closed")
//         } else {
//             menuClass.remove('closed');
//             menuClass.add('active');
//         }
//     }
// }

function devOpen(){
    var headerCard = document.getElementById("js-devBody").classList;
    headerCard.toggle('collapsed');
    
}

function designOpen(){
    var headerCard = document.getElementById('js-designBody').classList;
    headerCard.toggle('collapsed');
}