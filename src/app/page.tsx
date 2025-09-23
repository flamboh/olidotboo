import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen items-center justify-center bg-background grid grid-cols-2 mx-[10vw] space-x-[10vw] overflow-hidden">
      <div className="col-span-1 flex flex-col">
        <div className="flex flex-col rounded-md py-4 w-full">
          <h1 className="text-2xl font-bold text-foreground">
            {"Hii, I'm Oliver"}
          </h1>
          <h2 className="text-lg text-accent-foreground">
            {"Researcher and Junior Computer Science Student"}
            <br />
            {"@ University of Oregon"}
          </h2>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="p-2 m-0 border size-12" asChild>
            <Link
              href="https://github.com/flamboh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/github.svg"
                alt="Github"
                width={24}
                height={24}
                className="invert"
              />
            </Link>
          </Button>
          <Button variant="ghost" className="p-2 m-0 border size-12" asChild>
            <Link
              href="mailto:hi@oli.boo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/mail.svg"
                alt="Email"
                width={24}
                height={24}
                className="invert"
              />
            </Link>
          </Button>
          <Button variant="ghost" className="p-2 m-0 border size-12" asChild>
            <Link
              href="https://x.com/flambohh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/twitter.svg"
                alt="Email"
                width={24}
                height={24}
                className="invert"
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
