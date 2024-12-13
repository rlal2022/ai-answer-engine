import React from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
  DrawerFooter,
} from "@/components/ui/drawer";
import Cards from "./Cards";

export default function DrawerDemo() {
  return (
    <Drawer direction="right" className="gray-950">
      <DrawerTrigger asChild>
        <Button variant="outline">Articles</Button>
      </DrawerTrigger>
      <DrawerContent>
        <Cards />
        {/* {articles.map((article, idx) => {
          return (
            <div className="p-4" key={idx}>
              <Card className="w-[700px] h-max-400 bg-zinc-900 border-none text-white overflow-hidden">
                <CardHeader>
                  <CardTitle className="font-bold text-lg md:text-x1 truncate">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-md text-white truncate">
                    {article.publisher}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{article.summary}</p>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="border-none rounded-full w-8 h-8 flex items-center justify-center mt-4 hover:bg-gray-300"
                    >
                      <Link className="w-4 h-4" color="black" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          );
        })} */}

        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
