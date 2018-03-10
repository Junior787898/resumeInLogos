import{ Component} from "@angular/core";
@Component({
    selector: 'app-first',
    templateUrl: './first.component.html',
    styleUrls: ['./first.component.css']

})
export class FirstComponent {

    name: string = "Yura";
    lastName: string = "Spivak";
    age: number = 23;
    job: string = "try-ny-deweloper";
    company: string = "Geek-aps"
    isShow: boolean = false;
    skill: any = ["Angular", "JS", "Sweem", "Eat", "Womit"]
    newElement: any;
    showAddList: boolean = false;
    isDisabled: boolean = false;

    
    
   
    editResume(){
        this.isShow = true 
    }
    close(){
        this.isShow = false  
    }
    newSkill(){
        this.showAddList = true;
    }
    pushNewSkill(){
        this.skill.push(this.newElement)
    }
}