interface Registry {
  id: string;
  value: number;
  category: string;
  description: string;
  recurrence: Recurrence;
  creditCardId: string | null | undefined;
}

interface Recurrence {
  type: string;
  dueDate: number;
  start: FinanceDate;
  end: FinanceDate;
}

interface FinanceDate {
  year: number;
  month: number;
}

interface CreditCard {
  id: string;
  name: string;
  dueDate: number;
}

interface Monthly {
  date: FinanceDate;
  balance: number;
  totalRevenue: number;
  totalExpenditure: number;
  revenues: Registry[],
  expenditures: Registry[],
  creditCards: CreditCard[]
}

export {Monthly, Registry, FinanceDate, Recurrence, CreditCard}

