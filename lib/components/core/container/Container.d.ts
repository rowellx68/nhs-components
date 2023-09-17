import { HTMLAttributes, PropsWithChildren } from 'react';
export type ContainerProps = {
    fluid?: boolean;
} & HTMLAttributes<HTMLDivElement> & PropsWithChildren;
declare const Container: React.FC<ContainerProps>;
export default Container;
