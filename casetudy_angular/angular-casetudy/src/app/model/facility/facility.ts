import {RenType} from "./ren-type";
import {FacilityType} from "./facility-type";

export interface Facility {
  id: number;
  name: string;
  area: number;
  cost: number;
  maxPeople: number;
  standardRoom:string;
  descriptionOther: string;
  poolArea: number;
  numberOfFloors: number;
  facilityFree: string;

  rentType: RenType;
  facilityType: FacilityType;

}
