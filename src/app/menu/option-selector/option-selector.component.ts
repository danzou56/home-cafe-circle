import { Component, inject, model } from '@angular/core';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatError, MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from '@angular/material/input';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { OrderItem } from '../../cart/cart/order-item/order-item';

export interface OptionSelectorData {
  menuItem: MenuItemComponent;
  addCallback: (orderItem: OrderItem) => void;
}

@Component({
  selector: 'app-option-selector',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatFormField,
    MatInput,
    FormsModule,
    MatDialogActions,
    MatButton,
    MatDialogClose,
    MatLabel,
    MatRadioButton,
    MatRadioGroup,
    ReactiveFormsModule,
    MatError,
  ],
  templateUrl: './option-selector.component.html',
  styleUrl: './option-selector.component.css',
})
export class OptionSelectorComponent {
  readonly dialogRef = inject(MatDialogRef<OptionSelectorComponent>);
  readonly data = inject<OptionSelectorData>(MAT_DIALOG_DATA);
  readonly menuItem = model(this.data.menuItem);
  readonly addCallback = model(this.data.addCallback);

  addInvoked = false
  selectedOptionControls: Map<string, FormControl> = new Map(
    this.menuItem().radios.map((radio) => [radio.name, new FormControl()]),
  );

  add(): void {
    this.addInvoked = true;
    let controlsArray = Array.from(this.selectedOptionControls.values());
    if (!controlsArray.every((control) => control.value !== null)) {
      return;
    }
    this.addCallback()(
      new OrderItem(
        this.menuItem().name,
        controlsArray.map((formControl) => new OrderItem(formControl.value)),
      ),
    );
    this.dialogRef.close();
  }
}
