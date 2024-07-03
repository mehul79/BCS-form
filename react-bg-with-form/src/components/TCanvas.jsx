import React, { Suspense } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { Background } from './Background';

export const TCanvas = () => {
    const OrthographicCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, -10, 10)

    return (
        <Canvas 
            camera={OrthographicCamera} 
            dpr={window.devicePixelRatio}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}
        >
            <Suspense fallback={null}>
                <Background />
            </Suspense>
        </Canvas>
    )
}