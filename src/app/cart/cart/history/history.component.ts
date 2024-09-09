import { Component, inject, Input } from '@angular/core';
import { HistoryItem } from './history-item';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Observable } from 'rxjs';

export interface HistoryData {
  historyItems: HistoryItem[];
  reprintCallback: (historyItem: HistoryItem) => Observable<Object>;
}

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [MatDialogModule, MatListModule, MatIconModule, MatButtonModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css',
})
export class HistoryComponent {
  readonly dialogRef = inject(MatDialogRef<HistoryComponent>);
  readonly data = inject<HistoryData>(MAT_DIALOG_DATA);
  readonly historyItems: HistoryItem[] = this.data.historyItems;
  readonly reprintCallback = this.data.reprintCallback;

  reprint(historyItem: HistoryItem): void {
    this.reprintCallback(historyItem).subscribe((_) => this.dialogRef.close());
  }
}
