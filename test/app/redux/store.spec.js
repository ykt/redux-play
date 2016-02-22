import {Map, List, fromJS} from 'immutable';
import {expect} from 'chai';

import makeStore from '../../../src/app/redux/store';
import {INIT_STATE} from '../../../src/app/redux/config';

describe('store', () => {

  it('is a Redux store configured with default state', () => {
    const store = makeStore();

    expect(store.getState()).to.equal(INIT_STATE);

    store.dispatch({
      type: 'ADD_ITEM',
      text: "foobar"
    });
    var newItem = store.getState().get("child").get("items").get(0).text;
    expect(newItem).to.equal("foobar");
  });

});