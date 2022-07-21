//when  ----> cuando
//given -----> cuando
//then  ----->entonces
import maptest from "./maptest";


describe('maptest', () => {
 it('si aparece Elige una ciudad', () => {
    const result = maptest(3);
    expect(result).toBe('ok');



  })
});