import {Component, Input} from '@angular/core';
import {Registry} from "../../../spreadsheets/model/monthly";

@Component({
  selector: 'app-registry-list-card',
  templateUrl: './registry-list-card.component.html',
  styleUrls: ['./registry-list-card.component.scss']
})
export class RegistryListCardComponent {
  @Input() cardRegistries: Registry[] = [];
  @Input() registryType: string = "";
}
