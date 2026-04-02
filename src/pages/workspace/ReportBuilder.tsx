import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Plus, Trash2, GripVertical, Eye, Save, Send, ChevronDown, Type, BarChart3, MapPin, AlertTriangle, Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

type BlockType = "heading" | "text" | "metric" | "risk" | "chart" | "image" | "recommendation";

interface Block {
  id: string;
  type: BlockType;
  content: Record<string, string>;
}

const blockTypes: { type: BlockType; label: string; icon: any }[] = [
  { type: "heading", label: "Section Heading", icon: Type },
  { type: "text", label: "Text Block", icon: FileText },
  { type: "metric", label: "Key Metric", icon: BarChart3 },
  { type: "risk", label: "Risk Signal", icon: AlertTriangle },
  { type: "recommendation", label: "Recommendation", icon: MapPin },
  { type: "chart", label: "Chart Placeholder", icon: BarChart3 },
  { type: "image", label: "Image Placeholder", icon: Image },
];

const templates = [
  { name: "Diagnostic Report", blocks: ["heading", "text", "metric", "metric", "metric", "risk", "risk", "text", "recommendation"] },
  { name: "Strategic Brief", blocks: ["heading", "text", "metric", "metric", "text", "recommendation", "recommendation"] },
  { name: "Scenario Analysis", blocks: ["heading", "text", "metric", "chart", "risk", "risk", "text", "recommendation"] },
];

export default function ReportBuilder() {
  const [title, setTitle] = useState("Untitled Report");
  const [sector, setSector] = useState("Land Systems");
  const [blocks, setBlocks] = useState<Block[]>([
    { id: "1", type: "heading", content: { text: "Executive Summary" } },
    { id: "2", type: "text", content: { text: "Enter your analysis here..." } },
  ]);
  const [showBlockPicker, setShowBlockPicker] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);
  const { toast } = useToast();

  const addBlock = (type: BlockType) => {
    const defaults: Record<BlockType, Record<string, string>> = {
      heading: { text: "New Section" },
      text: { text: "" },
      metric: { value: "0", label: "Metric Label", trend: "—" },
      risk: { title: "Risk Title", severity: "high", description: "" },
      recommendation: { title: "Recommendation", priority: "medium", description: "" },
      chart: { caption: "Chart: Data Visualization" },
      image: { caption: "Image: Visual Asset" },
    };
    setBlocks([...blocks, { id: Date.now().toString(), type, content: defaults[type] }]);
    setShowBlockPicker(false);
  };

  const updateBlock = (id: string, field: string, value: string) => {
    setBlocks(blocks.map(b => b.id === id ? { ...b, content: { ...b.content, [field]: value } } : b));
  };

  const removeBlock = (id: string) => {
    setBlocks(blocks.filter(b => b.id !== id));
  };

  const loadTemplate = (templateIndex: number) => {
    const t = templates[templateIndex];
    setBlocks(t.blocks.map((type, i) => {
      const defaults: Record<string, Record<string, string>> = {
        heading: { text: i === 0 ? "Executive Summary" : "Section " + (i + 1) },
        text: { text: "" },
        metric: { value: "—", label: "Metric", trend: "—" },
        risk: { title: "Risk Signal", severity: "high", description: "" },
        recommendation: { title: "Recommendation", priority: "medium", description: "" },
        chart: { caption: "Data Visualization" },
        image: { caption: "Visual Asset" },
      };
      return { id: (i + 1).toString(), type: type as BlockType, content: defaults[type] || { text: "" } };
    }));
    toast({ title: "Template loaded", description: `${t.name} template applied.` });
  };

  const handleSave = () => {
    toast({ title: "Report saved", description: "Draft saved successfully." });
  };

  const handlePublish = () => {
    toast({ title: "Report published", description: "Report is now available in the portal." });
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground mb-1">Report Builder</h1>
          <p className="text-sm text-muted-foreground">Create modular intelligence reports for client delivery.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={() => setPreviewMode(!previewMode)} className="border-border text-foreground gap-2">
            <Eye className="h-4 w-4" /> {previewMode ? "Edit" : "Preview"}
          </Button>
          <Button variant="outline" size="sm" onClick={handleSave} className="border-border text-foreground gap-2">
            <Save className="h-4 w-4" /> Save
          </Button>
          <Button size="sm" onClick={handlePublish} className="bg-primary text-primary-foreground gap-2">
            <Send className="h-4 w-4" /> Publish
          </Button>
        </div>
      </motion.div>

      {/* Meta */}
      <div className="atlas-card p-6 space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-xs text-muted-foreground mb-1 block">Report Title</label>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} className="bg-secondary border-border text-foreground font-display text-lg" />
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="text-xs text-muted-foreground mb-1 block">Sector</label>
              <select value={sector} onChange={(e) => setSector(e.target.value)} className="w-full bg-secondary border border-border text-foreground rounded-md px-3 py-2 text-sm">
                <option>Land Systems</option><option>Ocean & Water</option><option>Human Health</option><option>Infrastructure</option><option>Economic Flows</option><option>Governance</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="text-xs text-muted-foreground mb-1 block">Template</label>
              <select onChange={(e) => loadTemplate(parseInt(e.target.value))} className="w-full bg-secondary border border-border text-foreground rounded-md px-3 py-2 text-sm">
                <option value="">Select template...</option>
                {templates.map((t, i) => <option key={t.name} value={i}>{t.name}</option>)}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Blocks */}
      <div className="space-y-3">
        {blocks.map((block) => (
          <motion.div key={block.id} layout initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="atlas-card p-4 group">
            {previewMode ? (
              <PreviewBlock block={block} />
            ) : (
              <div className="flex gap-3">
                <div className="flex flex-col items-center pt-2">
                  <GripVertical className="h-4 w-4 text-muted-foreground cursor-grab" />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="atlas-chip text-xs">{block.type}</span>
                    <button onClick={() => removeBlock(block.id)} className="text-muted-foreground hover:text-destructive transition-colors opacity-0 group-hover:opacity-100">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <BlockEditor block={block} onUpdate={updateBlock} />
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Add Block */}
      <div className="relative">
        <Button variant="outline" onClick={() => setShowBlockPicker(!showBlockPicker)} className="w-full border-dashed border-border text-muted-foreground hover:text-foreground hover:border-primary/30 gap-2">
          <Plus className="h-4 w-4" /> Add Block <ChevronDown className="h-3 w-3" />
        </Button>
        {showBlockPicker && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="absolute top-full mt-2 left-0 right-0 atlas-card p-3 grid grid-cols-2 md:grid-cols-4 gap-2 z-10">
            {blockTypes.map(bt => (
              <button key={bt.type} onClick={() => addBlock(bt.type)} className="flex items-center gap-2 p-3 rounded-md bg-secondary hover:bg-primary/10 hover:text-primary transition-colors text-sm text-foreground">
                <bt.icon className="h-4 w-4" /> {bt.label}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}

function BlockEditor({ block, onUpdate }: { block: Block; onUpdate: (id: string, field: string, value: string) => void }) {
  switch (block.type) {
    case "heading":
      return <Input value={block.content.text} onChange={(e) => onUpdate(block.id, "text", e.target.value)} className="bg-secondary border-border text-foreground font-display text-lg font-semibold" />;
    case "text":
      return <Textarea value={block.content.text} onChange={(e) => onUpdate(block.id, "text", e.target.value)} className="bg-secondary border-border text-foreground min-h-[100px]" placeholder="Write your analysis..." />;
    case "metric":
      return (
        <div className="grid grid-cols-3 gap-2">
          <Input value={block.content.value} onChange={(e) => onUpdate(block.id, "value", e.target.value)} className="bg-secondary border-border text-foreground" placeholder="Value" />
          <Input value={block.content.label} onChange={(e) => onUpdate(block.id, "label", e.target.value)} className="bg-secondary border-border text-foreground" placeholder="Label" />
          <Input value={block.content.trend} onChange={(e) => onUpdate(block.id, "trend", e.target.value)} className="bg-secondary border-border text-foreground" placeholder="Trend" />
        </div>
      );
    case "risk":
      return (
        <div className="space-y-2">
          <div className="flex gap-2">
            <Input value={block.content.title} onChange={(e) => onUpdate(block.id, "title", e.target.value)} className="bg-secondary border-border text-foreground flex-1" placeholder="Risk title" />
            <select value={block.content.severity} onChange={(e) => onUpdate(block.id, "severity", e.target.value)} className="bg-secondary border border-border text-foreground rounded-md px-3 text-sm">
              <option value="critical">Critical</option><option value="high">High</option><option value="moderate">Moderate</option>
            </select>
          </div>
          <Textarea value={block.content.description} onChange={(e) => onUpdate(block.id, "description", e.target.value)} className="bg-secondary border-border text-foreground min-h-[60px]" placeholder="Risk description..." />
        </div>
      );
    case "recommendation":
      return (
        <div className="space-y-2">
          <div className="flex gap-2">
            <Input value={block.content.title} onChange={(e) => onUpdate(block.id, "title", e.target.value)} className="bg-secondary border-border text-foreground flex-1" placeholder="Recommendation" />
            <select value={block.content.priority} onChange={(e) => onUpdate(block.id, "priority", e.target.value)} className="bg-secondary border border-border text-foreground rounded-md px-3 text-sm">
              <option value="high">High</option><option value="medium">Medium</option><option value="low">Low</option>
            </select>
          </div>
          <Textarea value={block.content.description} onChange={(e) => onUpdate(block.id, "description", e.target.value)} className="bg-secondary border-border text-foreground min-h-[60px]" placeholder="Details..." />
        </div>
      );
    case "chart":
    case "image":
      return (
        <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
          <p className="text-sm text-muted-foreground">{block.type === "chart" ? "Chart" : "Image"} placeholder</p>
          <Input value={block.content.caption} onChange={(e) => onUpdate(block.id, "caption", e.target.value)} className="bg-secondary border-border text-foreground mt-3 max-w-xs mx-auto text-center text-sm" placeholder="Caption" />
        </div>
      );
    default:
      return null;
  }
}

function PreviewBlock({ block }: { block: Block }) {
  switch (block.type) {
    case "heading":
      return <h2 className="font-display text-xl font-bold text-foreground">{block.content.text}</h2>;
    case "text":
      return <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap">{block.content.text || "..."}</p>;
    case "metric":
      return (
        <div className="bg-secondary/50 rounded-lg p-4 inline-block">
          <p className="font-display text-2xl font-bold text-primary">{block.content.value}</p>
          <p className="text-sm text-foreground">{block.content.label}</p>
          <p className="text-xs text-muted-foreground">{block.content.trend}</p>
        </div>
      );
    case "risk":
      return (
        <div className="border-l-2 border-destructive pl-4">
          <div className="flex items-center gap-2 mb-1">
            <AlertTriangle className="h-4 w-4 text-destructive" />
            <span className="text-xs font-medium text-destructive uppercase">{block.content.severity}</span>
          </div>
          <h3 className="font-display text-base font-semibold text-foreground">{block.content.title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{block.content.description}</p>
        </div>
      );
    case "recommendation":
      return (
        <div className="border-l-2 border-primary pl-4">
          <span className="text-xs font-medium text-primary uppercase">{block.content.priority} priority</span>
          <h3 className="font-display text-base font-semibold text-foreground">{block.content.title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{block.content.description}</p>
        </div>
      );
    case "chart":
    case "image":
      return (
        <div className="bg-secondary/30 rounded-lg p-12 text-center border border-dashed border-border">
          <p className="text-sm text-muted-foreground">[{block.content.caption}]</p>
        </div>
      );
    default:
      return null;
  }
}
