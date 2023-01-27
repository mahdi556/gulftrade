import cookie from "cookie";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const resApi = await fetch("http://localhost:8000/api/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          password: req.body.password,
          password_confirmation: req.body.c_password,
          token: req.body.token,
          email:req.body.email
        }),
      });

      const data = await resApi.json();

      if (resApi.ok) {
        res.status(200).json({ message: "Email  sent" });
      } else {
        res.status(resApi.status).json({ message: data });
        console.log("error1");
      }
    } catch (e) {
      console.log("error2");

      res.status(500).json({ message: { err: ["Server Error"] } });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
