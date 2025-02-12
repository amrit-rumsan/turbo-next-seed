import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html>
      {/* <nav>
        <a href="/el-kenya/123">Project Overview</a> |
        <a href="/el-kenya/123/beneficiaries">Beneficiaries</a> |
        <a href="/el-kenya/123/transactions">Transactions</a>
      </nav> */}
      <body>{children}</body>
    </html>
  );
}