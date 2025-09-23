import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen items-center justify-center bg-background grid grid-cols-2 mx-[10vw] space-x-[10vw] overflow-hidden">
      <div className="col-span-1 flex flex-col">
        <div className="flex flex-col rounded-md p-2 bg-accent w-full">
          <h1 className="text-2xl font-bold">{"Hii, I'm Oliver"}</h1>
          <h2 className="text-lg text-balance">
            {
              "I'm an undergraduate researcher and current junior at the University of Oregon"
            }
          </h2>
        </div>
        <div className="flex items-center justify-center">
          <Button variant="secondary" className="p-2" asChild>
            <Link
              href="https://github.com/flamboh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/github.svg" alt="Github" width={24} height={24} />
            </Link>
          </Button>
          <Button variant="secondary" className="p-2" asChild>
            <Link
              href="https://linkedin.com/in/oliboo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/linkedin.svg"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </Link>
          </Button>
        </div>
      </div>
      <div className="col-span-1">
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
