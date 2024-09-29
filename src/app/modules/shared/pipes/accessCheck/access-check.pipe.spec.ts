import { AccessCheckPipe } from './access-check.pipe';

describe('AccessCheckPipe', () => {
  it('create an instance', () => {
    const pipe = new AccessCheckPipe();
    expect(pipe).toBeTruthy();
  });
});
