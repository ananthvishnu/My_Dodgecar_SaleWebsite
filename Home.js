//one click function in navbar button
let btnPrimary = document.querySelector('#primary');

btnPrimary.addEventListener('click', () => btnPrimary.style.backgroundColor='red');

//slide bar**************************************************************************************************
var i = 0; //start point
var images = [];
var time = 2000;

//image list
images[0] = 'f1.webp';
images[1] = 'f3.png';
images[2] = 'f9.webp';
images[3] = 'f4.png';


//change image
function changeImg(){
    document.slide.src = images[i];
    if(i < images.length - 1){
     i++;
    } else{
        i =0 ;
    }
    setTimeout('changeImg()', time);
}
window.onload = changeImg;
//**********************************************************************************************************

//javascript for image gallery

//get Elements from DOM
const btns = document.querySelectorAll('.buttons button');
const imgs = document.querySelectorAll('.images img');

//Add a click event to all buttons
for(let i = 1; i < btns.length; i++) {
    btns[i].addEventListener('click',filterImg);
}

//set active button on click
function setActiveBtn(e) {
    //Remove active class from all buttons
    btns.forEach(btn => {
        btn.classList.remove('btn-clicked');
    });

    //Add active class to clicked 
    e.target.classList.add('btn-clicked');
}

//Filter images
function filterImg(e) {
    //Run the active button function
    setActiveBtn(e);

    //Loop through all images
    imgs.forEach(img => {
        //Expand all images
        img.classList.remove('img-shrink');
        img.classList.add('img-expand');

        //Get data from data attributes
        //Get images type data
        const imgType = parseInt(img.dataset.img);
        //Get button type data
        const btnType = parseInt(e.target.dataset.btn);

        /*If the image type and the type of the 
        clicked button are NOT the same*/
        if(imgType !== btnType){
            //Hide the image
            img.classList.remove('img-expand');
            img.classList.add('img-shrink');
        }
    });
}

//Set click event for the 'ALL' button
btns[0].addEventListener('click', (e) => {
    //Run the active button function
    setActiveBtn(e);
    //Loop through all images
    imgs.forEach(img => {
        //Expand all images
        img.classList.remove('img-shrink');
        img.classList.add('img-expanded');
    });
});
//************************************************************************************************************************** */
//section3 mouse over zoom in  zoom out
function zoomin(){
    document.querySelector('#engine').style.transform ="scale(1.1)"
}
function zoomout(){
    document.querySelector('#engine').style.transform ="scale(1)"
 
}