<?php 
  define("API_URL", "https://pokeapi.co/api/v2/pokemon?limit=100000");
  define("API_IMG_URL", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/");

  class Pokemon {
    function __construct($name, $url) {
      $this->name = $name;
      $this->id = explode("/", $url)[6];
      $this->image = API_IMG_URL . $this->id . ".png";
    }

    function __toString() {
      return "<tr>
                <td>" . $this->id . "</td>
                <td>" . $this->name . "</td>
                <td> <img src='" . $this->image . "' width='120px' height='120px' /> </td>
              </tr>";
    }
  }

  function getPokemons($url) {
    $pokemonsJSON = file_get_contents($url);
    $pokemonsArray = json_decode($pokemonsJSON, true);
    return $pokemonsArray["results"];
  }


  function showPokemon($pokemon) {
    echo new Pokemon($pokemon["name"], $pokemon["url"]);
  }
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.13.1/css/jquery.dataTables.css">
<script src="https://code.jquery.com/jquery-3.6.1.js" integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI=" crossorigin="anonymous"></script>
<script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.13.1/js/jquery.dataTables.js"></script>
  <title>Pokemons</title>
</head>
<body>
  <h1>Pokemons</h1>
  <hr/>
  <table id="pokemons">
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Image</th>
      </tr>
    </thead>
    <tbody>
      <?php
        $pokemons = getPokemons(API_URL);
        foreach ($pokemons as $pokemon) {
          showPokemon($pokemon);
        }
      ?>
    </tbody>
  <script>
    $(document).ready(function () {
      $('#pokemons').DataTable();
    });
  </script>
</body>
</html>