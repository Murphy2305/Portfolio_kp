import { useGSAP } from "@gsap/react";
import { Center, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useCallback, useRef, useLayoutEffect } from "react";

const Rings = ({ position }) => {
  const refList = useRef([]);
  const groupRef = useRef();

  // Function to collect references
  const getRef = useCallback((mesh) => {
    if (mesh && !refList.current.includes(mesh)) {
      refList.current.push(mesh);
    }
  }, []);

  const texture = useTexture("textures/rings.png");

  // Set initial position using useLayoutEffect instead of useFrame
  useLayoutEffect(() => {
    if (groupRef.current) {
      groupRef.current.position.set(-7.5, 4, 0);
    }
  }, [position]);

  useGSAP(
    () => {
      if (refList.current.length === 0) return;

      gsap
        .timeline({
          repeat: -1,
          repeatDelay: 0.5,
        })
        .to(
          refList.current.map((r) => r.rotation),
          {
            y: `+=${Math.PI * 2}`,
            x: `-=${Math.PI * 2}`,
            duration: 2.5,
            stagger: {
              each: 0.15,
            },
          }
        );
    },
    {
      dependencies: [position],
    }
  );

  return (
    <group ref={groupRef}>
      <Center>
        <group scale={0.5}>
          {Array.from({ length: 4 }, (_, index) => (
            <mesh key={index} ref={getRef}>
              <torusGeometry args={[(index + 1) * 0.5, 0.1]} />
              <meshMatcapMaterial matcap={texture} toneMapped={false} />
            </mesh>
          ))}
        </group>
      </Center>
    </group>
  );
};

export default Rings;