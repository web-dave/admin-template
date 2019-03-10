import {
  Component,
  OnInit,
  OnChanges,
  ViewChild,
  Input,
  SimpleChanges
} from '@angular/core';
import { ColorsService } from './colors.service';

@Component({
  selector: 'admin-progress-circle',
  templateUrl: './progress-circle.component.html',
  styleUrls: ['./progress-circle.component.scss']
})
export class ProgressCircleComponent implements OnChanges {
  @ViewChild('circleprogress') circle;
  @ViewChild('circlebg') bg;
  @ViewChild('text') text;
  @Input() color: string;
  @Input() progress: number;
  @Input() name: string;
  style: {
    color: string;
    background: string;
  };

  constructor(private colors: ColorsService) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes.progress.currentValue) {
      console.log(this.circle.nativeElement);
      const elem = this.circle.nativeElement;
      const radius = elem.r.baseVal.value;
      const circumference = radius * 2 * Math.PI;
      this.style = this.colors.getColor(this.color);
      this.bg.nativeElement.style.stroke = this.style.background;
      elem.style.stroke = this.style.color;
      elem.style.strokeDasharray = `${circumference} ${circumference}`;
      elem.style.strokeDashoffset = `${circumference}`;

      const offset = circumference - (this.progress / 100) * circumference;
      elem.style.strokeDashoffset = offset;
      this.text.nativeElement.textContent = `${this.progress} %`;
      this.text.nativeElement.style.stroke = this.style.color;
    }
  }
}
