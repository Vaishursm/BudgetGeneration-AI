"use client";

import { useState } from "react";
// Fix: Import Card from antd directly.
import {
  Input,
  Table,
  Card,
} from "antd";
import type { ColumnsType } from "antd/es/table";

interface StaffSalary {
  id: number;
  category: string;
  nos: number;
  salaryPerMonth: number;
  noOfMonths: number;
  salaryCost: number;
}

const staffSalary: StaffSalary[] = [
  { id: 1, category: "Project Manager", nos: 1, salaryPerMonth: 80000, noOfMonths: 12, salaryCost: 960000 },
  { id: 2, category: "Site Engineer", nos: 2, salaryPerMonth: 45000, noOfMonths: 12, salaryCost: 1080000 },
  { id: 3, category: "Supervisor", nos: 3, salaryPerMonth: 30000, noOfMonths: 12, salaryCost: 1080000 },
  { id: 4, category: "Safety Officer", nos: 1, salaryPerMonth: 35000, noOfMonths: 12, salaryCost: 420000 },
];

export default function StaffSalaryTab() {
  const [staff, setStaff] = useState(staffSalary);
  
  const staffColumns: ColumnsType<StaffSalary> = [
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
            setStaff((prev) =>
              prev.map((s) =>
                s.id === record.id
                  ? { ...s, nos: newNos, salaryCost: newNos * s.salaryPerMonth * s.noOfMonths }
                  : s,
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
            setStaff((prev) =>
              prev.map((s) =>
                s.id === record.id
                  ? {
                      ...s,
                      salaryPerMonth: newSalary,
                      salaryCost: s.nos * newSalary * s.noOfMonths,
                    }
                  : s,
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
            setStaff((prev) =>
              prev.map((s) =>
                s.id === record.id
                  ? {
                      ...s,
                      noOfMonths: newMonths,
                      salaryCost: s.nos * s.salaryPerMonth * newMonths,
                    }
                  : s,
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
      <Card.Meta title={<span className="text-xl font-bold">Staff Salary</span>} />
      <div className="mt-4">
        <Table
          dataSource={staff}
          columns={staffColumns}
          rowKey="id"
          pagination={false}
          bordered
          scroll={{ x: "max-content" }}
        />
      </div>
    </Card>
  );
}
