import {
  Input,
  Component,
  ElementRef,
  AfterViewInit,
  ViewChild,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { switchMap, takeUntil, pairwise } from 'rxjs/operators';
import { SignatureService } from '../../signature.service';
import { PopoverController } from '@ionic/angular';
@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.scss'],
})
export class SignatureComponent implements AfterViewInit {
  @ViewChild('canvas') public canvas: ElementRef;
  @Input() public width: number;
  @Input() public height: number;
  private cx: CanvasRenderingContext2D;
  public checkFlag = false;
  constructor(
    private signatureService: SignatureService,
    private popoverController: PopoverController
  ) {}

  public ngAfterViewInit(): void {
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.cx = canvasEl.getContext('2d');
    canvasEl.width = this.width;
    canvasEl.height = this.height;
    setTimeout(() => {
      this.drawSavedSignatureOnCanvas();
    });
    this.cx.lineWidth = 2;
    this.cx.lineCap = 'round';

    this.captureEvents(canvasEl);
  }
  public saveSig(): void {
    const canvasImg = this.canvas.nativeElement.toDataURL('image/png', 1.0);
    this.popoverController.dismiss(canvasImg);
  }
  public clearSig(): void {
    this.checkFlag = false;
    this.signatureService.clearSig();
    this.cx.clearRect(
      0,
      0,
      this.canvas.nativeElement.width,
      this.canvas.nativeElement.height
    );
  }

  private drawSavedSignatureOnCanvas(): void {
    const imageSrc = this.signatureService.getSignature();
    if (imageSrc !== null) {
      this.checkFlag = true;
      const ctx = this.cx;
      const image = new Image();
      image.src = imageSrc;
      image.onload = () => {
        ctx.drawImage(image, 0, 0);
      };
    }
  }

  private captureEvents(canvasEl: HTMLCanvasElement) {
    // this will capture all mousedown events from the canvas element
    fromEvent(canvasEl, 'mousedown')
      .pipe(
        switchMap(() => {
          // after a mouse down, we'll record all mouse moves
          return fromEvent(canvasEl, 'mousemove').pipe(
            // we'll stop (and unsubscribe) once the user releases the mouse
            // this will trigger a 'mouseup' event
            takeUntil(fromEvent(canvasEl, 'mouseup')),
            // we'll also stop (and unsubscribe) once the mouse leaves the canvas (mouseleave event)
            takeUntil(fromEvent(canvasEl, 'mouseleave')),
            // pairwise lets us get the previous value to draw a line from
            // the previous point to the current point
            pairwise()
          );
        })
      )
      .subscribe((res: [MouseEvent, MouseEvent]) => {
        const rect = canvasEl.getBoundingClientRect();

        // previous and current position with the offset
        const prevPos = {
          x: res[0].clientX - rect.left,
          y: res[0].clientY - rect.top,
        };

        const currentPos = {
          x: res[1].clientX - rect.left,
          y: res[1].clientY - rect.top,
        };

        this.drawOnCanvas(prevPos, currentPos);
      });

    // handle TOUCH EVENTS
    fromEvent(canvasEl, 'touchstart')
      .pipe(
        switchMap(() => {
          // after a touch start, we'll record all touch moves
          return fromEvent(canvasEl, 'touchmove').pipe(
            // we'll stop (and unsubscribe) once the user ends touching the scren
            // this will trigger a 'touchend' event
            takeUntil(fromEvent(canvasEl, 'touchend')),
            // we'll also stop (and unsubscribe) once the touch leaves the canvas (touchcancel event)
            takeUntil(fromEvent(canvasEl, 'touchcancel')),
            // pairwise lets us get the previous value to draw a line from
            // the previous point to the current point
            pairwise()
          );
        })
      )
      .subscribe((res: [TouchEvent, TouchEvent]) => {
        const rect = canvasEl.getBoundingClientRect();

        // previous and current position with the offset
        const prevPos = {
          x: res[0].targetTouches[0].clientX - rect.left,
          y: res[0].targetTouches[0].clientY - rect.top,
        };

        const currentPos = {
          x: res[1].targetTouches[0].clientX - rect.left,
          y: res[1].targetTouches[0].clientY - rect.top,
        };

        this.drawOnCanvas(prevPos, currentPos);
      });
  }

  private drawOnCanvas(
    prevPos: { x: number; y: number },
    currentPos: { x: number; y: number }
  ) {
    if (!this.cx) {
      return;
    }

    this.cx.beginPath();

    if (prevPos) {
      this.cx.moveTo(prevPos.x, prevPos.y); // from
      this.cx.lineTo(currentPos.x, currentPos.y);
      this.cx.stroke();
    }
    this.checkFlag = true;
  }
}
