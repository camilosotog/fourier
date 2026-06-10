import http from "k6/http";
import { check, group, sleep } from "k6";
import { SharedArray } from "k6/data";

// DATOS DINÁMICOS DESDE CSV
const csvData = new SharedArray("csv_data", () => {
  const csvContent = open("../data/data_test.csv");
  const lines = csvContent.split("\n");
  const data = [];

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();

    if (line) {
      const parts = line.split(",");

      if (parts.length >= 2) {
        data.push({
          userId: parts[0].trim(),
          postId: parts[1].trim(),
        });
      }
    }
  }

  console.log(`Registros cargados desde CSV: ${data.length}`);
  return data;
});

// CONFIGURACIÓN DE CARGA
export const options = {
  scenarios: {
    posts_load_test: {
      executor: "ramping-vus",
      startVUs: 0,
      stages: [
        { duration: "30s", target: 10 },
        { duration: "30s", target: 20 },
        { duration: "1m30s", target: 20 },
        { duration: "30s", target: 0 },
      ],
    },
  },

  thresholds: {
    http_req_duration: ["p(95)<1500"],
  },
};

export default function () {
  const row = csvData[Math.floor(Math.random() * csvData.length)];

  const params = {
    headers: {
      Accept: "application/json",
    },
    timeout: "10s",
  };

  group("GET Posts by UserId", () => {
    const response = http.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${row.userId}`,
      params
    );

    check(response, {
      "status es 200": (r) => r.status === 200,
      "tiempo respuesta < 1500ms": (r) =>
        r.timings.duration < 1500,
    });

    sleep(1);
  });

  group("GET Post by ID", () => {
    const response = http.get(
      `https://jsonplaceholder.typicode.com/posts/${row.postId}`,
      params
    );

    check(response, {
      "status es 200": (r) => r.status === 200,
      "tiempo respuesta < 1500ms": (r) =>
        r.timings.duration < 1500,
    });

    sleep(1);
  });
}