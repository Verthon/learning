import React from "react";
import { act, render } from "@testing-library/react";
import { ClientContextProvider } from "react-fetching-library";

import { UsersListContainer } from "./UsersListContainer";

describe("users list test", () => {
  const client = {
    query: async () => ({
      error: false,
      status: 200,
      payload: [{"uuid":"1","firstName":"John","lastName":"Smith","avatar":"https://image.flaticon.com/icons/svg/145/145867.svg","role":"User","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue eu enim vel pellentesque. Ut vitae eleifend dui, vehicula dignissim felis. "},{"uuid":"2","firstName":"Thomas","lastName":"Owen","avatar":"https://image.flaticon.com/icons/svg/145/145859.svg","role":"Admin","description":"Phasellus in mattis neque. Donec pretium non nibh eget consequat. Suspendisse sit amet arcu suscipit, mattis metus eget, aliquam lacus. "},{"uuid":"3","firstName":"Martin","lastName":"Bregovic","avatar":"https://image.flaticon.com/icons/svg/417/417777.svg","role":"User","description":"Aliquam consequat ipsum sollicitudin ligula tempor pretium. I"},{"uuid":"4","firstName":"Ann","lastName":"Smith","avatar":"https://image.flaticon.com/icons/svg/145/145866.svg","role":"Member","description":"Donec felis ipsum, mattis quis justo ut, maximus scelerisque elit. In tempus massa a ex ultrices, ac commodo neque sollicitudin. "},{"uuid":"5","firstName":"Monic","lastName":"Simson","avatar":"https://image.flaticon.com/icons/svg/145/145866.svg","role":"Moderator","description":"Donec felis ipsum, mattis quis justo ut, maximus scelerisque elit. In tempus massa a ex ultrices, ac commodo neque sollicitudin. "}] 
    })
  };

  it("fetches users and returns proper data on success", async () => {
    jest.useFakeTimers();

    const { getByRole, getByText } = render(
      <ClientContextProvider client={client}>
        <UsersListContainer />
      </ClientContextProvider>
    );

    expect(getByRole("loader")).toBeTruthy();

    act(() => {
      jest.runAllTimers();
    });

    expect(getByText("Smith")).toBeTruthy();
  });
});
