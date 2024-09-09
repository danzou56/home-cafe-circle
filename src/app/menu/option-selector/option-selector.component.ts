import { Component, inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import {
  MatError,
  MatFormFieldModule,
  MatLabel,
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { OrderItem } from '../../cart/cart/order-item/order-item';
import { MenuItem } from '../menu-item/menu-item';

export interface OptionSelectorData {
  menuItem: MenuItem;
  addCallback: (orderItem: OrderItem) => void;
}

@Component({
  selector: 'app-option-selector',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatRadioModule,
    MatLabel,
    ReactiveFormsModule,
    MatError,
  ],
  templateUrl: './option-selector.component.html',
  styleUrl: './option-selector.component.css',
})
export class OptionSelectorComponent {
  readonly dialogRef = inject(MatDialogRef<OptionSelectorComponent>);
  readonly data = inject<OptionSelectorData>(MAT_DIALOG_DATA);
  readonly menuItem = this.data.menuItem;
  readonly addCallback = this.data.addCallback;

  addInvoked = false;
  selectedOptionControls: Map<string, FormControl> = new Map(
    this.menuItem.radios?.map((radio) => [radio.name, new FormControl()]),
  );
  notesControl = new FormControl('');

  add(): void {
    this.addInvoked = true;
    let controlsArray = Array.from(this.selectedOptionControls.values());
    if (!controlsArray.every((control) => control.value !== null)) return;

    let subItems = controlsArray.map((formControl) => ({
      name: formControl.value,
    }));
    if (this.notesControl.value!.length > 0)
      subItems.push({ name: this.notesControl.value });

    this.addCallback({
      name: this.menuItem.name,
      subItems: subItems,
    });
    this.dialogRef.close();
  }
}
