let viewBtn = document.getElementById('viewBtn');
let memoField = document.querySelector('.memo');
let closeBtn = document.getElementById('closeBtn');
let closeMemo = document.getElementById('closeMemo');
viewBtn.addEventListener('click', ()=>{
    memoField.innerHTML += `<iframe src="https://drive.google.com/file/d/1_ltvDKrhw300U8c5TQs68S2qlrJwliCT/preview" width="100%" height="480" allow="autoplay"></iframe>`
    
    
   
});

closeBtn.addEventListener('click', ()=>{
    memoField.innerHTML = '';
   
    
    
    
});

let viewITR = document.getElementById('viewITR');
let itrField = document.querySelector('.itr');
let closeITR = document.getElementById('closeITR');
viewITR.addEventListener('click', ()=>{
    itrField.innerHTML += `<iframe src="https://drive.google.com/file/d/1EwNtu79eU27B00oIW9nVOgNcMXjKD0Ng/preview" width="100%" height="480" allow="autoplay"></iframe>`
    
   
});

closeITR.addEventListener('click', ()=>{
    itrField.innerHTML = '';
    
    
});

closeMemo.addEventListener('click', function(){
    memoField.innerHTML = '';
    document.querySelector('.memo').style.cssText = "display: none;";
});