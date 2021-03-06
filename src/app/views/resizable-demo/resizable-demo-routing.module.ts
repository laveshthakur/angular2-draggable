import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResizeDefaultDemoComponent } from './resize-default-demo/resize-default-demo.component';
import { ResizeEventDemoComponent } from './resize-event-demo/resize-event-demo.component';
import { ResizeAspectRatioDemoComponent } from './resize-aspect-ratio-demo/resize-aspect-ratio-demo.component';
import { ResizeContainmentDemoComponent } from './resize-containment-demo/resize-containment-demo.component';


const routes: Routes = [
  {
    path: 'default',
    component: ResizeDefaultDemoComponent,
    data: {
      title: 'Default Functionality'
    }
  },
  {
    path: 'events',
    component: ResizeEventDemoComponent,
    data: {
      title: 'Events'
    }
  },
  {
    path: 'aspect-ratio',
    component: ResizeAspectRatioDemoComponent,
    data: {
      title: 'Aspect Ratio'
    }
  },
  {
    path: 'containment',
    component: ResizeContainmentDemoComponent,
    data: {
      title: 'Containment'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResizableDemoRoutingModule { }
