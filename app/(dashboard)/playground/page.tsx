import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card"
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input"
import { PlaygroundInitial } from "@/components/playground-initial";
import { DataTable } from "./data-table";
import { columns, Instructions } from "./columns";


async function getData(): Promise<Instructions[]> {
    // Fetch data from your API here.
    return [
        {
            signature: "5zUiANtZTyTRBPC4g5c5XvBoK2TZSsBwHa2veC8KzcNGQALxsrZNLQ17XghQPRZpx31wPoscmC7pa3isYTmCbaXT",
            amount: 0.00001,
            fromAddress: "5Hr7wZg7oBpVhH5nngRqzr5W7ZFUfCsfEhbziZJak7fr",
            isDust: true,
            isAddrPoisoned: true
        },
        {
            signature: "5zUiANtZTyTRBPC4g5c5XvBoK2TZSsBwHa2veC8KzcNGQALxsrZNLQ17XghQPRZpx31wPoscmC7pa3isYTmCbaXT",
            amount: 0.00001,
            fromAddress: "5Hr7wZg7oBpVhH5nngRqzr5W7ZFUfCsfEhbziZJak7fr",
            isDust: true,
            isAddrPoisoned: true
        },
        {
            signature: "5zUiANtZTyTRBPC4g5c5XvBoK2TZSsBwHa2veC8KzcNGQALxsrZNLQ17XghQPRZpx31wPoscmC7pa3isYTmCbaXT",
            amount: 0.00001,
            fromAddress: "5Hr7wZg7oBpVhH5nngRqzr5W7ZFUfCsfEhbziZJak7fr",
            isDust: true,
            isAddrPoisoned: true
        },
        {
            signature: "5zUiANtZTyTRBPC4g5c5XvBoK2TZSsBwHa2veC8KzcNGQALxsrZNLQ17XghQPRZpx31wPoscmC7pa3isYTmCbaXT",
            amount: 0.00001,
            fromAddress: "5Hr7wZg7oBpVhH5nngRqzr5W7ZFUfCsfEhbziZJak7fr",
            isDust: true,
            isAddrPoisoned: true
        },
        {
            signature: "5zUiANtZTyTRBPC4g5c5XvBoK2TZSsBwHa2veC8KzcNGQALxsrZNLQ17XghQPRZpx31wPoscmC7pa3isYTmCbaXT",
            amount: 0.00001,
            fromAddress: "5Hr7wZg7oBpVhH5nngRqzr5W7ZFUfCsfEhbziZJak7fr",
            isDust: true,
            isAddrPoisoned: true
        },
        // ...
    ]
}

const PlaygroundPage = async () => {

    const searched = true;
    const data = await getData();

    return (
        <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
            <Card className="border-none drop-shadow-sm">
                <CardHeader className="gap-y-2 space-y-4">
                    <CardTitle className="text-xl line-clamp-1">
                        Playground
                    </CardTitle>
                    <div>
                        <div className="flex w-full max-w-lg items-center space-x-2">
                            <Input placeholder="Address" />
                            <Button size="sm">
                                <Search className="size-4" />
                                <p className="font-light">Fetch</p>
                            </Button>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    {searched ? <DataTable columns={columns} data={data} /> : <PlaygroundInitial />}
                </CardContent>
            </Card>
        </div>
    )
}

export default PlaygroundPage;