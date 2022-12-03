const container= document.querySelector(".container");
const count= document.querySelector("#count");
const amount= document.querySelector("#amount");
const selectbox= document.querySelector("#movie");
const seats=document.querySelectorAll(".seat:not(.reserved)")


getFromLocalStorage();
calculateTotal();

container.addEventListener('click', function(e){

    if(e.target.classList.contains('seat') && !e.target.classList.contains('reserved')){

        e.target.classList.toggle('selected')

        calculateTotal();

        
    }
});


selectbox.addEventListener('change',function(e){
    
    calculateTotal();

})

function calculateTotal(){
    const selectedSeats= container.querySelectorAll('.seat.selected');
    let selectedSeatCount= selectedSeats.length;
    count.innerText= selectedSeatCount;
    amount.innerText= selectedSeatCount*selectbox.value;
    
    const selectedSeatsArr=[...selectedSeats];
    const seatsArr=[...seats];

    // selectedSeats.forEach(function(seat){

    //     selectedSeatsArr.push(seat)
    // })

    // seats.forEach(function(seat){

    //     seatsArr.push(seat)
    // })

    let selectedSeatIndexs= selectedSeatsArr.map(function(seat){
        return seatsArr.indexOf(seat)
    })
    
    savelocalStorage(selectedSeatIndexs)
    
}   

function getFromLocalStorage(){
   const selectedSeatIndex= JSON.parse(localStorage.getItem('selectedSeats'))
   const selectedMovieIndex= JSON.parse(localStorage.getItem('movieindex'))
   
   if(selectedSeatIndex!==null && selectedSeatIndex.length>0){

     seats.forEach(function(seat,index){

        if(selectedSeatIndex.indexOf(index)>-1) {
            seat.classList.add('selected')

        }
     })

   }

   if(selectedMovieIndex!==null){

    selectbox.selectedIndex=selectedMovieIndex;
   }

   
}


function savelocalStorage(indexs){
    localStorage.setItem('selectedSeats',JSON.stringify(indexs))
    localStorage.setItem('movieindex', JSON.stringify(selectbox.selectedIndex))

   
}
    





// bu çalışmada toggle, change eventi, foreach ve selectedIndex öğrenildi.