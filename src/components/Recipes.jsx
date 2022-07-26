import React, {useState} from 'react'
import '../styles/recipe.css'
const users = {
	name: "Samuel",
	age: "22",
	job: "developer",
};
const newUser = {
    name:'Mamo',
    age:'29',
    job:'driver'
}
console.log(users);

const Recipes = ()=>{
    let [user,setUser] = useState(users);
    return (
		<div className="recipe">
			<div>
				<h1>{user.name}</h1>
				<p>{user.job}</p>
				<p>{user.age}</p>
			</div>
			<button onClick={() => setUser(newUser)}>New User</button>
			<button onClick={() => setUser(users)}>User</button>
		</div>
	);
}

export default Recipes;
