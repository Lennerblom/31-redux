import reducer from './category';
import * as actions from '../action/category-action';

describe('reducers', () => {
  it('should start with zero categories', () => {
    const newState = reducer([], {});
    expect(newState).toEqual ([]);
  });

  it('should add a category', ()=>{
    const newState = reducer([], actions.catCreate({
      timestame: Date.now(),
      name: 'test',
      budget: 0,
      view: 'false',
    }));

    expect(newState.length).toBe(1);
  });
});