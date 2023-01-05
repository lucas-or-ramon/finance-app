import { FormControl, FormGroup } from "@angular/forms";

enum Status {
  OK, PENDING, CANCELED
}

enum RecurrenceType {
  FIXED, INSTALLMENTS, NORMAL
}

interface Recurrence {
  type: RecurrenceType
  finalDate: Date | null;
  initialDate: Date | null;
}

interface Registry {
  id: number | null;
  date: Date
  paid: number | null;
  value: number;
  total: number | null;
  status: Status;
  recurrence: Recurrence
  description: string;
  creationDate: Date | null
}

interface Revenue extends Registry {}

interface Expenditure extends Registry {}

interface CreditCard {
  id: number;
  name: string;
  total: number;
  status: Status;
  dueDate: Date;
  creationDate: Date;
  creditCardExpenditures: CreditCardExpenditure[]
}

interface CreditCardExpenditure extends Registry {}

interface Monthly {
  date: Date;
  balance: number;
  totalRevenue: number;
  totalExpenditure: number;
  revenues: Revenue[];
  creditCards: CreditCard[]
  expenditures: Expenditure[]
}

export {CreditCardExpenditure, Monthly, Registry, Status, Revenue, CreditCard, Expenditure, Recurrence, RecurrenceType}

