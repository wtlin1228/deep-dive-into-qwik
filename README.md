SSR HTML:

```html
<html
  lang="en-us"
  q:container="paused"
  q:version="1.2.2"
  q:render="ssr-dev"
  q:base="/build/"
  q:locale
  q:manifest-hash="dev"
>
  <!--qv q:id=0 q:key=3scc:pY_0-->
  <!--qv q:id=1 q:key=TxCF:35_3-->
  <!--qv q:s q:sref=1 q:key=-->
  <head q:head>
    <meta charset="utf-8" q:head />
    <link href="/manifest.json" rel="manifest" q:head />
    <!--qv q:id=2 q:key=zrbr:35_0-->
    <!--qv q:key=OA_0-->
    <title q:head>Welcome to Qwik</title>
    <link href="http://127.0.0.1:5173/" rel="canonical" q:id="3" q:head />
    <meta
      content="width=device-width, initial-scale=1.0"
      name="viewport"
      q:head
    />
    <link href="/favicon.svg" rel="icon" type="image/svg+xml" q:head />
    <meta name="description" content="Qwik site description" q:head />
    <!--/qv-->
    <!--/qv-->
    <!--qv q:key=35_1-->
    <script q:key="1Z_0" q:head>
      navigator.serviceWorker?.getRegistrations().then((regs) => {
        for (const reg of regs) {
          reg.unregister();
        }
      });
    </script>
    <!--/qv-->
    <link rel="stylesheet" href="/src/global.css" />
    <style q:style="lcydw1-0" hidden>
      :root {
        view-transition-name: none;
      }
    </style>
  </head>
  <body lang="en">
    <!--qv q:id=4 q:key=e0ss:35_2-->
    <!--qv q:key=zl_1-->
    <!--qv q:id=5 q:key=xYL1:zl_0-->
    <!--qv q:key=H1_2-->
    <h1>Welcome to Qwik</h1>
    <!--qv q:id=6 q:key=fuEi:H1_0-->
    <div class="Counter-leo" q:key="QP_2" q:id="7">
      <h2>LEO Counter</h2>
      <!--qv q:id=8 q:key=6wO8:QP_0-->
      <div class="Wrapper-leo" q:key="GD_1" q:id="9">
        <!--qv q:id=a q:key=XVGg:GD_0-->
        <h3 class="Display-leo" q:key="Gs_0" q:id="b">
          <!--t=c-->
          10
          <!---->
        </h3>
        <!--/qv-->
      </div>
      <!--/qv-->
      <!--qv q:id=d q:key=CCNe:QP_1-->
      <div class="Incrementor-leo" q:key="ya_0" q:id="e">
        <button
          on:click="/src/incrementor_component_increment_l08ehexzmfy.js#Incrementor_component_increment_l08EhexZMFY[0]"
          q:id="f"
        >
          increment value
        </button>
        <button
          on:click="/src/incrementor_component_decrement_u0vmeemhaz4.js#Incrementor_component_decrement_U0vmeEMhaZ4[0]"
          q:id="g"
        >
          decrement value
        </button>
      </div>
      <!--/qv-->
    </div>
    <!--/qv-->
    <!--qv q:id=h q:key=fuEi:H1_1-->
    <div class="Counter-una" q:key="QP_2" q:id="i">
      <h2>UNA Counter</h2>
      <!--qv q:id=j q:key=6wO8:QP_0-->
      <div class="Wrapper-una" q:key="GD_1" q:id="k">
        <!--qv q:id=l q:key=XVGg:GD_0-->
        <h3 class="Display-una" q:key="Gs_0" q:id="m">
          <!--t=n-->
          5
          <!---->
        </h3>
        <!--/qv-->
      </div>
      <!--/qv-->
      <!--qv q:id=o q:key=CCNe:QP_1-->
      <div class="Incrementor-una" q:key="ya_0" q:id="p">
        <button
          on:click="/src/incrementor_component_increment_l08ehexzmfy.js#Incrementor_component_increment_l08EhexZMFY[0]"
          q:id="q"
        >
          increment value
        </button>
        <button
          on:click="/src/incrementor_component_decrement_u0vmeemhaz4.js#Incrementor_component_decrement_U0vmeEMhaZ4[0]"
          q:id="r"
        >
          decrement value
        </button>
      </div>
      <!--/qv-->
    </div>
    <!--/qv-->
    <!--/qv-->
    <!--/qv-->
    <!--/qv-->
    <!--/qv-->
  </body>
</html>
```

Serialized inline functions:

```html
<script q:func="qwik/json">
  document.currentScript.qFuncs = [
    (p0) => p0.identifier,
    (p0) => p0.numberToShow.value,
  ];
</script>
```

Serialized state:

- refs
- ctx
- objs
- subs

```json
{
  "refs": {
    "f": "a!",
    "g": "a!",
    "q": "j!",
    "r": "j!"
  },
  "ctx": {},
  "objs": [
    "\u00122",
    "\u0012b",
    10,
    "leo",
    {
      "identifier": "3",
      "initialCount": "2"
    },
    "\u00114! @0",
    {
      "numberToShow": "0",
      "$$identifier": "5"
    },
    "\u00116! @1",
    "#c",
    "\u00114! @0",
    {
      "count": "0",
      "$$identifier": "9"
    },
    5,
    "una",
    {
      "identifier": "c",
      "initialCount": "b"
    },
    "\u0011d! @0",
    {
      "numberToShow": "1",
      "$$identifier": "e"
    },
    "\u0011f! @1",
    "#n",
    "\u0011d! @0",
    {
      "count": "1",
      "$$identifier": "i"
    }
  ],
  "subs": [["3 #c 7 #c"], ["3 #n g #n"]]
}
```
