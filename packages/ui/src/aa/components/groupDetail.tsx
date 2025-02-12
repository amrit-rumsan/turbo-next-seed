import { useParams } from "next/navigation";

export default function GroupDetail() {
  const {segments} = useParams();
  const groupId = segments?.[segments.length - 1];
  return <h1>Group Detail: {groupId}</h1>;
}