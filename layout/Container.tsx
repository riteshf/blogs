import type { ComponentChildren } from "preact";

type Props = {
  children: ComponentChildren;
};

const Container = (props: Props) => {
  return <div class="px-4 mx-auto max-w-screen-xl">{props.children}</div>;
};

export default Container;
