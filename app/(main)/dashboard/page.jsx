"use client";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import React from "react";

const Dashboard = () => {
  const data = useQuery(api.projects.getUserProjects);
  return <div></div>;
};

export default Dashboard;
