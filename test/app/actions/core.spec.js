import {List, Map} from 'immutable';
import {expect} from 'chai';
import {uuid} from 'uuid';
import {add} from '../../../src/app/actions'

describe('handle the mind map tree', () => {

  describe('Adding new item', () => {

    it('should locate randomly', () => {
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

      const newState = add(state, "Good").get("child");
      const newItem = newState.get("items").get(0);
      const location = newState.get("location")

      expect(newItem.text).equal("Good");


    });
    //it('should locate randomly maximum 3 location', () => {
    //  const state = Map({
    //    current: Map({
    //      x: 200,
    //      y: 300
    //    }),
    //    childs: Map({
    //      position: List(),
    //      items: List()
    //    })
    //
    //  });
    //
    //  const nextState = add(state, 'Good');
    //  const newItem = nextState.get("items")
    //  console.log(newItem);
    //  //expect(nextState).to.equal(Map({
    //  //  child: Map({
    //  //    position: List(),
    //  //    items: List(Map({
    //  //      text: 'Good'
    //  //    }))
    //  //  })
    //  //}));
    //});
    it('should throw error when no possible location', () => {

    });
  });


});