# Training
Training Repository.
passing parameter with JSX And onClick

<button onClick={()=>this.getData(3)}>{person.name}</button>

{this.state.persons.map(person => <li key={person.name}  ><button onClick={()=>this.getData(person.id)}>{person.name}</button></li>)}


**CONTROLLED COMPONENT** 
In a controlled component, form data is handled by a React component

**const App()=>{
const [name,setName] = useState("")
const [FullName,setFullName] = useState("")
.
const inputEvent=(event)=>{
  console.log(event.target.value);
  setName(event.target.value)    //store each word at the same time
};

**const onSubmit=()=>{
 setFullName(name);   //reflect complete after click on click me button
}

**return(
<*div>
  <*h1>Hello {fullname}</h1>
<input
  type="text"
  placeholder="Enter your Name"
  onChange={inputEvent}
       value={name}/>
  <*button onClick={onSubmit}>Click me</button>
  <*/div>
)
}
**






-The alternative is **uncontrolled components**, where form data is handled by the DOM itself.
To write an uncontrolled component, instead of writing an **event handler** for every state update, you can use a ref to get form values from the DOM.

**class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }
handleSubmit(event) {
    alert('A name was submitted: ' + this.input.current.value);
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={this.input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}**



