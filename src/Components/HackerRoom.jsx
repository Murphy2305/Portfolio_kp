import  {useGLTF} from "@react-three/drei";

const HackerRoom = (props) => {
  const room = useGLTF("/models/hacker-room.glb");


  return (
    <group {...props} dispose={null}>
      <primitive
        object={room.scene}
      />

    </group>
  );
};

useGLTF.preload("/models/hacker-room.glb");

export default HackerRoom;
