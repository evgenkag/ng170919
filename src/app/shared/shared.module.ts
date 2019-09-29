import { NgModule } from '@angular/core';
import {MatGridListModule, MatCardModule, MatListModule, MatTabsModule} from "@angular/material";

@NgModule({
    exports: [
        MatGridListModule,
        MatCardModule,
        MatListModule,
        MatTabsModule
    ]
})
export class SharedModule { }
