# Training
Training Repository.
<button onClick={()=>this.getData(3)}>{person.name}</button>

{this.state.persons.map(person => <li key={person.name}  ><button onClick={()=>this.getData(person.id)}>{person.name}</button></li>)}
