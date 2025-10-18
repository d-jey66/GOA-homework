import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "./components/ui/chart";

export default function app() {
    const chartConfig = {
        desktop: {
            label: "Desktop",
            color: "var(--chart-1)",
        },
    } satisfies ChartConfig;

    const chartData = [
        { month: "January", desktop: 120 },
        { month: "February", desktop: 95 },
        { month: "March", desktop: 180 },
        { month: "April", desktop: 75 },
        { month: "May", desktop: 200 },
        { month: "June", desktop: 130 },
        { month: "July", desktop: 160 },
        { month: "August", desktop: 110 },
        { month: "September", desktop: 190 },
        { month: "October", desktop: 85 },
        { month: "November", desktop: 140 },
        { month: "December", desktop: 220 },
    ];
    return (
        <Card className="h-[289px] ">
            <CardHeader>
                <CardTitle>Balance History</CardTitle>
            </CardHeader>
            <CardContent className="w-full h-full">
                <ChartContainer config={chartConfig} className="w-full h-full">
                    <AreaChart
                        accessibilityLayer
                        data={chartData}

                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="line" />}
                        />
                        <Area
                            dataKey="desktop"
                            type="natural"
                            fill="var(--color-desktop)"
                            fillOpacity={0.4}
                            stroke="var(--color-desktop)"
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}