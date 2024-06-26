"use client";
import { commandIcon } from "@/app/utils/icons";
import { Button } from "@/components/ui/button";

import { Dialog, DialogContent, DialogTrigger } from "@radix-ui/react-dialog";
import { Command, CommandInput } from "@/components/ui/command";

import React from "react";

function SearchDailog() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="border inline-flex items-center justify-center text-sm font-medium hover:dark:bg-[#131313] hover:bg-slate-100  ease-in-out duration-200"
          >
            <p className="text-sm text-muted-foreground">Search Here...</p>
            <div className="command dark:bg-[#262626] bg-slate-200  py-[2px] pl-[5px] pr-[7px] rounded-sm ml-[10rem] flex items-center gap-2">
              {commandIcon}
              <span className="text-[9px]">F</span>
            </div>
          </Button>
        </DialogTrigger>

        <DialogContent className="p-0">
          <Command className="rounded-lg border shadow-md">
            <CommandInput placeholder="Type here"/>
            <ul className="px-3 pb-">
              <p className="p-2 text-sm text-muted-foreground">Suggestion...</p>
            </ul>
          </Command>
        </DialogContent>
        
      </Dialog>
    </div>
  );
}

export default SearchDailog;
