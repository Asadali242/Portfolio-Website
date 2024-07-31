import {
  DOMKeyframesDefinition,
  DynamicAnimationOptions,
  ElementOrSelector,
  useAnimate,
} from "framer-motion";
import { useEffect, useRef } from "react";

const TRANSITION: DynamicAnimationOptions = {
  ease: "easeInOut",
  duration: 0.5,
};

export const Animation = () => {
  const scope = useMotionTimeline(
    [
      [".bar-2", { height: 96 }, TRANSITION],
      [
        [".bar-1", { x: -48 }, TRANSITION],
        [".bar-3", { x: 48 }, TRANSITION],
      ],
      [
        [".bar-1", { height: 96, rotate: 90 }, TRANSITION],
        [".bar-3", { height: 96, rotate: -90 }, TRANSITION],
      ],
      [
        [".bar-1", { x: 96 }, TRANSITION],
        [".bar-3", { x: -96 }, TRANSITION],
      ],
      [
        [".bar-1", { rotate: 120, background: "#c5ff4a" }, TRANSITION],
        [".bar-2", { rotate: -120, background: "#c5ff4a" }, TRANSITION],
        [".bar-3", { rotate: 90 }, TRANSITION],
      ],
      [
        [
          ".bar-1",
          { rotate: 0, x: 0, height: 192, background: "#FFFFFF" },
          { ...TRANSITION, delay: 2 },
        ],
        [
          ".bar-2",
          { rotate: 0, height: 192, background: "#FFFFFF" },
          { ...TRANSITION, delay: 2 },
        ],
        [
          ".bar-3",
          { rotate: 0, x: 0, height: 192, background: "#FFFFFF" },
          { ...TRANSITION, delay: 2 },
        ],
      ],
    ],
    Infinity
  );

  return (
    <div
      ref={scope}
      className="flex items-center justify-center overflow-hidden"
    >
      <div
        style={{
          width: 96,
          height: 192,
        }}
        className="bar-1 bg-white"
      />
      <div
        style={{
          width: 96,
          height: 192,
        }}
        className="bar-2 bg-white"
      />
      <div
        style={{
          width: 96,
          height: 192,
        }}
        className="bar-3 bg-white"
      />
    </div>
  );
};

type AnimateParams = [
  ElementOrSelector,
  DOMKeyframesDefinition,
  (DynamicAnimationOptions | undefined)?
];

type Animation = AnimateParams | Animation[];

const useMotionTimeline = (keyframes: Animation[], count: number = 1) => {
  const mounted = useRef(true);

  const [scope, animate] = useAnimate();

  useEffect(() => {
    mounted.current = true;

    handleAnimate();

    return () => {
      mounted.current = false;
    };
  }, []);

  const processAnimation = async (animation: Animation) => {
    if (Array.isArray(animation[0])) {
      await Promise.all(
        animation.map(async (a) => {
          await processAnimation(a as Animation);
        })
      );
    } else {
      await animate(...(animation as AnimateParams));
    }
  };

  const handleAnimate = async () => {
    for (let i = 0; i < count; i++) {
      for (const animation of keyframes) {
        if (!mounted.current) return;
        await processAnimation(animation);
      }
    }
  };

  return scope;
};
