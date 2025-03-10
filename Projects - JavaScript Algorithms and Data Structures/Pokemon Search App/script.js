const pokemonStats = {
    pokemonName: document.getElementById("pokemon-name"),
    pokemonId: document.getElementById("pokemon-id"),
    weight: document.getElementById("weight"),
    height: document.getElementById("height"),
    types: document.getElementById("types"),
    hp: document.getElementById("hp"),
    attack: document.getElementById("attack"),
    defense: document.getElementById("defense"),
    specialAttack: document.getElementById("special-attack"),
    specialDefense: document.getElementById("special-defense"),
    speed: document.getElementById("speed"),
    img: document.getElementById("sprite"),
  }
  
  const searchInput = document.getElementById("search-input");
  const searchButton = document.getElementById("search-button");
  
  
  const updateUI = (stats) => {
    console.log(stats);
    pokemonStats.pokemonName.textContent = stats.pokemonName.toUpperCase();
    pokemonStats.pokemonId.textContent = stats.pokemonId;
    pokemonStats.weight.textContent = stats.weight;
    pokemonStats.height.textContent = stats.height;
    stats.types.forEach((t) => {
        pokemonStats.types.innerHTML += `<span>${t.toUpperCase()} </span>`
    });
    pokemonStats.hp.textContent = stats.hp;
    pokemonStats.attack.textContent = stats.attack;
    pokemonStats.defense.textContent = stats.defense;

    pokemonStats.specialAttack.textContent = stats.specialAttack;
    pokemonStats.specialDefense.textContent = stats.specialDefense;
    pokemonStats.speed.textContent = stats.speed;
    pokemonStats.img.src = stats.imgUrl;
  }
  
  const cleanInput = () => {
    const regex = /[^a-z0-9\-]/gi;
    return searchInput.value.replace(regex, "").toLowerCase();
  }

  const queryPokeApi = async (id) => {
    const url = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${id}`;
    try {
        const resp = await fetch(url);
        if (!resp.ok) {
            throw new Error(`Unexpected response code: ${resp.status}`);
        }
        const data = await resp.json();
        console.log("Response Data:", data);
        return data;
    } catch (err) {
        alert("Pokémon not found");
        console.log("Error retriving request:", err);
    }    
  }
  
  const queryPokemon = async () => {
    // clean the search input
    pokemonStats.types.innerHTML = "";
    const text = cleanInput();
    console.log(text);
    // if search input is empty, alert user
    if (text.length === 0) {
        alert("Please enter a name or id");
        return;
    }
    try {
        const stats = await queryPokeApi(text);
        const pokemon = new Pokemon(stats);
        updateUI(pokemon.getStats());
    } catch (e) {
        console.error(`Couldn't retrieve pokemon: ${e}`);
    }
  }
  searchButton.addEventListener("click", queryPokemon);
  
  class Pokemon {
    #pokemonName = ""
    #pokemonId = 0
    #weight = 0
    #height = 0
    #types = [];
    #hp = 0;
    #attack = 0;
    #defense = 0;
    #specialAttack = 0;
    #specialDefense = 0;
    #speed = 0;
    #url = "";
    constructor(stats) {
      this.setStats(stats);
    }
  
    findStat(stats, stat_name) {
        // stats is the json_response.stats object
        let returnStat = undefined;
        stats.forEach(s => {
            if (s.stat.name === stat_name) {
                returnStat = s.base_stat;
            }
        })
        return returnStat;
    }

    setStats(stats) {
        this.#pokemonName= stats.name;
        this.#pokemonId = stats.id;
        this.#weight = stats.weight;
        this.#height = stats.height;
        this.#types = [];
        stats.types.forEach(t => this.#types.push(t.type.name));
        this.#hp = this.findStat(stats.stats, "hp");
        this.#attack = this.findStat(stats.stats, "attack");
        this.#defense = this.findStat(stats.stats, "defense");
        this.#specialAttack = this.findStat(stats.stats, "special-attack");
        this.#specialDefense = this.findStat(stats.stats, "special-defense");
        this.#speed = this.findStat(stats.stats, "speed");
        this.#url = stats.sprites.front_default;
        console.log("setStatistics:", this.#pokemonId);
    }

    

    getStats() {
        return {
            pokemonName: this.#pokemonName,
            pokemonId: this.#pokemonId,
            weight: this.#weight,
            height: this.#height,
            types: this.#types,
            hp: this.#hp,
            attack: this.#attack,
            defense: this.#defense,
            specialAttack: this.#specialAttack,
            specialDefense: this.#specialDefense,
            speed: this.#speed,
            imgUrl: this.#url
        }
    }
  }