<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
      integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=="
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="style.css" />
    <title>Typing Game</title>
  </head>
  <body>
    <button id="settings-btn" class="settings-btn">
      <i class="fas fa-cog"></i>
    </button>

    <div id="settings" class="settings">
      <form id="settings-form">
        <div>
          <label for="difficutly" class="difficulty">Difficulty:</label>
          <select id="difficulty">
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
      </form>
    </div>

    <div class="container">
      <h2>Typing Game</h2>
      <small>Type the following:</small>

      <h1 id="word"></h1>

      <input
        type="text"
        id="text"
        autocomplete="off"
        placeholder="Type the word here..."
      />

      <p class="time-container">Time left: <span id="time">10s</span></p>

      <p class="score-container">Score: <span id="score">0</span></p>

      <div id="end-game-container" class="end-game-container"></div>
    </div>

    <script src="index.js"></script>
  </body>
</html>