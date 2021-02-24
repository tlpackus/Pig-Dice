# _This project is not in a complete or portfolio ready state, and should not be considered representational of professional work._

# _Application Name_

#### _Brief description of application_

#### By _**Jessica R. Williams and Theron L. Packus**_

## Technologies Used

* _Bootstrap Library_
* _CSS_
* _HTML_
* _JavaScript_
* _jQuery Library_

## Description

_This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have. Balance between a summary of the project and a tame market pitch._

## Setup/Installation Requirements
>
* _Open the terminal on your local machine_
* _Navigate to the directory inside of which you wish to house this project_
* _Clone this project with the following git command `$ git clone <https://github.com/tlpackus/Pig-Dice.git>`_
* _Navigate to the top level of the repository with the command `$ cd Pig-Dice`_
* _Open index.html in the browser of your choice with the command `$ open index.html`_.

_Alternatively,_

* _Direct your browser to a [live version on GitHub Pages.] (tlpackus.github.io/Pig-Dice/index.html)_


## Tests

Describe: yourFunctionName()
Test: "It does something"
Expect (yourFunctionName("given input")).toEqual("expected output");

Describe: Player()
Test: "It will take a name argument and create Player instances with Name, GameScore, and TurnScore properties. The name argument will be the value of the Name property"
Expect(let player1 = new Player("Michael").toEqual(Player { Name: "Michael", GameScore: 0, TurnScore: 0}));

Describe: Game()
Test: "It will create Game instances with Players, CurrentId, and CurrentPlayer properties"
Expect(let game1 = new Game().toEqual(Game { Players: {}, CurrentId: 0, CurrentPlayer: 1}));

Describe: Game.prototype.assignId
Test: "It will increment the currentId property and return the newly incremented value"
Expect(game1.assignId()).toEqual(Game { Players: {}, CurrentId: 1, CurrentPlayer: 1});
Expect(game1.assignId()).toEqual(return value = 1));

Describe: Game.prototype.addPlayer(player)
Test: "It will take a Player instance as an argument, call the assignID method, assign an id value to the Player instance, add the Player instance as a value of the Game's Player key.
Expect(game1.addPlayer(player1)).toEqual(Game { Players: {1 { Name: "Michael", GameScore: 0, TurnScore: 0, id: 1} }, CurrentId: 1, CurrentPlayer: 1})

Describe: Game.prototype.roll
Test: "It will generate a random number between 1-6"
Expect(game1.roll()).toEqual(1)
Expect(game1.roll()).toEqual(2)
Expect(game1.roll()).toEqual(3)
Expect(game1.roll()).toEqual(4)
Expect(game1.roll()).toEqual(5)
Expect(game1.roll()).toEqual(6)

Describe: Game.prototype.winnerCheck(player)
Test: "Check if player gameScore is greater than or equal to 100"
Expect(game1.winnerCheck(player1)).toEqual(return value = false)

Describe: Game.prototype.tallyTurnScore(player) 
Test: "It will take a Player instance as an argument, call Game.prototype.roll(), assess the value of .roll() and if that value is >1 assign the value of .roll to the player's turnScore property. If the value of the roll is 1 it will set the player's turnScore property to zero"
Expect(game1.tallyTurnScore(player1)).toEqual(Game { Players: {1 { Name: "player1", GameScore: 0, TurnScore: 5, id: 1} }, CurrentId: 1, CurrentPlayer: 1})

Describe: Game.prototype.tallyGameScore(player)
Test: "It will take a Player instance as an argument. It will add that player's turnScore property to its gameScore property and reset turnScore to zero"
Expect(game1.tallyGameScore(player1)).toEqual(Game { Players: {1 { Name: "player1", GameScore: 5, TurnScore: 0, id: 1} }, CurrentId: 1, CurrentPlayer: 1})


## Known Bugs

* _Any known issues_
* _should go here_

## License
*[MIT](https://choosealicense.com/licenses/mit/)*
Copyright (c) **_2021 Jessica R. Williams_**
## Contact Information
**_Theron L. Packus [mailto](mailto:tlpackus@gmail.com)_**
**_Jessica R. Williams [mailto](mailto:jessicarubinwilliams@gmail.com)_**
**_Carlos Urquiza [mailto](mailto:webquiza@gmail.com)_**