import {
  // useTask$,
  // Resource,
  // useResource$,
  component$,
  useComputed$,
  useSignal,
} from "@builder.io/qwik";

// const fetchProfile = async (displayName: string): Promise<string> => {
//   await new Promise((resolve) => setTimeout(() => resolve(null), 100));

//   return displayName + " 🎪 Profile 🎫";
// };

export const Reactivity = component$(() => {
  console.log("create Signal");
  const firstName = useSignal("John");
  const lastName = useSignal("Smith");
  const showFullName = useSignal(true);

  console.log("create Computed");
  const displayName = useComputed$(() => {
    console.log("displayName computed");
    if (!showFullName.value) return firstName.value;
    return `${firstName.value} ${lastName.value}`;
  });

  const displayNameUppercase = useComputed$(() => {
    console.log("displayNameUppercase computed");
    return displayName.value.toUpperCase();
  });

  const hehehe = useComputed$(() => {
    console.log("hehehe computed");
    return displayName.value + " 🏏 " + displayNameUppercase.value;
  });

  // console.log("create Resource");
  // const profile = useResource$<string>(async ({ track }) => {
  //   // it will run first on mount (server), then re-run whenever prNumber changes (client)
  //   // this means this code will run on the server and the browser
  //   track(() => displayNameUppercase.value);
  //   console.log("fetch profile with displayName");
  //   const response = await fetchProfile(displayNameUppercase.value);
  //   console.log("fetch profile with displayName, response", response);
  //   return response;
  // });

  return (
    <div>
      <h1>Display Name: {displayName.value}</h1>
      <h2>{displayNameUppercase.value}</h2>
      <h3>{hehehe.value}</h3>
      {/* <Resource
        value={profile}
        onPending={() => <>loading...</>}
        onResolved={(profile) => <h2>{profile}</h2>}
      /> */}
      <div>
        <button
          onClick$={() => {
            console.log("set showFullName.value = true");
            showFullName.value = true;
          }}
        >
          show full name
        </button>
        <button
          onClick$={() => {
            console.log("set showFullName.value = false");
            showFullName.value = false;
          }}
        >
          only show first name
        </button>
      </div>
      <div>
        <button
          onClick$={() => {
            console.log("set firstName.value = Leo");
            firstName.value = "Leo";
          }}
        >
          Set first name to Leo
        </button>
        <button
          onClick$={() => {
            console.log("set lastName.value = Nerd");
            lastName.value = "Nerd";
          }}
        >
          Set last name to Nerd
        </button>
      </div>
      <div>
        <button
          onClick$={() => {
            console.log("set firstName.value = Una");
            firstName.value = "Una";
          }}
        >
          Set first name to Una
        </button>
        <button
          onClick$={() => {
            console.log("set lastName.value = Chen");
            lastName.value = "Chen";
          }}
        >
          Set last name to Chen
        </button>
      </div>
    </div>
  );
});
