import {randomPosition} from '../Utils';

describe('Utils', () => {

  it('should throw oversize error if array over the limit', () => {
    const list = [1,3,4,5,6,7,8,9,10];
    expect(()=>randomPosition(list)).to.throw(Error)
  });
  it('should generate next position randomly', () => {
    const list = [1, 4, 6];
    const foundDuplicated = list.indexOf(randomPosition(list)) !== -1;
    expect(foundDuplicated).to.be.false
  });

});


