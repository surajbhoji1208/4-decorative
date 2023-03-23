import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { InputParentComponent } from './InputDecorative/input-parent/input-parent.component';
import { InputChildComponent } from './InputDecorative/InputParent/input-child/input-child.component';
import { OutputParentComponent } from './OutputDecorative/output-parent/output-parent.component';
import { OutputchildComponent } from './OutputDecorative/OutputParent/outputchild/outputchild.component';


@NgModule({
  declarations: [
    AppComponent,
    InputParentComponent,
    InputChildComponent,
    OutputParentComponent,
    OutputchildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
