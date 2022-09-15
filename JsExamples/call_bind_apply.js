const humanA = {
  name: 'Tom',
  sayMyName: function() {
    console.log(`My name is ${this.name}`);
  }
}

humanA.sayMyName();
