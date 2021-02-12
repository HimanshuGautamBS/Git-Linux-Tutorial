import React,{Component} from 'react';
import './Avatar.css';
import 'tachyons';  
import Avatarlist from './Avatarlist';


class Avatar extends Component{

	constructor(){
		super();
		this.state={
			name:"Welcome to Avatar World "
		}
	}

	namechange(){
		this.setState({
			name:"Subscribe to myGit"
		})
	}

	render(){
					const avatarlistarray = 
	    [
			{
				id:1,
			    name:"Himanshu", 
				work:"web developer"
			},
			{
				id:2,
			    name:"Gautam", 
				work:"FrontEnd developer"
			},
			{
				id:3,
			    name:"Thomson", 
				work:"Database"
			},
			{
				id:1,
			    name:"Maria", 
				work:"Backend"
			}
		]

const arrayavatarcard = avatarlistarray.map((avatarcard, i) =>{

		return <Avatarlist key={i} id={avatarlistarray[i].id}
								name={avatarlistarray[i].name}
								work={avatarlistarray[i].work}/>
	})


				return (
		<div className="mainpage">
			<h1> {this.state.name} </h1>
				{arrayavatarcard}
			<button onClick={ () => this.namechange()}>Press this</button>
		</div>
		)
		}

}

// const Avatar = (props) => {

// 	const avatarlistarray = 
// 	    [
// 			{
// 				id:1,
// 			    name:"Himanshu", 
// 				work:"web developer"
// 			},
// 			{
// 				id:2,
// 			    name:"Gautam", 
// 				work:"FrontEnd developer"
// 			},
// 			{
// 				id:3,
// 			    name:"Thomson", 
// 				work:"Database"
// 			},
// 			{
// 				id:1,
// 			    name:"Maria", 
// 				work:"Backend"
// 			}
// 		]

// const arrayavatarcard = avatarlistarray.map((avatarcard, i) =>{

// 		return <Avatarlist id={avatarlistarray[i].id}
// 								name={avatarlistarray[i].name}
// 								work={avatarlistarray[i].work}/>

// 	})
// 	return (
// 		<div className="mainpage">
// 			<h1> Welcome to Avatar World </h1>
// 				{arrayavatarcard}
// 			<button>Press this</button>
// 		</div>
// 		)
// }

export default Avatar;

// we have to export default(all default component) as well as custom component

// for avatar => https://joeschmoe.io/
// for styling => https://tachyons.io/docs/table-of-styles/
// dib => display inline block