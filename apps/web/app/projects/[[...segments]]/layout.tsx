import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <nav>
        <a href="/projects/el-kenya/123">Project Overview</a> |
        <a href="/projects/el-kenya/123/beneficiaries">Beneficiaries</a> |
        <a href="/projects/el-kenya/123/transactions">Transactions</a> |
        <a href="/projects/el-kenya/123/transactions/456">Transaction Detail</a>
      </nav>
      <main>{children}</main>
    </div>
  );
}