import { memo } from "react";
import { Handle, Position, NodeProps } from "reactflow";
import * as Icons from "lucide-react";
import { LucideIcon, Sparkles } from "lucide-react";

const getIcon = (name: string): LucideIcon => {
  const Icon = (Icons as unknown as Record<string, LucideIcon>)[name];
  return Icon || Icons.Circle;
};

const handleStyle = "!opacity-0 !w-1 !h-1 !border-0 !bg-transparent";

export const CenterNode = memo(({ data }: NodeProps) => (
  <div className="relative animate-fade-in">
    <Handle type="source" position={Position.Top} className={handleStyle} />
    <Handle type="source" position={Position.Bottom} className={handleStyle} />
    <Handle type="source" position={Position.Left} className={handleStyle} />
    <Handle type="source" position={Position.Right} className={handleStyle} />
    <div className="bg-gradient-red text-white rounded-full w-44 h-44 flex flex-col items-center justify-center shadow-red-glow animate-pulse-glow border-2 border-white/20">
      <Sparkles className="w-6 h-6 mb-1 opacity-80" />
      <div className="font-display font-bold text-lg leading-tight text-center px-3">
        IT Career
      </div>
      <div className="font-display font-bold text-lg leading-tight text-center px-3">
        Programs
      </div>
      <div className="text-[10px] mt-1 opacity-80 tracking-wider">{data.subtitle}</div>
    </div>
  </div>
));
CenterNode.displayName = "CenterNode";

export const PackageNode = memo(({ data }: NodeProps) => {
  const isRed = data.variant === "red";
  return (
    <div onClick={data.onClick} className="cursor-pointer animate-fade-in">
      <Handle type="target" position={Position.Top} className={handleStyle} />
      <Handle type="source" position={Position.Bottom} className={handleStyle} />
      <Handle type="source" position={Position.Left} className={handleStyle} />
      <Handle type="source" position={Position.Right} className={handleStyle} />
      <div
        className={`px-6 py-4 rounded-2xl border-2 backdrop-blur-sm transition-transform hover:scale-105 ${
          isRed
            ? "bg-gradient-red border-destructive/50 shadow-red-glow"
            : "bg-gradient-primary border-primary/50 shadow-glow"
        }`}
      >
        <div className="text-white font-display font-black text-2xl tracking-tight">
          {data.name}
        </div>
        <div className="text-white/80 text-xs mt-1 max-w-[180px]">{data.tagline}</div>
        <div className="mt-2 inline-flex items-center gap-1 text-[10px] text-white/90 bg-black/20 px-2 py-0.5 rounded-full">
          {data.expanded ? "−" : "+"} {data.courseCount} Courses
        </div>
      </div>
    </div>
  );
});
PackageNode.displayName = "PackageNode";

export const CourseNode = memo(({ data }: NodeProps) => {
  const Icon = getIcon(data.icon);
  return (
    <div onClick={data.onClick} className="cursor-pointer group animate-fade-in">
      <Handle type="target" position={Position.Top} className={handleStyle} />
      <Handle type="source" position={Position.Bottom} className={handleStyle} />
      <Handle type="source" position={Position.Right} className={handleStyle} />
      <Handle type="source" position={Position.Left} className={handleStyle} />
      <div
        className={`px-4 py-3 rounded-xl border bg-card hover:bg-secondary transition-all hover:scale-105 hover:shadow-glow flex items-center gap-3 min-w-[200px] ${
          data.selected ? "border-primary shadow-glow" : "border-border"
        }`}
      >
        <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-sm text-foreground leading-tight truncate">
            {data.shortName || data.name}
          </div>
          <div className="text-[10px] text-muted-foreground mt-0.5">{data.category}</div>
        </div>
      </div>
    </div>
  );
});
CourseNode.displayName = "CourseNode";

export const SkillNode = memo(({ data }: NodeProps) => (
  <div className="animate-fade-in">
    <Handle type="target" position={Position.Left} className={handleStyle} />
    <div className="px-3 py-1.5 rounded-full bg-success/15 border border-success/40 text-success text-xs font-medium flex items-center gap-1.5">
      <div className="w-1.5 h-1.5 rounded-full bg-success" />
      {data.label}
    </div>
  </div>
));
SkillNode.displayName = "SkillNode";

export const CareerNode = memo(({ data }: NodeProps) => {
  const colors = {
    Beginner: "bg-warning/15 border-warning/40 text-warning",
    Intermediate: "bg-accent/15 border-accent/40 text-accent",
    Advanced: "bg-primary/15 border-primary/40 text-primary",
    Expert: "bg-destructive/15 border-destructive/40 text-destructive",
  } as const;
  return (
    <div className="animate-fade-in">
      <Handle type="target" position={Position.Left} className={handleStyle} />
      <Handle type="source" position={Position.Right} className={handleStyle} />
      <div
        className={`px-3 py-2 rounded-lg border-2 text-xs font-semibold min-w-[160px] ${
          colors[data.level as keyof typeof colors]
        }`}
      >
        <div className="text-[10px] uppercase tracking-wider opacity-70">{data.level}</div>
        <div className="leading-tight">{data.role}</div>
      </div>
    </div>
  );
});
CareerNode.displayName = "CareerNode";

export const nodeTypes = {
  center: CenterNode,
  package: PackageNode,
  course: CourseNode,
  skill: SkillNode,
  career: CareerNode,
};
