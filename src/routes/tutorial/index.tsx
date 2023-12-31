/* eslint-disable no-console */
import { component$, useStore, useTask$ } from "@builder.io/qwik";

interface AppStore {
  count: number;
  delayCount: number;
}
export default component$(() => {
  const store = useStore<AppStore>({
    count: 0,
    delayCount: 0,
  });
  console.log("Render: <App>");
  useTask$(({ track }) => {
    // tracking `store.count`
    track(() => store.count);
    // setup a timer to copy `count => delayCount` after 2 seconds.
    const id = setTimeout(() => {
      store.delayCount = store.count + 2;
    }, 2000);
    return () => {
      // cleanup code
      clearTimeout(id);
    };
  });
  return (
    <>
      <DisplayCount store={store} />
      <DisplayDelayCount store={store} />
      <button onClick$={() => store.count++}>+1</button>
    </>
  );
});

export const DisplayCount = component$((props: { store: AppStore }) => {
  console.log("Render: <DisplayA>");
  return <>{props.store.count}</>;
});

export const DisplayDelayCount = component$((props: { store: AppStore }) => {
  console.log("Render: <DisplayB>");
  return <>{props.store.delayCount}</>;
});
