use crate::algorithms::random_search::random_search;

mod algorithms {
    pub mod random_search;
}

mod helpers;
fn main() {
    let lower = [-5.0, -5.0, -5.0];
    let upper = [5.0, 5.0, 5.0];
    let result = random_search(&helpers::sphere_f_3d, &lower, &upper, 10000);

    println!("Best value is: {}", result.0);
    println!("The are at the values: {:?}", result.1);
}
