import React from "react";
import { http, HttpResponse, delay } from "msw";
import { setupServer } from "msw/node";
import { fireEvent, screen } from "@testing-library/react";
// We're using our own custom render function and not RTL's render.
import { renderWithProviders } from "@/lib/test-utils";
import { UserProfile } from "../UserProfile";
import { albums, users } from "@/lib/test-data";
import { useParams } from "next/navigation";

// Mock useParams
jest.mock("next/navigation", () => ({
  useParams: jest.fn(),
}));
// We use msw to intercept the network request during the test,
// and return the response 'John Smith' after 150ms
// when receiving a get request to the `/api/user` endpoint
export const handlers = [
  http.get("https://jsonplaceholder.typicode.com/users/1", async () => {
    await delay(150);
    return HttpResponse.json(users[0]);
  }),
  http.get("https://jsonplaceholder.typicode.com/albums", async () => {
    await delay(150);
    return HttpResponse.json(albums);
  }),
];

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

beforeEach(() => {
  // Mock the userId params
  const useParamsMock = jest.requireMock("next/navigation").useParams;
  useParamsMock.mockReturnValue({ userId: "1" })
});

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

describe("fetches user and his album details", () => {
   it("fetches user and display details", async () => {
     renderWithProviders(<UserProfile />);

     // after some time, the user should be received
     expect(await screen.findByText(/Test User One's/)).toBeInTheDocument();
   });
})

