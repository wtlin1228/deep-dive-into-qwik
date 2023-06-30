import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { Counter } from "~/components/counter/counter";

export default component$(() => {
  return (
    <>
      <h1>Welcome to Qwik</h1>
      <Counter initialCount={10} identifier="leo" />
      <Counter initialCount={5} identifier="una" />
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
