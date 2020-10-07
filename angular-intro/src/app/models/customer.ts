import { Branch } from './branch';

export class Customer {
  id: number | null;
  name = '';
  purchases = 0;
  branchId = 0;
  branch: Branch = null;
}
