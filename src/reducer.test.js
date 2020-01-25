import reducer from "./reducer";
import flags from "./flags";

const slytherin = {
  id: 3,
  name: "Slytherin",
  image: flags.slytherin,
  points: 0
};

test("ADD_HOUSE_BEFORE inserts house at the front", () => {
  // given
  const state = reducer(undefined, { type: "INIT" });
  // when
  const newState = reducer(state, {
    type: "ADD_HOUSE_BEFORE",
    house: slytherin
  });
  // then
  expect(newState.length).toBe(4);
  expect(newState[0]).toBe(slytherin);
});

test("initial state has 3 houses", () => {
  const state = reducer(undefined, {});
  expect(state.length).toBe(3);
});

test("REMOVE_HOUSE_BY_NAME", () => {
  const state = reducer(undefined, {});
  const newState = reducer(state, {
    type: "REMOVE_HOUSE_BY_NAME",
    name: "Gryffindor"
  });
  expect(newState.length).toBe(2);
  expect(newState.find(i => i.name === "Gryffindor")).toBeUndefined();
});

test("ADD_HOUSE_AFTER inserts house at the end", () => {
  // given
  const state = reducer(undefined, { type: "INIT" });
  // when
  const newState = reducer(state, {
    type: "ADD_HOUSE_AFTER",
    house: slytherin
  });
  //console.log({ state, newState });
  // then
  expect(newState.length).toBe(4);
  expect(newState[3]).toBe(slytherin);
});

test("ADD_HOUSE_MIDDLE inserts house in the middle", () => {
  // given
  const state = reducer(undefined, { type: "INIT" });
  // when
  const newState = reducer(state, {
    type: "ADD_HOUSE_MIDDLE",
    house: slytherin
  });
  //console.log({ state, newState });
  // then
  expect(newState.length).toBe(4);
  expect(newState[3]).not.toBe(slytherin);
  expect(newState[0]).not.toBe(slytherin);
  expect(newState.find(obj => obj.name === "Slytherin")).toBeDefined();
  expect(newState).toContain(slytherin);
});

test("REMOVE_HOUSE_BY_INDEX", () => {
  // given
  const state = reducer(undefined, { type: "INIT" });
  // when
  const newState = reducer(state, {
    type: "REMOVE_HOUSE_BY_INDEX",
    index: 1
  });
  //console.log({ state, newState });
  // then
  expect(newState.length).toBe(2);
  expect(newState.find(obj => obj.index === 1)).toBeUndefined();
});

test("ADD_POINTS", () => {
  // given
  const state = reducer(undefined, { type: "INIT" });
  const gryffindor = state[0];
  // when
  const newState = reducer(state, {
    type: "ADD_POINTS",
    house: gryffindor,
    points: 66
  });
  // console.log({ state, newState });
  // then
  expect(newState[0].points).toBe(116);
});
