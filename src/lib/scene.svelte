<script>
  import { T, useTask } from "@threlte/core";
  import { interactivity, Edges } from "@threlte/extras";
  import { spring } from "svelte/motion";
  interactivity();
  const scale = spring(1);
  let rotation = 0;
  useTask((delta) => {
    rotation += delta;
  });
</script>

<T.PerspectiveCamera
  makeDefault
  position={[5, 5, 5]}
  on:create={({ ref }) => {
    ref.lookAt(0, 1, 0);
  }}
/>
<T.Mesh
  rotation.y={rotation}
  position.y={1}
  scale={$scale}
  on:pointerenter={() => scale.set(1.5)}
  on:pointerleave={() => {
    scale.set(1);
  }}
  on:click={() => scale.set(0.5)}
>
  <T.BoxGeometry args={[1, 2, 1]} />
  <T.MeshBasicMaterial color="hotpink" />
</T.Mesh>
