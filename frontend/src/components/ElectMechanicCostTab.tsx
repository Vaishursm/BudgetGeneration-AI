"use client";

import { useState } from "react";
// Fix: Import Card from antd directly.
import {
  Input,
  Table,
  Card,
} from "antd";
import type { ColumnsType } from "antd/es/table";


interface ElectMechanicCost {
  id: number;
  category: string;
  nos: number;
  salaryPerMonth: number;
  noOfMonths: number;
  salaryCost: number;
}

const electMechanicCost: ElectMechanicCost[] = [
  { id: 1, category: "Electrician", nos: 3, salaryPerMonth: 25000, noOfMonths: 12, salaryCost: 900000 },
  { id: 2, category: "Mechanic", nos: 2, salaryPerMonth: 22000, noOfMonths: 12, salaryCost: 528000 },
  { id: 3, category: "Welder", nos: 4, salaryPerMonth: 20000, noOfMonths: 10, salaryCost: 800000 },
  { id: 4, category: "Helper", nos: 6, salaryPerMonth: 15000, noOfMonths: 12, salaryCost: 1080000 },
];


export default function ElectMechanicCostTab() {
  const [electMechanic, setElectMechanic] = useState(electMechanicCost);

  const electMechanicColumns: ColumnsType<ElectMechanicCost> = [
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      width: 150,
      render: (text) => <span className="font-medium">{text}</span>,
    },
    {
      title: "Nos",
      dataIndex: "nos",
      key: "nos",
      width: 100,
      render: (text, record) => (
        <Input
          type="number"
          value={text}
          onChange={(e) => {
            const newNos = Number.parseInt(e.target.value);
            setElectMechanic((prev) =>
              prev.map((em) =>
                em.id === record.id
                  ? {
                      ...em,
                      nos: newNos,
                      salaryCost: newNos * em.salaryPerMonth * em.noOfMonths,
                    }
                  : em,
              ),
            );
          }}
          min={0}
        />
      ),
    },
    {
      title: "Salary per Month",
      dataIndex: "salaryPerMonth",
      key: "salaryPerMonth",
      width: 150,
      render: (text, record) => (
        <Input
          type="number"
          value={text}
          onChange={(e) => {
            const newSalary = Number.parseInt(e.target.value);
            setElectMechanic((prev) =>
              prev.map((em) =>
                em.id === record.id
                  ? {
                      ...em,
                      salaryPerMonth: newSalary,
                      salaryCost: em.nos * newSalary * em.noOfMonths,
                    }
                  : em,
              ),
            );
          }}
          min={0}
        />
      ),
    },
    {
      title: "No. of Months",
      dataIndex: "noOfMonths",
      key: "noOfMonths",
      width: 150,
      render: (text, record) => (
        <Input
          type="number"
          value={text}
          onChange={(e) => {
            const newMonths = Number.parseInt(e.target.value);
            setElectMechanic((prev) =>
              prev.map((em) =>
                em.id === record.id
                  ? {
                      ...em,
                      noOfMonths: newMonths,
                      salaryCost: em.nos * em.salaryPerMonth * newMonths,
                    }
                  : em,
              ),
            );
          }}
          min={0}
          max={12}
        />
      ),
    },
    {
      title: "Salary Cost",
      dataIndex: "salaryCost",
      key: "salaryCost",
      width: 150,
      render: (text) => `₹${text.toLocaleString()}`,
    },
  ];


  return (
    <Card>
      <Card.Meta title={<span className="text-xl font-bold">Elect/Mechanic Cost</span>} />
      <div className="mt-4">
        <Table
          dataSource={electMechanic}
          columns={electMechanicColumns}
          rowKey="id"
          pagination={false}
          bordered
          scroll={{ x: "max-content" }}
        />
      </div>
    </Card>
  );
}
