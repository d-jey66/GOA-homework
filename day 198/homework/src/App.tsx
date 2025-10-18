import {
  Card,
  CardContent,
} from "./components/ui/card";
import { HugeiconsIcon } from "@hugeicons/react";

const TransactionCard = ({ transactions }) => (
  <Card className="bg-white rounded-2xl shadow">
    <CardContent className="p-5 space-y-6">
      {transactions.map((t, i) => (
        <div key={i} className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={cn("p-2 rounded-full", t.bg)}>
              <HugeiconsIcon icon={t.icon} size={20} color={t.color} />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">{t.title}</p>
              <p className="text-xs text-gray-400">{t.date}</p>
            </div>
          </div>
          <span className={cn("text-sm font-semibold", t.amountColor)}>
            {t.amount}
          </span>
        </div>
      ))}
    </CardContent>
  </Card>
);

export default TransactionCard;