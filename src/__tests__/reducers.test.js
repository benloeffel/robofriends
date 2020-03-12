import { reducer } from "../store/reducers";

describe("searchUsers", () => {
  const initialStateSearch = {
    searchTerm: "",
    loading: false,
    users: [],
    error: {
      name: "",
      message: ""
    }
  };
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialStateSearch);
  });

  // it("should handle the CHANGE_SEARCHFIELD event", () => {
  //   expect(
  //     reducer(initialStateSearch, {
  //       type: CHANGE_SEARCH_TERM,
  //       payload: "abc"
  //     })
  //   ).toEqual({
  //     searchTerm: "abc"
  //   });
  // });
});

// describe("requestUsers", () => {
//   const initialStateUsers = {
//     isLoading: false,
//     users: [],
//     error: ""
//   };

//   it("should return the initial state", () => {
//     expect(reducers.requestUsers(undefined, undefined)).toEqual(
//       initialStateUsers
//     );
//   });

//   it("should handle REQUEST_USERS_PENDING", () => {
//     expect(
//       reducers.requestUsers(initialStateUsers, {
//         type: REQUEST_USERS_PENDING
//       })
//     ).toEqual({
//       error: "",
//       users: [],
//       isLoading: true
//     });
//   });

//   it("should handle REQUEST_USERS_SUCCESS", () => {
//     expect(
//       reducers.requestUsers(initialStateUsers, {
//         type: REQUEST_USERS_SUCCESS,
//         payload: [
//           {
//             id: 1,
//             username: "test",
//             email: "test@test.com"
//           }
//         ]
//       })
//     ).toEqual({
//       error: "",
//       users: [
//         {
//           id: 1,
//           username: "test",
//           email: "test@test.com"
//         }
//       ],
//       isLoading: false
//     });
//   });

//   it("should handle REQUEST_USERS_FAILED", () => {
//     expect(
//       reducers.requestUsers(initialStateUsers, {
//         type: REQUEST_USERS_FAILED,
//         payload: {
//           status: true,
//           message: "error"
//         }
//       })
//     ).toEqual({
//       isLoading: false,
//       users: [],
//       error: { status: true, message: "error" }
//     });
//   });
// });
