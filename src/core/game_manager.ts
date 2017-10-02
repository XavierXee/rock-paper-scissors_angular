import { IWeapon } from "../interfaces/i_weapon";

export class GameManager {

	public static game(player:number, _lizardSpockMode:any):any{
		
		var weapons:IWeapon[] = [
			{id:1, name:"rock"},
			{id:2, name:"paper"},
			{id:3, name:"scissors"},
			{id:4, name:"lizard"},
			{id:5, name:"spock"},
		];

		var rules:any = {
			'1' : [[3,4],[2,5]],
			'2' : [[1,5],[3,4]],
			'3' : [[2,4],[1,5]],
			'4' : [[2,5],[1,3]],
			'5' : [[1,3],[4,2]]
		}

		var status;
		var rule = rules[player];

		var range = (_lizardSpockMode == "true") ? 5 : 3;
		var oponentPick = weapons[(Math.floor(Math.random() * range))];

		if(player == oponentPick.id){
			status = "DRAW";
		} else if(rule[0].indexOf(oponentPick.id) != -1){
			status = "WON";
		} else if(rule[1].indexOf(oponentPick.id) != -1){
			status = "LOST";
		}
	
		return {status: status, oponentPick: oponentPick};

	}

}