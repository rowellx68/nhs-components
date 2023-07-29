import React, { HTMLProps } from 'react';
import { AsElementLink } from '../../../types/link-like';
type BreadcrumbItem = React.FC<AsElementLink<HTMLAnchorElement>>;
type BreadcrumbBackItem = React.FC<AsElementLink<HTMLAnchorElement>>;
type Breadcrumb = {
    Item: BreadcrumbItem;
    Back: BreadcrumbBackItem;
} & React.FC<HTMLProps<HTMLDivElement>>;
/**
 * Use breadcrumbs to help users understand where they are in the website.
 *
 * For more information on when to use this component, go the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/breadcrumb).
 *
 * @param {string} [props.className] - An optional class name to apply to the container.
 * @param {string} [props.aria-label] - An optional label for the breadcrumb. Defaults to `Breadcrumb`.
 *
 * @example
 * ```tsx
 * <Breadcrumb>
 *  <Breadcrumb.Item href="/start">Home</Breadcrumb.Item>
 *  <Breadcrumb.Item href="/step-1">Step 1</Breadcrumb.Item>
 *  <Breadcrumb.Item href="/step-2">Step 2</Breadcrumb.Item>
 *  <Breadcrumb.Back href="/step-2">Step 2</Breadcrumb.Back>
 * </Breadcrumb>
 */
declare const Breadcrumb: Breadcrumb;
export default Breadcrumb;
