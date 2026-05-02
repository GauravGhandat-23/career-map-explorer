import { Course } from "@/data/courses";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { LucideIcon, ArrowRight, Briefcase, Wrench, Sparkles, GraduationCap } from "lucide-react";

const getIcon = (name: string): LucideIcon => {
  const Icon = (Icons as unknown as Record<string, LucideIcon>)[name];
  return Icon || Icons.Circle;
};

interface Props {
  course: Course | null;
  onClose: () => void;
}

const levelStyles = {
  Beginner: "bg-warning/15 border-warning/50 text-warning",
  Intermediate: "bg-accent/15 border-accent/50 text-accent",
  Advanced: "bg-primary/15 border-primary/50 text-primary",
  Expert: "bg-destructive/15 border-destructive/50 text-destructive",
} as const;

export const CourseDetailDrawer = ({ course, onClose }: Props) => {
  if (!course) return null;
  const Icon = getIcon(course.icon);

  return (
    <Sheet open={!!course} onOpenChange={(o) => !o && onClose()}>
      <SheetContent className="w-full sm:max-w-xl overflow-y-auto bg-card border-border">
        <SheetHeader className="text-left">
          <div className="flex items-start gap-4 mb-2">
            <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow shrink-0">
              <Icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <div>
              <Badge variant="secondary" className="mb-2">
                {course.category}
              </Badge>
              <SheetTitle className="font-display text-2xl text-foreground">
                {course.name}
              </SheetTitle>
              <SheetDescription className="text-muted-foreground mt-1">
                {course.description}
              </SheetDescription>
            </div>
          </div>
        </SheetHeader>

        <div className="mt-8 space-y-8">
          <section>
            <div className="flex items-center gap-2 mb-3 text-success">
              <Sparkles className="w-4 h-4" />
              <h3 className="font-display font-semibold">Skills You Gain</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {course.skills.map((s) => (
                <Badge key={s} className="bg-success/15 text-success hover:bg-success/25 border border-success/30">
                  {s}
                </Badge>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-3 text-primary">
              <Wrench className="w-4 h-4" />
              <h3 className="font-display font-semibold">Tools & Technologies</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {course.tools.map((t) => (
                <Badge key={t} variant="outline" className="border-primary/40 text-primary">
                  {t}
                </Badge>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-4 text-accent">
              <Briefcase className="w-4 h-4" />
              <h3 className="font-display font-semibold">Career Roadmap</h3>
            </div>
            <div className="relative">
              <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gradient-to-b from-warning via-primary to-destructive" />
              <div className="space-y-4">
                {course.careerPath.map((step, i) => (
                  <motion.div
                    key={step.level}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 relative"
                  >
                    <div
                      className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold z-10 shrink-0 ${levelStyles[step.level]}`}
                    >
                      {i + 1}
                    </div>
                    <div className={`flex-1 p-4 rounded-lg border ${levelStyles[step.level]}`}>
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <div>
                          <div className="text-[10px] uppercase tracking-wider opacity-80 font-semibold">
                            {step.level}
                            {step.experience && ` • ${step.experience}`}
                          </div>
                          <div className="font-semibold text-sm text-foreground">{step.role}</div>
                        </div>
                        {step.salary && (
                          <Badge variant="outline" className="border-current text-current font-mono text-[11px]">
                            {step.salary}
                          </Badge>
                        )}
                      </div>

                      {step.responsibilities && step.responsibilities.length > 0 && (
                        <ul className="mt-3 space-y-1">
                          {step.responsibilities.map((r) => (
                            <li
                              key={r}
                              className="text-xs text-muted-foreground flex items-start gap-2"
                            >
                              <ArrowRight className="w-3 h-3 mt-0.5 shrink-0 opacity-70" />
                              <span>{r}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {step.certifications && step.certifications.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {step.certifications.map((c) => (
                            <Badge
                              key={c}
                              variant="secondary"
                              className="text-[10px] py-0 px-2 h-5"
                            >
                              🎓 {c}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {course.relatedRoles && course.relatedRoles.length > 0 && (
            <section>
              <div className="flex items-center gap-2 mb-3 text-warning">
                <Briefcase className="w-4 h-4" />
                <h3 className="font-display font-semibold">Related Job Roles</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {course.relatedRoles.map((r) => (
                  <Badge
                    key={r}
                    className="bg-warning/15 text-warning hover:bg-warning/25 border border-warning/30"
                  >
                    {r}
                  </Badge>
                ))}
              </div>
            </section>
          )}

        </div>
      </SheetContent>
    </Sheet>
  );
};
