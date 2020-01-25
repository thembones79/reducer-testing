import {
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  fetchProductsBegin,
  fetchProductsSuccess,
  fetchProductsFailure,
  fetchProducts
} from "./actions";

const mockFetch = data => {
  return jest.fn().mockImplementation(() => {
    Promise.resolve({
      ok: true,
      json: () => data
    });
  });
};

test("fetchProductsBegin", () => {
  const result = fetchProductsBegin();
  expect(result.type).toEqual(FETCH_PRODUCTS_BEGIN);
});

test("fetchProductsSuccess", () => {
  const products = { id: 1 };
  const result = fetchProductsSuccess(products);
  console.log({ A: result.payload.products, B: products });
  expect(result.type).toEqual(FETCH_PRODUCTS_SUCCESS);
  expect(result.payload).toEqual({ products });
});

test("fetchProductsFailure", () => {
  const error = { message: "fail" };
  const result = fetchProductsFailure(error);
  console.log({ A: result.payload, B: error });
  expect(result.type).toEqual(FETCH_PRODUCTS_FAILURE);
  expect(result.payload).toEqual({ error });
});

/*

describe("fetchProducts", () => {
  it("fetches products", async () => {
    global.fetch = mockFetch({
      data: {
        childern: [{ data: { id: 1 } }, { data: { id: 2 } }]
      }
    });
    const dispatch = jest.fn();
    await fetchProducts()(dispatch);
    expect(dispatch.mock.calls.length).toBe(2);
  });
});

*/
