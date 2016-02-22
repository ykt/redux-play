import {List, Map} from 'immutable';
import {expect} from 'chai';
import {uuid} from 'uuid';
import {reducer} from '../../src/app/reducer';
import {ACTION_TYPE} from '../../src/app/redux/config';

describe('reducer', () => {

  it('handling ADD_ITEM', () => {
    const state = Map({
      current: Map({
        x: 200,
        y: 300
      }),
      child: Map({
        position: List(),
        items: List()
      })

    });

    const result = reducer(state, {type: ACTION_TYPE.ADD_ITEM, text: "foobar"});
    const newItem = result.get("child").get("items").get(0);

    expect(newItem.text).equal("foobar");


  });


});