import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CreditCard, Registry} from "../../model/monthly";

@Component({
  selector: 'app-registry-list',
  templateUrl: './registry-list.component.html',
  styleUrls: ['./registry-list.component.scss']
})
export class RegistryListComponent implements OnInit {

  @Input() registryType: string = "";
  @Input() registries: Registry[] = [];
  @Input() creditCards: CreditCard[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() delete = new EventEmitter(false);
  readonly displayedColumns = ['date', 'description', 'value', 'actions'];

  onAdd(): void {
    this.add.emit(this.registryType);
  }

  onEdit(registry: Registry): void {
    this.edit.emit({registry: registry, registryType: this.registryType});
  }

  onDelete(registry: Registry) {
    this.delete.emit({registry: registry, registryType: this.registryType})
  }

  ngOnInit(): void {
    this.registries = this.registries.filter(registry => (registry.creditCardId === null || registry.creditCardId === undefined));
    this.creditCards.forEach(creditCard => {
      this.registries.push({
        id: creditCard.id,
        description: creditCard.name,
        value: creditCard.total,
        date: creditCard.dueDate,
        creditCardId: null
      });
    });
    console.log(this.creditCards)
  }
}
