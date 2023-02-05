interface Registry {
  id: number | null;
  date: Date
  value: number;
  description: string;
}

interface Revenue extends Registry {}

interface Expenditure extends Registry {}

interface Monthly {
  date: Date;
  balance: number;
  totalRevenue: number;
  totalExpenditure: number;
}

export {Monthly, Registry, Revenue, Expenditure}

