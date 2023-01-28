use std::f32::INFINITY;

use rand::prelude::Distribution;

use crate::helpers;

pub fn random_search(
    objective_func: &dyn Fn(&[f32]) -> f32,
    lower: &[f32],
    upper: &[f32],
    iter: usize,
) -> (f32, Vec<f32>) {
    let dimensions = lower.len();
    let mut rng = rand::thread_rng();
    let distribution = helpers::multiple_uniforms(dimensions, lower, upper);

    let mut min_value: (f32, Vec<f32>) = (INFINITY, Vec::new());

    for _ in 0..iter {
        let mut values: Vec<f32> = Vec::new();

        for i in 0..dimensions {
            values.push(distribution[i].sample(&mut rng));
        }

        let computed = objective_func(&values);

        if computed < min_value.0 {
            min_value = (computed, values);
        }
    }

    min_value
}
