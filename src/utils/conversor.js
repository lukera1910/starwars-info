// função simples para converter 1 -> I, 4 -> IV, etc
export const toRoman = (num) => {
    const roman = { 1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII' };
    return roman[num] || num;
};