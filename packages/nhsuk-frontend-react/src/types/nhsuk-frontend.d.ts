declare module 'nhsuk-frontend' {
  type BaseInitOptions = {
    scope: Element | Document | null;
  };

  export class Button {
    constructor(root: Element | null);
  }

  export class CharacterCount {
    constructor(root: Element | null);
  }

  export class Checkboxes {
    constructor(root: Element | null);
  }

  export class Details {
    constructor(root: Element | null);
  }

  export class ErrorSummary {
    constructor(
      root: Element | null,
      config: { disableAutoFocus: boolean } = { disableAutoFocus: false },
    );
  }

  export class Header {
    constructor(root: Element | null);
  }

  export class Radios {
    constructor(root: Element | null);
  }

  export class SkipLink {
    constructor(root: Element | null);
  }

  export class Tabs {
    constructor(root: Element | null);
  }

  export function initButtons(options: BaseInitOptions = {}): void;

  export function initCharacterCounts(options: BaseInitOptions = {}): void;

  export function initCheckboxes(options: BaseInitOptions = {}): void;

  export function initDetails(options: BaseInitOptions = {}): void;

  export function initErrorSummary(
    options: BaseInitOptions & { focusOnPageLoad: boolean } = {
      focusOnPageLoad: false,
    },
  ): void;

  export function initHeader(options: BaseInitOptions = {}): void;

  export function initRadios(options: BaseInitOptions = {}): void;

  export function initSkipLinks(options: BaseInitOptions = {}): void;

  export function initTabs(options: BaseInitOptions = {}): void;
}
