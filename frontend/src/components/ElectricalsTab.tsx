"use client";

import { useState } from "react";
// Fix: Import Card from antd directly.
import { Button, Input, Card } from "antd";

interface ElectricalData {
  installationPercent: number;
  breakup: {
    cabling: number;
    switchgear: number;
    lighting: number;
    others: number;
  };
}

const electricalData: ElectricalData = {
  installationPercent: 15,
  breakup: {
    cabling: 40,
    switchgear: 25,
    lighting: 20,
    others: 15,
  },
};

interface ElectricalsTabProps {
    setActiveTab: (key: string) => void;
}

export default function ElectricalsTab({ setActiveTab }: ElectricalsTabProps) {
  const [electrical, setElectrical] = useState(electricalData);

  return (
    <Card>
      <Card.Meta title={<span className="text-xl font-bold">Electrical Installation</span>} />
      <div className="space-y-4 mt-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Electrical Installation % at the top</label>
          <Input
            type="number"
            value={electrical.installationPercent}
            onChange={(e) =>
              setElectrical((prev) => ({ ...prev, installationPercent: Number.parseFloat(e.target.value) }))
            }
            className="w-32 mt-1"
            min={0}
            max={100}
            step={0.1}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Cabling %</label>
            <Input
              type="number"
              value={electrical.breakup.cabling}
              onChange={(e) =>
                setElectrical((prev) => ({
                  ...prev,
                  breakup: { ...prev.breakup, cabling: Number.parseFloat(e.target.value) },
                }))
              }
              className="w-24 mt-1"
              min={0}
              max={100}
              step={0.1}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Switchgear %</label>
            <Input
              type="number"
              value={electrical.breakup.switchgear}
              onChange={(e) =>
                setElectrical((prev) => ({
                  ...prev,
                  breakup: { ...prev.breakup, switchgear: Number.parseFloat(e.target.value) },
                }))
              }
              className="w-24 mt-1"
              min={0}
              max={100}
              step={0.1}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Lighting %</label>
            <Input
              type="number"
              value={electrical.breakup.lighting}
              onChange={(e) =>
                setElectrical((prev) => ({
                  ...prev,
                  breakup: { ...prev.breakup, lighting: Number.parseFloat(e.target.value) },
                }))
              }
              className="w-24 mt-1"
              min={0}
              max={100}
              step={0.1}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Others %</label>
            <Input
              type="number"
              value={electrical.breakup.others}
              onChange={(e) =>
                setElectrical((prev) => ({
                  ...prev,
                  breakup: { ...prev.breakup, others: Number.parseFloat(e.target.value) },
                }))
              }
              className="w-24 mt-1"
              min={0}
              max={100}
              step={0.1}
            />
          </div>
        </div>
        <div className="flex gap-4 mt-6">
          <Button onClick={() => setActiveTab("equipment")}>Goto Equipment Entry</Button>
          <Button onClick={() => setActiveTab("pipeline")}>Goto Pipeline Expenses Entry</Button>
        </div>
      </div>
    </Card>
  );
}
