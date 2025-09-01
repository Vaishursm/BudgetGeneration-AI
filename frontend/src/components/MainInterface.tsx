"use client";

import { useState } from "react";
// Fix: Import Card from antd directly.
import {
  Button,
  Tabs,
  ConfigProvider,
  message,
  Card,
} from "antd";
import type { TabsProps } from "antd";
import EquipmentTab from "./EquipmentTab";
import ElectricalsTab from "./ElectricalsTab";
import PipelineExpensesTab from "./PipelineExpensesTab";
import ElectMechanicCostTab from "./ElectMechanicCostTab";
import MiscTab from "./MiscTab";
import StaffSalaryTab from "./StaffSalaryTab";


export default function MainInterface() {
  const [activeTab, setActiveTab] = useState("equipment");

  const items: TabsProps["items"] = [
    {
      key: "equipment",
      label: "Equipment Entry",
      children: <EquipmentTab />,
    },
    {
      key: "electricals",
      label: "Electricals",
      children: <ElectricalsTab setActiveTab={setActiveTab} />,
    },
    {
      key: "pipeline",
      label: "Pipeline Expenses",
      children: <PipelineExpensesTab />,
    },
    {
      key: "electmechanic",
      label: "Elect/Mechanic Cost",
      children: <ElectMechanicCostTab />,
    },
    {
      key: "misc",
      label: "Misc & Non-ERP",
      children: <MiscTab />,
    },
    {
      key: "staff",
      label: "Staff Salary",
      children: <StaffSalaryTab />,
    },
  ];

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#1890ff", // Ant Design's default primary blue
        },
      }}
    >
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-full mx-auto">
          <Card
            title={<div className="text-2xl font-bold text-center">Budget Generation - Main Interface</div>}
            className="shadow-lg"
          >
            <Tabs
              activeKey={activeTab}
              onChange={setActiveTab}
              items={items}
              tabBarStyle={{ justifyContent: "center" }}
            />

            {/* Save & Quit Button */}
            <div className="flex justify-center pt-6">
              <Button
                size="large"
                type="primary"
                className="bg-green-600 hover:bg-green-700"
                onClick={() =>
                  message.success(
                    "Budget will be prepared and written to Excel workbook. This may take a few minutes."
                  )
                }
              >
                Save & Quit
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </ConfigProvider>
  );
}
