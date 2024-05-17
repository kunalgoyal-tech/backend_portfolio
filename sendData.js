import PortfolioData from "./db/model/PortfolioData.js";
export const sendData = async (req, res) => {
    try {
     
        const { name, email, phone, message } = req.body;
        if (!name || !email || !phone || !message) {
            return res.status(200).json({ message: "Please fill in all details." });
        }
      console.log(" working", req.body.name)
      const userData = await PortfolioData.create({ name, email, phone, message });
      console.log("db data", userData)
      return res.status(200).json({ message: "your enquiry has been sent." });
       } catch (error) {
        console.error('Error: ', error);
      }
}
