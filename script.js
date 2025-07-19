function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}
function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}
// Typewriter Effect
const texts = [
    "Software Developer",
   
    
    
]
let speed  =100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let charcterIndex = 0;
function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    }
    else{
        setTimeout(eraseText, 1000)
    }
}
function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}
window.onload = typeWriter

// Email Submission

document.getElementById('contact-form').addEventListener('submit', async function (e) {
    e.preventDefault(); // prevent default form submission
  
    const form = e.target;
    const formData = new FormData(form);
  
    // Submit via FormSubmit API
    const response = await fetch('https://formsubmit.co/mdmodassir805141@gmail.com', {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      },
      body: formData
    });
  
    const statusEl = document.getElementById('form-status');
  
    if (response.ok) {
      statusEl.style.display = 'block';
      form.reset(); // clear form
    } else {
      statusEl.textContent = 'Oops! Something went wrong.';
      statusEl.style.color = 'red';
      statusEl.style.display = 'block';
    }
  });
  
  