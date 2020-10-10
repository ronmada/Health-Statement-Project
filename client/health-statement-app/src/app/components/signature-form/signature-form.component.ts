import { Component, ViewChild } from '@angular/core';

import { CanvasWhiteboardComponent } from 'ng2-canvas-whiteboard';
@Component({
  selector: 'app-signature-form',
  viewProviders: [CanvasWhiteboardComponent],
  templateUrl: './signature-form.component.html',
  styleUrls: ['./signature-form.component.css'],
})
export class SignatureFormComponent {
  @ViewChild(CanvasWhiteboardComponent)
  canvasWhiteboardComponent: CanvasWhiteboardComponent;
}
