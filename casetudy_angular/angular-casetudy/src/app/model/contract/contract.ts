import {Facility} from "../facility/facility";
import {Customer} from "../customer/customer";

export interface Contract {
  id: number;
  facility: Facility;
  customer: Customer;
  startDate: string;
  endDate: string;
  deposit: string;
}
