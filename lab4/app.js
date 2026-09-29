import http from "http";
import {
  getAllTeams,
  addTeam,
  getTeamById,
  updateTeamById,
  deleteTeam
} from "./teams.js";
import { parse as parseUrl } from "url";

const PORT = 5001;

const sendJson = (res, statusCode, data, keyword, msg) => {
  res.writeHead(statusCode, { "content-type": "application/json" });
  res.end(JSON.stringify({ [keyword]: msg, data }));
};

const parseJSONBody = (req) => {
  return new Promise((resolve, reject) => {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (error) {
        reject(error);
      }
    });

    req.on("error", reject);
  });
};

const server = http.createServer(async (req, res) => {
  const { pathname, query } = parseUrl(req.url, true);
  const { method } = req;

  console.log("pathname:", pathname);
  console.log("query:", query);
  console.log("Method:", method);

  if (pathname === "/api/v1/teams" && method === "GET") {
    const teams = getAllTeams();

    return sendJson(res, 200, teams, "count", teams.length);
  }

  else if (pathname === "/api/v1/teams" && method === "POST") {
    const { tname, tl, email, members } = await parseJSONBody(req);

    if (!tname || !tl || !email || !members) {
      return sendJson(
        res,
        400,
        {},
        "error",
        "Team Name, Team Leader, Email, or Members not defined"
      );
    }

    const team = addTeam({ tname, tl, email, members });

    return sendJson(
      res,
      201,
      team,
      "Message",
      "Team registered successfully"
    );
  }

  else if (pathname.startsWith("/api/v1/teams/") && method === "GET") {
    const id = Number(pathname.split("/").pop());
    const team = getTeamById(id);

    if (!team) {
      return sendJson(
        res,
        404,
        {},
        "error",
        `Team with id: ${id} not found`
      );
    }

    return sendJson(res, 200, team, "Message", "Team Found");
  }

  else if (pathname.startsWith("/api/v1/teams/") && method === "PUT") {
    const id = Number(pathname.split("/").pop());
    const data = await parseJSONBody(req);

    const team = updateTeamById(id, data);

    if (!team) {
      return sendJson(
        res,
        404,
        {},
        "error",
        `Team with id: ${id} not found`
      );
    }

    return sendJson(
      res,
      200,
      team,
      "Message",
      "Team updated successfully"
    );
  }

  else if (pathname.startsWith("/api/v1/teams/") && method === "DELETE") {
    const id = Number(pathname.split("/").pop());
    const deleted = deleteTeam(id);

    if (!deleted) {
      return sendJson(
        res,
        404,
        {},
        "error",
        `Team with id: ${id} not found`
      );
    }

    return sendJson(
      res,
      200,
      {},
      "Message",
      "Team deleted successfully"
    );
  }

  else {
    res.statusCode = 404;
    res.end("Not matching");
  }
});

server.listen(PORT, () => {
  console.log("Server is running at", `http://localhost:${PORT}`);
});