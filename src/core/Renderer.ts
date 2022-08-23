import { Component } from "./component/Component";
import { Stage } from "./Stage";

export interface Renderer {
  render(compRoot: Component): void;
  clean(): void;
  getImageData(): string;
  setCanvas(canvas: any): void;
  stage: Stage;
  canvas: any;
}
