<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pokemons</title>
</head>
<body>
  <h1>Pokemons</h1>
  <hr/>
  <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Image</th>
      </tr>
    </thead>
    <tbody>
      <?php
        $apiURL = "https://pokeapi.co/api/v2/pokemon";
        $pokemonsJSON = file_get_contents($apiURL);
        $pokemonsArray = json_decode($pokemonsJSON, true);
        foreach ($pokemonsArray["results"] as $pokemon) {
          $pokemonID = explode("/", $pokemon["url"])[6];
          echo "<tr>";
          echo "<td>" . $pokemonID . "</td>";
          echo "<td>" . $pokemon["name"] . "</td>";
          echo '<td> <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' . $pokemonID . '.png" width="120px" height="120px" /> </td>';
          echo "</tr>";
        }
      ?>
    </tbody>
</body>
</html>