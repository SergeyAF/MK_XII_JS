const $root = document.querySelector('.arenas')
const $randomButton = document.querySelector('.button')

const characters = {
  scorpion: {
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['sai', 'hook'],
    attack: function () {
      console.log(`${this.name} Fight ...`)
    }
  },
  liuKang: {
    name: 'LiuKang',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: ['fist', 'fire'],
    attack: function () {
      console.log(`${this.name} Fight ...`)
    }
  },
  kitana: {
    name: 'Kitana',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['fan', 'magic'],
    attack: function () {
      console.log(`${this.name} Fight ...`)
    }
  },
  sonya: {
    name: 'Sonya Blade',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['legs', 'guns'],
    attack: function () {
      console.log(`${this.name} Fight ...`)
    }
  },
  subZero: {
    name: 'SubZero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['fist', 'ice'],
    attack: function () {
      console.log(`${this.name} Fight ...`)
    }
  },
}

const selectCharacter = (character, position) => {
  return {player: position, ...character}
}

const createPlayer = (character) => {
  console.log(character)
  const $onePlayer = document.createElement('div')
  $onePlayer.classList.add(`player${character.player}`)
  $onePlayer.innerHTML = `
    <div class="progressbar">
        <div class="life" style="width: ${character.hp}%"></div>
        <div class="name">${character.name}</div>
    </div>
    <div class="character">
        <img src=${character.img} />
    </div> 
  `
  return $onePlayer
}

function changeHP(player) {
  const $playerLife = document.querySelector('.player'+ player.player +' .life')
  player.hp -= Math.ceil(Math.random() * 20);
  console.log(player.hp)
  $playerLife.style.width = player.hp > 0 ? player.hp + '%' : 0;
  if (player.hp < 0 ) {
    $root.appendChild(playerWin(player.name))
    $randomButton.disabled = true;
  }
}

function playerWin(name) {
  const $loseTitle = document.createElement('div')
  const winName = name === player1.name ? player2.name : player1.name
  $loseTitle.classList.add('winTitle');
  $loseTitle.innerText = winName + ' win';
  return $loseTitle;
}

$randomButton.addEventListener('click', ()=>{
  changeHP(player1);
  changeHP(player2)
});

const player1 = selectCharacter(characters.sonya, 1);
const player2 = selectCharacter(characters.liuKang, 2)

$root.appendChild(createPlayer(player1));
$root.appendChild(createPlayer(player2));