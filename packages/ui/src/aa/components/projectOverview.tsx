import { useParams } from "next/navigation";

export default function ProjectOverview() {
  const {segments} = useParams();
  const projectId = segments?.[segments.length - 1];
    return <h1>AA Project Overview : {projectId}</h1>;
  }