type MetricType = {
  icon: string;
  title: string;
  amount: string;
};

const metricData: MetricType[] = [
  {
    icon: "/assets/widgets/metrics/personal_loan.svg",
    title: "Personal Loans",
    amount: "$2,000.00",
  },
  {
    icon: "/assets/widgets/metrics/corporate_loans.svg",
    title: "Corporate Loans",
    amount: "$100,000",
  },
  {
    icon: "/assets/widgets/metrics/business_loans.svg",
    title: "Business Loans",
    amount: "$500,000",
  },
  {
    icon: "/assets/widgets/metrics/custom_loans.svg",
    title: "Custom Loans",
    amount: "Choose Money",
  },
];

export default function Metrics() {
  return (
    <>
      {metricData.map((metric, index) => (
        <div
          className="flex gap-[12px] bg-white py-[25px] px-[27px] rounded-2xl"
          key={index}
        >
          <img src={metric.icon} alt={metric.title} />
          <div className="flex flex-col justify-between">
            <p className="text-md text-[#718EBF]">{metric.title}</p>
            <h3 className="text-xl font-bold">{metric.amount}</h3>
          </div>
        </div>
      ))}
    </>
  );
}
