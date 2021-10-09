import { replyMock } from "../utils/tests.utils";
import healcheckController from "./healcheck.controller";

describe("Healcheck Controller", () => {
  it("should be active", async () => {
    // const example = {
    //   cpu: { system: 546000, user: 3750000 },
    //   description: "health of currency api service",
    //   memory: {
    //     external: 1154525,
    //     heapTotal: 168382464,
    //     heapUsed: 137496104,
    //     rss: 197296128,
    //   },
    //   notes: [""],
    //   release_id: "1.0.0",
    //   serviceID: "service:currency-api",
    //   status: "pass",
    //   uptime: 2.6324021,
    //   version: "1",
    // };

    const result = await healcheckController({}, replyMock)
    expect(result.serviceID).toBe("service:currency-api");
    expect(result.uptime).toBeGreaterThan(0);
  });
});
