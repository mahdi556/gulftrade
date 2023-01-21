export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const resApi = await fetch("http://192.168.1.103:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: req.body.email,
          password: req.body.password,
          c_password: req.body.c_password,
          name: req.body.name,
          country_id: req.body.country_id,
          cellphone: req.body.cellphone,
          companyName: req.body.companyName,
          postalAddress: req.body.postalAddress,
          city: req.body.city,
          postalCode: req.body.postalCode,
          state: req.body.state,
          contactPerson: req.body.contactPerson,
          designation: req.body.designation,
          landline: req.body.landline,
          fax: req.body.fax,
          website: req.body.website,
          yearEstablished: req.body.yearEstablished,
          certifications: req.body.certifications,
          supplierOf: req.body.supplierOf,
          buyerOf: req.body.buyerOf,
          services: req.body.services,
          businessId: req.body.businessId,
          annualSalesId: req.body.annualSalesId,
        }),
      });

      const data = await resApi.json();

      if (resApi.ok) {
        res.status(200).json({ user: data.user });
      } else {
        res.status(resApi.status).json({ message: data });
      }
    } catch (e) {
      // console.log(e.message);
      res.status(500).json({ message: { err: ["Server Error"] } });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
