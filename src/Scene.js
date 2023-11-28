import { OrbitControls } from "@react-three/drei";
import Particles from "./Particles";

const Scene = () => {
    return (
        <>
            <OrbitControls />
            { /*
            <axesHelper args={[3]} />
            <gridHelper args={[20, 20, 0xff0000, "cyan"]} />
            */ }

            <Particles />

            { /* <mesh>
                <boxGeometry />
                <meshBasicMaterial color="orange" />
            </mesh> */ }
        </>
    );
};

export default Scene;