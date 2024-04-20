import { AsElementLink } from '../../../types/link-like';
import { HTMLProps } from '../../../../../../../node_modules/.pnpm/react@18.2.0/node_modules/react';
type PaginationProps = HTMLProps<HTMLDivElement>;
type PaginationLinkProps = {
    previous?: boolean;
    next?: boolean;
} & AsElementLink<HTMLAnchorElement>;
type Pagination = {
    Link: React.FC<PaginationLinkProps>;
} & React.FC<PaginationProps>;
/**
 * Use pagination to allow users to navigate between related pages, for example about a single condition.
 *
 * For more information on when to use this component, go to the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/pagination).
 *
 * @link https://service-manual.nhs.uk/design-system/components/pagination
 *
 * @example
 * ```tsx
 * <Pagination>
 *  <Pagination.Link previous href="#previous">
 *   Previous
 *  </Pagination.Link>
 *  <Pagination.Link next href="#next">
 *   Next
 *  </Pagination.Link>
 * </Pagination>
 * ```
 */
declare const Pagination: Pagination;
export default Pagination;
