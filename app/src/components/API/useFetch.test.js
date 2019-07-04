import { renderHook, cleanup, act } from "react-hooks-testing-library";

import useFetch from "./useFetch";

describe("useFetch", () => {
  afterEach(() => cleanup);

  it("should fetch a live response with id:1", done => {
    // TODO: update unit test on release of react 16.9.0
    // warnings are due to library checking for closeness with reality
    // https://react-hooks-testing-library.netlify.com/usage/advanced-hooks#async
    // https://github.com/testing-library/react-testing-library/issues/281
    // https://codesandbox.io/s/vqrqvom48y?module=%2Fsrc%2Fmobx.test.tsx&previewwindow=tests

    const originalError = console.error;
    console.error = jest.fn();

    act(() => {
      const test = async () => {
        try {
          const { result, waitForNextUpdate } = renderHook(() =>
            useFetch("https://httpbin.org/get?id=1", {})
          );
          await waitForNextUpdate(); // http fetch initiates
          expect(result.current[0].isLoading).toBe(true);

          await waitForNextUpdate(); // http fetch resolves
          expect(result.current[0].isLoading).toBe(false);

          const res = result.current[0].data.args;
          expect(res.id).toEqual("1");
          done();
        } finally {
          console.error = originalError;
        }
      };

      test();
    });
  });
});
