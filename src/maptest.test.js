
//given -----> dado que
//when  ----> cuando
//then  ----->entonces
git add .add
const maptest = () => {
  return "Elige una ciudad:";
};


describe('maptest', () => {
  it("si aparece Elige una ciudad", () => {
    const result = maptest('Elige una ciudad:');
    expect(result).toBe('Elige una ciudad:')
  });
});
