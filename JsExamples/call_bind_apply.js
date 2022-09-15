const humanA = {
  name: 'Eric',
  sayMyName: function() {
    console.log(`My name is ${this.name}`);
  }
}

const humanB = {
  name: 'Hyde',
}

const humanC = {
  name: 'Celso',
  humnaCSaySomeThing: function(text) {
    console.log(`${this.name} says ${text}`);
  }
}

const printlogData = function() {
  console.log('humanA', humanA);
  console.log('humanB', humanB);
  console.log('humanC', humanC);
  console.log('Display CALL funcions change context on Human A for Human B');
  humanA.sayMyName.call(humanB);
  console.log('Display APPLY function change context on Human C for Human B');
  humanC.humnaCSaySomeThing.apply(humanB, ['What ever']);
  console.log('Display BIND function change context on Human C for Human B');
  const bindedReadytoExecute = humanC.humnaCSaySomeThing.bind(humanB, 'You have to excecute me! and What ever');
  bindedReadytoExecute();
}

printlogData();

