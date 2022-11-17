import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";


@Component({
    templateUrl:'dialogDeleteComponent.html'
})

export class DialogDeleteComponent{

    constructor
    (
        public dilogref:MatDialogRef<DialogDeleteComponent>
    )
    {
          
    }
}

