"use client";

import { useState } from "react";
// Fix: Import Card from antd directly.
import {
  Input,
  Table,
  Card,
} from "antd";
import type { ColumnsType } from "antd/es/table";

interface MiscExpense {
  id: number;
  type: string;
  amount: number;
  remarks: string;
}

const miscExpenses: MiscExpense[] = [
  { id: 1, type: "Insurance", amount: 150000, remarks: "Equipment insurance" },
  { id: 2, type: "Transportation", amount: 200000, remarks: "Equipment transportation" },
  { id: 3, type: "Permits & Licenses", amount: 75000, remarks: "Various permits" },
  { id: 4, type: "Safety Equipment", amount: 100000, remarks: "Safety gear and equipment" },
];


export default function MiscTab() {
  const [misc, setMisc] = useState(miscExpenses);

  const miscColumns: ColumnsType<MiscExpense> = [
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      width: 200,
      render: (text) => <span className="font-medium">{text}</span>,
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      width: 150,
      render: (text, record) => (
        <Input
          type="number"
          value={text}
          onChange={(e) =>
            setMisc((prev) => prev.map((m) => (m.id === record.id ? { ...m, amount: Number.parseInt(e.target.value) } : m)))
          }
          min={0}
        />
      ),
    },
    {
      title: "Remarks",
      dataIndex: "remarks",
      key: "remarks",
      width: 250,
      render: (text, record) => (
        <Input
          value={text}
          onChange={(e) =>
            setMisc((prev) => prev.map((m) => (m.id === record.id ? { ...m, remarks: e.target.value } : m)))
          }
        />
      ),
    },
  ];


  return (
    <Card>
      <Card.Meta title={<span className="text-xl font-bold">Misc & Non-ERP Expenses</span>} />
      <div className="mt-4">
        <Table
          dataSource={misc}
          columns={miscColumns}
          rowKey="id"
          pagination={false}
          bordered
          scroll={{ x: "max-content" }}
        />
      </div>
    </Card>
  );
}
