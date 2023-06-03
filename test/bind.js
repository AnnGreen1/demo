function human(age){
   name = 'yuan mingyue';
    console.log(this.name, ' ', age);
}


human.bind({name:'袁明月'}, 18);

human()