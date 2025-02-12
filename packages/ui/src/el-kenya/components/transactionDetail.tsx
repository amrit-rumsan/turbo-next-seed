import { useParams } from "next/navigation";

export default function TransactionDetail() {
  const {segments} = useParams();
  const transactionId = segments?.[segments.length - 1];
  return <h1>Transaction Detail: {transactionId}</h1>;
}