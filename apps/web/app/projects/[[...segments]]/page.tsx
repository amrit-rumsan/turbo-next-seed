'use client';

import React from "react";
import { useParams, notFound } from "next/navigation";
import { routeConfig } from "@repo/ui/routeConfig";
import { findRoute } from "../../utils/findRoute";

export default function DynamicCatchAllPage() {
  const params = useParams();
  // For example, for a URL like /projects/el-kenya/123/transactions/456,
  // useParams() returns { slug: ["el-kenya", "123", "transactions", "456"] }
  const slug: string[] = (params?.segments as string[]) || [];

  // Find the matching route
  const match = findRoute(slug, routeConfig);

  // If no match is found, use the NotFound component.
  const Component = match ? match.component : notFound();

  // Render the component with the full slug and any captured route parameters.
  return <Component slug={slug} routeParams={match ? match.params : {}} />;
}
