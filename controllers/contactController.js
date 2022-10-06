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

  // Get Single contact entry

  static async ShowSingleContact(req, res) {
    try {
      const id = req.params["id"];
      if (!id) {
        return res.status(httpStatus.BAD_REQUEST).json({
          status: "Error",
          message: ERR_CODES.id_not_found.message,
        });
      }
      //call the contact to fetch all the entries.
      const entry = await ContactService.FetchSingleContact(id);

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

  

  // Update contact information into the database

  static async UpdateContact(req, res) {
    try {
      // Validate the user fields, use middleware validator, as of now working on validation here.
      if (req.body && !req.body.name) {
        return res.status(httpStatus.BAD_REQUEST).json({
          status: "Error",
          message: ERR_CODES.name.message,
        });
      }
      if (req.body && !req.body.email) {
        return res.status(httpStatus.BAD_REQUEST).json({
          status: "Error",
          message: ERR_CODES.email.message,
        });
      }
      if (req.body && !req.body.contact) {
        return res.status(httpStatus.BAD_REQUEST).json({
          status: "Error",
          message: ERR_CODES.contact.message,
        });
      }
      const id = req.params["id"];

      if (!id) {
        return res.status(httpStatus.BAD_REQUEST).json({
          status: "Error",
          message: ERR_CODES.id_not_found.message,
        });
      }

      //capture the input information came from the user side.
      const params = {
        name: req.body.name,
        email: req.body.email,
        contact: req.body.contact,
        id: req.params["id"],
      };

      //call the update contact service to update the information in database
      const entry = await ContactService.UpdateContact(params);
      return res.status(httpStatus.CREATED).json({
        status: "success",
        message: " successfully updated",
        data: entry,
      });
    } catch (error) {
      return res.status(httpStatus[500]).json({
        status: "Error",
        message: ERR_CODES[500].message,
      });
    }
  }

  // Add contact information entry

  static async AddContact(req, res) {
    try {
      // validate the input fields, we can use middleware validators, as of now doing validation here.
      if (req.body && !req.body.name) {
        return res.status(httpStatus.BAD_REQUEST).json({
          status: "Error",
          message: ERR_CODES.name.message,
        });
      }
      if (req.body && !req.body.email) {
        return res.status(httpStatus.BAD_REQUEST).json({
          status: "Error",
          message: ERR_CODES.email.message,
        });
      }
      if (req.body && !req.body.contact) {
        return res.status(httpStatus.BAD_REQUEST).json({
          status: "Error",
          message: ERR_CODES.contact.message,
        });
      }

      //capture the field data came from the user side.
      const params = {
        name: req.body.name,
        email: req.body.email,
        contact: req.body.contact,
        status: 0, //default value is 0
      };

      //call the add contact service to add the data in database
      const entry = await ContactService.AddContact(params);
      return res.status(httpStatus.CREATED).json({
        status: "success",
        message: " successfully addded entry",
        data: entry,
      });
    } catch (error) {
      return res.status(httpStatus[500]).json({
        status: "Error",
        message: ERR_CODES[500].message,
      });
    }
  }

  // Delete contact information from database

  static async DeleteContact(req, res) {
    try {
      // validate the input fields, we can use middleware validators, as of now doing validation here.
      const id = req.params["id"];
      if (!id) {
        return res.status(httpStatus.BAD_REQUEST).json({
          status: "Error",
          message: ERR_CODES.id_not_found.message,
        });
      }
      //capture the id from URL.
      const params = {
        id: req.params["id"],
      };

      //call the delete contact service to delete the data from database
      const entry = await ContactService.DeleteContact(params);
      return res.status(httpStatus.CREATED).json({
        status: "success",
        message: " successfully Deleted",
        data: entry,
      });
    } catch (error) {
      return res.status(httpStatus[500]).json({
        status: "Error",
        message: ERR_CODES[500].message,
      });
    }
  }

  // Change status contact information and updated into database

  static async ChangeStatusContact(req, res) {
    try {
      // validate the input fields, we can use middleware validators, as of now doing validation here.
      const id = req.params["id"];
      if (!id) {
        return res.status(httpStatus.BAD_REQUEST).json({
          status: "Error",
          message: ERR_CODES.id_not_found.message,
        });
      }

      //capture the id from URL.
      const params = {
        status: req.body.status,
        id: req.params["id"],
      };

      //call the change status contact service to change the status of the contact in database
      const entry = await ContactService.ChangeStatusContact(params);
      return res.status(httpStatus.CREATED).json({
        status: "success",
        message: " successfully change the status",
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
