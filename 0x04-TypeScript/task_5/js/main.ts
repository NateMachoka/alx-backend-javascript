export interface MajorCredits {
11;rgb:0000/0000/0000credits: number;
  brand: string; // Unique identifier for MajorCredits
}

// Define MinorCredits interface
export interface MinorCredits {
  credits: number;
  brand: string; // Unique identifier for MinorCredits
}

// Function to sum major credits
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: subject1.brand // Assuming the same brand for simplicity
  };
}

// Function to sum minor credits
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: subject1.brand // Assuming the same brand for simplicity
  };
}
