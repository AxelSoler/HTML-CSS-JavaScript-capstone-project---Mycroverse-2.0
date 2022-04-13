const menu = document.querySelector('.mobileMenu');
const options = document.querySelector('.navMenu');
const closeX = document.querySelector('.closeX');
const line = document.querySelector('.hamburguer');

menu.addEventListener('click', () => {
  options.classList.toggle('active');
  closeX.classList.add('active');
  line.classList.add('remove');
});

closeX.addEventListener('click', () => {
  options.classList.remove('active');
  closeX.classList.remove('active');
  line.classList.remove('remove');
});

document.querySelectorAll('.menu').forEach((n) => n.addEventListener('click', () => {
  options.classList.remove('active');
  closeX.classList.remove('active');
  line.classList.remove('remove');
}));



const developers = [
  {
    dev: 'Zavala',
    picture: './images/Zavala.webp',
    description1: 'Awoken Guardian who serves as the Vanguard Commander of The Last City.',
    description2: 'Helping with developing the page to protect the last city on Earth.',
  },
  {
    dev: 'Homer Simpson',
    picture: './images/HomeroSimpson.jpeg',
    description1: "“Whatever, I'll be at Moe's.”",
    description2: 'Low-level safety inspector at the Springfield Nuclear Power Plant in Sector 7G',
  },
  {
    dev: 'A blue car',
    picture: './images/blueCar.jpg',
    description1: "It's blue!!!",
    description2: 'Did I tell you the car is blue?',
  },
  {
    dev: 'Ragnar Lodbrok',
    picture: './images/Ragnar.jpg',
    description1: 'King of Kattegat.',
    description2: 'Known throughout Scandinavia and England as a fearsome warrior and bloodthirsty conquer.',
  },
  {
    dev: 'Gary',
    picture: './images/ant.jpg',
    description1: 'Main developer of the new version',
    description2: "We couldn't have done it without him, thanks Gary",
  },
  {
    dev: 'Tony Stark',
    picture: './images/ironman.jpg',
    description1: 'Genius. Billionaire. Playboy. Philanthropist.',
    description2: 'Developer and main sponsor of the Mycroverse initiative.',
  },
];

const devs = document.querySelector('.featureDevelopers');

for (let i = 0; i < developers.length; i += 1) {
  devs.innerHTML += `
    <div class="developerCard">
      <img src=${developers[i].picture} alt="Zavala img">
      <div class="developer">
        <h3>${developers[i].dev}</h3>
        <h4>${developers[i].description1}</h4>
        <div class="line"></div>
        <h5>${developers[i].description2}</h5>
      </div>
    </div>
      `;
}