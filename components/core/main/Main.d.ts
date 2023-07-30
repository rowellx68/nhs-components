/// <reference types="react" />
type MainProps = {
    size?: 's' | 'l';
} & React.HTMLAttributes<HTMLDivElement>;
declare const Main: React.FC<MainProps>;
export default Main;
