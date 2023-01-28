export type ObjectiveFunction = {
    name: string;
    function: (x: number[]) => number;
    bounds: {
        lower: number[];
        upper: number[];
    };
    dimensions: number;
};

export const SphereFunction = {
    name: "Sphere function (3D)",
    function: (x: number[]) => {
        return x.reduce((prev, curr) => prev + curr ** 2, 0);
    },
    bounds: {
        lower: [-5, -5, -5],
        upper: [5, 5, 5],
    },
    dimensions: 3,
};
