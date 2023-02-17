

export interface MedicalRecord {
  id?: number,
  code?:string,
  patientCode?:string,
  patient?: string,
  startDate?: string,
  endDate?: string,
  reason?:string,
  cures?:string,
  doctor?:string
}
