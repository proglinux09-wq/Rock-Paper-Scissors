function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    if (choice === 0) return "rock";
    if (choice === 1) return "paper";
    return "scissors";
  }

  function getHumanChoice() {
    const choice = prompt("Entrez rock, paper ou scissors :", "rock");
    return choice ? choice.toLowerCase() : "";
  }

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      console.log(`Égalité ! Vous avez tous les deux choisi ${humanChoice}.`);
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log(`Gagné ! ${humanChoice} bat ${computerChoice}.`);
    } else {
      computerScore++;
      console.log(`Perdu ! ${computerChoice} bat ${humanChoice}.`);
    }
  }

  // Manche 1
  console.log("--- MANCHE 1 ---");
  const humanSelection1 = getHumanChoice();
  const computerSelection1 = getComputerChoice();
  playRound(humanSelection1, computerSelection1);

  // Manche 2
  console.log("--- MANCHE 2 ---");
  const humanSelection2 = getHumanChoice();
  const computerSelection2 = getComputerChoice();
  playRound(humanSelection2, computerSelection2);

  // Manche 3
  console.log("--- MANCHE 3 ---");
  const humanSelection3 = getHumanChoice();
  const computerSelection3 = getComputerChoice();
  playRound(humanSelection3, computerSelection3);

  // Manche 4
  console.log("--- MANCHE 4 ---");
  const humanSelection4 = getHumanChoice();
  const computerSelection4 = getComputerChoice();
  playRound(humanSelection4, computerSelection4);

  // Manche 5
  console.log("--- MANCHE 5 ---");
  const humanSelection5 = getHumanChoice();
  const computerSelection5 = getComputerChoice();
  playRound(humanSelection5, computerSelection5);

  // Résultat Final
  console.log("============================");
  console.log(`SCORE FINAL : Vous ${humanScore} | Ordinateur ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("🏆 Félicitations, vous avez remporté la partie !");
  } else if (computerScore > humanScore) {
    console.log("🤖 L'ordinateur a remporté la partie !");
  } else {
    console.log("🤝 Match nul !");
  }
}

// Lancement du jeu
playGame();