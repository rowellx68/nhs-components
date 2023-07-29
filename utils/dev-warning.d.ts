/**
 * Print a warning when using experimental components when not in production mode.
 *
 * @param component name of the experimental component.
 */
export declare const useExperimentalWarning: (component: 'tabs' | 'character-count') => void;
/**
 * Print a warning message when not in production mode.
 *
 * @param message message to print when not it production.
 */
export declare const useDevWarning: (message: string) => void;
