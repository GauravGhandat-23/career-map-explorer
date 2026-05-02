import { useCallback, useMemo, useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  Node,
  Edge,
  MarkerType,
  BackgroundVariant,
} from "reactflow";
import { nodeTypes } from "./nodes";
import { packages, Course } from "@/data/courses";
import { CourseDetailDrawer } from "./CourseDetailDrawer";

type Filter = "All" | "NCIIP+" | "NCIA+";

interface Props {
  filter: Filter;
  search: string;
  category: string;
}

export const MindMap = ({ filter, search, category }: Props) => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    nciip: true,
    ncia: true,
  });
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const togglePackage = useCallback((id: string) => {
    setExpanded((e) => ({ ...e, [id]: !e[id] }));
  }, []);

  const { nodes: initialNodes, edges: initialEdges } = useMemo(() => {
    const nodes: Node[] = [];
    const edges: Edge[] = [];

    nodes.push({
      id: "center",
      type: "center",
      position: { x: 0, y: 0 },
      data: { subtitle: "NETLEAP IT" },
      draggable: false,
    });

    const visiblePackages = packages.filter((p) => {
      if (filter === "All") return true;
      return p.name === filter;
    });

    const pkgPositions: Record<string, { x: number; y: number; side: 1 | -1 }> = {
      nciip: { x: -700, y: -120, side: -1 },
      ncia: { x: 700, y: -120, side: 1 },
    };

    visiblePackages.forEach((pkg) => {
      const pos = pkgPositions[pkg.id];
      const filteredCourses = pkg.courses.filter((c) => {
        const matchesSearch =
          !search ||
          c.name.toLowerCase().includes(search.toLowerCase()) ||
          c.skills.some((s) => s.toLowerCase().includes(search.toLowerCase()));
        const matchesCategory = category === "All" || c.category === category;
        return matchesSearch && matchesCategory;
      });

      nodes.push({
        id: `pkg-${pkg.id}`,
        type: "package",
        position: { x: pos.x, y: pos.y },
        data: {
          name: pkg.name,
          tagline: pkg.tagline,
          variant: pkg.id === "ncia" ? "red" : "blue",
          courseCount: filteredCourses.length,
          expanded: expanded[pkg.id],
          onClick: () => togglePackage(pkg.id),
        },
        draggable: false,
      });

      edges.push({
        id: `e-center-${pkg.id}`,
        source: "center",
        target: `pkg-${pkg.id}`,
        type: "smoothstep",
        animated: true,
        style: {
          stroke: pkg.id === "ncia" ? "hsl(var(--destructive))" : "hsl(var(--primary))",
          strokeWidth: 3,
        },
      });

      if (!expanded[pkg.id]) return;

      // Course layout: vertical stack offset further left/right
      const courseX = pos.x + pos.side * 380;
      const startY = pos.y - (filteredCourses.length - 1) * 40;

      filteredCourses.forEach((course, idx) => {
        const courseY = startY + idx * 80;
        const courseNodeId = `course-${course.id}`;
        nodes.push({
          id: courseNodeId,
          type: "course",
          position: { x: courseX, y: courseY },
          data: {
            ...course,
            selected: selectedCourse?.id === course.id,
            onClick: () => setSelectedCourse(course),
          },
          draggable: false,
        });

        edges.push({
          id: `e-${pkg.id}-${course.id}`,
          source: `pkg-${pkg.id}`,
          target: courseNodeId,
          type: "smoothstep",
          style: { stroke: "hsl(var(--primary) / 0.5)", strokeWidth: 2 },
        });
      });
    });

    return { nodes, edges };
  }, [expanded, filter, search, category, selectedCourse, togglePackage]);

  const nodes = initialNodes;
  const edges = initialEdges;

  return (
    <>
      <div className="w-full h-[700px] rounded-2xl border border-border overflow-hidden bg-background grid-bg">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          fitView
          fitViewOptions={{ padding: 0.15, duration: 400 }}
          minZoom={0.2}
          maxZoom={1.5}
          onInit={(instance) => {
            setTimeout(() => instance.fitView({ padding: 0.15, duration: 300 }), 50);
          }}
          defaultEdgeOptions={{
            markerEnd: { type: MarkerType.ArrowClosed },
          }}
          proOptions={{ hideAttribution: true }}
        >
          <Background variant={BackgroundVariant.Dots} gap={24} size={1} color="hsl(var(--border))" />
          <Controls />
          <MiniMap
            nodeColor={(n) => {
              if (n.type === "center") return "hsl(var(--destructive))";
              if (n.type === "package") return "hsl(var(--primary))";
              return "hsl(var(--muted-foreground))";
            }}
            maskColor="hsl(var(--background) / 0.8)"
            pannable
            zoomable
          />
        </ReactFlow>
      </div>

      <CourseDetailDrawer course={selectedCourse} onClose={() => setSelectedCourse(null)} />
    </>
  );
};
