declare module 'nhsuk-frontend' {
  type BaseInitOptions = {
    scope: Element | Document | null;
  };

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
