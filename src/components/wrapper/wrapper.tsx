import { component$ } from "@builder.io/qwik";
import { Display, type IDisplayProps } from "../display/display";

interface IWrapperProps extends IDisplayProps {
  identifier: string;
}

export const Wrapper = component$<IWrapperProps>((props) => {
  console.log(`Wrapper-${props.identifier}`);

  return (
    <div class={`Wrapper-${props.identifier}`}>
      <Display {...props} />
    </div>
  );
});
