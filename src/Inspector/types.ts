export type ElementData = {
  tag: string;
  attributes: Record<string, string>;
  selector: string | null | undefined;
  htmlBox: DOMRect;
  element: HTMLElement;
  success: boolean;
};

export type InspectorProps = {
  onElementClick?: (e: MouseEvent, data: ElementData) => void;
  update?: (delta: number) => void;
  startMessage?: string;
  countdownTimeInSeconds?: number;
  highlightColor?: string;
  falseHighlightColor?: string;
};
