import { Command, CommandInput, CommandList } from "@/components/ui/command";

export function SearchBar() {
  return (
    <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList></CommandList>
    </Command>
  );
}
