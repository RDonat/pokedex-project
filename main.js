let apiUrl = "https://fizal.me/pokeapi/api/v2/name/";


function loadGarchompData(){
      axios.get('https://fizal.me/pokeapi/api/v2/name/garchomp.json')
      .then(function(response) {
  //handle success
      let Hp = response.data.stats[5].base_stat;
      let Atk = response.data.stats[4].base_stat;
      let Def = response.data.stats[3].base_stat;
      let Sp_A = response.data.stats[2].base_stat;
      let Sp_D = response.data.stats[1].base_stat;
      let Spd = response.data.stats[0].base_stat;
      let Abil1 = response.data.abilities[0].ability.name;
      let Abil2 = response.data.abilities[1].ability.name;
      let Move1 = response.data.moves[61].move.name;
      let Move2 = response.data.moves[25].move.name;
      let Move3 = response.data.moves[19].move.name;
      let Move4 = response.data.moves[12].move.name;
      let Garchomp = new Pokemon();
      let garData = document.getElementById('garStats');
      garData.innerHTML = ('<table id="garTable">') + ('<tr>') + ('<th>') + 'Stats' + ('</th>') + ('<th>') + 'Abilities' + ('</th>') + ('<th>') + 'Moves' + ('</th>') + ('</tr>') + ('<tr>') + ('<td>') + "HP: " + Hp + ('<br>') + "Atk: " + Atk + ('<br>') + "Def: " + Def + ('<br>') + "Sp.A: " + Sp_A + ('<br>') + "Sp.D: " + Sp_D + ('<br>') + "Spd: " + Spd + ('<br>') + ('</td>') + ('<td>') + "Primary: " + Abil2 + ('<br>') + ('<br>') + "Hidden: " + Abil1 + ('<br>') + ('<br>') + "My Choice: " + Abil1 + ('</td>') + ('<td>') + "Slot 1: " + Move1 + ('<br>') + "Slot 2: " + Move2 + ('<br>') + "Slot 3: " + Move3 + ('<br>') + "Slot 4: " + Move4 + ('</td>') + ('</tr>') + ('</table>');
      console.log(response);
      })
      .catch(function (error) {
        console.log("Soemthing is Wrong");
      });
    }

    function loadInfernapeData(){
      axios.get('https://fizal.me/pokeapi/api/v2/name/infernape.json')
      .then(function(response) {
  //handle success
      let Hp = response.data.stats[5].base_stat;
      let Atk = response.data.stats[4].base_stat;
      let Def = response.data.stats[3].base_stat;
      let Sp_A = response.data.stats[2].base_stat;
      let Sp_D = response.data.stats[1].base_stat;
      let Spd = response.data.stats[0].base_stat;
      let Abil1 = response.data.abilities[0].ability.name;
      let Abil2 = response.data.abilities[1].ability.name;
      let Move1 = response.data.moves[62].move.name;
      let Move2 = response.data.moves[82].move.name;
      let Move3 = response.data.moves[52].move.name;
      let Move4 = response.data.moves[1].move.name;
      let Infernape = new Pokemon()
      let inferData = document.getElementById('inferStats');
      inferData.innerHTML = ('<table id="inferTable">') + ('<tr>') + ('<th>') + 'Stats' + ('</th>') + ('<th>') + 'Abilities' + ('</th>') + ('<th>') + 'Moves' + ('</th>') + ('</tr>') + ('<tr>') + ('<td>') + "HP: " + Hp + ('<br>') + "Atk: " + Atk + ('<br>') + "Def: " + Def + ('<br>') + "Sp.A: " + Sp_A + ('<br>') + "Sp.D: " + Sp_D + ('<br>') + "Spd: " + Spd + ('<br>') + ('</td>') + ('<td>') + "Primary: " + Abil2 + ('<br>') + ('<br>') + "Hidden: " + Abil1 + ('<br>') + ('<br>') + "My Choice: " + Abil1 + ('</td>') + ('<td>') + "Slot 1: " + Move1 + ('<br>') + "Slot 2: " + Move2 + ('<br>') + "Slot 3: " + Move3 + ('<br>') + "Slot 4: " + Move4 + ('</td>') + ('</tr>') + ('</table>');
      console.log(response)
    })
    .catch(function (error) {
      console.log("Soemthing is Wrong");
    });
  }

  function loadSceptileData(){
    axios.get('https://fizal.me/pokeapi/api/v2/name/sceptile.json')
    .then(function(response) {
  //handle success
      let Hp = response.data.stats[5].base_stat;
      let Atk = response.data.stats[4].base_stat;
      let Def = response.data.stats[3].base_stat;
      let Sp_A = response.data.stats[2].base_stat;
      let Sp_D = response.data.stats[1].base_stat;
      let Spd = response.data.stats[0].base_stat;
      let Abil1 = response.data.abilities[0].ability.name;
      let Abil2 = response.data.abilities[1].ability.name;
      let Move1 = response.data.moves[73].move.name;
      let Move2 = response.data.moves[66].move.name;
      let Move3 = response.data.moves[50].move.name;
      let Move4 = response.data.moves[65].move.name;
      let Sceptile = new Pokemon();
      let scepData = document.getElementById('scepStats');
      scepData.innerHTML = ('<table id="scepTable">') + ('<tr>') + ('<th>') + 'Stats' + ('</th>') + ('<th>') + 'Abilities' + ('</th>') + ('<th>') + 'Moves' + ('</th>') + ('</tr>') + ('<tr>') + ('<td>') + "HP: " + Hp + ('<br>') + "Atk: " + Atk + ('<br>') + "Def: " + Def + ('<br>') + "Sp.A: " + Sp_A + ('<br>') + "Sp.D: " + Sp_D + ('<br>') + "Spd: " + Spd + ('<br>') + ('</td>') + ('<td>') + "Primary: " + Abil2 + ('<br>') + ('<br>') + "Hidden: " + Abil1 + ('<br>') + ('<br>') + "My Choice: " + Abil2 + ('</td>') + ('<td>') + "Slot 1: " + Move1 + ('<br>') + "Slot 2: " + Move2 + ('<br>') + "Slot 3: " + Move3 + ('<br>') + "Slot 4: " + Move4 + ('</td>') +  ('</tr>') + ('</table>');
      console.log(response)

    })
    .catch(function (error) {
      console.log("Soemthing is Wrong");
    });
  }

let loadMoreGarData = document.getElementById('garDataButton');
loadMoreGarData.addEventListener('click', loadGarchompData);

let loadMoreInferData = document.getElementById('inferDataButton');
loadMoreInferData.addEventListener('click', loadInfernapeData);

let loadMoreScepData = document.getElementById('scepDataButton');
loadMoreScepData.addEventListener('click', loadSceptileData);

class Pokemon {
  constructor(hp, atk, def, sp_a, sp_d, spd, abilities) {
    this.hp = hp;
    this.atk = atk;
    this.def = def;
    this.sp_a = sp_a;
    this.sp_d = sp_d;
    this.spd = spd;
    this.abilities = [];
    this.container = document.getElementById('Data');
    this.element = document.getElementById('dis');
    this.element.className = 'product';
  }
  display() {
    let hp = document.createElement('p');
    hp.innerHTML = this.hp;
    this.element.appendChild(hp);

    this.container.appendChild(this.element);

    let atk = document.createElement('p');
    atk.innerHTML = this.atk;
    this.element.appendChild(atk);

    this.container.appendChild(this.element);

    let def = document.createElement('p');
    def.innerHTML = this.def;
    this.element.appendChild(def);

    this.container.appendChild(this.element);

    let sp_a = document.createElement('p');
    sp_a.innerHTML = this.sp_a;
    this.element.appendChild(sp_a);

    this.container.appendChild(this.element);

    let sp_d = document.createElement('p');
    sp_d.innerHTML = this.sp_d;
    this.element.appendChild(sp_d);

    this.container.appendChild(this.element);

    let spd = document.createElement('p');
    spd.innerHTML = this.spd;
    this.element.appendChild(spd);

    this.container.appendChild(this.element);

    let abilities = document.createElement('p');
    abilities.innerHTML = this.abilities;
    this.element.appendChild(abilities);

    this.container.appendChild(this.element);
  }
}

class Trainer {
  constructor() {
    this.pokeData =[];

  }
  all() {
    return this.pokeData;
  }
  add(Pokemon) {
    this.pokeData.push(Pokemon);
  }
  get() {
    for(let i = 0; i < this.pokeData.length; i++) {
      if(name === this.pokeData[i]) {
        return this.pokeData[i];
      }
    }
  }
}

// let Rajin = new Trainer('Rajin', 'VsKuro.png', 'Eterna City', 'animated fadeInLeftBig', 'text')

axios.get(apiUrl + 'garchomp' + '.json')
.then();
function pokeForm(response) {
  hp = response.data.stats[5].base_stat;
  atk = response.data.stats[4].base_stat;
  def = response.data.stats[3].base_stat;
  sp_a = response.data.stats[2].base_stat;
  sp_d = response.data.stats[1].base_stat;
  spd = response.data.stats[0].base_stat;
  abil1 = response.data.abilities[0].ability.name;
  abil2 = response.data.abilities[1].ability.name;
  garchomp = new Pokemon(hp, atk, def, sp_a, sp_d, spd, abil1, abil2)
  garchomp.display();
  Rajin.Pokemon.push(garchomp);
}

axios.get(apiUrl + 'infernape' + '.json')
.then();
function pokeForm(response) {
  hp = response.data.stats[5].base_stat;
  atk = response.data.stats[4].base_stat;
  def = response.data.stats[3].base_stat;
  sp_a = response.data.stats[2].base_stat;
  sp_d = response.data.stats[1].base_stat;
  spd = response.data.stats[0].base_stat;
  abil1 = response.data.abilities[0].ability.name;
  abil2 = response.data.abilities[1].ability.name;
  infernape = new Pokemon(hp, atk, def, sp_a, sp_d, spd, abil1, abil2)
  infernape.display();
  Rajin.Pokemon.push(infernape);
}

axios.get(apiUrl + 'sceptile' + '.json')
.then();
function pokeForm(response) {
  hp = response.data.stats[5].base_stat;
  atk = response.data.stats[4].base_stat;
  def = response.data.stats[3].base_stat;
  sp_a = response.data.stats[2].base_stat;
  sp_d = response.data.stats[1].base_stat;
  spd = response.data.stats[0].base_stat;
  abil1 = response.data.abilities[0].ability.name;
  abil2 = response.data.abilities[1].ability.name;
  sceptile = new Pokemon(hp, atk, def, sp_a, sp_d, spd, abil1, abil2)
  sceptile.display();
  Rajin.Pokemon.push(sceptile);
}
