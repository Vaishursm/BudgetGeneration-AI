import { EquipmentCategoryType } from "../types/equipment";

export const EQUIPMENT_CATEGORY_MAP: Record<string, { endpoint: string; type: EquipmentCategoryType }> = {
  "Major Concrete": { endpoint: "majorequipments", type: "major" },
  "Major Conveyance": { endpoint: "majorequipments", type: "major" },
  "Hired Equipments": { endpoint: "hiredequipments", type: "hired" },
  "Fixed Exp. - Tower Crane": { endpoint: "fixedexpenses", type: "fixed" },
  "Fixed Exp. - BP Related": { endpoint: "bpfixedexpenses", type: "bpFixed" },
  "Lighting/Single Phase Equips": { endpoint: "lightingequipments", type: "lighting" },
  // …rest
};
