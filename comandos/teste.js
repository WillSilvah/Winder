module.exports = [{
	name: "teste",
	code: `
	$ifAwaited[1==1;{execute:teste1} {execute:teste2}
	
	`
},{
	name: "teste1",
	type: "awaited",
	code: `
	KKKKKKKKKKKKK $commandName
	
	
	
	`
},{
	name: "teste2",
	type: "awaited",
	code: `
	Kkkkkkkkkkkkkkkkkk $commandName
	
	
	`
}]