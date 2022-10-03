import ContactService from "../services/ContactService.js";
import ERR_CODES from "../utils/error_contact.js";

import httpStatus from "http-status";

export default class {
  static async ShowAllContact(req, res) {
    try {
      //call the contact to fetch all the entries.
      const entry = await ContactService.AccessAllContact();

      return res.status(httpStatus.OK).json({
        status: "success",
        message: "fetched data ",
        data: entry,
      });
    } catch (error) {
      return res.status(httpStatus[500]).json({
        status: "Error",
        message: ERR_CODES[500].message,
      });
    }
  }
}
