export interface BPFixedExpense { id: number; Category: string; Cost: number; }
export interface FixedExpense { id: number; Category: string; Cost: number; remarks?: string; }
export interface HiredEquipment { id: number; Categoryname: string; EquipmentName: string; ... }
export interface LightingEquipment { id: number; Categoryname: string; EquipmentName: string; ... }
export interface MajorEquipment { id: number; Categoryname: string; EquipmentName: string; ... }
export interface MinorEquipment { id: number; Categoryname: string; EquipmentName: string; ... }

export type AllEquipmentTypes =
  | MajorEquipment
  | MinorEquipment
  | HiredEquipment
  | LightingEquipment
  | FixedExpense
  | BPFixedExpense;

export interface CombinedEquipmentItem { id: number; name?: string; unit?: string; ... }
export type EquipmentCategoryType = "major" | "minor" | "hired" | "lighting" | "fixed" | "bpFixed";
