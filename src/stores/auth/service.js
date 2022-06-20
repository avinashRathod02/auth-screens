import Request from "utils/request";

export const login = (data) => Request.post("/practical/login.php", data);
