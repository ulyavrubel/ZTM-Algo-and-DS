//Classes in JS

class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  intro() {
    console.log(`i'm ${this.name} of ${this.type} type`);
  }
}

const player = new Player('ulya', 'person');

player.intro();

class Wizard extends Player {
  constructor(name, type) {
    //whenever ypu extends class call super() with args ypu want to pass to initial class constructor
    super(name, type);
  }

  play() {
    console.log(`i'm a wizard of ${this.type} type`);
  }
}

const wizard = new Wizard('WZ', 'gremlin');

wizard.play();

wizard.intro();
