import { Badge } from "@/components/ui/badge";

export default function Skill({ name, level }: {name: string, level: string}) {
  return (
    <div className="flex items-center space-x-2 p-2 border rounded-lg">
      <span className="font-medium">{name}</span>
      <Badge>{level}</Badge>
    </div>
  );
}