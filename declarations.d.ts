declare module "ui" {
    export class View {
        /**
         * View width.
         */
        width: number;
        height: number;

        // props: Partial<this>;
    }
    export class TextBase extends View {
        text: string;
    }
    export class Button extends TextBase {
        tap: () => void;
    }
    export class Label extends TextBase {
    }
}

declare namespace JSX {
    interface ElementAttributesProperty {
        // props;
    }
}