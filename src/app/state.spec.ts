import { Action } from '@ngrx/store';
import { selectedVideoIdReducer, SelectVideo, VideoListArrived } from './state';

describe('The selectedVideoIdReducer', () => {
  it('should ignore unknown actions', () => {
    const initialState = 'asd123',
    action: Action = {
      type: 'asdasdasd'
    };
    expect(selectedVideoIdReducer(initialState, action)).toBe(initialState);
  });

  it('should update when give a VideoSelect Action', () => {
    const initialState = 'asdasd',
    action = new SelectVideo('asdadaaaa');
    expect(selectedVideoIdReducer(initialState, action)).toBe(action.id);
  });

  it ('should auto select a video only if there is no previous video selected', () => {
    const initialState = 'asdasd',
    newId = 'fkjhdhsfjh',
    action = new VideoListArrived([{
      author: 'testing',
      id: newId,
      title: 'testing video',
      viewDetails: []
    },
    {
      author: 'testing',
      id: newId,
      title: 'testing video',
      viewDetails: []
    }]);
    // expect().toBe();
  });
});
