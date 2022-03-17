const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
  header.innerHTML =
    '<img src="https://www.wallpapertip.com/wmimgs/32-323004_manchester-united-logo-wallpapers-man-united-logo-png.jpg" alt="" />'
  title.innerHTML = 'MANCHESTER UNITED FC'
  excerpt.innerHTML =
    'Manchester United Football Club is a professional football club based in Old Trafford, Greater Manchester, England, that competes in the Premier League, the top flight of English football.'
  profile_img.innerHTML =
    '<img src="https://resources.premierleague.com/premierleague/photos/players/250x250/man77.png" alt="" />'
  name.innerHTML = 'Ralf Rangnick'
  date.innerHTML = 'Manager//Manchester United F.C.'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}