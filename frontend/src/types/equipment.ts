export interface BPFixedExpense { id: number; Category: string; Cost: number; }
export interface FixedExpense { id: number; Category: string; Cost: number; remarks?: string; }
export interface HiredEquipment { id: number; Categoryname: string; EquipmentName: string; Make?: string; Model?: string; Capacity?: string; HireCharges: number; RAndMPercentage?: number; Hrs_PerMonth?: number; Fuel_PerHour?: number; Power_PerHour?: number; OperatorCost_PerMonth?: number; }
export interface LightingEquipment { id: number; Categoryname: string; EquipmentName: string; Capacity?: string; Make?: string; Model?: string; PowerPerUnit?: number; ConnectedLoad?: number; UtilityFactor?: number; }
export interface MajorEquipment { id: number; Categoryname: string; EquipmentName: string; Make?: string; Model?: string; Capacity?: string; Drive?: string; RepValue?: number; DepreciationPercentage?: number; Depreciation_Fixed?: number; Hrs_PerMonth?: number; Fuel_PerHour?: number; Power_PerHour?: number; OperatorCost_PerMonth?: number; RAndMPer_275?: number; RAndMPer_125?: number; RAndMPerc_050?: number; MaintCost_PerMonth?: number; PowerPerUnit_x0028_HP_x0029_?: number; UtilityFactor?: number; }
export interface MinorEquipment { id: number; Categoryname: string; EquipmentName: string; Make?: string; Model?: string; Capacity?: string; Drive?: string; CostOfNewEquipment?: number; RAndMPercentage?: number; Fuel_PerHour?: number; Power_PerHour?: number; DepreciationPercentage?: number; Hrs_PerMonth?: number; OperatorCost_PerMonth?: number; PowerPerUnit_x0028_HP_x0029_?: number; ConnectedLoadPerMC?: number; UtilityFactor?: number; }

export type AllEquipmentTypes =
  | MajorEquipment
  | MinorEquipment
  | HiredEquipment
  | LightingEquipment
  | FixedExpense
  | BPFixedExpense;

export interface CombinedEquipmentItem { id: number; name?: string; unit?: string; quantity?: number; rate?: number; amount?: number; remarks?: string; }
export type EquipmentCategoryType = "major" | "minor" | "hired" | "lighting" | "fixed" | "bpFixed";
