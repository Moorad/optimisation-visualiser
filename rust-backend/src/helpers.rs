use rand::distributions::Uniform;

// Generate multiple uniform distributions
pub fn multiple_uniforms(dimensions: usize, lower: &[f32], upper: &[f32]) -> Vec<Uniform<f32>> {
    let mut uniforms: Vec<Uniform<f32>> = Vec::new();

    for i in 0..dimensions {
        uniforms.push(Uniform::from(lower[i]..upper[i]));
    }

    uniforms
}

pub fn sphere_f_3d(x: &[f32]) -> f32 {
    x.iter().map(|x| x * x).sum()
}
