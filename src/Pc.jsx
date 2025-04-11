import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import PcModel from '../public/Pc'

export default function Pc() {
    return (
        <div className="h-[29rem] w-full">
            <Canvas 
                style={{ background: 'transparent' }}
            >
                <PerspectiveCamera 
                    makeDefault 
                    position={[0, 2, 30]} 
                    fov={30}
                />
                
                <ambientLight intensity={0.8} />
                <directionalLight position={[10, 10, 10]} intensity={0.8} />
                <directionalLight position={[-10, 5, -10]} intensity={0.5} />
                
                <OrbitControls
                    target={[0, 0, 0]}
                    enableZoom={false}
                    minDistance={12}
                    maxDistance={50}
                    enablePan={true}
                    autoRotate={true}
                    autoRotateSpeed={-1}
                    enableRotate={true}
                    rotateSpeed={0.5}
                    enableDamping={true}
                    dampingFactor={0.05}
                />
                
                <Suspense fallback={null}>
                    <group position={[-2.5, -4, 0]} scale={0.15}>
                        <PcModel />
                    </group>
                </Suspense>
            </Canvas>
        </div>
    )
}