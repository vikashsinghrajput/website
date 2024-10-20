import React from 'react'
import { useCallback } from "react";
import Particles from 'react-particles';

import { loadSlim } from "tsparticles-slim"; 

const Desgin = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
  return (
  <>
  
  <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#151418",
                    },
                },
                fpsLimit: 200,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                            // mode:"grab"
                               
                        },
                       
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 10,
                        },
                        
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                        // grab:{
                        //     distance:300,
                        //     link_linked:{
                        //         opacity:0.5
                        //     }
                        // }
                    },
                },
                particles: {
                    color: {
                        value: "#2f2e34",
                        width: 3,
                    },
                    links: {
                        color: "#2f2e34",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 0.5,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area:1000,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 6, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
  </>
  )
}

export default Desgin
