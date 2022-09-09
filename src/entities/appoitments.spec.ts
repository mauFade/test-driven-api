import { expect, test } from "vitest";
import { Appointment } from "./appointments";

test("Create an appointment", () => {
  const startsAt = new Date();
  const endsAt = new Date();

  startsAt.setDate(startsAt.getDate() + 1);
  endsAt.setDate(endsAt.getDate() + 2);

  const appointment = new Appointment({
    customer: "Jon Doe",
    endsAt,
    startsAt,
  });

  expect(appointment).toBeInstanceOf(Appointment);
  expect(appointment.customer).toBe("Jon Doe");
});

test("Customer cannot create appointment with end date before end date", () => {
  const startsAt = new Date();
  const endsAt = new Date();

  endsAt.setDate(endsAt.getDate() - 1);

  expect(() => {
    return new Appointment({
      customer: "Jon Doe",
      endsAt,
      startsAt,
    });
  }).toThrow();
});

test("Customer cannot create appointment with start date before now", () => {
  const startsAt = new Date();
  const endsAt = new Date();

  startsAt.setDate(startsAt.getDate() - 1);
  endsAt.setDate(endsAt.getDate() + 3);

  expect(() => {
    return new Appointment({
      customer: "Jon Doe",
      endsAt,
      startsAt,
    });
  }).toThrow();
});
