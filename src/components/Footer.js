import React from 'react'
const Footer = ()=>{
    const style ={
        listStyle:'none',
        display:'flex',
        padding:'20px',
        height:'140px',
        backgroundColor:'black',
        alignItems:'center',
        margin:'0',
        fontSize:'1.2em',
        fontWeight:'bold'
    }
    let listStyle ={
        marginRight: '14px',
        transform:'uppercase'
    }
    return (
		<ul style={style}>
			<li style={listStyle}>Home</li>
			<li style={listStyle}>About</li>
			<li style={listStyle}>Contact</li>
			<li style={listStyle}>Project</li>
			<li style={listStyle}>Mission</li>
		</ul>
	);
}

export default Footer;