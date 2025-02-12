import { ReactNode } from "react";
import { Beneficiaries, ProjectOverview, TransactionDetail, Transactions } from "./el-kenya";
import {  AAProjectOverview,GroupDetail,Groups } from "./aa";

export type Route = {
  path: string;
  component?: () => ReactNode;
  children?: Route[];
};

export const routeConfig: Route[] = [
  {
    path: "el-kenya",
    component: ProjectOverview,
    children: [
      {
        path: ":projectId",
        component: ProjectOverview, // Default if no child segment is provided
        children: [
          {
            path: "beneficiaries",
            component: Beneficiaries,
          },
          {
            path: "transactions",
            component: Transactions,
            children: [
              {
                path: ":transactionId",
                component: TransactionDetail,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "aa",
    component: AAProjectOverview,
    children: [
      {
        path: ":projectId",
        component: AAProjectOverview, // Default if no child segment is provided
        children: [
          {
            path: "groups",
            component: Groups,
            children: [
              {
                path: ":groupId",
                component: GroupDetail,
              },
            ],
          },
        ],
      },
    ],
  },
];