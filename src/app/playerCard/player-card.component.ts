import 	{Component, Output, EventEmitter,Input} from '@angular/core';

@Component({
	selector:'player-card',
	styles:[`
		.players-card{
			width: 170px;
			height: 85px;
			background-color: #FFFFFF;
			border-radius: 3px;
		}
		.players-card-photo{
			height: 75px;
		    width: 50px;
		    max-width: none;
		    border-radius: 3px;
		}
		.players-card-content{
			padding:0px;
		}
		.players-card-name{
			height: 15px;
			font-size: 14px;
			font-weight: bold;
			line-height: 15px;
			color: #2C3A42;
			margin-left: 5px;
		}
		.players-card-age{
			height: 15px;
			font-size: 14px;
			line-height: 15px;
			color: #2C3A42;
			margin-left: 5px;
		}
		.players-card-favourite{
			width: 12px;
			height: 12px;
		}
		.players-card-statictic{
			width: 106px;
			height: 25px;
			background-color: #F1F1F1;
			border-radius: 2px;
			font-size: 14px;
			font-weight: bold;
			text-align: center;
			line-height: 19px;
			color: #FFFFFF;
		}
		.players-card-info{
			padding-left: 2px;
		}
		.players-card-score{
			background-color: #43A047;
		}
		.players-card-money{
			color: black;
		}
	`], 

	template:`
	<ion-card class="players-card" *ngFor="let us of user">
	    <ion-card-content class="players-card-content">
		    <ion-row>
		    	<ion-col width-33><img class="players-card-photo" src="http://www.manutdpics.com/t/2/manchester-united-team-group-photocall-11328653.jpg"></ion-col>
		    	<ion-col width-66 class="players-card-info">
					<p class="players-card-name">Davy Klaassen</p>
					<p class="players-card-age">23yrs</p>
					<p class="players-card-favourite"></p>
					<ion-row class="players-card-statictic">
						<ion-col class="players-card-score">6350</ion-col>
						<ion-col class="players-card-money">€16.8m</ion-col>
					</ion-row>
		    	</ion-col>	
		    </ion-row>
	  	</ion-card-content>
	 </ion-card>
	`
})
export class PlayerCardComponent {
	@Input() user;
}