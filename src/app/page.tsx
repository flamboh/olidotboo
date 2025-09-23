import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen md:items-center md:justify-center bg-background md:grid md:grid-cols-2 md:mx-[10vw] mx-[5vw] md:space-x-[10vw] overflow-hidden flex flex-col items-center justify-center md:gap-y-0 gap-y-4">
      <div className="col-span-1 flex flex-col">
        <div className="flex flex-col rounded-md py-4 w-full">
          <h1 className="text-2xl font-bold text-foreground flex items-baseline gap-2">
            {"hii, i'm oliver"}
            <span className="text-muted text-pretty text-sm">he/they</span>
          </h1>

          <h2 className="text-lg text-accent-foreground text-pretty">
            {"researcher and computer science 3rd year"}
            <br />
            {"@ uoregon"}
          </h2>
        </div>
        <div className="flex items-center gap-4 md:justify-start justify-center">
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
          <Button variant="ghost" className="p-2 m-0 border size-12" asChild>
            <Link
              href="https://instagram.com/flamb0h"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/instagram.svg"
                alt="Email"
                width={24}
                height={24}
                className="invert"
              />
            </Link>
          </Button>
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-y-4 items-center">
        <Card className="w-[min(90vw,24rem)] gap-y-2">
          <CardHeader>
            <CardTitle>networks research</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-pretty text-primary">
              building internal tools with svelte, typescript, and python to
              analyze university-scale network traffic. supported by a
              prestigious nsf stipend.
            </p>
          </CardContent>
        </Card>
        <Card className="w-[min(90vw,24rem)] gap-y-2">
          <CardHeader>
            <CardTitle>
              <Link
                href="https://thestoning.net"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                the stoning
              </Link>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-pretty text-primary">
              music publication website for album listening club. built as a
              team of 4 developers using react. the publication hosts articles,
              reviews, and interviews all created by club members.
            </p>
          </CardContent>
        </Card>
        <Card className="w-[min(90vw,24rem)] gap-y-2">
          <CardHeader>
            <CardTitle>
              <Link
                href="https://tagium.oli.boo"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                tagium
              </Link>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-pretty text-primary">
              modern way to update mp3 tags in your browser.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
