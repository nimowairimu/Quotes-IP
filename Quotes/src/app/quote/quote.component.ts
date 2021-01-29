import { Component, ɵSWITCH_CHANGE_DETECTOR_REF_FACTORY__POST_R3__ } from '@angular/core';
import {Quote} from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class GoalComponent implements OnInit{
 quotes:Quote[] = [
  {content:'The sun is out go have fun',username: 'Nimo'},
  {content:'The sun is out go have fun',username: 'Nims'},
  {content:'The sun is out go have fun',username:'Nim'},
  {content:'The sun is out go have fun',username:'Ni'},
 ];
 constructor(){}

 ngOnInit(){
   
 }
}
