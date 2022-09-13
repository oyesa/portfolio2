
// Typing intro landing page
var typed = new Typed(".auto-input", {
  strings: ["Oyesa Oluchina", "  A Web <br> Developer."],
  typeSpeed: 150,
  backSpeed: 100,
  loop: true
})


// show/hide skill items
const skillItems = document.querySelectorAll('.skills .skill');

skillItems.forEach(skill => {
  skill.querySelector('.head').addEventListener('click', ()=> {
    skill.querySelector('.items').classList.toggle('show-items')
  })
})

// $(document).ready(function(){
//   $('#show-btn').on('click', function(){
//     $('div#items').toggle(2000);
//   });
// });