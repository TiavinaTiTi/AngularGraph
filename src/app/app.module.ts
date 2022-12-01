import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphComponent } from './features/graph/graph.component';
import { BarGraphComponent } from './features/bar-graph/bar-graph.component';
import { LineGraphComponent } from './features/line-graph/line-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    BarGraphComponent,
    LineGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
