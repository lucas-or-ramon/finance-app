import {AbstractControl, FormGroup} from "@angular/forms";

interface Registry {
  id: string;
  date: Date;
  value: number;
  description: string;
  creditCardId: string | null | undefined;
}

interface Monthly {
  date: Date;
  balance: number;
  revenue: {
    total: number
    registries: Registry[]
  };
  expenditure: {
    total: number
    registries: Registry[]
  };
  creditCards: CreditCard[]
}

interface CreditCard {
  id: string;
  dueDate: Date;
  total: number;
  name: string;
}

export {Monthly, Registry, CreditCard}

