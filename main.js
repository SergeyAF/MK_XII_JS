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

const createPlayer = (playerClass, character) => {
  const $root = document.querySelector('.arenas')
  const $onePlayer = document.createElement('div')
  $onePlayer.classList.add(playerClass)
  $onePlayer.innerHTML = `
    <div class="progressbar">
        <div class="life" style="width: ${character.hp}%"></div>
        <div class="name">${character.name}</div>
    </div>
    <div class="character">
        <img src=${character.img} />
    </div> 
  `

  $root.appendChild($onePlayer)
}

createPlayer('player1', characters.sonya)
createPlayer('player2', characters.liuKang)