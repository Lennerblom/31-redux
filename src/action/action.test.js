import * as actions from './category-action';

describe('actions', () => {
  it('should create an action to add a category', () => {

    const category = {
      timestame: Date.now(),
      name: 'test',
      budget: 0,
      view: 'false',
    };

    const actuaAction = actions.catCreate({
      timestame: Date.now(),
      name: 'test',
      budget: 0,
      view: 'false',
    });

    expect(actuaAction.type).toBe('CATEGORY_CREATE');
    expect(actuaAction.payload.timestame).toBe(category.timestame);
    expect(actuaAction.payload.name).toBe(category.name);
    expect(actuaAction.payload.budget).toBe(category.budget);
    expect(actuaAction.payload.view).toBe(category.view);
    expect(actuaAction.payload.id).toBeDefined();
  });
});