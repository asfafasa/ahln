/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 public/models/Animate.glb 
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Animate(props) {
  const { nodes, materials } = useGLTF("./models/Animate.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.imagetostl_mesh0.geometry}
        material={materials.mat0}
      />
    </group>
  );
}

useGLTF.preload("./models/Animate.glb");
