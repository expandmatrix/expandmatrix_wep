declare module 'react-dnd' {
  import { ReactNode, ComponentType } from 'react';

  export interface DndProviderProps {
    backend: any;
    children: ReactNode;
    context?: any;
    options?: any;
  }

  export const DndProvider: ComponentType<DndProviderProps>;

  export interface DragSourceMonitor {
    canDrag(): boolean;
    isDragging(): boolean;
    getDropResult(): any;
    didDrop(): boolean;
    getInitialClientOffset(): { x: number; y: number } | null;
    getInitialSourceClientOffset(): { x: number; y: number } | null;
    getClientOffset(): { x: number; y: number } | null;
    getDifferenceFromInitialOffset(): { x: number; y: number } | null;
    getSourceClientOffset(): { x: number; y: number } | null;
  }

  export interface DropTargetMonitor {
    canDrop(): boolean;
    isOver(options?: { shallow?: boolean }): boolean;
    getItemType(): string | symbol | null;
    getItem(): any;
    getDropResult(): any;
    didDrop(): boolean;
    getInitialClientOffset(): { x: number; y: number } | null;
    getInitialSourceClientOffset(): { x: number; y: number } | null;
    getClientOffset(): { x: number; y: number } | null;
    getDifferenceFromInitialOffset(): { x: number; y: number } | null;
    getSourceClientOffset(): { x: number; y: number } | null;
  }

  export interface DragSourceSpec<Props, DragObject, DropResult> {
    type: string | symbol | ((props: Props) => string | symbol);
    item: DragObject | ((props: Props, monitor: DragSourceMonitor) => DragObject);
    previewOptions?: any;
    options?: any;
    begin?(props: Props, monitor: DragSourceMonitor): void;
    end?(item: DragObject | undefined, monitor: DragSourceMonitor): void;
    canDrag?(props: Props, monitor: DragSourceMonitor): boolean;
    isDragging?(props: Props, monitor: DragSourceMonitor): boolean;
  }

  export interface DropTargetSpec<Props, DragObject, DropResult> {
    accept: string | symbol | Array<string | symbol>;
    options?: any;
    drop?(item: DragObject, monitor: DropTargetMonitor, component: any): DropResult | undefined;
    hover?(item: DragObject, monitor: DropTargetMonitor, component: any): void;
    canDrop?(item: DragObject, monitor: DropTargetMonitor): boolean;
  }

  export function useDrag<DragObject = any, DropResult = any, CollectedProps = any>(
    spec: () => DragSourceSpec<any, DragObject, DropResult> | DragSourceSpec<any, DragObject, DropResult>,
    deps?: any[]
  ): [CollectedProps, any, any];

  export function useDrop<DragObject = any, DropResult = any, CollectedProps = any>(
    spec: () => DropTargetSpec<any, DragObject, DropResult> | DropTargetSpec<any, DragObject, DropResult>,
    deps?: any[]
  ): [CollectedProps, any];
}

declare module 'react-dnd-html5-backend' {
  export const HTML5Backend: any;
}
