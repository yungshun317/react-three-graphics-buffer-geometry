import * as THREE from "three";
import {useRef} from "react";
import {useFrame} from "@react-three/fiber";

const Particles = () => {
    const particles = useRef();

    useFrame((_, delta) => {
        particles.current.rotation.y += delta * 0.1;
        particles.current.rotation.x += delta * 0.1;
    })

    const verticesAmount = 2000;
    const positionArray = new Float32Array(verticesAmount * 3);

    for (let i = 0; i < verticesAmount * 3; i++) {
        positionArray[i] = (Math.random() - 0.5) * 10.0;
    }

    return (
        <points ref={particles}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={positionArray.length / 3}
                    itemSize={3}
                    array={positionArray}
                />
            </bufferGeometry>
        </points>
    );

    /*
    const positionArray = new Float32Array([0, 0, 0, 0, 1, 0, 1, 0, 0]);

    return (
        <mesh>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={3}
                    itemSize={3}
                    array={positionArray}
                />
            </bufferGeometry>
            <meshBasicMaterial color="purple" side={THREE.DoubleSide} />
        </mesh>
    );
    */
};

export default Particles;