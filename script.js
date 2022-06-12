
var timeDiff = 0.075;
var cards = document.querySelectorAll('.card');
var scH =  window.innerHeight;
console.log(scH);

cards.forEach((card, i)=> {
        
    var items = document.querySelectorAll(`.card:nth-child(${i+1}) > .card-item`);
    items.forEach((item, j) =>{
        console.log('worked')
        item.style.transitionDelay = `${j*timeDiff}s`;
    })

    var cInfo = card.getBoundingClientRect();
        var cardY = cInfo.y;
        var cardHight = cInfo.height;
        if(cardY + cardHight/2 < scH && cardY + cardHight > 0){
            card.classList.add('arrived');
        } else {
            card.classList.remove('arrived');
        }
    
})
window.onscroll = ()=>{
    cards.forEach(card => {
        var cInfo = card.getBoundingClientRect();
        var cardY = cInfo.y;
        var cardHight = cInfo.height;
        if(cardY + cardHight/3 < scH && cardY + cardHight > 0){
            card.classList.add('arrived');
        } else {
            card.classList.remove('arrived');
        }
    })
}


    


    


