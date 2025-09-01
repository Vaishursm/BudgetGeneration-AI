"use client";

import { useState } from "react";
// Fix: Import Card from antd directly.
import {
  Input,
  Table,
  Card,
} from "antd";
import type { ColumnsType } from "antd/es/table";


interface PipelineExpense {
  id: number;
  category: string;
  qty: number;
  costPerUnit: number;
  amount: number;
  remarks: string;
}

const pipelineExpenses: PipelineExpense[] = [
  { id: 1, category: "Water Supply", qty: 1, costPerUnit: 50000, amount: 50000, remarks: "Main water line" },
  { id: 2, category: "Sewerage", qty: 1, costPerUnit: 75000, amount: 75000, remarks: "Sewerage connection" },
  {
    id: 3,
    category: "Electrical Connection",
    qty: 1,
    costPerUnit: 100000,
    amount: 100000,
    remarks: "Main electrical supply",
  },
  { id: 4, category: "Telecom", qty: 1, costPerUnit: 25000, amount: 25000, remarks: "Internet & phone lines" },
];

export default function PipelineExpensesTab() {
  const [pipeline, setPipeline] = useState(pipelineExpenses);

  const pipelineColumns: ColumnsType<PipelineExpense> = [
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      width: 150,
      render: (text) => <span className="font-medium">{text}</span>,
    },
    {
      title: "Qty",
      dataIndex: "qty",
      key: "qty",
      width: 100,
      render: (text, record) => (
        <Input
          type="number"
          value={text}
          onChange={(e) => {
            const newQty = Number.parseInt(e.target.value);
            setPipeline((prev) =>
              prev.map((p) => (p.id === record.id ? { ...p, qty: newQty, amount: newQty * p.costPerUnit } : p)),
            );
          }}
          min={1}
        />
      ),
    },
    {
      title: "Cost per Unit",
      dataIndex: "costPerUnit",
      key: "costPerUnit",
      width: 150,
      render: (text, record) => (
        <Input
          type="number"
          value={text}
          onChange={(e) => {
            const newCost = Number.parseInt(e.target.value);
            setPipeline((prev) =>
              prev.map((p) => (p.id === record.id ? { ...p, costPerUnit: newCost, amount: p.qty * newCost } : p)),
            );
          }}
          min={0}
        />
      ),
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      width: 150,
      render: (text) => `₹${text.toLocaleString()}`,
    },
    {
      title: "Remarks",
      dataIndex: "remarks",
      key: "remarks",
      width: 200,
      render: (text, record) => (
        <Input
          value={text}
          onChange={(e) =>
            setPipeline((prev) => prev.map((p) => (p.id === record.id ? { ...p, remarks: e.target.value } : p)))
          }
        />
      ),
    },
  ];

  return (
    <Card>
      <Card.Meta title={<span className="text-xl font-bold">Pipeline Expenses</span>} />
      <div className="mt-4">
        <Table
          dataSource={pipeline}
          columns={pipelineColumns}
          rowKey="id"
          pagination={false}
          bordered
          scroll={{ x: "max-content" }}
        />
      </div>
    </Card>
  );
}
