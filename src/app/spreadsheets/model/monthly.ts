import {AbstractControl, FormGroup} from "@angular/forms";

interface Registry {
  id: string;
  date: Date;
  value: number;
  description: string;
}
interface RegistryForm extends FormGroup {
  value: Registry;
  controls: {
    id: AbstractControl;
    date: AbstractControl;
    value: AbstractControl;
    description: AbstractControl;
  };
}

interface Revenue extends Registry {}

interface Expenditure extends Registry {}

interface Monthly {
  date: Date;
  balance: number;
  totalRevenue: number;
  totalExpenditure: number;
}

enum RegistryType {
  REVENUE = "revenue",
  EXPENDITURE = "expenditure"
}

export {Monthly, Registry, RegistryType, Revenue, Expenditure, RegistryForm}

