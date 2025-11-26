import { MoveDirection, OutMode } from "@tsparticles/engine";

export const particles_options = {
  particles: {
    number: {
      value: 100,
    },
    move: {
      direction: MoveDirection.top,
      enable: true,
      outModes: {
        default: OutMode.out,
      },
      random: true,
      speed: 2,
      straight: true,
    },
    opacity: {
      animation: {
        enable: true,
        speed: 0.1,
        sync: false,
      },
      value: 0.1,
    },
    size: {
      value: 1,
    },
  },
};
