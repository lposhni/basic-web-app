export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "lena";
  }

  if (query.includes("andrew id")) {
    return "lposhni";
  }

    if (query.toLowerCase().includes("largest")) {
    const numbers = query.match(/\d+/g);
    if (numbers && numbers.length >= 2) {
      const nums = numbers.map(num => parseInt(num));
      const largest = Math.max(...nums);
      return largest.toString();
    }
  }

  // Handle addition queries
  if (query.toLowerCase().includes("plus") || query.includes("+")) {
    const numbers = query.match(/\d+/g);
    if (numbers && numbers.length >= 2) {
      const num1 = parseInt(numbers[0]);
      const num2 = parseInt(numbers[1]);
      const sum = num1 + num2;
      return sum.toString();
    }
  }
  
  return "";
}


